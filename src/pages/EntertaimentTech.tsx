import { Film, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AIProjects from '../components/AIProject';


export default function EntertaimentTech() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Film className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-blue-600">EntertaimentTech</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Cutting-edge artificial intelligence solutions for businesses and enterprises.
            </p>
            <AIProjects/>
          </div>
        </div>
      </div>
    </div>
  );
}