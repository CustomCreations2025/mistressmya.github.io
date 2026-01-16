import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  email: string;
  phone?: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  experience: string;
  message?: string;
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

// Validate and sanitize booking request
const validateBookingRequest = (data: unknown): BookingRequest => {
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
  if (typeof obj.service !== 'string' || obj.service.trim().length === 0) {
    throw new Error('Service is required');
  }
  if (typeof obj.experience !== 'string' || obj.experience.trim().length === 0) {
    throw new Error('Experience level is required');
  }
  
  // Enforce length limits and sanitize
  const booking: BookingRequest = {
    name: obj.name.trim().slice(0, 100),
    email: obj.email.trim().slice(0, 255),
    service: obj.service.trim().slice(0, 200),
    experience: obj.experience.trim().slice(0, 100),
  };
  
  // Optional fields
  if (typeof obj.phone === 'string' && obj.phone.trim()) {
    booking.phone = obj.phone.trim().slice(0, 20);
  }
  if (typeof obj.preferredDate === 'string' && obj.preferredDate.trim()) {
    booking.preferredDate = obj.preferredDate.trim().slice(0, 20);
  }
  if (typeof obj.preferredTime === 'string' && obj.preferredTime.trim()) {
    booking.preferredTime = obj.preferredTime.trim().slice(0, 20);
  }
  if (typeof obj.message === 'string' && obj.message.trim()) {
    booking.message = obj.message.trim().slice(0, 5000);
  }
  
  return booking;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    const booking = validateBookingRequest(rawData);

    // Sanitize all user inputs for HTML
    const safeName = sanitizeHtml(booking.name);
    const safeEmail = sanitizeHtml(booking.email);
    const safePhone = booking.phone ? sanitizeHtml(booking.phone) : null;
    const safeService = sanitizeHtml(booking.service);
    const safeDate = booking.preferredDate ? sanitizeHtml(booking.preferredDate) : null;
    const safeTime = booking.preferredTime ? sanitizeHtml(booking.preferredTime) : null;
    const safeExperience = sanitizeHtml(booking.experience);
    const safeMessage = booking.message ? sanitizeHtml(booking.message) : null;

    // Send notification to Mya
    const adminEmailResponse = await resend.emails.send({
      from: "Booking System <bookings@resend.dev>",
      to: ["welcome2myasworld@gmail.com"],
      subject: "New Booking Request - Mya The Disciplinarian",
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
        <p><strong>Service:</strong> ${safeService}</p>
        ${safeDate ? `<p><strong>Preferred Date:</strong> ${safeDate}</p>` : ''}
        ${safeTime ? `<p><strong>Preferred Time:</strong> ${safeTime}</p>` : ''}
        <p><strong>Experience Level:</strong> ${safeExperience}</p>
        ${safeMessage ? `<p><strong>Message:</strong> ${safeMessage}</p>` : ''}
      `,
    });

    // Send confirmation to client
    const clientEmailResponse = await resend.emails.send({
      from: "Mya The Disciplinarian <bookings@resend.dev>",
      to: [booking.email],
      subject: "Booking Request Received - Mya The Disciplinarian",
      html: `
        <h2>Thank you for your booking request, ${safeName}!</h2>
        <p>We have received your booking request and will get back to you within 24 hours.</p>
        <p>If you have any urgent questions, please contact us at: welcome2myasworld@gmail.com</p>
        <p>Best regards,<br>Mya The Disciplinarian</p>
      `,
    });

    console.log("Emails sent successfully");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Booking request sent successfully" 
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
    console.error("Error in send-booking-notification function:", errorMessage);
    return new Response(
      JSON.stringify({ error: "Failed to send booking request. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
