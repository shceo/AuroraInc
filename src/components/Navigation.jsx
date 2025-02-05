import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Aurora Inc.
            </span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/investors" className="text-gray-700 hover:text-purple-600 transition-colors">
              For Investors
            </Link>
            <Link to="/advertisers" className="text-gray-700 hover:text-purple-600 transition-colors">
              For Advertisers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}