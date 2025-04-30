
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:gap-12 py-12 md:py-24">
        <div className="lg:w-1/2 animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-transpoto-600" />
            <span className="text-sm font-medium text-transpoto-600">Based in Nairobi, Kenya</span>
          </div>
          <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-gradient">Shipping Across</span>
            <span className="block">Africa and Beyond</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Transpoto: Your trusted logistics partner connecting Africa to the world. 
            Seamless shipping solutions for businesses across the continent and globally.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link to="/contact" className="inline-flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Talk to an Expert
              </Link>
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-sm text-muted-foreground flex items-center">
              <Globe className="mr-2 h-5 w-5 text-transpoto-600" /> 
              Serving businesses across Africa and international markets
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Skyline of Nairobi, Kenya with city buildings"
                fallbackSrc="https://images.unsplash.com/photo-1566356948181-7ccd63bedba5?q=80&w=300&auto=format&fit=crop"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
                alt="Aerial view of Lagos, Nigeria with city and lagoon"
                fallbackSrc="https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=300&auto=format&fit=crop"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
                alt="Cape Town city with Table Mountain in background"
                fallbackSrc="https://images.unsplash.com/photo-1503882748534-bd5e4ae84e7b?q=80&w=300&auto=format&fit=crop"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
                alt="Cairo skyline with pyramids in the distance"
                fallbackSrc="https://images.unsplash.com/photo-1566194080052-5cd50c688512?q=80&w=300&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0 animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-transpoto-500 to-seafoam-400 rounded-xl blur-xl opacity-70"></div>
            <div className="relative bg-white p-4 rounded-xl shadow-xl flex flex-col items-center">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
                alt="Transpoto African Logistics Dashboard"
                fallbackSrc="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
);

};

// Component for image with fallback
const ImageWithFallback = ({ 
  src, 
  fallbackSrc, 
  alt,
  className = "h-full w-full object-cover" 
}: { 
  src: string; 
  fallbackSrc: string; 
  alt: string;
  className?: string;
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <div className={`overflow-hidden rounded-lg ${className.includes("h-") ? "" : "h-24"}`}>
      <img 
        src={imgSrc}
        alt={alt}
        className={className}
        onError={() => {
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
        loading="lazy"
      />
    </div>
  );
};

export default HeroSection;
