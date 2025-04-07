import React, { useState } from 'react';
import { Target, Rocket, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            style={{ transition: "transform 0.3s ease" }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mission</h2>
            <p className="text-xl text-gray-600">What is our purpose?</p>
            <p className="mt-4 text-gray-600">
              At Aurora Inc., we're dedicated to pushing the boundaries of technology
              to create solutions that enhance and simplify people's lives. Our mission
              is to bridge the gap between imagination and reality through innovative
              technology.
            </p>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              style={{ transition: "transform 0.3s ease" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Future</h2>
              <p className="text-gray-600">How we envision the company's future.</p>
              <p className="mt-4 text-gray-600">
                We see Aurora Inc. leading the technological revolution, setting new
                standards in AI, sustainable technology, and digital innovation.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              style={{ transition: "transform 0.3s ease" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Principles</h2>
              <p className="text-gray-600">The rules we work by.</p>
              <p className="mt-4 text-gray-600">
                Innovation, integrity, and impact guide everything we do. We believe
                in creating technology that serves humanity while respecting privacy
                and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}























