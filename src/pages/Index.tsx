
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Shield, Clock, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "Discretion Guaranteed",
      description: "Complete confidentiality and privacy in all interactions"
    },
    {
      icon: Star,
      title: "Experienced Guidance",
      description: "Years of experience in guiding transformative disciplinary journeys"
    },
    {
      icon: Clock,
      title: "Flexible Connection",
      description: "Explorations available to accommodate your busy lifestyle"
    },
    {
      icon: Heart,
      title: "Respectful Approach",
      description: "Safe, sane, and consensual practices with clear boundaries"
    }
  ];

  return (
    <Layout>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 hero-section">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 animate-fade-in">
            Mya The Disciplinarian
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-4 md:mb-6 text-purple-100 animate-fade-in">
            Guiding disciplinary journeys with discretion, respect, and empowerment
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-purple-200 animate-fade-in">
            Based in Bedfordshire, but available to connect and make arrangements elsewhere
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto animate-fade-in">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50 w-full focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            >
              <Link to="/booking">Connect With Me</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-purple-700 text-white hover:bg-purple-600 w-full focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            >
              <Link to="/services">Explore Journeys</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-pink-600 text-white hover:bg-pink-700 w-full focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
            >
              <Link to="/about">How To Approach Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="main-content" className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 md:mb-4">
                Welcome to Disciplinary Exploration
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-3 md:mb-4">
                I am Mya, a disciplinarian and mentor dedicated to guiding safe, consensual, and 
                transformative journeys. With years of experience and a deep understanding of the 
                psychological and physical aspects of discipline, I offer unique explorations tailored 
                to your individual growth and empowerment.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 mb-4 md:mb-6">
                Every exploration is conducted with the utmost respect for boundaries, clear communication, 
                and an unwavering commitment to your safety and personal development.
              </p>
              <Button 
                asChild 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/5f3f8033-3edd-4e81-b177-dda629760acb.png" 
                  alt="Mya The Disciplinarian - Professional portrait in elegant setting" 
                  className={`w-full h-64 md:h-80 lg:h-96 object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                  decoding="async"
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-purple-600 animate-pulse">Loading...</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 md:mb-4">What Guides Our Connection</h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600">Empowerment, safety, and mutual respect</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <feature.icon className="h-10 w-10 md:h-12 md:w-12 text-purple-600 mx-auto mb-3 md:mb-4" aria-hidden="true" />
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 md:mb-4">Journey Details</h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600">Common exploration formats and timeframes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-purple-200">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">First-Time Exploration</h3>
                <p className="text-slate-600 mb-3 md:mb-4">1.5 hours</p>
                <p className="text-sm md:text-base text-slate-600">Perfect for new explorers with extended conversation and gentle guidance</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-purple-200">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">Continuing Journeys</h3>
                <p className="text-slate-600 mb-3 md:mb-4">1 hour typical</p>
                <p className="text-sm md:text-base text-slate-600">For those familiar with their path and seeking continued growth</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-4 md:mt-6">
            <Card className="bg-purple-50 border-purple-200 max-w-2xl mx-auto">
              <CardContent className="p-4 md:p-6">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mx-auto mb-2 md:mb-3" aria-hidden="true" />
                <p className="text-sm md:text-base text-slate-700 font-medium">
                  All arrangements are handled with complete discretion and privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-purple-100">
            Take the first step towards an empowering and transformative exploration. 
            Connect with me today and discover the possibilities for your growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-md mx-auto">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 w-full focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-600"
            >
              <Link to="/booking">Connect Now</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-purple-700 text-white hover:bg-purple-600 w-full focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-600"
            >
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
