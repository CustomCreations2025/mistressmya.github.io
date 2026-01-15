import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Star, Shield, MessageCircle, Shirt, Heart } from "lucide-react";

const WornCollection = () => {
  const categories = [
    { name: "Intimate Apparel", description: "Carefully selected personal items" },
    { name: "Hosiery", description: "Stockings and specialty legwear" },
    { name: "Lingerie", description: "Curated pieces from Mya's collection" },
    { name: "Lounge & Casual Wear", description: "Relaxed, personal pieces" },
    { name: "Limited Selections", description: "Exclusive, one-of-a-kind items" },
    { name: "Custom Requests", description: "Personalised selections available" },
  ];

  const trustPoints = [
    {
      icon: Star,
      title: "Authenticity Guaranteed",
      description: "Every item comes directly from Mya's personal wardrobe."
    },
    {
      icon: Package,
      title: "Discreet Packaging",
      description: "Plain, unmarked packaging for complete privacy."
    },
    {
      icon: Shield,
      title: "Confidential Handling",
      description: "Your information is never shared. Total discretion assured."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mya's Personal Collection</h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
            A curated selection of pre-owned pieces from Mya's personal wardrobe.
          </p>
        </div>
      </section>

      {/* What's Available */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What's Available</h2>
            <p className="text-lg text-slate-600">Personally worn, freshly packaged, discreetly shipped</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-purple-100">
                <CardContent className="p-6 text-center">
                  <Shirt className="h-10 w-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{category.name}</h3>
                  <p className="text-slate-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Requests */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Custom Requests</h2>
            <p className="text-lg text-slate-600">Personalised options for a tailored experience</p>
          </div>

          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <MessageCircle className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Specific Items</h3>
                  <p className="text-slate-600 text-sm">
                    Request particular clothing types or styles to suit your preferences.
                  </p>
                </div>
                <div>
                  <Heart className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Wear Duration</h3>
                  <p className="text-slate-600 text-sm">
                    Options for how long items are worn before dispatch.
                  </p>
                </div>
                <div>
                  <Star className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Personal Touches</h3>
                  <p className="text-slate-600 text-sm">
                    Optional personalised elements available upon request.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust & Discretion */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Trust & Discretion</h2>
            <p className="text-lg text-slate-600">Your privacy is paramount</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPoints.map((point, index) => (
              <Card key={index} className="text-center border-purple-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <point.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{point.title}</h3>
                  <p className="text-slate-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in the Collection?</h2>
          <p className="text-lg md:text-xl mb-8 text-purple-100">
            Get in touch to enquire about availability, pricing, and custom requests. 
            All enquiries handled with complete discretion.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            <Link to="/contact">Enquire About the Collection</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WornCollection;
