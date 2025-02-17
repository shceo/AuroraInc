import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'uz', name: 'O\'zbek' },
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="bg-transparent text-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-10 focus:ring-transparent"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}