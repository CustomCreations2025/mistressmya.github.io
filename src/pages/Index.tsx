
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Shield, Clock, Heart } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Discretion Guaranteed",
      description: "Complete confidentiality and privacy in all interactions"
    },
    {
      icon: Star,
      title: "Professional Excellence",
      description: "Years of experience in providing quality discipline services"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Sessions available to accommodate your busy lifestyle"
    },
    {
      icon: Heart,
      title: "Respectful Approach",
      description: "Safe, sane, and consensual practices with clear boundaries"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Mya The Disciplinarian
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 animate-fade-in">
            Professional discipline services delivered with discretion, respect, and expertise
          </p>
          <p className="text-lg mb-8 text-purple-200 animate-fade-in">
            Based in Bedfordshire, but available to travel and make arrangements to perform elsewhere
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              <Link to="/booking">Book Session</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Welcome to Professional Discipline
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                I am Mya, a professional disciplinarian dedicated to providing safe, consensual, and 
                transformative experiences. With years of experience and a deep understanding of the 
                psychological and physical aspects of discipline, I offer a unique service tailored 
                to your individual needs.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Every session is conducted with the utmost respect for boundaries, clear communication, 
                and an unwavering commitment to your safety and satisfaction.
              </p>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-purple-700">
                <img 
                  src="/lovable-uploads/0f879d97-04d8-4625-a6b8-fa002a1f6bd6.png" 
                  alt="Mya The Disciplinarian" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose My Services</h2>
            <p className="text-xl text-slate-600">Professional standards meet personal care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Session Rates</h2>
            <p className="text-xl text-slate-600">Clear, transparent pricing for all services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-purple-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Newbie Sessions</h3>
                <div className="text-4xl font-bold text-slate-800 mb-2">£300</div>
                <p className="text-slate-600 mb-4">1.5 hours</p>
                <p className="text-slate-600">Perfect for first-time clients with extended consultation and gentle introduction</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-purple-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Regular Clients</h3>
                <div className="text-4xl font-bold text-slate-800 mb-2">£250</div>
                <p className="text-slate-600 mb-4">per hour</p>
                <p className="text-slate-600">For returning clients familiar with the process and their preferences</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Card className="bg-purple-50 border-purple-200 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <p className="text-slate-700 font-medium">
                  Bank statement name is discreet and does not reflect the service provided.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Take the first step towards a professional and transformative experience. 
            Book your session today and discover what makes my services unique.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
