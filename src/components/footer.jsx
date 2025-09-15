import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Maheshwari</h3>
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
              <li>Address: 8, Chowk, Irigation Colony, Karanpur, Dehradun, Uttarakhand 248001</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-darkbrown">
                <span className="sr-only">LinkedIn</span>
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="hover:text-darkbrown">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-xl"></i>
              </a>
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