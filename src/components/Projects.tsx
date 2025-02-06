import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Music, Film, Car, Brain, CreditCard } from 'lucide-react';
import '../assets/style/hero.css'

const projects = [
  {
    title: 'Aurora Weather',
    description: 'Advanced weather forecasting powered by AI',
    icon: Cloud,
    path: '/weather'
  },
  {
    title: 'Aurora Music',
    description: 'Next-generation music streaming platform',
    icon: Music,
    path: '/music'
  },
  {
    title: 'Aurora Movies',
    description: 'Personalized streaming experience',
    icon: Film,
    path: '/movies'
  },
  {
    title: 'Aurora Taxi',
    description: 'Revolutionary ride-sharing service',
    icon: Car,
    path: '/taxi'
  },
  {
    title: 'Aurora AI',
    description: 'Cutting-edge artificial intelligence solutions',
    icon: Brain,
    path: '/ai'
  },
  {
    title: 'Aurora Pay',
    description: 'Secure and seamless payment platform',
    icon: CreditCard,
    path: '/pay'
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => navigate(project.path)}
              className="group p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-900">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}