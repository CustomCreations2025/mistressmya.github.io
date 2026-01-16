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
  data?: Record<string, unknown>;
}

// Sanitize text to prevent injection
const sanitizeText = (str: unknown): string => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, 1000);
};

// Validate email request
const validateEmailRequest = (data: unknown): EmailRequest => {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid request body');
  }
  
  const obj = data as Record<string, unknown>;
  
  // Validate required fields
  if (typeof obj.to !== 'string' || !obj.to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    throw new Error('Valid recipient email is required');
  }
  if (typeof obj.subject !== 'string' || obj.subject.trim().length === 0) {
    throw new Error('Subject is required');
  }
  if (typeof obj.type !== 'string' || !['booking', 'contact'].includes(obj.type)) {
    throw new Error('Valid type is required');
  }
  
  return {
    to: obj.to.trim().slice(0, 255),
    subject: obj.subject.trim().slice(0, 200),
    body: typeof obj.body === 'string' ? obj.body.trim().slice(0, 5000) : '',
    type: obj.type as 'booking' | 'contact',
    data: typeof obj.data === 'object' && obj.data !== null ? obj.data as Record<string, unknown> : undefined,
  };
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    const { to, subject, type, data } = validateEmailRequest(rawData);

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

    // Sanitize all user data
    const safeData = data ? {
      name: sanitizeText(data.name),
      email: sanitizeText(data.email),
      phone: sanitizeText(data.phone),
      service: sanitizeText(data.service),
      preferredDate: sanitizeText(data.preferredDate),
      preferredTime: sanitizeText(data.preferredTime),
      experienceLevel: sanitizeText(data.experienceLevel),
      additionalNotes: sanitizeText(data.additionalNotes),
      subject: sanitizeText(data.subject),
      message: sanitizeText(data.message),
    } : {};

    // Create email message
    const emailContent = type === 'booking' 
      ? `New Booking Request

Client Name: ${safeData.name || 'Not provided'}
Email: ${safeData.email || 'Not provided'}
Phone: ${safeData.phone || 'Not provided'}
Service: ${safeData.service || 'Not provided'}
Preferred Date: ${safeData.preferredDate || 'Not provided'}
Preferred Time: ${safeData.preferredTime || 'Not provided'}
Experience Level: ${safeData.experienceLevel || 'Not provided'}
Additional Notes: ${safeData.additionalNotes || 'None'}

This booking request was submitted through the website booking form.`
      : `New Contact Message

Name: ${safeData.name || 'Not provided'}
Email: ${safeData.email || 'Not provided'}
Subject: ${safeData.subject || 'Not provided'}
Message: ${safeData.message || 'Not provided'}

This message was submitted through the website contact form.`;

    // Sanitize subject for email header
    const safeSubject = subject.replace(/[\r\n]/g, ' ');

    // Create email in RFC 2822 format
    const email = [
      `To: ${to}`,
      `From: welcome2myasworld@gmail.com`,
      `Subject: ${safeSubject}`,
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
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully via Gmail API");

    return new Response(JSON.stringify({ success: true, messageId: sendResult.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error("Error in send-gmail-notification function:", errorMessage);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
