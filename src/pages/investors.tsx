import React from 'react';

export default function CompanyProfile() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Шапка с навигацией */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Главная
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Финансовые результаты
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Пресс-центр
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Акции и Корпоративное управление
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Календарь инвестора
            </a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600">
              Прочая информация
            </a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Подробнее
          </button>
        </div>
      </header>

      {/* Блок с фоном и заголовком */}
      <section className="relative w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src="assets/images/logo.png" // замените на нужный фон
          alt="Company Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Профиль компании
          </h1>
          <p className="max-w-xl text-sm sm:text-base">
            Краткое описание или слоган компании.
          </p>
          <div className="mt-4 space-x-2">
            <button className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700">
              Комплексный бизнес
            </button>
            <button className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-700">
              Контакты
            </button>
          </div>
        </div>
      </section>

      {/* Кнопки под шапкой (Телеграм-канал, и т.д.) */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href="#"
          className="bg-white rounded shadow p-4 text-center hover:shadow-md transition"
        >
          Телеграм-канал
        </a>
        <a
          href="#"
          className="bg-white rounded shadow p-4 text-center hover:shadow-md transition"
        >
          Презентация
        </a>
        <a
          href="#"
          className="bg-white rounded shadow p-4 text-center hover:shadow-md transition"
        >
          Инвесторам
        </a>
      </section>

      {/* Основной контент: Финансовые результаты и Пресс-релизы */}
      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Левая колонка: Финансовые результаты */}
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">Финансовые результаты</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold">4 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li><a href="#">Релиз</a></li>
                <li><a href="#">Презентация</a></li>
                <li><a href="#">Запись трансляции</a></li>
                <li><a href="#">Слайды</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">3 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li><a href="#">Релиз</a></li>
                <li><a href="#">Презентация</a></li>
                <li><a href="#">Запись трансляции</a></li>
                <li><a href="#">Слайды</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">2 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li><a href="#">Релиз</a></li>
                <li><a href="#">Презентация</a></li>
                <li><a href="#">Запись трансляции</a></li>
                <li><a href="#">Слайды</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">1 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li><a href="#">Релиз</a></li>
                <li><a href="#">Презентация</a></li>
                <li><a href="#">Запись трансляции</a></li>
                <li><a href="#">Слайды</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Правая колонка: Пресс-релизы */}
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">Пресс-релизы</h2>
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-gray-500 text-xs">27 февраля 2025</p>
              <h3 className="font-semibold mt-1">
                Яндекс: путешествия по горам становятся доступнее
              </h3>
              <p className="text-gray-600">
                Краткое описание пресс-релиза...
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">29 февраля 2025</p>
              <h3 className="font-semibold mt-1">
                YandexGPT стала ещё умнее
              </h3>
              <p className="text-gray-600">
                Краткое описание пресс-релиза...
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">24 февраля 2025</p>
              <h3 className="font-semibold mt-1">
                Новое исследование DBNMT
              </h3>
              <p className="text-gray-600">
                Краткое описание пресс-релиза...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
