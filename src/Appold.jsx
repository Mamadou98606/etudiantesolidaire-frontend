import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import QuiSommesNous from './components/QuiSommesNous';
import Orientation from './components/Orientation';
import Demarches from './components/Demarches';
import Etudes from './components/Etudes';
import Travailler from './components/Travailler';
import VivreFrance from './components/VivreFrance';
import UserDashboard from './components/UserDashboard';
import Blog from './components/Blog';
import Temoignages from './components/Temoignages';
import PriseRDV from './components/PriseRDV';
import './App.css'
import { navigationItems } from './navigation';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          navigationItems={navigationItems}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/orientation" element={<Orientation />} />
            <Route path="/demarches" element={<Demarches />} />
            <Route path="/etudes" element={<Etudes />} />
            <Route path="/travailler" element={<Travailler />} />
            <Route path="/vivre-en-france" element={<VivreFrance />} />
            <Route path="/espace-perso" element={<UserDashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/prendre-rdv" element={<PriseRDV />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
