
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Shield, Star, Users } from "lucide-react";

const About = () => {
  const approachGuidelines = [
    {
      icon: Heart,
      title: "Respectful Communication",
      description: "Always address me with respect. Use proper titles and maintain professional courtesy in all communications."
    },
    {
      icon: Shield,
      title: "Clear Boundaries",
      description: "Be honest about your limits, experience level, and expectations. Respect my boundaries as I will respect yours."
    },
    {
      icon: Star,
      title: "Professional Approach",
      description: "Treat this as a professional service. Be punctual, well-groomed, and prepared for your session."
    },
    {
      icon: Users,
      title: "Proper Etiquette",
      description: "Follow proper D/s etiquette. Listen carefully, follow instructions, and communicate any concerns appropriately."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl text-purple-100">
            Professional disciplinarian dedicated to safe, consensual, and transformative experiences
          </p>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Meet Mya</h2>
              <p className="text-lg text-slate-600 mb-4">
                I am Mya, a professional disciplinarian with years of experience in providing safe, 
                consensual, and transformative discipline services. My approach combines psychological 
                understanding with physical expertise to create meaningful experiences tailored to your needs.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Based in Bedfordshire, Northamptonshire & Cambridgeshire, I offer my services both locally and am available to travel 
                for the right arrangements. Every session is conducted with the utmost respect for 
                boundaries, clear communication, and an unwavering commitment to your safety and satisfaction.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                My practice is built on the principles of SSC (Safe, Sane, and Consensual) and RACK 
                (Risk Aware Consensual Kink). I believe in creating a space where you can explore 
                your desires safely and without judgment.
              </p>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Link to="/booking">Connect With Me</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/5f3f8033-3edd-4e81-b177-dda629760acb.png" 
                alt="Mya The Disciplinarian" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How To Approach Me Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How To Approach Me</h2>
            <p className="text-lg md:text-xl text-slate-600">
              Guidelines for respectful and professional interaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approachGuidelines.map((guideline, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <guideline.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{guideline.title}</h3>
                  <p className="text-slate-600">{guideline.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Etiquette Guidelines */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Proper Etiquette</h2>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Initial Contact</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Use respectful language and proper grammar</li>
                  <li>• Introduce yourself briefly and state your experience level</li>
                  <li>• Be specific about what type of session you're seeking</li>
                  <li>• Ask questions if you're unsure about anything</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">During Sessions</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Address me appropriately (Miss, Mistress, or as directed)</li>
                  <li>• Listen carefully to all instructions</li>
                  <li>• Communicate using safe words when necessary</li>
                  <li>• Show appreciation for the experience</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">General Guidelines</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Arrive on time and well-groomed</li>
                  <li>• Respect my time and scheduling</li>
                  <li>• Maintain discretion about our sessions</li>
                  <li>• Follow through on commitments made</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-lg md:text-xl mb-6 text-purple-100">
            If you understand and respect these guidelines, I look forward to hearing from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
