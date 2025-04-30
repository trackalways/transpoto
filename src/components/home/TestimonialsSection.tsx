
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Transpoto has revolutionized our shipping process. We've reduced our shipping costs by 25% and increased our delivery speed significantly.",
    author: "Rajesh Kumar",
    position: "CEO",
    company: "Fashion Store",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    quote:
      "The ease of integration with our website and the comprehensive dashboard made managing shipments so much easier. Exceptional service!",
    author: "Priya Sharma",
    position: "Operations Manager",
    company: "Tech Gadgets",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    quote:
      "Their international shipping solutions helped us expand to new markets with minimal hassle. The customer support team is always helpful.",
    author: "Ankit Patel",
    position: "Founder",
    company: "Handmade Crafts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of businesses that trust Transpoto for their shipping needs
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10 border">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden h-32 w-32 border-4 border-gray-100 mx-auto">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < currentTestimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <h4 className="font-medium">{currentTestimonial.author}</h4>
                <p className="text-sm text-muted-foreground">
                  {currentTestimonial.position}, {currentTestimonial.company}
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <blockquote>
                <p className="text-lg italic text-gray-700 mb-4">
                  "{currentTestimonial.quote}"
                </p>
              </blockquote>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
