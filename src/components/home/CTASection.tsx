
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
          <div className="relative py-16 md:py-20 px-6 md:px-12 bg-gradient-to-r from-transpoto-500 to-seafoam-400 text-white">
            <div className="relative z-10 grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Connect With Transpoto
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Let us help you streamline your shipping and logistics across Africa and beyond. 
                  Reach out to discuss your specific requirements.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Call Us</h4>
                      <p className="opacity-90">+254 (0) 712 345 678</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="opacity-90">info@transpoto.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Headquarters</h4>
                      <p className="opacity-90">Nairobi, Kenya</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative bg-white/10 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Request Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="How can we help you?"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button 
                    className="w-full bg-white text-transpoto-600 hover:bg-white/90 hover:text-transpoto-700"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute left-0 top-0 h-full w-1/2 bg-white/5 transform -skew-x-12"></div>
              <div className="absolute right-0 bottom-0 h-full w-1/3 bg-white/5 transform skew-x-12"></div>
              <div className="absolute left-24 top-10 h-20 w-20 rounded-full bg-white/10"></div>
              <div className="absolute right-32 bottom-12 h-16 w-16 rounded-full bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
