import React, { useState, useEffect } from 'react';
import { Send, Twitter, Instagram } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import logoIcon from '../assets/images/logo.png';
import logoIcon1 from '../assets/images/logo1.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-customDark/50 backdrop-blur-lg z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="https://aurora.co.uz">
              <img
                src={hasScrolled ? logoIcon1 : logoIcon}
                alt="Aurora Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#advertisers"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              Advertisers
            </a>
            <a
              href="#investors"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              Investors
            </a>
            <a
              href="#about"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://t.me/Aurora_llc"
              target="_blank"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              <Send size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/aurora.co.uz"
              target="_blank"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>

          <button
            className="md:hidden text-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-black text-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <a
            href="#advertisers"
            className="text-gray-100 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Advertisers
          </a>
          <a
            href="#investors"
            className="text-gray-100 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Investors
          </a>
          <a
            href="#about"
            className="text-gray-100 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <div className="md:flex flex items-center space-x-4">
            <a
              href="https://t.me/Aurora_llc"
              target="_blank"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              <Send size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/aurora.co.uz"
              target="_blank"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </nav>
        
      </div>
    </header>
  );
}
