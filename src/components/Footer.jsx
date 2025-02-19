import React from "react";
import { Send, Twitter, Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-customDark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Aurora Inc.</h3>
            <p className="text-gray-400">Building the future, today.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-purple-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-purple-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="hover:text-purple-400">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:contact@aurora.com">contact@aurora.com</a>
              </li>
              <li>
                <a href="tel:+998935883721">+998 (93) 588-37-21</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-purple-400"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://t.me/Aurora_llc"
                target="_blank"
                className="text-gray-400 hover:text-purple-400"
              >
                <Send className="h-6 w-6" />
              </a>
              {/* <a href="#" target="_blank" className="text-gray-400 hover:text-purple-400">
                <Linkedin className="h-6 w-6" />
              </a> */}
              <a
                href="https://www.instagram.com/aurora.co.uz"
                target="_blank"
                className="text-gray-400 hover:text-purple-400"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aurora Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
