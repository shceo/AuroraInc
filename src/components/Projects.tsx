// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Cloud, Book, Film, Car, Brain, CreditCard, Gamepad2, BrainCircuit, Home } from 'lucide-react';
import '../assets/style/hero.css';

// Определяем интерфейс для локализованных данных проекта
interface LocalizedProject {
  id: string;
  title: string;
  description: string;
}

const staticProjects = [
  { id: 'FinTech', icon: CreditCard, path: '/finTech' },
  { id: 'EntertainmentTech', icon: Film, path: '/entertainment' },
  { id: 'InfoTech', icon: Cloud, path: '/infotech' },
  { id: 'RideTech', icon: Car, path: '/ridetech' },
  { id: 'MedTech', icon: Brain, path: '/medtech' },
  { id: 'EdTech', icon: Book, path: '/edtech' },
  { id: 'GameTech', icon: Gamepad2, path: '/gametech' },
  { id: 'Artificial Intelligence', icon: BrainCircuit, path: '/ai' },
  { id: 'PropTech', icon: Home, path: '/proptech' },
];

export default function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Приводим результат к массиву объектов LocalizedProject
  const localizedProjects = t('projects.list', { returnObjects: true }) as LocalizedProject[];

  // Используем типизированный find, указывая тип параметра
  const projects = staticProjects.map((proj) => {
    const localized = localizedProjects.find((item: LocalizedProject) => item.id === proj.id);
    return {
      ...proj,
      title: localized ? localized.title : proj.id,
      description: localized ? localized.description : '',
    };
  });

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => navigate(project.path)}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-900">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
