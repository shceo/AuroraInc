import React from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/style/hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-customDark relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4">
        <h1 className=" text-5xl md:text-7xl font-bold mb-8 text-gray-100">
          {t('hero.titleLine1')}
          <br />
          {t('hero.titleLine2')}
        </h1>
      </div>
    </section>
  );
}
