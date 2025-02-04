import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoIcon from '../assets/images/logo.png'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src={logoIcon}
              alt="Aurora Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#advertisers" className="text-gray-700 hover:text-blue-600 transition-colors">
              Advertisers
            </a>
            <a href="#investors" className="text-gray-700 hover:text-blue-600 transition-colors">
              Investors
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About Us
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/aurora.co.uz" target="_blank"  className="text-gray-600 hover:text-blue-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}