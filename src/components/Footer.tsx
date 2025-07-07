import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

// ✅ Social icon data using images from public folder
const socialLinks = [
  {
    src: "/lovable-uploads/Facebook.svg",
    alt: "Facebook",
    href: "#",
    color: "hover:bg-blue-600",
  },
  {
    src: "/lovable-uploads/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/homade.kerala?igsh=MW00aGQ4czMwems4Mw==",
    color: "hover:bg-pink-600",
  },
  {
    src: "/lovable-uploads/twitter.svg",
    alt: "Twitter / X",
    href: "#",
    color: "hover:bg-black",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Kerala-inspired decorative top border */}
      <div className="h-2 bg-gradient-to-r from-primary via-green-600 to-primary"></div>

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 kerala-pattern opacity-5"></div>

      <div className="container mx-auto py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <NavLink
              to="/"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src="/lovable-uploads/homadeblack1.png" 
                alt="Homade Logo" 
                className="w-32 mb-3"
              />
            </NavLink>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Bringing authentic Kerala homemade goodness to your doorstep with carefully crafted products 
              made from the finest spices and traditional recipes from God's Own Country.
            </p>

            {/* Social Media Icons */}
            <div className="mt-8">
              <h5 className="text-sm font-bold text-primary mb-4">Follow Our Startup Journey</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.src} alt={social.alt} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-primary after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:translate-x-1"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300 group">
                <Mail className="w-5 h-5 text-primary mr-3 transition-transform duration-300 group-hover:scale-110" />
                <a href="https://mail.google.com/mail/?view=cm&to=homadekerala@gmail.com&su">homadekerala@gmail.com</a>
              </li>
              <li className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 group">
                <Phone className="w-5 h-5 text-green-400 mr-3 transition-transform duration-300 group-hover:scale-110" />
                +91 9946411243
              </li>
              <li className="flex items-start text-gray-300 hover:text-yellow-400 transition-colors duration-300 group">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  Trivandrum, Kerala
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Kerala Homade. All rights reserved. Made in God's Own Country.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
