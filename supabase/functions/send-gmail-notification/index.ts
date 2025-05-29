
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  subject: string;
  body: string;
  type: 'booking' | 'contact';
  data?: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, body, type, data }: EmailRequest = await req.json();

    // Get Gmail API credentials from environment
    const clientId = Deno.env.get("GMAIL_CLIENT_ID");
    const clientSecret = Deno.env.get("GMAIL_CLIENT_SECRET");
    const refreshToken = Deno.env.get("GMAIL_REFRESH_TOKEN");

    if (!clientId || !clientSecret || !refreshToken) {
      throw new Error("Gmail API credentials not configured");
    }

    // Get access token using refresh token
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    });

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      throw new Error("Failed to get access token");
    }

    // Create email message
    const emailContent = type === 'booking' 
      ? `New Booking Request

Client Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Service: ${data.service}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}
Experience Level: ${data.experienceLevel}
Additional Notes: ${data.additionalNotes || 'None'}

This booking request was submitted through the website booking form.`
      : `New Contact Message

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}

This message was submitted through the website contact form.`;

    // Create email in RFC 2822 format
    const email = [
      `To: ${to}`,
      `From: welcome2myasworld@gmail.com`,
      `Subject: ${subject}`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      emailContent
    ].join('\r\n');

    // Encode email in base64
    const encodedEmail = btoa(email).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    // Send email using Gmail API
    const sendResponse = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${tokenData.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raw: encodedEmail,
      }),
    });

    const sendResult = await sendResponse.json();
    
    if (!sendResponse.ok) {
      throw new Error(`Gmail API error: ${JSON.stringify(sendResult)}`);
    }

    console.log("Email sent successfully via Gmail API:", sendResult);

    return new Response(JSON.stringify({ success: true, messageId: sendResult.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-gmail-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
