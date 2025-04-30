
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Shipping from "./pages/Shipping";
import Warehousing from "./pages/Warehousing";
import PaymentGateway from "./pages/PaymentGateway";
import International from "./pages/International";
import Enterprise from "./pages/Enterprise";
import SmallBusiness from "./pages/SmallBusiness";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/warehousing" element={<Warehousing />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/international" element={<International />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/small-business" element={<SmallBusiness />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
