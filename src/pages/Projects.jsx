import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Aurora Weather',
      description: 'Advanced weather forecasting powered by AI',
      type: 'weather',
      link: '/projects/weather'
    },
    {
      title: 'Aurora Music',
      description: 'Next-generation music streaming platform',
      type: 'music',
      link: '/projects/music'
    },
    {
      title: 'Aurora Movies',
      description: 'Personalized streaming experience',
      type: 'movies',
      link: '/projects/movies'
    },
    {
      title: 'Aurora Taxi',
      description: 'Revolutionary ride-sharing service',
      type: 'taxi',
      link: '/projects/taxi'
    },
    {
      title: 'Aurora AI',
      description: 'Cutting-edge artificial intelligence solutions',
      type: 'ai',
      link: '/projects/ai'
    },
    {
      title: 'Aurora Pay',
      description: 'Secure and seamless payment platform',
      type: 'pay',
      link: '/projects/pay'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}