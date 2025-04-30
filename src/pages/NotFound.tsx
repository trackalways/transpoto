
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container px-6">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-9xl font-bold text-gray-200">404</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Page not found</h2>
            <p className="mt-4 text-muted-foreground">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild>
                <Link to="/" className="inline-flex items-center gap-2">
                  <Home size={16} /> Go to Homepage
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="#" onClick={() => window.history.back()} className="inline-flex items-center gap-2">
                  <ArrowLeft size={16} /> Go Back
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
