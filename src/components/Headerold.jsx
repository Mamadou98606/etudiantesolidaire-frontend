import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function Header({ navigationItems, isAuthenticated, setIsAuthenticated }) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' ou 'register'

  const openLogin = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const openRegister = () => {
    setAuthMode('register');
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Ici tu peux ajouter la déconnexion serveur si besoin
  };

  const onAuthSuccess = (user) => {
    setIsAuthenticated(true);
    setAuthModalOpen(false);
    // Tu peux stocker les infos utilisateur si nécessaire
  };

  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between shadow">
      <Link to="/" className="text-xl font-bold">Etudiant Solidaire</Link>

      <nav className="flex gap-4">
        {navigationItems.map(item => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              isActive ? 'font-bold text-secondary' : 'hover:text-secondary'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link to="/espace-perso" className="font-medium">Mon Espace</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <button
              onClick={openRegister}
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            >
              Créer un compte
            </button>
            <button
              onClick={openLogin}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Connexion
            </button>
          </>
        )}
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={onAuthSuccess}
        initialMode={authMode}
      />
    </header>
  );
}
