import React from 'react';

export default function Careers() {
  return (
    <div className="min-h-screen bg-blue-300">
      {/* Шапка/блок с заголовком и полем поиска */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-6">
          Работа в Aurora Inc
        </h1>
        <div className="relative max-w-3xl">
          <input
            type="text"
            placeholder="Найдите свою вакансию"
            className="w-full p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-200"
          />
        </div>
      </div>

      {/* Основной контент: Категории и карточка справа */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Левая часть: список категорий */}
          <div className="flex-1">
            <div className="flex items-center text-black mb-4">
              <span className="font-semibold mr-1">
                Посмотреть все вакансии
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-3">
              {/* Пример кнопок-категорий */}
              <button className="bg-white text-black px-4 py-2 rounded-full hover:shadow transition">
                Разработка
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:shadow transition">
                Управление проектами
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:shadow transition">
                Аналитика
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:shadow transition">
                Дизайн
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:shadow transition">
                Продажи
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:shadow transition">
                Поддержка пользователей
              </button>
            </div>
          </div>

          {/* Правая часть: карточка */}
          <div className="bg-white rounded shadow p-4 w-full md:w-1/3">
            <h2 className="font-semibold mb-2 text-black">
              Работа с сопровождением сервиса Яндекса
            </h2>
            <p className="text-sm text-gray-700">
              Описание, обязанности и требования для вакансии, которую
              предоставляет Яндекс. Информация о том, чем придётся заниматься
              на этой должности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
