import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import ProgressBar from '../components/ProgressBar';

export default function Future() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
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
          Back to Home
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <h1 className="text-4xl sm:text-3xl xs:text-2xl font-bold text-blue-600">Future Plans</h1>
          </div>
          <h1 className="text-xl font-bold mb-5 text-blue-500">What percentage of the project is complete?</h1>
        <ProgressBar value={5} />

          <div className="prose max-w-none">
            <p className="text-md text-gray-600 mt-10 mb-3"></p>
          </div>
        </div>
      </div>
    </div>
  );
}