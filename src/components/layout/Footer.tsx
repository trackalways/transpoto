
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <picture>
  <source srcSet="/logo-white.png" media="(prefers-color-scheme: dark)" />
  <img src="/logo-dark.png" alt="Transpoto Logistics logo" className="h-64 w-auto" />
</picture>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Transpoto provides end-to-end shipping services for businesses of all sizes.
              We make shipping simple, efficient, and affordable.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-transpoto-600"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-transpoto-600"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-transpoto-600"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-transpoto-600"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/shipping" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Domestic Shipping
                </Link>
              </li>
              <li>
                <Link to="/international" className="text-sm text-gray-600 hover:text-transpoto-600">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link to="/warehousing" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link to="/payments" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Payment Gateway
                </Link>
              </li>
              <li>
                <Link to="/pickup" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Pickup Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-transpoto-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-900">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-transpoto-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-gray-600 hover:text-transpoto-600">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Transpoto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
