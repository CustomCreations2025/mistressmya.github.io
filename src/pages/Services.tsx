import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Star, Shield } from "lucide-react";

const Services = () => {
  const experiences = [
    {
      title: "First-Time Exploration",
      duration: "1.5 hours",
      description: "A gentle introduction for those new to disciplinary journeys. Extended time ensures comfort and proper boundary discussion.",
      features: ["Extended conversation", "Gentle guidance", "Comprehensive support", "Boundary exploration"],
      category: "New Explorer"
    },
    {
      title: "Continuing Journey",
      duration: "1 hour",
      description: "For those who have begun their path and are familiar with their preferences and boundaries.",
      features: ["Personalized approach", "Various explorations", "Supportive environment", "Reflection time"],
      category: "Experienced"
    },
    {
      title: "Deep Immersion",
      duration: "2 hours",
      description: "An extended journey for those seeking a more comprehensive and transformative experience.",
      features: ["Extended exploration", "Multiple scenarios", "Advanced guidance", "Comprehensive support"],
      category: "Intensive"
    },
    {
      title: "Lifestyle Mentoring",
      duration: "60 minutes",
      description: "Ongoing guidance and mentoring for those integrating discipline into their personal growth journey.",
      features: ["Lifestyle integration", "Ongoing mentorship", "Growth tracking", "Personalized guidance"],
      category: "Mentoring"
    },
    {
      title: "Partnership Exploration",
      duration: "2 hours",
      description: "Guidance for couples exploring discipline together in a safe and supportive environment.",
      features: ["Partnership dynamics", "Communication development", "Boundary exploration", "Shared support"],
      category: "Partnership"
    },
    {
      title: "Virtual Connection",
      duration: "45 minutes",
      description: "Remote connection via secure video call for initial conversations or ongoing guidance.",
      features: ["Secure platform", "Flexible timing", "Global reach", "Follow-up support"],
      category: "Virtual"
    }
  ];

  const offeredServices = [
    "Traditional discipline techniques",
    "Corporal punishment",
    "Psychological discipline",
    "Role play scenarios",
    "Dominance training",
    "Body Worship",
    "Sissification",
    "Foot Worship",
    "Watersports",
    "Bondage and restraint",
    "Humiliation play",
    "Aftercare and support"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explorations & Offerings</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-6">
            Tailored disciplinary journeys designed to support your growth, exploration, and empowerment with complete discretion.
          </p>
          <p className="text-base md:text-lg text-purple-200">
            Based in Bedfordshire, Northamptonshire & Cambridgeshire, available to connect and make arrangements elsewhere.
          </p>
        </div>
      </section>

      {/* My Focus Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Focus</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-6">Areas of exploration and growth offered with discretion and expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offeredServices.map((service, index) => (
              <Card key={index} className="border-purple-100 hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <p className="text-slate-700 font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Experiences Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Types of Experiences</h2>
            <p className="text-lg md:text-xl text-slate-600">Find the exploration that resonates with your journey and growth goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {experience.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {experience.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-800">{experience.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4">{experience.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-700">Includes:</h4>
                    <ul className="space-y-1">
                      {experience.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <div className="h-1.5 w-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <Link to="/booking">Express Interest</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What I Value Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">What I Value</h2>
          </div>
          
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Privacy & Discretion</h3>
              <p className="text-slate-600 text-lg">
                All interactions are handled with complete discretion and confidentiality.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guidelines for Connection */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Guidelines for Connection</h2>
            <p className="text-lg md:text-xl text-slate-600">Important principles that guide our explorations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Safety & Consent</h3>
                <p className="text-slate-600">
                  All explorations prioritize safety, clear communication, and enthusiastic consent with established boundaries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Respect for Time</h3>
                <p className="text-slate-600">
                  Our connections honor scheduled time together. Please arrive with intention and preparation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Growth & Support</h3>
                <p className="text-slate-600">
                  Comprehensive support and reflection time is provided to ensure your growth and well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg md:text-xl mb-6 text-purple-100">
            Start with a conversation to explore your interests and find the perfect path for your growth.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50 w-full">
              <Link to="/booking">Connect With Me</Link>
            </Button>
            <Button asChild size="lg" className="bg-purple-700 text-white hover:bg-purple-600 w-full">
              <Link to="/contact">Ask Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
