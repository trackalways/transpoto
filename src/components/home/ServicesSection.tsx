
import React from "react";
import { 
  Truck, 
  Package, 
  Globe, 
  Warehouse, 
  CreditCard, 
  BarChart 
} from "lucide-react";

const features = [
  {
    icon: <Truck className="h-10 w-10 text-transpoto-600" />,
    title: "Pan-African Shipping",
    description: "Comprehensive shipping solutions across African countries, connecting businesses from Kenya to the entire continent.",
    image: "https://images.unsplash.com/photo-1626937071772-0a4edea42e65?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: <Globe className="h-10 w-10 text-transpoto-600" />,
    title: "International Logistics",
    description: "Expand your business globally with our reliable international shipping services to 220+ countries worldwide.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: <Warehouse className="h-10 w-10 text-transpoto-600" />,
    title: "African Warehousing",
    description: "Strategic warehouse locations across key African economic hubs to optimize your supply chain and reduce delivery times.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: <Package className="h-10 w-10 text-transpoto-600" />,
    title: "Cross-Border Order Management",
    description: "Seamlessly manage orders across different African markets and international borders with our advanced tracking system.",
    image: "https://images.unsplash.com/photo-1506306057861-44d58a0d16ad?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: <CreditCard className="h-10 w-10 text-transpoto-600" />,
    title: "Multi-Currency Payments",
    description: "Flexible payment solutions supporting multiple African currencies and international payment methods.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop"
  },
  {
    icon: <BarChart className="h-10 w-10 text-transpoto-600" />,
    title: "African Market Analytics",
    description: "Gain insights into shipping performance, market trends, and logistics efficiency across African economies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Logistics Solutions for African Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Empowering African enterprises with comprehensive shipping and logistics services
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
