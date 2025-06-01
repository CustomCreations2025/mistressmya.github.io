
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, Shield, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-purple-100">
            Professional, confidential communication for all inquiries
          </p>
        </div>
      </section>

      {/* Contact Information Only */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-purple-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p className="text-slate-600">welcome2myasworld@gmail.com</p>
                  <p className="text-sm text-slate-500 mt-1">Primary method of communication</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Location</h4>
                  <p className="text-slate-600">Based in Bedfordshire</p>
                  <p className="text-sm text-slate-500 mt-1">Available to travel and make arrangements to perform elsewhere</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-purple-600" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800">General Inquiries</h4>
                  <p className="text-sm text-slate-600">Within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Booking Requests</h4>
                  <p className="text-sm text-slate-600">Within 12 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Urgent Matters</h4>
                  <p className="text-sm text-slate-600">Same day when possible</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-purple-600" />
                  Privacy Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  All communications are kept strictly confidential. Your personal information 
                  is protected and will never be shared with third parties. I take your privacy 
                  seriously and maintain the highest standards of discretion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-purple-600" />
                  Communication Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Professional Tone</h4>
                  <p className="text-xs text-slate-600">Please maintain a respectful, professional tone in all communications.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Clear Subject Lines</h4>
                  <p className="text-xs text-slate-600">Use clear, descriptive subject lines to help prioritize responses.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Booking vs. Inquiry</h4>
                  <p className="text-xs text-slate-600">Use the dedicated booking form for session requests.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">How do I book a session?</h3>
                <p className="text-slate-600">
                  Use the dedicated booking form on the Booking page. This ensures I have all necessary 
                  information to provide you with the best possible service.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Is my information kept confidential?</h3>
                <p className="text-slate-600">
                  Absolutely. Complete confidentiality is guaranteed. Your personal information and our 
                  interactions remain strictly private and are never shared with anyone.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">What if I'm new to this?</h3>
                <p className="text-slate-600">
                  I welcome newcomers and always recommend starting with a newbie session. This allows 
                  us to discuss your interests, boundaries, and any concerns in a comfortable setting.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">How far in advance should I book?</h3>
                <p className="text-slate-600">
                  I recommend booking at least 1-2 weeks in advance, especially for weekend appointments. 
                  However, I do my best to accommodate shorter notice when possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Whether you have questions or are ready to book, I'm here to help you take the next step.
          </p>
          <div className="space-x-4">
            <a 
              href="mailto:welcome2myasworld@gmail.com"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-white text-purple-600 hover:bg-purple-50"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
