
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Professional Studio Setup",
      category: "Environment",
      description: "Clean, professional environment designed for comfort and safety"
    },
    {
      title: "Session Equipment",
      category: "Equipment",
      description: "High-quality, professionally maintained equipment for various sessions"
    },
    {
      title: "Consultation Area",
      category: "Environment",
      description: "Comfortable space for initial consultations and discussions"
    },
    {
      title: "Aftercare Space",
      category: "Environment",
      description: "Dedicated area for post-session care and reflection"
    },
    {
      title: "Safety Equipment",
      category: "Safety",
      description: "Professional safety equipment always within reach"
    },
    {
      title: "Private Entrance",
      category: "Privacy",
      description: "Discrete entrance ensuring complete privacy for all clients"
    },
    {
      title: "Preparation Area",
      category: "Environment",
      description: "Private space for client preparation and changing"
    },
    {
      title: "Professional Attire",
      category: "Professional",
      description: "Various professional outfits suitable for different session types"
    },
    {
      title: "Communication Tools",
      category: "Safety",
      description: "Clear communication aids and safety signal systems"
    }
  ];

  const categories = ["All", "Environment", "Equipment", "Safety", "Privacy", "Professional"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-purple-100">
            Professional environment designed for safety, comfort, and discretion
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">Professional Environment Focus</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  This gallery showcases the professional environment and equipment used in sessions. 
                  All images focus on the professional setup, safety measures, and comfortable spaces 
                  designed to ensure client well-being and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-purple-50 hover:border-purple-300 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center text-purple-700">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm">Professional image placeholder</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Standards</h2>
            <p className="text-xl text-slate-600">Commitment to excellence in every aspect</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Professional Environment</h3>
                <p className="text-slate-600">
                  Dedicated professional space designed specifically for discipline sessions, 
                  ensuring privacy, comfort, and safety for all clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Safety First</h3>
                <p className="text-slate-600">
                  All equipment is professionally maintained and sanitized. Safety protocols 
                  are strictly followed with emergency procedures in place.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Complete Discretion</h3>
                <p className="text-slate-600">
                  Private entrance, soundproofed rooms, and strict confidentiality protocols 
                  ensure your privacy is completely protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Experience the Professional Difference</h2>
          <p className="text-xl mb-8 text-purple-100">
            See firsthand the professional environment and attention to detail that sets my services apart.
          </p>
          <div className="space-x-4">
            <Badge className="bg-white text-purple-600 px-4 py-2 text-lg font-medium">
              Book a consultation to see the space in person
            </Badge>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
