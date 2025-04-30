
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Store, Package, CreditCard, BarChart2, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const smallBusinessFeatures = [
  {
    icon: <Package className="h-10 w-10 text-transpoto-600" />,
    title: "Affordable Shipping",
    description: "Cost-effective shipping solutions designed for small businesses across Africa."
  },
  {
    icon: <Store className="h-10 w-10 text-transpoto-600" />,
    title: "E-commerce Integration",
    description: "Seamless connection with popular African e-commerce platforms and marketplaces."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-transpoto-600" />,
    title: "Flexible Payment Options",
    description: "Pay-as-you-go plans with no long-term contracts or minimum volume requirements."
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-transpoto-600" />,
    title: "Simple Analytics",
    description: "Easy-to-understand shipping data to help optimize your small business operations."
  },
  {
    icon: <Truck className="h-10 w-10 text-transpoto-600" />,
    title: "Last-Mile Delivery",
    description: "Reliable delivery to customers across African cities, towns, and rural areas."
  },
  {
    icon: <Users className="h-10 w-10 text-transpoto-600" />,
    title: "Customer Support",
    description: "Dedicated support team that understands the unique challenges of African small businesses."
  }
];

const steps = [
  {
    number: "01",
    title: "Create an Account",
    description: "Sign up in minutes with our simple onboarding process designed for small businesses."
  },
  {
    number: "02",
    title: "Connect Your Store",
    description: "Easily integrate with your existing online store or marketplace."
  },
  {
    number: "03",
    title: "Ship Your Products",
    description: "Start shipping with competitive rates and reliable delivery across Africa."
  }
];

const SmallBusiness = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-transpoto-50 to-seafoam-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Small Business Shipping Solutions</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Affordable and reliable shipping for small businesses across Africa. Grow your business with logistics that scale with you.
              </p>
              <Button size="lg">Start Shipping Today</Button>
            </div>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Get Started in Minutes</h2>
              <p className="text-lg text-muted-foreground">
                Three simple steps to transform your small business logistics
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="p-8 border rounded-xl bg-white relative hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-5xl font-bold text-transpoto-100">{step.number}</span>
                  <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Features for Small Businesses</h2>
              <p className="text-lg text-muted-foreground">
                Specially designed shipping solutions for small business owners across Africa
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {smallBusinessFeatures.map((feature, index) => (
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

        {/* Testimonial Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-transpoto-50 to-seafoam-50 p-8 md:p-12 rounded-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" 
                    alt="Small Business Owner" 
                    className="w-20 h-20 rounded-full object-cover border-4 border-white"
                  />
                </div>
                <blockquote className="text-lg md:text-xl mb-6">
                  "Transpoto has been a game-changer for my small business. Their affordable shipping rates and reliable delivery across Kenya have helped me expand to new markets I couldn't reach before."
                </blockquote>
                <div>
                  <p className="font-semibold">Amara Okafor</p>
                  <p className="text-sm text-muted-foreground">Fashion Boutique Owner, Nairobi</p>
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

export default SmallBusiness;
