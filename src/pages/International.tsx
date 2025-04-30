
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Globe, Package, FileCheck, Building, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const internationalRoutes = [
  {
    region: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Netherlands", "Italy"],
    image: "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?q=80&w=500&auto=format&fit=crop"
  },
  {
    region: "North America",
    countries: ["United States", "Canada", "Mexico"],
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=500&auto=format&fit=crop"
  },
  {
    region: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=500&auto=format&fit=crop"
  },
  {
    region: "Asia Pacific",
    countries: ["China", "India", "Singapore", "Australia"],
    image: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=500&auto=format&fit=crop"
  }
];

const internationalServices = [
  {
    icon: <Package className="h-10 w-10 text-transpoto-600" />,
    title: "Global Freight",
    description: "Air, ocean, and land freight services connecting Africa to international markets."
  },
  {
    icon: <FileCheck className="h-10 w-10 text-transpoto-600" />,
    title: "Customs Clearance",
    description: "Expert handling of documentation and regulations for smooth imports and exports."
  },
  {
    icon: <Building className="h-10 w-10 text-transpoto-600" />,
    title: "International Warehousing",
    description: "Strategic warehouse locations in key global markets for efficient distribution."
  },
  {
    icon: <Map className="h-10 w-10 text-transpoto-600" />,
    title: "Route Optimization",
    description: "Cost-effective routing solutions for shipments between Africa and global destinations."
  },
];

const International = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-transpoto-50 to-seafoam-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">International Logistics Solutions</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Connecting African businesses to the world with reliable international shipping and logistics services to over 220 countries.
              </p>
              <Button size="lg">Explore Global Shipping</Button>
            </div>
          </div>
        </section>

        {/* International Routes Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4" id="routes-title">Global Shipping Routes</h2>
              <p className="text-lg text-muted-foreground" aria-labelledby="routes-title">
                Major shipping corridors connecting Africa to international markets
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {internationalRoutes.map((route, index) => (
                <article key={index} className="relative overflow-hidden rounded-xl group" aria-label={`Shipping route to ${route.region}`}>
                  <div className="aspect-square">
                    <img 
                      src={route.image} 
                      alt={`${route.region} shipping route`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{route.region}</h3>
                    <ul className="space-y-1">
                      {route.countries.map((country, idx) => (
                        <li key={idx} className="text-sm text-white/80">{country}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="lg:flex items-center gap-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">International Logistics Services</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive international shipping solutions designed for African businesses looking to expand globally.
                </p>
                
                <div className="space-y-8">
                  {internationalServices.map((service, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Button className="flex items-center gap-2">
                    Request International Quote <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519098901909-b1553a1190af?q=80&w=1000&auto=format&fit=crop" 
                    alt="Global Logistics Network" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default International;
