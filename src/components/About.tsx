import React from 'react';
import { Target, Rocket, Shield } from 'lucide-react';
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';
import bg3 from '../assets/images/bg3.png';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const localizedAbout = t('about.list', { returnObjects: true });

  return (
    <div className="bg-white min-h-screen bg-customDark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold  text-center mb-12 text-gray-900">
          {t('about.title')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 relative h-[632px] rounded-xl overflow-hidden shadow-sm cursor-pointer group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
              style={{ backgroundImage: `url(${bg3})` }}
            />
            <div className="relative p-8">
              <h2 className="text-7xl font-bold text-gray-900 mb-4">
                {localizedAbout[0]?.title}
              </h2>
              <p className="text-2xl text-gray-900">
                {localizedAbout[0]?.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="relative rounded-xl h-[300px] overflow-hidden shadow-sm cursor-pointer group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: `url(${bg2})` }}
              />
              <div className="relative p-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {localizedAbout[1]?.title}
                </h2>
                <p className="text-gray-900">
                  {localizedAbout[1]?.description}
                </p>
              </div>
            </div>

            <div className="relative rounded-xl h-[300px] overflow-hidden shadow-sm cursor-pointer group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: `url(${bg1})` }}
              />
              <div className="relative p-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {localizedAbout[2]?.title}
                </h2>
                <p className="text-gray-900">
                  {localizedAbout[2]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
