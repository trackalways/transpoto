
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  Menu, 
  X, 
  Package,
  Globe,
  Truck,
  Warehouse,
  CreditCard,
  BookOpen,
  Phone,
  MapPin,
  Mail
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2 h-full">
            <picture>
  <source srcSet="/logo-white.png" media="(prefers-color-scheme: dark)" />
  <img src="/logo-dark.png" alt="Transpoto Logistics logo" className="h-32 w-auto self-center object-contain" />
</picture>
          </Link>

          {!isMobile && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-transpoto-600/20 to-seafoam-500/20 p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              African Logistics Excellence
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Connecting Africa to the world with reliable, efficient shipping solutions.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/shipping" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center">
                            <Package className="mr-2 h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Shipping</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Domestic and international shipping solutions across Africa
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/warehousing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center">
                            <Warehouse className="mr-2 h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Warehousing</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Strategic warehousing across key African economic hubs
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/payment-gateway" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Payment Gateway</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Multi-currency payment solutions for African businesses
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/international" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center">
                            <Globe className="mr-2 h-4 w-4" />
                            <div className="text-sm font-medium leading-none">International Shipping</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Connect Africa to the world with our global logistics network
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px]">
                      <li>
                        <Link to="/enterprise" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center">
                            <Truck className="mr-2 h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Enterprise</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Custom logistics solutions for large businesses across Africa
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/small-business" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center">
                            <BookOpen className="mr-2 h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Small Business</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Affordable shipping for small and growing African businesses
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    About Us
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isMobile ? (
            <Link to="/contact">
              <Button className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          ) : (
            <Button variant="ghost" onClick={toggleMenu} className="md:hidden" size="icon">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <div className="border-b pb-2">
              <p className="text-sm font-medium text-foreground mb-2">Services</p>
              <div className="space-y-2 pl-2">
                <Link to="/shipping" className="block text-sm text-foreground/80" onClick={toggleMenu}>
                  Shipping
                </Link>
                <Link to="/warehousing" className="block text-sm text-foreground/80" onClick={toggleMenu}>
                  Warehousing
                </Link>
                <Link to="/payment-gateway" className="block text-sm text-foreground/80" onClick={toggleMenu}>
                  Payment Gateway
                </Link>
                <Link to="/international" className="block text-sm text-foreground/80" onClick={toggleMenu}>
                  International Shipping
                </Link>
              </div>
            </div>
            
            <div className="border-b pb-2">
              <p className="text-sm font-medium text-foreground mb-2">Solutions</p>
              <div className="space-y-2 pl-2">
                <Link to="/enterprise" className="block text-sm text-foreground/80" onClick={toggleMenu}>
                  Enterprise
                </Link>
                <Link to="/small-business" className="block text-sm text-foreground/80" onClick={toggleMenu}>
                  Small Business
                </Link>
              </div>
            </div>
            
            <Link to="/about" className="text-sm font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="text-sm font-medium" onClick={toggleMenu}>
              Contact Us
            </Link>
            
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link to="/contact" className="flex items-center justify-center gap-2" onClick={toggleMenu}>
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
