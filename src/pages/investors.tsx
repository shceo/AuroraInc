import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CompanyProfile() {
  const navigate = useNavigate();
  
    const handleBack = () => {
      navigate('/');
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <section className="max-w-7xl mt-[60px] mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <a
          href="https://t.me/Aurora_llc"
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
          href="/faq"
          className="bg-white rounded shadow p-4 text-center hover:shadow-md transition"
        >
          Инвесторам
        </a>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-2 gap-8">
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">Финансовые результаты</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold">4 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li>
                  <a href="#">Релиз</a>
                </li>
                <li>
                  <a href="#">Презентация</a>
                </li>
                <li>
                  <a href="#">Запись трансляции</a>
                </li>
                <li>
                  <a href="#">Слайды</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">3 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li>
                  <a href="#">Релиз</a>
                </li>
                <li>
                  <a href="#">Презентация</a>
                </li>
                <li>
                  <a href="#">Запись трансляции</a>
                </li>
                <li>
                  <a href="#">Слайды</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">2 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li>
                  <a href="#">Релиз</a>
                </li>
                <li>
                  <a href="#">Презентация</a>
                </li>
                <li>
                  <a href="#">Запись трансляции</a>
                </li>
                <li>
                  <a href="#">Слайды</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">1 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li>
                  <a href="#">Релиз</a>
                </li>
                <li>
                  <a href="#">Презентация</a>
                </li>
                <li>
                  <a href="#">Запись трансляции</a>
                </li>
                <li>
                  <a href="#">Слайды</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">Финансовые результаты</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold">4 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li>
                  <a href="#">Релиз</a>
                </li>
                <li>
                  <a href="#">Презентация</a>
                </li>
                <li>
                  <a href="#">Запись трансляции</a>
                </li>
                <li>
                  <a href="#">Слайды</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">3 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li>
                  <a href="#">Релиз</a>
                </li>
                <li>
                  <a href="#">Презентация</a>
                </li>
                <li>
                  <a href="#">Запись трансляции</a>
                </li>
                <li>
                  <a href="#">Слайды</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">2 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li>
                  <a href="#">Релиз</a>
                </li>
                <li>
                  <a href="#">Презентация</a>
                </li>
                <li>
                  <a href="#">Запись трансляции</a>
                </li>
                <li>
                  <a href="#">Слайды</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">1 квартал</h3>
              <ul className="list-disc list-inside ml-2 mt-1 text-blue-600">
                <li>
                  <a href="#">Релиз</a>
                </li>
                <li>
                  <a href="#">Презентация</a>
                </li>
                <li>
                  <a href="#">Запись трансляции</a>
                </li>
                <li>
                  <a href="#">Слайды</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
