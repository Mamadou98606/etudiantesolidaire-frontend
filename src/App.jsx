import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Authentification
import { AuthProvider } from './contexts/AuthContext';

// Composants existants
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

// Nouveaux composants
import AdminPanel from './components/AdminPanel';
import AuthModal from './components/AuthModal';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css'
import { navigationItems } from './navigation';

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          navigationItems={navigationItems}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          onAuthClick={() => setShowAuthModal(true)}
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
            <Route path="/espace-perso" element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/prendre-rdv" element={<PriseRDV />} />
          </Routes>
        </main>

        {/* Modal d'authentification */}
        {showAuthModal && (
          <AuthModal
            onClose={() => setShowAuthModal(false)}
            onSuccess={() => {
              setShowAuthModal(false);
              setIsAuthenticated(true);
            }}
          />
        )}
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
