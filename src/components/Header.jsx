// ========================================
// FICHIER 6 : src/components/Header.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre Header.jsx actuel (renommez-le Header.jsx.old)
// 2. Remplacer tout le contenu de "src/components/Header.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

// Header.jsx avec gestion de l'authentification
// Remplace le fichier src/components/Header.jsx existant

import React, { useState } from 'react';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';

const Header = ({
  currentView,
  onNavigate,
  isAuthenticated,
  user,
  onLoginClick,
  onLogout,
  onRegisterClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Navigation items
  const navigationItems = [
    { id: 'home', label: 'Accueil', path: 'home' },
    { id: 'qui-sommes-nous', label: 'Qui sommes-nous ?', path: 'qui-sommes-nous' },
    { id: 'orientation', label: 'Orientation', path: 'orientation' },
    { id: 'demarches', label: 'Démarches', path: 'demarches' },
    { id: 'etudes', label: 'Études', path: 'etudes' },
    { id: 'travailler', label: 'Travailler', path: 'travailler' },
    { id: 'vivre-france', label: 'Vivre en France', path: 'vivre-france' },
    { id: 'blog', label: 'Blog', path: 'blog' },
    { id: 'temoignages', label: 'Témoignages', path: 'temoignages' },
    { id: 'prise-rdv', label: 'Prendre RDV', path: 'prise-rdv' }
  ];

  const handleNavClick = (path) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogoutClick = () => {
    onLogout();
    setIsUserMenuOpen(false);
  };

  const handleDashboardClick = () => {
    onNavigate('dashboard');
    setIsUserMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              🎓 Étudiant Solidaire
            </button>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === item.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Section utilisateur */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              // Menu utilisateur connecté
              <div className="relative">
                <button
                  onClick={handleUserMenuToggle}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="hidden sm:block font-medium">
                    {user?.first_name || user?.username || 'Utilisateur'}
                  </span>
                </button>

                {/* Dropdown menu utilisateur */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <button
                      onClick={handleDashboardClick}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Mon espace
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Paramètres
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogoutClick}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Se déconnecter
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Boutons pour utilisateur non connecté
              <div className="hidden sm:flex items-center space-x-2">
                <button
                  onClick={onLoginClick}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Connexion
                </button>
                <button
                  onClick={onRegisterClick}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors"
                >
                  S'inscrire
                </button>
              </div>
            )}

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-2 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentView === item.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Boutons d'authentification mobile */}
              {!isAuthenticated && (
                <div className="pt-2 border-t border-gray-200 space-y-1">
                  <button
                    onClick={() => {
                      onLoginClick();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => {
                      onRegisterClick();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                  >
                    S'inscrire
                  </button>
                </div>
              )}

              {/* Menu utilisateur mobile */}
              {isAuthenticated && (
                <div className="pt-2 border-t border-gray-200 space-y-1">
                  <div className="px-3 py-2 text-sm text-gray-500">
                    Connecté en tant que {user?.first_name || user?.username}
                  </div>
                  <button
                    onClick={() => {
                      handleDashboardClick();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Mon espace
                  </button>
                  <button
                    onClick={() => {
                      handleLogoutClick();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Se déconnecter
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Overlay pour fermer les menus en cliquant à l'extérieur */}
      {(isMenuOpen || isUserMenuOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsMenuOpen(false);
            setIsUserMenuOpen(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;

