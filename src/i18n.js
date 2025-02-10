// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импорт переводов
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

// Конфигурация ресурсов
const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(initReactI18next) // подключение плагина для React
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'ru', // запасной язык, если перевод не найден

    interpolation: {
      escapeValue: false, // для React не требуется экранирование
    },
  });

export default i18n;
