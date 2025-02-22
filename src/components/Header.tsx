import { useState, useEffect } from 'react';
import { Send, Instagram } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logoIcon from '../assets/images/logo.png';
import logoIcon1 from '../assets/images/logo1.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { t } = useTranslation();

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
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
            <Link
              to="/advertisers"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              {t('navigation.advertisers')}
            </Link>
            <Link
              to="/investors"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              {t('navigation.investors')}
            </Link>
            <a
              href="#about"
              className="text-gray-100 hover:text-blue-600 transition-colors"
            >
              {t('navigation.aboutUs')}
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
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
        className={`fixed inset-0 h-screen bg-black text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
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
          <Link
            to="/advertisers"
            className="text-gray-100 mt-4 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t('navigation.advertisers')}
          </Link>
          <Link
            to="/investors"
            className="text-gray-100 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t('navigation.investors')}
          </Link>
          <a
            href="#about"
            className="text-gray-100 hover:text-blue-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t('navigation.aboutUs')}
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
        <LanguageSwitcher />
      </div>
    </header>
  );
}
