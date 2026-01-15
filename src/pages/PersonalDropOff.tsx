import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Clock, MapPin } from "lucide-react";

const PersonalDropOff = () => {
  const guidelines = [
    { icon: Shield, title: "18+ Only", description: "This experience is exclusively for adults aged 18 and over." },
    { icon: Heart, title: "Respectful Interaction", description: "Courteous and respectful communication is essential at all times." },
    { icon: Shield, title: "No Physical Contact", description: "This is a presence-based experience with clear personal boundaries." },
    { icon: MapPin, title: "Agreed Location", description: "Meeting location and timing arranged in advance for mutual comfort." },
    { icon: Clock, title: "Discretion Essential", description: "Complete privacy and confidentiality guaranteed throughout." },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">A Personal Drop-Off Experience</h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
            A curated, in-person experience designed for discretion, confidence, and meaningful presence.
          </p>
        </div>
      </section>

      {/* Experience Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">The Experience</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-slate-600 text-lg">
              <p>
                This experience offers the opportunity to meet Mya briefly in person, where a personal item 
                is handed over directly as part of a curated, memorable exchange.
              </p>
              <p>
                Each encounter is designed around exclusivity, discretion, and genuine presence. 
                This is a unique opportunity to share a moment of connection in a relaxed, 
                confident atmosphere.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Exclusive</h3>
                <p className="text-slate-600">
                  A one-on-one experience tailored to create a meaningful, personal moment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Discreet</h3>
                <p className="text-slate-600">
                  Complete privacy ensured from initial enquiry to the meeting itself.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Memorable</h3>
                <p className="text-slate-600">
                  A keepsake from a genuine, curated encounter you won't forget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Boundaries & Guidelines */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Boundaries & Guidelines</h2>
            <p className="text-lg text-slate-600">Clear expectations for a comfortable experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidelines.map((item, index) => (
              <Card key={index} className="border-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <item.icon className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in This Experience?</h2>
          <p className="text-lg md:text-xl mb-8 text-purple-100">
            Reach out to discuss availability and arrangements. All enquiries handled with complete discretion.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            <Link to="/contact">Request a Personal Drop-Off</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PersonalDropOff;
