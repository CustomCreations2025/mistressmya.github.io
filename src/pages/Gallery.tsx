
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/0f879d97-04d8-4625-a6b8-fa002a1f6bd6.png",
      alt: "Professional session environment",
      category: "Studio"
    },
    {
      src: "/lovable-uploads/73930176-d6f8-4a94-95d4-50092c926332.png",
      alt: "Professional portrait",
      category: "Portrait"
    },
    {
      src: "/lovable-uploads/c625981c-0049-4d07-9905-4d9031f79418.png",
      alt: "Professional discipline setting",
      category: "Environment"
    },
    {
      src: "/lovable-uploads/88c3bd1f-5074-478b-b0df-737513835e9b.png",
      alt: "Professional session atmosphere",
      category: "Session"
    },
    {
      src: "/lovable-uploads/7db142e7-2841-4ee3-af3a-e8d9d2153191.png",
      alt: "Professional training environment",
      category: "Training"
    },
    {
      src: "/lovable-uploads/7cf2bf80-4441-4fd5-a7f9-6fd6778505cb.png",
      alt: "Professional discipline setup",
      category: "Equipment"
    },
    {
      src: "/lovable-uploads/269c5416-fe11-4f7d-9420-4cea684d2a59.png",
      alt: "Professional session detail",
      category: "Detail"
    },
    {
      src: "/lovable-uploads/ab005f06-9494-4b4f-b22c-04ab04896d0f.png",
      alt: "Professional atmosphere",
      category: "Atmosphere"
    },
    {
      src: "/lovable-uploads/047169e7-8f12-4bcf-aa34-5d7a34888a36.png",
      alt: "Professional setting",
      category: "Setting"
    },
    {
      src: "/lovable-uploads/fc61e8ed-1912-45bc-a3e9-6919990c257a.png",
      alt: "Professional equipment",
      category: "Equipment"
    },
    {
      src: "/lovable-uploads/12c879e1-0632-4f41-9f67-fb2c58222163.png",
      alt: "Professional environment",
      category: "Environment"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-purple-100">
            A glimpse into the professional environment and atmosphere
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Environment</h2>
            <p className="text-xl text-slate-600">Tasteful imagery showcasing the professional setting and atmosphere</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Placeholder card for additional content */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative h-80 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center text-purple-600">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm font-medium">More images coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environment Description */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">The Professional Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Studio Setting</h3>
                  <p className="text-slate-600">
                    A clean, private, and professionally maintained space designed for comfort, safety, 
                    and the optimal session experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Privacy & Discretion</h3>
                  <p className="text-slate-600">
                    Complete privacy is ensured with a discrete entrance and soundproofed environment 
                    for your comfort and confidentiality.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Safety Equipment</h3>
                  <p className="text-slate-600">
                    All equipment is regularly maintained, sanitized, and meets the highest safety 
                    standards for professional use.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Comfortable Amenities</h3>
                  <p className="text-slate-600">
                    Changing facilities, refreshments, and comfortable seating areas for pre and 
                    post-session relaxation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
