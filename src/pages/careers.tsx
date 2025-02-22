import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Careers() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Главная
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              О компании
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Команда
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Вакансии
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Контакты
            </a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Подробнее
          </button>
        </div>
      </header>
      <section className="relative w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src="assets/images/logo.png"
          alt="Company Background"
          className="w-full h-full object-cover opacity-80"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8 text-white"> */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Карьера
          </h1>
          <p className="max-w-xl text-sm sm:text-base">
            Присоединяйтесь к нашей команде!
          </p>
          <div className="mt-4 space-x-2">
            <button className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700">
              Отправить резюме
            </button>
          {/* </button> */}
        </div>
      </section>
    </div>
  );
}
