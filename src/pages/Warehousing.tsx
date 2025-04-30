
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Warehouse, PackagePlus, PackageMinus, ClipboardCheck, BarChart3, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const warehouseLocations = [
  {
    city: "Nairobi",
    country: "Kenya",
    type: "Regional Hub",
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=500&auto=format&fit=crop"
  },
  {
    city: "Lagos",
    country: "Nigeria",
    type: "Regional Hub",
    image: "https://images.unsplash.com/photo-1589308121464-a58af4eee73c?q=80&w=500&auto=format&fit=crop"
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    type: "Regional Hub",
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=500&auto=format&fit=crop"
  },
  {
    city: "Cairo",
    country: "Egypt",
    type: "Regional Hub",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=500&auto=format&fit=crop"
  },
];

const warehousingServices = [
  {
    icon: <PackagePlus className="h-10 w-10 text-transpoto-600" />,
    title: "Storage Solutions",
    description: "Secure, climate-controlled warehousing facilities for all types of products across key African markets."
  },
  {
    icon: <PackageMinus className="h-10 w-10 text-transpoto-600" />,
    title: "Order Fulfillment",
    description: "End-to-end order processing, picking, packing, and shipping services for e-commerce businesses."
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-transpoto-600" />,
    title: "Inventory Management",
    description: "Advanced inventory tracking systems providing real-time visibility of your stock levels."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-transpoto-600" />,
    title: "Analytics & Reporting",
    description: "Comprehensive reporting on inventory turnover, storage costs, and fulfillment performance."
  },
  {
    icon: <Truck className="h-10 w-10 text-transpoto-600" />,
    title: "Last-Mile Delivery",
    description: "Efficient delivery services from our warehouses to your customers' locations across Africa."
  },
  {
    icon: <Warehouse className="h-10 w-10 text-transpoto-600" />,
    title: "Cross-Docking",
    description: "Streamlined operations to minimize storage time and optimize distribution efficiency."
  },
];

const Warehousing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-transpoto-50 to-seafoam-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Warehousing Across Africa</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Optimize your supply chain with our network of warehousing facilities strategically located throughout key African economic centers.
              </p>
              <Button size="lg">Explore Warehousing Solutions</Button>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Our African Warehouse Network</h2>
              <p className="text-lg text-muted-foreground">
                Strategically positioned warehousing facilities ensuring efficient distribution across the continent
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {warehouseLocations.map((location, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl group"
                >
                  <div className="aspect-square">
                    <img 
                      src={location.image} 
                      alt={`${location.city}, ${location.country}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">{location.city}</h3>
                    <p className="text-white/80">{location.country}</p>
                    <span className="text-sm mt-2 inline-block bg-transpoto-600/90 text-white px-3 py-1 rounded-full">
                      {location.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="mb-6 text-muted-foreground">
                Plus 12+ additional warehouse facilities in secondary markets
              </p>
              <Button variant="outline">View All Locations</Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Warehousing Services</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end warehousing solutions to optimize your African operations
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {warehousingServices.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-5">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Warehousing;
