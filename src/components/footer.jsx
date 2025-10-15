import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Maheshwari</h3>
            <h2>Founder - Late Shri. MunshiRam - 1940</h2>
            <p >
            Traditional recipes, timeless taste — trusted for over 80 years in Dehradun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: prashantmaheshwari2705@gmail.com</li>
              <li>Phone: +91 9897225756</li>
              <li>Address: 8, Karanpur Chowk, Karanpur, Dehradun, Uttarakhand 248001</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-medium mb-4">Reach Us</h4>
            <div className="w-full max-w-md">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src="./map.jpeg"
                  alt="Maheshwari location map"
                  loading="lazy"
                  onClick={() => window.open("https://www.google.com/maps/place/Maheshwari+Sweet+Shop/@30.3284265,78.0547738,17z/data=!4m10!1m2!2m1!1sMaheshwari+Sweet+Shop+Dehradun!3m6!1s0x3909299e7e8c2737:0x590881297182bbfa!8m2!3d30.3283696!4d78.0572106!15sCh5NYWhlc2h3YXJpIFN3ZWV0IFNob3AgRGVocmFkdW6SARJpbmRpYW5fc3dlZXRzX3Nob3CqAXEKDS9nLzExeWs4OXAzZG4QASoZIhVtYWhlc2h3YXJpIHN3ZWV0IHNob3AoADIfEAEiG8xKpqgxird6kyAQ7u2AYfO2n11F8HZz9oeI4TIiEAIiHm1haGVzaHdhcmkgc3dlZXQgc2hvcCBkZWhyYWR1buABAA!16s%2Fg%2F11yk89p3dn?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D", "_blank", "noopener,noreferrer")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Maheshwari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;