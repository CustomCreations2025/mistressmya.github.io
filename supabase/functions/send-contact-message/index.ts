
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  inquiryType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contact: ContactMessage = await req.json();

    // Send notification to Mya
    const emailResponse = await resend.emails.send({
      from: "Contact Form <contact@resend.dev>",
      to: ["welcome2myasworld@gmail.com"],
      subject: `Contact Form: ${contact.subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Inquiry Type:</strong> ${contact.inquiryType}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
      `,
    });

    // Send auto-reply to sender
    const autoReplyResponse = await resend.emails.send({
      from: "Mya The Disciplinarian <contact@resend.dev>",
      to: [contact.email],
      subject: "Message Received - Mya The Disciplinarian",
      html: `
        <h2>Thank you for your message, ${contact.name}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>If you have any urgent questions, please contact us directly at: welcome2myasworld@gmail.com</p>
        <p>Best regards,<br>Mya The Disciplinarian</p>
      `,
    });

    console.log("Emails sent successfully:", { emailResponse, autoReplyResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-message function:", error);
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
