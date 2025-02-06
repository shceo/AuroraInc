import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Uzbekistan, Tashkent
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +998 (93) 588-3721
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                contact@aurora.com
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-200">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-blue-800 border border-blue-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 rounded font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} Aurora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}