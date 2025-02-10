import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Music, Film, Car, Brain, CreditCard } from 'lucide-react';

const icons = {
  weather: Cloud,
  music: Music,
  movies: Film,
  taxi: Car,
  ai: Brain,
  pay: CreditCard,
};

export default function ProjectCard({ title, description, type, link }) {
  const Icon = icons[type];

  return (
    <Link 
      to={link}
      className="block bg-blue-300 rounded-xl p-6 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-lg courier-prime-regular font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}