
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Transpoto</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get in touch with our team to discuss how Transpoto can help optimize your shipping and logistics across Africa and beyond.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-transpoto-500 focus:border-transparent"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-transpoto-500 focus:border-transparent"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-transpoto-500 focus:border-transparent"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-transpoto-500 focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-transpoto-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-transpoto-500 focus:border-transparent"
                        rows={4}
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-transpoto-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-transpoto-100 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-transpoto-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Headquarters</h3>
                        <p className="text-muted-foreground">
                          Transpoto Tower<br />
                          Kenyatta Avenue<br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-seafoam-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-seafoam-100 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-seafoam-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">
                          
                          +254 (0) 794564808
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-transpoto-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-transpoto-100 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-transpoto-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          <br />
                          sales@transpotofreight.com
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-seafoam-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-seafoam-100 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-seafoam-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 rounded-xl overflow-hidden h-96 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.277444357352!2d36.80472399282512!3d-1.2924891316223403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%20Central%20Business%20District%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1650151786082!5m2!1sen!2sus" 
                  className="w-full h-full" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy"
                  title="Transpoto Headquarters Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
