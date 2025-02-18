import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AIPage from './pages/AIPage';
import EdTech from './pages/EntertaimentTech';
import FinTech from './pages/FinTech';
import InfoTech from './pages/InfoTech';
import RideTech from './pages/RideTech';
import MedTech from './pages/MedTech';
import GameTech from './pages/GameTech';
import EntertaimentTech from './pages/EntertaimentTech';
import PropTech from './pages/PropTech';



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
          <Route path="/ai" element={<AIPage />} />
          <Route path="/joskoyegayporno" element={<FinTech />} />
          <Route path="/edtech" element={<EdTech />} />
          <Route path="/entertainment" element={<EntertaimentTech />} />
          <Route path="/infotech" element={<InfoTech />} />
          <Route path="/ridetech" element={<RideTech />} />
          <Route path="/medtech" element={<MedTech />} />
          <Route path="/gametech" element={<GameTech />} />
          <Route path="/proptech" element={<PropTech />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;