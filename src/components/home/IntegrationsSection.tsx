
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, ShoppingCart, Package, CreditCard, Store, Tag } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

// Using SVG icons for better reliability
const integrationLogos = [
  { 
    name: "Shopify", 
    icon: <Store className="h-12 w-12 text-[#96bf48]" />
  },
  { 
    name: "Jumia", 
    icon: <ShoppingBag className="h-12 w-12 text-[#f68b1e]" />
  },
  { 
    name: "Kilimall", 
    icon: <ShoppingCart className="h-12 w-12 text-[#e74c3c]" />
  },
  { 
    name: "WooCommerce", 
    icon: <CreditCard className="h-12 w-12 text-[#7f54b3]" />
  },
  { 
    name: "Takealot", 
    icon: <Package className="h-12 w-12 text-[#0084c9]" />
  },
  { 
    name: "Konga", 
    icon: <ShoppingCart className="h-12 w-12 text-[#ed017f]" />
  },
  { 
    name: "Souq", 
    icon: <Tag className="h-12 w-12 text-[#f68b1e]" />
  },
  { 
    name: "Magento", 
    icon: <ShoppingBag className="h-12 w-12 text-[#f26322]" />
  }
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-muted-foreground">
            Easily connect your African e-commerce store with our platform and start shipping in minutes
          </p>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {integrationLogos.map((integration, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-2">{integration.icon}</div>
                <div className="text-center text-sm font-medium text-gray-700">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden max-w-xs mx-auto mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {integrationLogos.map((integration, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border">
                    <div className="mb-2">{integration.icon}</div>
                    <div className="text-center text-sm font-medium text-gray-700">{integration.name}</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="text-center">
          <Button variant="outline" className="gap-2">
            View all integrations <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
