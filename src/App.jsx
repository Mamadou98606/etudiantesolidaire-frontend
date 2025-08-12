// ========================================
// FICHIER 4 : src/App.jsx (REMPLACEMENT)
// ========================================
// 
// INSTRUCTIONS :
// 1. SAUVEGARDER votre App.jsx actuel (renommez-le App.jsx.old)
// 2. Remplacer tout le contenu de "src/App.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

import React, { useState } from 'react';
import './App.css';

// Import des contextes
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Import des composants existants
import QuiSommesNous from './components/QuiSommesNous.jsx';
import Orientation from './components/Orientation.jsx';
import Demarches from './components/Demarches.jsx';
import Etudes from './components/Etudes.jsx';
import Travailler from './components/Travailler.jsx';
import VivreFrance from './components/VivreFrance.jsx';
import AuthModal from './components/AuthModal.jsx';
import UserDashboard from './components/UserDashboard.jsx';

// Import des nouveaux composants
import HomePage from './components/HomePage.jsx';
import Blog from './components/Blog.jsx';
import Temoignages from './components/Temoignages.jsx';
import PriseRDV from './components/PriseRDV.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Composant Header avec authentification
const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              🎓 Étudiant Solidaire
            </div>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Les liens de navigation seront gérés par le composant parent */}
          </nav>

          {/* Section utilisateur */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              // Menu utilisateur connecté
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {user?.first_name?.[0] || user?.username?.[0] || 'U'}
                    </span>
                  </div>
                  <span className="hidden sm:block font-medium">
                    {user?.first_name || user?.username || 'Utilisateur'}
                  </span>
                </button>

                {/* Dropdown menu utilisateur */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={() => {
                        // Navigation vers dashboard sera gérée par le parent
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Mon espace
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Se déconnecter
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Boutons pour utilisateur non connecté - gérés par le parent
              <div className="hidden sm:flex items-center space-x-2">
                {/* Les boutons seront ajoutés par le composant parent */}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Composant principal de l'application avec authentification
const AppContent = () => {
  const { isAuthenticated, user } = useAuth();
  const [currentView, setCurrentView] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');

  // Navigation
  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  // Gestion des modals d'authentification
  const handleLoginClick = () => {
    if (isAuthenticated) {
      setCurrentView('dashboard');
    } else {
      setAuthModalMode('login');
      setIsAuthModalOpen(true);
    }
  };

  const handleRegisterClick = () => {
    setAuthModalMode('register');
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    setCurrentView('dashboard');
  };

  // Rendu du contenu selon la vue actuelle
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      case 'qui-sommes-nous':
        return <QuiSommesNous />;
      case 'orientation':
        return <Orientation />;
      case 'demarches':
        return <Demarches />;
      case 'etudes':
        return <Etudes />;
      case 'travailler':
        return <Travailler />;
      case 'vivre-france':
        return <VivreFrance />;
      case 'blog':
        return <Blog />;
      case 'temoignages':
        return <Temoignages />;
      case 'prise-rdv':
        return <PriseRDV />;
      case 'dashboard':
        return (
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        );
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavigation('home')}
                className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                🎓 Étudiant Solidaire
              </button>
            </div>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => handleNavigation('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'home'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Accueil
              </button>
              <button
                onClick={() => handleNavigation('qui-sommes-nous')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'qui-sommes-nous'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Qui sommes-nous ?
              </button>
              <button
                onClick={() => handleNavigation('orientation')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'orientation'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Orientation
              </button>
              <button
                onClick={() => handleNavigation('demarches')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'demarches'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Démarches
              </button>
              <button
                onClick={() => handleNavigation('etudes')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'etudes'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Études
              </button>
              <button
                onClick={() => handleNavigation('travailler')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'travailler'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Travailler
              </button>
              <button
                onClick={() => handleNavigation('vivre-france')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'vivre-france'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Vivre en France
              </button>
              <button
                onClick={() => handleNavigation('blog')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'blog'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Blog
              </button>
              <button
                onClick={() => handleNavigation('temoignages')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'temoignages'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Témoignages
              </button>
              <button
                onClick={() => handleNavigation('prise-rdv')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'prise-rdv'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Prendre RDV
              </button>
            </nav>

            {/* Section utilisateur */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                // Menu utilisateur connecté
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleNavigation('dashboard')}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {user?.first_name?.[0] || user?.username?.[0] || 'U'}
                      </span>
                    </div>
                    <span className="hidden sm:block font-medium">
                      {user?.first_name || user?.username || 'Utilisateur'}
                    </span>
                  </button>
                </div>
              ) : (
                // Boutons pour utilisateur non connecté
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLoginClick}
                    className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Connexion
                  </button>
                  <button
                    onClick={handleRegisterClick}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors"
                  >
                    S'inscrire
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main>
        {renderContent()}
      </main>

      {/* Modal d'authentification */}
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          mode={authModalMode}
          onSuccess={handleAuthSuccess}
          onSwitchMode={(mode) => setAuthModalMode(mode)}
        />
      )}
    </div>
  );
};

// Composant App principal avec AuthProvider
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

