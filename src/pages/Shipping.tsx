
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Truck, Package, Route, Shield, Clock, FileBarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const shippingFeatures = [
  {
    icon: <Truck className="h-10 w-10 text-transpoto-600" />,
    title: "Pan-African Coverage",
    description: "Ship your products across all major African countries with our extensive logistics network."
  },
  {
    icon: <Package className="h-10 w-10 text-transpoto-600" />,
    title: "Package Tracking",
    description: "Real-time tracking of your shipments across Africa with detailed status updates."
  },
  {
    icon: <Route className="h-10 w-10 text-transpoto-600" />,
    title: "Local Expertise",
    description: "Our local teams understand the unique logistics challenges in each African market."
  },
  {
    icon: <Shield className="h-10 w-10 text-transpoto-600" />,
    title: "Insurance Options",
    description: "Protect your valuable goods with comprehensive shipping insurance solutions."
  },
  {
    icon: <Clock className="h-10 w-10 text-transpoto-600" />,
    title: "Express Delivery",
    description: "Expedited shipping options for time-sensitive deliveries across African cities."
  },
  {
    icon: <FileBarChart className="h-10 w-10 text-transpoto-600" />,
    title: "Custom Documentation",
    description: "Expert assistance with customs documentation for smooth cross-border shipping."
  },
];

const Shipping = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">African Shipping Solutions</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Reliable, efficient, and cost-effective shipping services tailored for businesses across Africa. From local deliveries to pan-African logistics, we've got you covered.
              </p>
              <Button size="lg">Request Shipping Quote</Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Shipping Services</h2>
              <p className="text-lg text-muted-foreground">
                End-to-end shipping solutions designed for African businesses and international companies shipping to Africa
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {shippingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="lg:flex items-center gap-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">Our African Shipping Network</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  With strategically located logistics hubs across Africa, we ensure efficient shipping to all major cities and regions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-transpoto-600 mr-2"></div>
                    <span>East Africa: Kenya, Tanzania, Uganda, Rwanda</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-transpoto-600 mr-2"></div>
                    <span>West Africa: Nigeria, Ghana, Ivory Coast, Senegal</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-transpoto-600 mr-2"></div>
                    <span>Southern Africa: South Africa, Botswana, Namibia</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-transpoto-600 mr-2"></div>
                    <span>North Africa: Egypt, Morocco, Algeria, Tunisia</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button>Contact Our Logistics Team</Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1577877777751-3f1ec20a0715?q=80&w=1000&auto=format&fit=crop" 
                    alt="Africa Map with Logistics Network" 
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

export default Shipping;
