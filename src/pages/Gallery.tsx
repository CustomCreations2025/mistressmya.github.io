
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  const galleryImages = [
    {
      src: "/lovable-uploads/0f879d97-04d8-4625-a6b8-fa002a1f6bd6.png",
      alt: "Professional session environment - elegant and private studio setting",
      category: "Studio"
    },
    {
      src: "/lovable-uploads/73930176-d6f8-4a94-95d4-50092c926332.png",
      alt: "Professional portrait of Mya The Disciplinarian",
      category: "Portrait"
    },
    {
      src: "/lovable-uploads/c625981c-0049-4d07-9905-4d9031f79418.png",
      alt: "Professional discipline setting with quality equipment",
      category: "Environment"
    },
    {
      src: "/lovable-uploads/88c3bd1f-5074-478b-b0df-737513835e9b.png",
      alt: "Professional session atmosphere - comfortable and secure",
      category: "Session"
    },
    {
      src: "/lovable-uploads/7db142e7-2841-4ee3-af3a-e8d9d2153191.png",
      alt: "Professional training environment with safety focus",
      category: "Training"
    },
    {
      src: "/lovable-uploads/7cf2bf80-4441-4fd5-a7f9-6fd6778505cb.png",
      alt: "Professional discipline setup with high-quality equipment",
      category: "Equipment"
    },
    {
      src: "/lovable-uploads/269c5416-fe11-4f7d-9420-4cea684d2a59.png",
      alt: "Professional session detail showing attention to quality",
      category: "Detail"
    },
    {
      src: "/lovable-uploads/ab005f06-9494-4b4f-b22c-04ab04896d0f.png",
      alt: "Professional atmosphere with elegant styling",
      category: "Atmosphere"
    },
    {
      src: "/lovable-uploads/047169e7-8f12-4bcf-aa34-5d7a34888a36.png",
      alt: "Professional setting demonstrating quality standards",
      category: "Setting"
    },
    {
      src: "/lovable-uploads/fc61e8ed-1912-45bc-a3e9-6919990c257a.png",
      alt: "Professional equipment maintained to highest standards",
      category: "Equipment"
    },
    {
      src: "/lovable-uploads/12c879e1-0632-4f41-9f67-fb2c58222163.png",
      alt: "Professional environment showcasing discretion and quality",
      category: "Environment"
    }
  ];

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => new Set(prev).add(index));
  };

  return (
    <Layout>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-4 lg:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Gallery</h1>
          <p className="text-lg md:text-xl text-purple-100">
            A glimpse into the professional environment and atmosphere
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="main-content" className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 md:mb-4">Professional Environment</h2>
            <p className="text-lg md:text-xl text-slate-600">Tasteful imagery showcasing the professional setting and atmosphere</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-64 md:h-80 object-cover transition-all duration-300 group-hover:scale-105 ${
                        imagesLoaded.has(index) ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                      decoding="async"
                    />
                    {!imagesLoaded.has(index) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                        <div className="text-purple-600 animate-pulse">Loading...</div>
                      </div>
                    )}
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
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center text-purple-600">
                    <div className="text-4xl mb-2" role="img" aria-label="Camera icon">📸</div>
                    <p className="text-sm font-medium">More images coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environment Description */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">The Professional Environment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3">Studio Setting</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    A clean, private, and professionally maintained space designed for comfort, safety, 
                    and the optimal session experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3">Privacy & Discretion</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Complete privacy is ensured with a discrete entrance and soundproofed environment 
                    for your comfort and confidentiality.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3">Safety Equipment</h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    All equipment is regularly maintained, sanitized, and meets the highest safety 
                    standards for professional use.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 md:mb-3">Comfortable Amenities</h3>
                  <p className="text-slate-600 text-sm md:text-base">
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
