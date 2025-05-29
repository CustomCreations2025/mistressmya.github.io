
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Star, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Consultation Session",
      duration: "60 minutes",
      price: "£150",
      description: "Initial consultation to discuss your needs, boundaries, and expectations. Perfect for first-time clients.",
      features: ["Boundary discussion", "Expectation setting", "Safe word establishment", "Aftercare planning"],
      category: "Consultation"
    },
    {
      title: "Standard Discipline Session",
      duration: "90 minutes",
      price: "£250",
      description: "Comprehensive discipline session tailored to your specific requirements and comfort level.",
      features: ["Personalized approach", "Various techniques", "Professional environment", "Post-session debrief"],
      category: "Session"
    },
    {
      title: "Extended Session",
      duration: "2 hours",
      price: "£350",
      description: "Extended session for those seeking a more immersive and comprehensive experience.",
      features: ["Extended experience", "Multiple scenarios", "Advanced techniques", "Comprehensive aftercare"],
      category: "Session"
    },
    {
      title: "Lifestyle Coaching",
      duration: "60 minutes",
      price: "£200",
      description: "Ongoing guidance and coaching for those incorporating discipline into their lifestyle.",
      features: ["Lifestyle integration", "Ongoing support", "Progress tracking", "Personalized guidance"],
      category: "Coaching"
    },
    {
      title: "Couples Session",
      duration: "2 hours",
      price: "£400",
      description: "Professional guidance for couples exploring discipline together in a safe environment.",
      features: ["Couple dynamics", "Communication training", "Boundary setting", "Joint aftercare"],
      category: "Specialized"
    },
    {
      title: "Virtual Consultation",
      duration: "45 minutes",
      price: "£100",
      description: "Remote consultation via secure video call for initial discussions or ongoing support.",
      features: ["Secure platform", "Flexible scheduling", "Global availability", "Follow-up support"],
      category: "Virtual"
    }
  ];

  const testimonials = [
    {
      text: "The consultation session was exactly what I needed to understand my boundaries and feel confident moving forward.",
      author: "Client A.",
      service: "Consultation Session"
    },
    {
      text: "Professional, respectful, and transformative. The extended session exceeded all my expectations.",
      author: "Client B.",
      service: "Extended Session"
    },
    {
      text: "The couples session helped us communicate better and explore our dynamic safely together.",
      author: "Client C.",
      service: "Couples Session"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Professional Services</h1>
          <p className="text-xl text-purple-100 mb-8">
            Tailored discipline experiences designed to meet your unique needs with complete professionalism and discretion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Available Services</h2>
            <p className="text-xl text-slate-600">Choose the service that best fits your needs and experience level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {service.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-700">{service.price}</div>
                      <div className="text-sm text-slate-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-700">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-center">
                          <div className="h-1.5 w-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guidelines */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Service Guidelines</h2>
            <p className="text-xl text-slate-600">Important information about my services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Safety First</h3>
                <p className="text-slate-600">
                  All sessions prioritize your safety and well-being with clear boundaries and safe words.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Punctuality</h3>
                <p className="text-slate-600">
                  Sessions begin promptly at the scheduled time. Please arrive 10 minutes early for preparation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Aftercare</h3>
                <p className="text-slate-600">
                  Comprehensive aftercare is provided with every session to ensure your well-being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Client Experiences</h2>
            <p className="text-xl text-slate-600">What clients say about specific services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-slate-500 font-medium">— {testimonial.author}</p>
                    <Badge variant="outline" className="mt-2">{testimonial.service}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Session?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Start with a consultation to discuss your needs and find the perfect service for you.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Link to="/booking">Book Consultation</Link>
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

export default Services;
