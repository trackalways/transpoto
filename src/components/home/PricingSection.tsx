
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

type PlanType = "monthly" | "annual";

interface PricingPlan {
  name: string;
  price: {
    monthly: string;
    annual: string;
  };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    price: {
      monthly: "₹999",
      annual: "₹849",
    },
    description: "Perfect for small businesses just getting started",
    features: [
      "100 shipments/month",
      "Domestic shipping",
      "Basic order management",
      "Email support",
      "COD available",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Growth",
    price: {
      monthly: "₹1,999",
      annual: "₹1,699",
    },
    description: "For growing businesses shipping more orders",
    features: [
      "500 shipments/month",
      "Domestic & International shipping",
      "Advanced order management",
      "Priority email & chat support",
      "COD & prepaid options",
      "Shipping insurance",
      "Multi-user access",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: {
      monthly: "Custom",
      annual: "Custom",
    },
    description: "For established businesses with high volume shipping needs",
    features: [
      "Unlimited shipments",
      "All shipping options",
      "Dedicated account manager",
      "24/7 premium support",
      "Custom integrations",
      "Warehouse management",
      "Advanced analytics",
      "API access",
    ],
    cta: "Contact Sales",
  },
];

const PricingSection = () => {
  const [planType, setPlanType] = useState<PlanType>("monthly");

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the right plan for your business needs
          </p>

          <div className="inline-flex items-center p-1 bg-muted rounded-lg mb-8">
            <button
              onClick={() => setPlanType("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                planType === "monthly"
                  ? "bg-white shadow-sm text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPlanType("annual")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                planType === "annual"
                  ? "bg-white shadow-sm text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Annual <span className="text-xs text-seafoam-600 font-medium">Save 15%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 bg-white border rounded-xl ${
                plan.popular
                  ? "border-transpoto-500 shadow-lg shadow-transpoto-100"
                  : "border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-seafoam-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">
                    {planType === "monthly" ? plan.price.monthly : plan.price.annual}
                  </span>
                  {plan.name !== "Enterprise" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-seafoam-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className="w-full mt-2"
              >
                <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
