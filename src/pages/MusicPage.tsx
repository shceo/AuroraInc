import React from 'react';
import { Music, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MusicPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Music className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl font-bold text-blue-600">Aurora Music</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Next-generation music streaming platform with personalized recommendations and high-quality audio.
            </p>

            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li>AI-powered music recommendations</li>
              <li>High-fidelity audio streaming</li>
              <li>Collaborative playlists</li>
              <li>Offline listening</li>
              <li>Cross-platform synchronization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}