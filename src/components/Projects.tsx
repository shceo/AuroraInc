import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Book, Film, Car, Brain, CreditCard, Play } from 'lucide-react';
import Images from './Images'
import '../assets/style/hero.css'

const projects = [
  {
    title: 'FinTech',
    description: 'Innovative financial solutions and digital payment platforms',
    icon: CreditCard,
    path: '/finTech',
    // background: Images.fintech
  },
  {
    title: 'EntertainmentTech',
    description: 'Experience the future of entertainment with immersive streaming services',
    icon: Film,
    path: '/entertainment',
    // background: images.entertainment
  },
  {
    title: 'InfoTech',
    description: 'Innovative cloud-based solutions for digital information management',
    icon: Cloud,
    path: '/infotech',
    // background: images.infotech
  },
  {
    title: 'RideTech',
    description: 'Revolutionizing urban mobility with efficient ride-sharing solutions',
    icon: Car,
    path: '/ridetech',
    // background: images.ridetech
  },
  {
    title: 'MedTech',
    description: 'Innovative medical solutions that enhance patient care and healthcare delivery',
    icon: Brain,
    path: '/medtech',
    // background: images.medtech
  },
  {
    title: 'EdTech',
    description: 'Empowering education with interactive digital learning tools',
    icon: Book,
    path: '/edtech',
    // background: images.edtech
  },
  {
    title: 'GameTech',
    description: 'Innovative gaming solutions and immersive interactive experiences',
    icon: Play,
    path: '/gametech',
    // background: images.gametech
  },
  {
    title: 'Artificial Intelligence',
    description: 'Revolutionizing industries with cutting-edge AI and machine learning technologies',
    icon: Play,
    path: '/ai',
    // background: images.ai
  },
  {
    title: 'PropTech',
    description: 'Innovative solutions for the real estate industry powered by digital technology',
    icon: Play,
    path: '/proptech',
    // background: images.proptech
  },
];



export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold courier-prime-regular text-center mb-12 text-gray-900">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
            key={project.title}
            onClick={() => navigate(project.path)}
            className="group p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            // style={{ backgroundImage: `url(${project.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
          
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl courier-prime-regular font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-900">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}