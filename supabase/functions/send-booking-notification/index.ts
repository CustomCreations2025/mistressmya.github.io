
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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const booking: BookingRequest = await req.json();

    // Send notification to Mya
    const adminEmailResponse = await resend.emails.send({
      from: "Booking System <bookings@resend.dev>",
      to: ["welcome2myasworld@gmail.com"],
      subject: "New Booking Request - Mya The Disciplinarian",
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        ${booking.phone ? `<p><strong>Phone:</strong> ${booking.phone}</p>` : ''}
        <p><strong>Service:</strong> ${booking.service}</p>
        ${booking.preferredDate ? `<p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>` : ''}
        ${booking.preferredTime ? `<p><strong>Preferred Time:</strong> ${booking.preferredTime}</p>` : ''}
        <p><strong>Experience Level:</strong> ${booking.experience}</p>
        ${booking.message ? `<p><strong>Message:</strong> ${booking.message}</p>` : ''}
      `,
    });

    // Send confirmation to client
    const clientEmailResponse = await resend.emails.send({
      from: "Mya The Disciplinarian <bookings@resend.dev>",
      to: [booking.email],
      subject: "Booking Request Received - Mya The Disciplinarian",
      html: `
        <h2>Thank you for your booking request, ${booking.name}!</h2>
        <p>We have received your booking request and will get back to you within 24 hours.</p>
        <p>If you have any urgent questions, please contact us at: welcome2myasworld@gmail.com</p>
        <p>Best regards,<br>Mya The Disciplinarian</p>
      `,
    });

    console.log("Emails sent successfully:", { adminEmailResponse, clientEmailResponse });

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
  } catch (error: any) {
    console.error("Error in send-booking-notification function:", error);
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
