
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Shield, Star } from "lucide-react";

const About = () => {
  const qualifications = [
    {
      icon: Award,
      title: "Professional Training",
      description: "Certified in BDSM safety practices and psychological aspects of discipline"
    },
    {
      icon: Heart,
      title: "Empathetic Approach",
      description: "Deep understanding of client psychology and emotional needs"
    },
    {
      icon: Shield,
      title: "Safety Expertise",
      description: "Extensive knowledge of safety protocols and risk management"
    },
    {
      icon: Star,
      title: "Years of Experience",
      description: "Over 8 years of professional experience in discipline services"
    }
  ];

  const philosophy = [
    {
      title: "Consent is Paramount",
      description: "Every interaction is built on explicit, informed consent with clear communication throughout."
    },
    {
      title: "Individual Journey",
      description: "Each client's path is unique, and sessions are tailored to personal needs and boundaries."
    },
    {
      title: "Professional Boundaries",
      description: "Maintaining clear professional boundaries ensures a safe and effective experience for all."
    },
    {
      title: "Continuous Growth",
      description: "Commitment to ongoing education and improvement in techniques and safety practices."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Mya</h1>
          <p className="text-xl text-purple-100">
            Professional disciplinarian dedicated to safe, consensual, and transformative experiences
          </p>
        </div>
      </section>

      {/* Main Biography */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center text-purple-700">
                <h3 className="text-2xl font-bold mb-4">Professional Portrait</h3>
                <p className="text-lg">Professional image of Mya</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">My Journey</h2>
              <p className="text-lg text-slate-600 mb-6">
                Welcome, I'm Mya. My journey into professional discipline began over eight years ago 
                when I discovered my natural ability to guide others through transformative experiences. 
                What started as personal exploration evolved into a calling to help others discover 
                their own paths to growth and self-understanding.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                I hold certifications in BDSM safety practices and have undergone extensive training 
                in the psychological aspects of discipline and submission. My approach combines 
                technical expertise with genuine empathy, ensuring every client feels understood, 
                respected, and safe throughout their journey.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Beyond my professional qualifications, I bring a deep understanding of human psychology 
                and the delicate balance required to create meaningful, transformative experiences. 
                Every session is approached with the utmost care for your individual needs and boundaries.
              </p>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600">
                <Link to="/booking">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Qualifications</h2>
            <p className="text-xl text-slate-600">The expertise and training that informs my practice</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <qual.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{qual.title}</h3>
                  <p className="text-slate-600">{qual.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">My Philosophy</h2>
            <p className="text-xl text-slate-600">The principles that guide every interaction</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">{principle.title}</h3>
                  <p className="text-lg text-slate-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Approach */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">What Sets Me Apart</h2>
          <div className="space-y-6 text-lg text-slate-600">
            <p>
              My approach is built on the foundation that every individual's journey is unique. 
              I don't believe in one-size-fits-all solutions. Instead, I take the time to understand 
              your specific needs, boundaries, and goals before crafting a personalized experience.
            </p>
            <p>
              Safety is never compromised. I maintain the highest standards of physical and emotional 
              safety, with comprehensive aftercare as an integral part of every session. Your well-being 
              is my top priority, and I'm committed to creating an environment where you can explore 
              and grow with complete confidence.
            </p>
            <p>
              Discretion and professionalism are guaranteed. I understand the personal nature of these 
              services and maintain strict confidentiality in all interactions. Your privacy is 
              absolutely protected, and you can trust that our sessions remain completely confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-purple-100">
            I'd love to discuss how I can help you explore your needs in a safe, professional environment. 
            Let's start with a consultation to see if we're a good fit.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Link to="/booking">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
