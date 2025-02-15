import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import MusicPage from './pages/MusicPage';
import MoviesPage from './pages/MoviesPage';
import TaxiPage from './pages/TaxiPage';
import AIPage from './pages/AIPage';
import PayPage from './pages/PayPage';
import Mission from './pages/Mission';
import Future from './pages/Future';
import Principles from './pages/Principles';

import './assets/style/font.css'
function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/taxi" element={<TaxiPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/pay" element={<PayPage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/future" element={<Future />} />
          <Route path="/principles" element={<Principles />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;