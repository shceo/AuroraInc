import React from 'react';
import { Target, Rocket, Shield } from 'lucide-react';
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';
import bg3 from '../assets/images/bg3.png';

export default function About() {
  return (
    <div className="bg-white min-h-screen bg-customDark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Блок Mission с фоном bg1 */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden shadow-sm cursor-pointer group">
            {/* Фоновая картинка */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
              style={{ backgroundImage: `url(${bg3})` }}
            />
            {/* Содержимое блока */}
            <div className="relative p-8">
              <h2 className="text-7xl font-bold text-gray-900 mb-4">Mission</h2>
              <p className="text-2xl text-gray-900">What is our purpose?</p>
              <p className="mt-4 text-gray-900">
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            {/* Блок Future с фоном bg2 */}
            <div className="relative rounded-xl h-[300px] overflow-hidden shadow-sm cursor-pointer group">
              {/* Фоновая картинка */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: `url(${bg2})` }}
              />
              {/* Содержимое блока */}
              <div className="relative p-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Future</h2>
                <p className="text-gray-900">
                  How we envision the company's future.
                </p>
                <p className="mt-4 text-gray-900">
                  {/* Дополнительное описание, если необходимо */}
                </p>
              </div>
            </div>

            {/* Блок Principles с фоном bg3 */}
            <div className="relative rounded-xl h-[300px] overflow-hidden shadow-sm cursor-pointer group">
              {/* Фоновая картинка */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: `url(${bg1})` }}
              />
              {/* Содержимое блока */}
              <div className="relative p-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Principles
                </h2>
                <p className="text-gray-900">The rules we work by.</p>
                <p className="mt-4 text-gray-900">
                  {/* Дополнительное описание, если необходимо */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
