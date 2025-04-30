
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, Users, LineChart, Lock, ArrowRightLeft, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const enterpriseFeatures = [
  {
    icon: <Building2 className="h-12 w-12 text-transpoto-600" />,
    title: "Custom Logistics Solutions",
    description: "Tailored logistics strategies designed for large businesses operating across African markets."
  },
  {
    icon: <Users className="h-12 w-12 text-transpoto-600" />,
    title: "Dedicated Account Management",
    description: "Personal account managers with deep knowledge of African logistics challenges."
  },
  {
    icon: <LineChart className="h-12 w-12 text-transpoto-600" />,
    title: "Advanced Analytics",
    description: "Comprehensive data insights to optimize your supply chain across African operations."
  },
  {
    icon: <Lock className="h-12 w-12 text-transpoto-600" />,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security for all shipping operations and sensitive business data."
  },
  {
    icon: <ArrowRightLeft className="h-12 w-12 text-transpoto-600" />,
    title: "API Integration",
    description: "Seamless connection with your existing business systems and software solutions."
  },
  {
    icon: <Settings className="h-12 w-12 text-transpoto-600" />,
    title: "Flexible Configuration",
    description: "Adaptable solutions that grow with your business needs across African markets."
  }
];

const clientLogos = [
  { name: "Client 1", logo: "https://placehold.co/200x80?text=Enterprise+Client" },
  { name: "Client 2", logo: "https://placehold.co/200x80?text=Enterprise+Client" },
  { name: "Client 3", logo: "https://placehold.co/200x80?text=Enterprise+Client" },
  { name: "Client 4", logo: "https://placehold.co/200x80?text=Enterprise+Client" }
];

const Enterprise = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-transpoto-50 to-seafoam-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Logistics Solutions</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive logistics and supply chain solutions for large businesses operating across African markets.
              </p>
              <div className="space-x-4">
                <Button size="lg">Schedule a Consultation</Button>
                <Button variant="outline" size="lg">View Case Studies</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Tailored logistics infrastructure for large-scale operations across Africa
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="lg:flex items-center gap-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  See how leading enterprises have transformed their logistics operations across Africa with Transpoto.
                </p>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
                  <h3 className="text-xl font-semibold mb-2">Global Retailer Expansion</h3>
                  <p className="text-muted-foreground mb-4">
                    Facilitated expansion into 12 African countries with integrated warehousing and cross-border shipping solutions.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">95% delivery accuracy</span>
                    <span className="text-sm font-medium">30% cost reduction</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-semibold mb-2">Manufacturing Supply Chain</h3>
                  <p className="text-muted-foreground mb-4">
                    Optimized inbound logistics for a pan-African manufacturing operation, reducing lead times by 40%.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">40% faster delivery</span>
                    <span className="text-sm font-medium">22% inventory reduction</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button>View All Case Studies</Button>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop" 
                    alt="Enterprise Logistics Meeting" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
              <p className="text-lg text-muted-foreground">
                Join the growing community of enterprise clients transforming logistics across Africa
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {clientLogos.map((client, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <img src={client.logo} alt={client.name} className="h-12 w-auto" />
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

export default Enterprise;
