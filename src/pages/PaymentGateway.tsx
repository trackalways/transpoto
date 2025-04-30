
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CreditCard, Globe, Lock, Banknote, Receipt, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const paymentFeatures = [
  {
    icon: <Globe className="h-10 w-10 text-transpoto-600" />,
    title: "Multi-Currency Support",
    description: "Accept payments in major African currencies and international options for global business."
  },
  {
    icon: <Lock className="h-10 w-10 text-transpoto-600" />,
    title: "Secure Transactions",
    description: "Enterprise-grade security with end-to-end encryption for all payment processing."
  },
  {
    icon: <Banknote className="h-10 w-10 text-transpoto-600" />,
    title: "Local Payment Methods",
    description: "Support for Mobile Money, bank transfers, and other popular African payment options."
  },
  {
    icon: <Receipt className="h-10 w-10 text-transpoto-600" />,
    title: "Automated Invoicing",
    description: "Generate professional invoices with integrated payment links for faster settlements."
  },
  {
    icon: <Shield className="h-10 w-10 text-transpoto-600" />,
    title: "Anti-Fraud Protection",
    description: "Advanced fraud detection systems tailored for African markets."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-transpoto-600" />,
    title: "International Cards",
    description: "Process major credit and debit cards from anywhere in the world."
  },
];

const paymentMethods = [
  { name: "M-Pesa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1200px-M-PESA_LOGO-01.svg.png" },
  { name: "MTN Mobile Money", logo: "https://seeklogo.com/images/M/mtn-mobile-money-logo-465023F5B1-seeklogo.com.png" },
  { name: "Airtel Money", logo: "https://www.africanbusinesscentral.com/wp-content/uploads/2015/07/Airtel-Money-Logo.jpg" },
  { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" },
  { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" },
  { name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" },
  { name: "Flutterwave", logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397752768/sqki2dvbvt8voc8st6lj.png" },
  { name: "Paystack", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png" },
];

const PaymentGateway = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-transpoto-50 to-seafoam-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Multi-Currency Payment Solutions</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Seamlessly process payments across Africa with support for local and international payment methods, designed for African businesses.
              </p>
              <Button size="lg">Get Started With Payments</Button>
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Supported Payment Methods</h2>
              <p className="text-lg text-muted-foreground">
                Accept payments from customers using their preferred payment methods across Africa and internationally
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {paymentMethods.map((method, index) => (
                <article
                  key={index}
                  className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transpoto-600"
                  aria-label={`Payment method: ${method.name}`}
                  tabIndex={0}
                >
                  <img 
                    src={method.logo} 
                    alt={`${method.name} payment logo`} 
                    className="h-12 w-auto" 
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-16 md:py-24 bg-gray-50"
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="features-heading" className="text-3xl font-bold mb-4">Payment Gateway Features</h2>
              <p className="text-lg text-muted-foreground">
                Built specifically for the unique requirements of African businesses with international reach
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {paymentFeatures.map((feature, index) => (
                <article
                  key={index}
                  className="p-8 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transpoto-600"
                  aria-label={feature.title}
                  tabIndex={0}
                >
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentGateway;
