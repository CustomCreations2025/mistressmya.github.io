
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Thank you for expressing interest!</h1>
          <p className="text-xl text-purple-100">
            Your expression of interest has been received successfully
          </p>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Card className="max-w-2xl w-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-800">What happens next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <p className="text-lg text-slate-700">
                  I will review your message and get back to you within 24 hours to begin our conversation.
                </p>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-slate-700">
                    <strong>For urgent inquiries:</strong><br />
                    Please email me directly at{" "}
                    <a 
                      href="mailto:welcome2myasworld@gmail.com" 
                      className="text-purple-600 hover:text-purple-800 underline"
                    >
                      welcome2myasworld@gmail.com
                    </a>
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-slate-600">
                    You should also receive an automatic confirmation email shortly. 
                    If you don't see it, please check your spam folder.
                  </p>
                  
                  <Link to="/">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Home className="h-4 w-4 mr-2" />
                      Return to Homepage
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
