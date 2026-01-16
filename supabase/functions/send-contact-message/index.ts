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

// Sanitize user input to prevent XSS in HTML emails
const sanitizeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Validate and sanitize contact message
const validateContactMessage = (data: unknown): ContactMessage => {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid request body');
  }
  
  const obj = data as Record<string, unknown>;
  
  // Validate required fields
  if (typeof obj.name !== 'string' || obj.name.trim().length === 0) {
    throw new Error('Name is required');
  }
  if (typeof obj.email !== 'string' || !obj.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    throw new Error('Valid email is required');
  }
  if (typeof obj.subject !== 'string' || obj.subject.trim().length === 0) {
    throw new Error('Subject is required');
  }
  if (typeof obj.inquiryType !== 'string') {
    throw new Error('Inquiry type is required');
  }
  if (typeof obj.message !== 'string' || obj.message.trim().length === 0) {
    throw new Error('Message is required');
  }
  
  // Enforce length limits
  const name = obj.name.trim().slice(0, 100);
  const email = obj.email.trim().slice(0, 255);
  const subject = obj.subject.trim().slice(0, 200);
  const inquiryType = obj.inquiryType.trim().slice(0, 100);
  const message = obj.message.trim().slice(0, 5000);
  
  return { name, email, subject, inquiryType, message };
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    const contact = validateContactMessage(rawData);

    // Sanitize all user inputs for HTML
    const safeName = sanitizeHtml(contact.name);
    const safeEmail = sanitizeHtml(contact.email);
    const safeSubject = sanitizeHtml(contact.subject);
    const safeInquiryType = sanitizeHtml(contact.inquiryType);
    const safeMessage = sanitizeHtml(contact.message);

    // Send notification to Mya
    const emailResponse = await resend.emails.send({
      from: "Contact Form <contact@resend.dev>",
      to: ["welcome2myasworld@gmail.com"],
      subject: `Contact Form: ${safeSubject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Inquiry Type:</strong> ${safeInquiryType}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // Send auto-reply to sender
    const autoReplyResponse = await resend.emails.send({
      from: "Mya The Disciplinarian <contact@resend.dev>",
      to: [contact.email],
      subject: "Message Received - Mya The Disciplinarian",
      html: `
        <h2>Thank you for your message, ${safeName}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>If you have any urgent questions, please contact us directly at: welcome2myasworld@gmail.com</p>
        <p>Best regards,<br>Mya The Disciplinarian</p>
      `,
    });

    console.log("Emails sent successfully");

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
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    console.error("Error in send-contact-message function:", errorMessage);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
