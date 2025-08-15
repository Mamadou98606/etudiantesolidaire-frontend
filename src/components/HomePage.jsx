J’ai ajouté le lien “Changer le mot de passe” dans le menu utilisateur desktop et mobile.
J’ai importé ChangePassword et ajouté la route protégée /changer-mot-de-passe.
Tu peux redeployer le frontend, te connecter, ouvrir le menu, cliquer “Changer le mot de passe”, et tester.

je veux que tu m'ecrive ici je copie colle
Thought for 17s
Voici les deux fichiers complets à copier-coller.

ChangePassword.jsx

import React, { useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword]         = useState('');
  const [confirm, setConfirm]                 = useState('');
  const [message, setMessage]                 = useState('');
  const [submitting, setSubmitting]           = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!currentPassword || !newPassword) {
      setMessage('Veuillez remplir tous les champs');
      return;
    }
    if (newPassword !== confirm) {
      setMessage('Les mots de passe ne correspondent pas');
      return;
    }
    if (newPassword.length < 6) {
      setMessage('Le nouveau mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/change-password`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Mot de passe changé avec succès !');
        setCurrentPassword('');
        setNewPassword('');
        setConfirm('');
      } else {
        setMessage(data.error || 'Erreur lors du changement de mot de passe');
      }
    } catch {
      setMessage('Erreur réseau. Réessayez.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Changer mon mot de passe</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Mot de passe actuel</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e)=>setCurrentPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Votre mot de passe actuel"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Nouveau mot de passe</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Nouveau mot de passe"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Confirmer le nouveau mot de passe</label>
          <input
            type="password"
            value={confirm}
            onChange={(e)=>setConfirm(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Confirmez le nouveau mot de passe"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        >
          {submitting ? 'Veuillez patienter…' : 'Enregistrer'}
        </button>
      </form>
    </div>
  );
}
App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Authentification
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ChangePassword from './components/ChangePassword';

// Composants existants
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

import './App.css';
import { navigationItems } from './navigation';

// Header avec authentification et React Router
const Header = ({ onLoginClick, onRegisterClick }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const handleUserMenuClick = () => {
    setIsUserMenuOpen(false);
    navigate('/espace-perso');
  };

  const handleAdminClick = () => {
    setIsUserMenuOpen(false);
    navigate('/admin');
  };

  // Vérifier si l'utilisateur est admin
  const isAdmin = user && (
    user.role === 'admin' ||
    user.username === 'admin' ||
    user.email?.includes('admin')
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              🎓 Étudiant Solidaire
            </Link>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Accueil
            </Link>
            <Link to="/qui-sommes-nous" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Qui sommes-nous ?
            </Link>
            <Link to="/orientation" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Orientation
            </Link>
            <Link to="/demarches" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Démarches
            </Link>
            <Link to="/etudes" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Études
            </Link>
            <Link to="/travailler" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Travailler
            </Link>
            <Link to="/vivre-en-france" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Vivre en France
            </Link>
            <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Blog
            </Link>
            <Link to="/temoignages" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Témoignages
            </Link>
            <Link to="/prendre-rdv" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Prendre RDV
            </Link>
          </nav>

          {/* Menu mobile toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Section utilisateur desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
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
                  <span className="font-medium">
                    {user?.first_name || user?.username || 'Utilisateur'}
                  </span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                    <button
                      onClick={handleUserMenuClick}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Mon espace
                    </button>

                    <Link
                      to="/changer-mot-de-passe"
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Changer le mot de passe
                    </Link>

                    {isAdmin && (
                      <button
                        onClick={handleAdminClick}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 06 0z" />
                        </svg>
                        Administration
                      </button>
                    )}

                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Se déconnecter
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onLoginClick()}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Connexion
                </button>
                <button
                  onClick={() => onRegisterClick()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors"
                >
                  S'inscrire
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link to="/qui-sommes-nous" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Qui sommes-nous ?
              </Link>
              <Link to="/orientation" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Orientation
              </Link>
              <Link to="/demarches" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Démarches
              </Link>
              <Link to="/etudes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Études
              </Link>
              <Link to="/travailler" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Travailler
              </Link>
              <Link to="/vivre-en-france" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Vivre en France
              </Link>
              <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/temoignages" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Témoignages
              </Link>
              <Link to="/prendre-rdv" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Prendre RDV
              </Link>

              {/* Section utilisateur mobile */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                {isAuthenticated ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm font-medium text-gray-900">
                      Connecté en tant que {user?.first_name || user?.username}
                    </div>
                    <Link to="/espace-perso" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                      Mon espace
                    </Link>
                    <Link
                      to="/changer-mot-de-passe"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Changer le mot de passe
                    </Link>
                    {isAdmin && (
                      <Link to="/admin" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                        Administration
                      </Link>
                    )}
                    <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50 transition-colors">
                      Se déconnecter
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <button onClick={() => { onLoginClick(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50 transition-colors">
                      Connexion
                    </button>
                    <button onClick={() => { onRegisterClick(); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                      S'inscrire
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Composant principal avec routes
const AppContent = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('login');

  const handleLoginClick = () => {
    setAuthModalMode('login');
    setShowAuthModal(true);
  };

  const handleRegisterClick = () => {
    setAuthModalMode('register');
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          onLoginClick={handleLoginClick}
          onRegisterClick={handleRegisterClick}
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
            <Route path="/changer-mot-de-passe" element={
              <ProtectedRoute>
                <ChangePassword />
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
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            mode={authModalMode}
            onSuccess={handleAuthSuccess}
            onSwitchMode={(mode) => setAuthModalMode(mode)}
          />
        )}
      </div>
    </Router>
  );
};

// App principal avec AuthProvider
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
https://github.com/Mamadou98606/etudiantesolidaire-frontend.git
https://github.com/Mamadou98606/etudiantesolidaire-backend.git
lis encore le front et back et dis moi ce que tu en penses et s'il y'a des choses simple que je peux ajouter selon toi, lis tres bien please
Thought for 32s
Voici 2 ajouts faciles et utiles, prêts à copier‑coller: “Modifier mon profil” et “Mes favoris”. Ils utilisent déjà vos routes backend existantes: PUT/GET /api/profile et GET/POST/DELETE /api/bookmarks.

Modifier mon profil Crée le fichier src/components/EditProfile.jsx:
import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function EditProfile() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    nationality: '',
    study_level: '',
    field_of_study: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/profile`, {
          credentials: 'include'
        });
        const data = await res.json();
        if (res.ok) {
          setForm({
            first_name: data.first_name || '',
            last_name: data.last_name || '',
            email: data.email || '',
            nationality: data.nationality || '',
            study_level: data.study_level || '',
            field_of_study: data.field_of_study || ''
          });
        } else {
          setMessage(data.error || 'Erreur de chargement');
        }
      } catch {
        setMessage('Erreur réseau');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/profile`, {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Profil mis à jour avec succès !');
      } else {
        setMessage(data.error || 'Erreur lors de la mise à jour');
      }
    } catch {
      setMessage('Erreur réseau');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6 text-center">Chargement…</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Modifier mon profil</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Prénom</label>
            <input name="first_name" value={form.first_name} onChange={onChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input name="last_name" value={form.last_name} onChange={onChange} className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Nationalité</label>
          <input name="nationality" value={form.nationality} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Niveau d'études</label>
          <input name="study_level" value={form.study_level} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Domaine d'études</label>
          <input name="field_of_study" value={form.field_of_study} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <button type="submit" disabled={saving} className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50">
          {saving ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </form>
    </div>
  );
}
Mes favoris Crée le fichier src/components/Bookmarks.jsx:
import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function Bookmarks() {
  const [items, setItems] = useState([]);
  const [form, setForm]   = useState({ title: '', url: '', category: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks`, { credentials: 'include' });
      const data = await res.json();
      if (res.ok) setItems(data || []);
      else setMessage(data.error || 'Erreur de chargement');
    } catch {
      setMessage('Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const add = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!form.title || !form.url) {
      setMessage('Titre et URL sont requis');
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setForm({ title: '', url: '', category: '' });
        load();
      } else {
        setMessage(data.error || 'Erreur lors de l’ajout');
      }
    } catch {
      setMessage('Erreur réseau');
    }
  };

  const remove = async (id) => {
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        setItems(prev => prev.filter(i => i.id !== id));
      } else {
        setMessage('Erreur lors de la suppression');
      }
    } catch {
      setMessage('Erreur réseau');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Mes favoris</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={add} className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <input className="border rounded px-3 py-2" placeholder="Titre" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
        <input className="border rounded px-3 py-2" placeholder="URL (https://…)" value={form.url} onChange={e=>setForm({...form, url:e.target.value})}/>
        <input className="border rounded px-3 py-2" placeholder="Catégorie (optionnel)" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}/>
        <button type="submit" className="md:col-span-3 bg-blue-600 text-white py-2 rounded">Ajouter</button>
      </form>

      {loading ? (
        <div className="text-center">Chargement…</div>
      ) : items.length === 0 ? (
        <div className="text-gray-600">Aucun favori pour le moment</div>
      ) : (
        <div className="space-y-3">
          {items.map(b => (
            <div key={b.id} className="border rounded p-3 flex items-start justify-between">
              <div>
                <div className="font-semibold">{b.title}</div>
                <a href={b.url} target="_blank" rel="noreferrer" className="text-blue-600 text-sm break-all">{b.url}</a>
                {b.category && <div className="text-xs text-gray-500 mt-1">Catégorie: {b.category}</div>}
              </div>
              <button onClick={() => remove(b.id)} className="text-red-600 text-sm hover:underline">Supprimer</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
App.jsx — ajoute les routes + liens menus
Ajoute en haut:
import EditProfile from './components/EditProfile';
import Bookmarks from './components/Bookmarks';
Ajoute ces routes dans <Routes>:
<Route
  path="/modifier-profil"
  element={
    <ProtectedRoute>
      <EditProfile />
    </ProtectedRoute>
  }
/>
<Route
  path="/mes-favoris"
  element={
    <ProtectedRoute>
      <Bookmarks />
    </ProtectedRoute>
  }
/>
Menu utilisateur Desktop (dans le dropdown, après “Mon espace”, avant “Administration”):
<Link
  to="/modifier-profil"
  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
  onClick={() => setIsUserMenuOpen(false)}
>
  Modifier mon profil
</Link>
<Link
  to="/mes-favoris"
  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
  onClick={() => setIsUserMenuOpen(false)}
>
  Mes favoris
</Link>
Menu utilisateur Mobile (dans la section utilisateur, après “Mon espace”, avant “Administration”):
<Link
  to="/modifier-profil"
  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
  onClick={() => setIsMenuOpen(false)}
>
  Modifier mon profil
</Link>
<Link
  to="/mes-favoris"
  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
  onClick={() => setIsMenuOpen(false)}
>
  Mes favoris
</Link>
Test
Déploie le frontend.
Connecte-toi.
Menu utilisateur:
“Modifier mon profil” -> modifie et enregistre (email, prénom…).
“Mes favoris” -> ajoute un lien, supprime un lien.
donnes les codes à copier coller pour chanque modif pas àa pas 
Thought for 16s
Étape 1 — Créer le fichier EditProfile.jsx
Chemin: src/components/EditProfile.jsx

import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function EditProfile() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    nationality: '',
    study_level: '',
    field_of_study: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/profile`, { credentials: 'include' });
        const data = await res.json();
        if (res.ok) {
          setForm({
            first_name: data.first_name || '',
            last_name: data.last_name || '',
            email: data.email || '',
            nationality: data.nationality || '',
            study_level: data.study_level || '',
            field_of_study: data.field_of_study || ''
          });
        } else {
          setMessage(data.error || 'Erreur de chargement');
        }
      } catch {
        setMessage('Erreur réseau');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/profile`, {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Profil mis à jour avec succès !');
      } else {
        setMessage(data.error || 'Erreur lors de la mise à jour');
      }
    } catch {
      setMessage('Erreur réseau');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6 text-center">Chargement…</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Modifier mon profil</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Prénom</label>
            <input name="first_name" value={form.first_name} onChange={onChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input name="last_name" value={form.last_name} onChange={onChange} className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Nationalité</label>
          <input name="nationality" value={form.nationality} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Niveau d'études</label>
          <input name="study_level" value={form.study_level} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Domaine d'études</label>
          <input name="field_of_study" value={form.field_of_study} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <button type="submit" disabled={saving} className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50">
          {saving ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </form>
    </div>
  );
}
Étape 2 — Créer le fichier Bookmarks.jsx
Chemin: src/components/Bookmarks.jsx

import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function Bookmarks() {
  const [items, setItems] = useState([]);
  const [form, setForm]   = useState({ title: '', url: '', category: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks`, { credentials: 'include' });
      const data = await res.json();
      if (res.ok) setItems(data || []);
      else setMessage(data.error || 'Erreur de chargement');
    } catch {
      setMessage('Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const add = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!form.title || !form.url) {
      setMessage('Titre et URL sont requis');
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setForm({ title: '', url: '', category: '' });
        load();
      } else {
        setMessage(data.error || 'Erreur lors de l’ajout');
      }
    } catch {
      setMessage('Erreur réseau');
    }
  };

  const remove = async (id) => {
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        setItems(prev => prev.filter(i => i.id !== id));
      } else {
        setMessage('Erreur lors de la suppression');
      }
    } catch {
      setMessage('Erreur réseau');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Mes favoris</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={add} className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <input className="border rounded px-3 py-2" placeholder="Titre" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
        <input className="border rounded px-3 py-2" placeholder="URL (https://…)" value={form.url} onChange={e=>setForm({...form, url:e.target.value})}/>
        <input className="border rounded px-3 py-2" placeholder="Catégorie (optionnel)" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}/>
        <button type="submit" className="md:col-span-3 bg-blue-600 text-white py-2 rounded">Ajouter</button>
      </form>

      {loading ? (
        <div className="text-center">Chargement…</div>
      ) : items.length === 0 ? (
        <div className="text-gray-600">Aucun favori pour le moment</div>
      ) : (
        <div className="space-y-3">
          {items.map(b => (
            <div key={b.id} className="border rounded p-3 flex items-start justify-between">
              <div>
                <div className="font-semibold">{b.title}</div>
                <a href={b.url} target="_blank" rel="noreferrer" className="text-blue-600 text-sm break-all">{b.url}</a>
                {b.category && <div className="text-xs text-gray-500 mt-1">Catégorie: {b.category}</div>}
              </div>
              <button onClick={() => remove(b.id)} className="text-red-600 text-sm hover:underline">Supprimer</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
Étape 3 — App.jsx (ajouts à faire)
Imports (en haut du fichier)
import EditProfile from './components/EditProfile';
import Bookmarks from './components/Bookmarks';
Routes (dans <Routes> … </Routes>)
<Route
  path="/modifier-profil"
  element={
    <ProtectedRoute>
      <EditProfile />
    </ProtectedRoute>
  }
/>

<Route
  path="/mes-favoris"
  element={
    <ProtectedRoute>
      <Bookmarks />
    </ProtectedRoute>
  }
/>
Menu utilisateur Desktop (dans le dropdown, après “Mon espace”, avant “Administration”)
<Link
  to="/modifier-profil"
  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
  onClick={() => setIsUserMenuOpen(false)}
>
  Modifier mon profil
</Link>
<Link
  to="/mes-favoris"
  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
  onClick={() => setIsUserMenuOpen(false)}
>
  Mes favoris
</Link>
Menu utilisateur Mobile (après “Mon espace”, avant “Administration”)
<Link
  to="/modifier-profil"
  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
  onClick={() => setIsMenuOpen(false)}
>
  Modifier mon profil
</Link>
<Link
  to="/mes-favoris"
  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
  onClick={() => setIsMenuOpen(false)}
>
  Mes favoris
</Link>
Copie-colle ces blocs exactement aux emplacements indiqués, redéploie le frontend, puis teste: “Modifier mon profil” et “Mes favoris”.

ça fonctionne. et dautres fonctionalité facile 
Thought for 48s
Voici 3 petites fonctionnalités simples à ajouter, avec tout le code à copier-coller.

Étape 1 — “Mes notes” (stockées dans ta BDD via /api/progress) Crée le fichier: src/components/Notes.jsx

import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function Notes() {
  const [items, setItems] = useState([]);
  const [form, setForm]   = useState({
    category: '',
    step: '',
    completed: false,
    notes: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = ['Démarches', 'Études', 'Vie en France', 'Autre'];

  const load = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/progress`, { credentials: 'include' });
      const data = await res.json();
      if (res.ok) setItems(Array.isArray(data) ? data : []);
      else setMessage(data.error || 'Erreur de chargement');
    } catch {
      setMessage('Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!form.category || !form.step) {
      setMessage('Catégorie et Étape sont requis');
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/progress`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setForm({ category: '', step: '', completed: false, notes: '' });
        load();
      } else {
        setMessage(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch {
      setMessage('Erreur réseau');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Mes notes</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <div>
          <label className="block text-sm mb-1">Catégorie</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={form.category}
            onChange={(e)=>setForm({...form, category:e.target.value})}
          >
            <option value="">— Choisir —</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Étape / Titre</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={form.step}
            onChange={(e)=>setForm({...form, step:e.target.value})}
            placeholder="Ex: Ouvrir un compte bancaire"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Notes (facultatif)</label>
          <textarea
            className="w-full border rounded px-3 py-2"
            rows={3}
            value={form.notes}
            onChange={(e)=>setForm({...form, notes:e.target.value})}
            placeholder="Ajoute un commentaire personnel…"
          />
        </div>

        <label className="flex items-center gap-2 md:col-span-2 text-sm">
          <input
            type="checkbox"
            checked={form.completed}
            onChange={(e)=>setForm({...form, completed:e.target.checked})}
          />
          Marquer comme terminé
        </label>

        <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-2 rounded">
          Enregistrer
        </button>
      </form>

      {loading ? (
        <div className="text-center">Chargement…</div>
      ) : items.length === 0 ? (
        <div className="text-gray-600">Aucune note pour le moment</div>
      ) : (
        <div className="space-y-3">
          {items.map(p => (
            <div key={p.id} className="border rounded p-3">
              <div className="text-sm text-gray-500">{p.category} · {p.completed ? 'Terminé' : 'En cours'}</div>
              <div className="font-semibold">{p.step}</div>
              {p.notes && <div className="text-sm mt-1">{p.notes}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
Étape 2 — “Page 404” Crée le fichier: src/components/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-3xl font-bold mb-2">Page introuvable</h1>
        <p className="text-gray-600 mb-6">La page que vous cherchez n’existe pas.</p>
        <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">Retour à l’accueil</Link>
      </div>
    </div>
  );
}
Étape 3 — “FAQ” Crée le fichier: src/components/FAQ.jsx

import React from 'react';

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>

      <details className="mb-4">
        <summary className="cursor-pointer font-semibold">Comment créer un compte ?</summary>
        <p className="mt-2 text-gray-700">Cliquez sur “S’inscrire” en haut à droite et remplissez le formulaire.</p>
      </details>

      <details className="mb-4">
        <summary className="cursor-pointer font-semibold">Je n’arrive pas à me connecter</summary>
        <p className="mt-2 text-gray-700">Assurez-vous d’être sur le bon site. Si besoin, réinitialisez votre mot de passe.</p>
      </details>

      <details className="mb-4">
        <summary className="cursor-pointer font-semibold">Comment contacter l’équipe ?</summary>
        <p className="mt-2 text-gray-700">Envoyez un email à contact@etudiantesolidaire.com.</p>
      </details>
    </div>
  );
}
Étape 4 — App.jsx (ajouts à faire)

Imports (ajoute en haut)
import Notes from './components/Notes';
import NotFound from './components/NotFound';
import FAQ from './components/FAQ';
Routes (colle dans <Routes>)
<Route
  path="/mes-notes"
  element={
    <ProtectedRoute>
      <Notes />
    </ProtectedRoute>
  }
/>

<Route path="/faq" element={<FAQ />} />

<Route path="*" element={<NotFound />} />
Lien FAQ dans le menu principal (desktop et mobile)
Desktop (dans le bloc <nav>):
<Link to="/faq" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
  FAQ
</Link>
Mobile (dans la liste sous Accueil/Orientation/etc.):
<Link to="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
  FAQ
</Link>
Lien “Mes notes” dans le menu utilisateur (desktop et mobile)
Desktop (menu avatar, après “Mon espace”):
<Link
  to="/mes-notes"
  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
  onClick={() => setIsUserMenuOpen(false)}
>
  Mes notes
</Link>
Mobile (section utilisateur, après “Mon espace”):
<Link
  to="/mes-notes"
  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
  onClick={() => setIsMenuOpen(false)}
>
  Mes notes
</Link>
Déploie le frontend, connecte-toi et vérifie:

FAQ accessible depuis le menu.
“Mes notes” accessible depuis le menu utilisateur, sauvegarde en base Render (GET/POST /api/progress).
404 s’affiche pour une URL inconnue.
d'autres fonctionnamité aussi pour le bien des usezrs 
Thought for 40s
Voici 2 fonctionnalités simples, avec tout le code à copier‑coller.

Page Contact (sans backend, via Formspree ou mailto) Crée le fichier: src/components/Contact.jsx
import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = ''; // ex: 'https://formspree.io/f/abcdefg' (laisse vide pour utiliser mailto)
const CONTACT_EMAIL = 'contact@etudiantesolidaire.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    if (!form.name || !form.email || !form.message) {
      setStatus('Veuillez remplir les champs requis.');
      return;
    }
    // Si Formspree configuré
    if (FORMSPREE_ENDPOINT) {
      try {
        setSending(true);
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(Object.assign(document.createElement('form'), { elements: [
            Object.assign(document.createElement('input'), { name: 'name', value: form.name }),
            Object.assign(document.createElement('input'), { name: 'email', value: form.email }),
            Object.assign(document.createElement('input'), { name: 'subject', value: form.subject }),
            Object.assign(document.createElement('textarea'), { name: 'message', value: form.message })
          ] }))
        });
        if (res.ok) {
          setStatus('Message envoyé, merci !');
          setForm({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('Erreur lors de l’envoi.');
        }
      } catch {
        setStatus('Erreur réseau.');
      } finally {
        setSending(false);
      }
      return;
    }
    // Fallback mailto
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject || 'Contact')}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Nous contacter</h1>
      {status && <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">{status}</div>}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Nom (requis)</label>
          <input name="name" value={form.name} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email (requis)</label>
          <input type="email" name="email" value={form.email} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Sujet</label>
          <input name="subject" value={form.subject} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message (requis)</label>
          <textarea name="message" rows={5} value={form.message} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" disabled={sending} className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50">
          {sending ? 'Envoi…' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
}
Télécharger mes données (profil + favoris + notes) Crée le fichier: src/components/DownloadMyData.jsx
import React, { useState } from 'react';
const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function DownloadMyData() {
  const [status, setStatus] = useState('');
  const [downloading, setDownloading] = useState(false);

  const download = async () => {
    setStatus('');
    setDownloading(true);
    try {
      const [pRes, bRes, gRes] = await Promise.all([
        fetch(`${API_BASE_URL}/profile`, { credentials: 'include' }),
        fetch(`${API_BASE_URL}/bookmarks`, { credentials: 'include' }),
        fetch(`${API_BASE_URL}/progress`, { credentials: 'include' })
      ]);
      const profile   = await pRes.json();
      const bookmarks = bRes.ok ? await bRes.json() : [];
      const progress  = gRes.ok ? await gRes.json() : [];
      if (!pRes.ok) { setStatus(profile.error || 'Non authentifié'); setDownloading(false); return; }
      const data = {
        exportedAt: new Date().toISOString(),
        profile,
        bookmarks: Array.isArray(bookmarks) ? bookmarks : [],
        progress: Array.isArray(progress) ? progress : []
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `mes_donnees_${new Date().toISOString().split('T')[0]}.json`; a.click();
      URL.revokeObjectURL(url);
      setStatus('Fichier téléchargé.');
    } catch {
      setStatus('Erreur réseau.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Télécharger mes données</h1>
      {status && <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">{status}</div>}
      <button onClick={download} disabled={downloading} className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50">
        {downloading ? 'Préparation…' : 'Télécharger en JSON'}
      </button>
    </div>
  );
}
App.jsx — imports à ajouter (en haut)
import Contact from './components/Contact';
import DownloadMyData from './components/DownloadMyData';
App.jsx — routes à ajouter (dans <Routes>)
<Route path="/contact" element={<Contact />} />

<Route
  path="/telecharger-mes-donnees"
  element={
    <ProtectedRoute>
      <DownloadMyData />
    </ProtectedRoute>
  }
/>
App.jsx — liens menus (desktop et mobile)
Ajoute “Contact” dans la nav principale (desktop):
<Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
  Contact
</Link>
Ajoute “Contact” dans le menu mobile (avec les autres liens), avec onClick={() => setIsMenuOpen(false)}.

Ajoute “Télécharger mes données” dans le menu utilisateur desktop (après “Mon espace”):

<Link
  to="/telecharger-mes-donnees"
  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
  onClick={() => setIsUserMenuOpen(false)}
>
  Télécharger mes données
</Link>
Ajoute le même lien dans le menu utilisateur mobile (dans la section utilisateur), avec onClick={() => setIsMenuOpen(false)}.
Test
Déploie le front.
Ouvre “Contact” (essaie mailto, ou configure Formspree et remplace FORMSPREE_ENDPOINT).
Connecte-toi, puis “Télécharger mes données” → un fichier JSON se télécharge.
sur la page d'accueil, dans nos services pour votre reussite, dans voir plus il y'a rien, tu peux me mettre des chose ? pourque quand je clique sur voir plus je lise du contenu 
ensavoir plus 
Read HomePage.jsx and thought for 40s
Voici le fichier complet à copier-coller pour src/components/HomePage.jsx. Il ajoute “En savoir plus” cliquable sur chaque carte service et affiche du contenu détaillé directement dans la carte. Clique à nouveau pour “Réduire”.

// ========================================
// FICHIER ADAPTÉ : src/components/HomePage.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre HomePage.jsx actuel (renommez-le HomePage.jsx.old)
// 2. Remplacer tout le contenu de "src/components/HomePage.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

export default function HomePage({ onNavigate }) {
  const { user, isAuthenticated } = useAuth();
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Orientation",
      description: "Trouvez votre voie parmi les formations françaises",
      icon: BookOpen,
      features: ["BTS", "Licence", "Master", "CAP", "Titre professionnel"],
      path: "orientation",
      details: [
        "• Choisir son diplôme: comprendre les différences entre BTS, Licence et Master.",
        "• Construire un dossier: CV, lettre de motivation, relevés de notes.",
        "• Calendrier Parcoursup et candidatures directes.",
        "• Conseils pour optimiser vos chances d’admission."
      ],
      cta: "Découvrir l’orientation"
    },
    {
      title: "Démarches administratives",
      description: "Simplifiez vos démarches visa et titre de séjour",
      icon: CheckCircle,
      features: ["Visa étudiant", "Titre de séjour", "Autorisation de travail"],
      path: "demarches",
      details: [
        "• Visa long séjour (VLS-TS): étapes, pièces, RDV.",
        "• Titre de séjour étudiant: renouvellement, délais, obligations.",
        "• Autorisation de travail: combien d’heures ? Comment déclarer ?",
        "• Conseils pratiques pour éviter les refus et retards."
      ],
      cta: "Voir les démarches"
    },
    {
      title: "Vie étudiante",
      description: "Tout pour réussir votre intégration en France",
      icon: Globe,
      features: ["Logement", "Santé", "Transport", "Culture"],
      path: "vivre-france",
      details: [
        "• Se loger: CROUS, résidences, annonces, garants.",
        "• Se soigner: Sécurité sociale, mutuelle, médecin traitant.",
        "• Se déplacer: cartes de transport, bons plans mobilité.",
        "• S’intégrer: associations, évènements, culture et loisirs."
      ],
      cta: "Préparer ma vie en France"
    },
    {
      title: "Emploi",
      description: "Préparez votre insertion professionnelle",
      icon: Users,
      features: ["Jobs étudiants", "Stages", "CDI/CDD", "Changement de statut"],
      path: "travailler",
      details: [
        "• Trouver un job étudiant: CV, sites, réseaux.",
        "• Stages: conventions, rémunération, droits.",
        "• Candidatures pro: CV français, lettre, entretien.",
        "• Après le diplôme: changement de statut étudiant → salarié."
      ],
      cta: "Trouver un job/stage"
    },
  ];

  const stats = [
    { number: "50,000+", label: "Étudiants accompagnés" },
    { number: "200+", label: "Formations référencées" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "24/7", label: "Support disponible" },
  ];

  const recentNews = [
    {
      title: "Nouvelles dates Parcoursup 2024",
      date: "15 janvier 2024",
      category: "Orientation",
      excerpt: "Découvrez les dates importantes pour vos candidatures...",
    },
    {
      title: "Changements visa étudiant",
      date: "10 janvier 2024",
      category: "Démarches",
      excerpt: "Les nouvelles procédures pour obtenir votre visa...",
    },
    {
      title: "Aides au logement étudiant",
      date: "8 janvier 2024",
      category: "Vie étudiante",
      excerpt: "Toutes les aides disponibles pour votre logement...",
    },
  ];

  const handleServiceClick = (path) => {
    if (onNavigate) onNavigate(path);
  };

  const handleDashboardClick = () => {
    if (onNavigate) onNavigate('dashboard');
  };

  const handleBlogClick = () => {
    if (onNavigate) onNavigate('blog');
  };

  const toggleDetails = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary">Plateforme officielle</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Votre parcours d'étudiant étranger en France
              <span className="text-blue-600"> simplifié</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De l'orientation aux démarches administratives, en passant par la vie étudiante et l'emploi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}>
                {isAuthenticated ? 'Mon espace personnel' : 'Commencer mon parcours'}
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleServiceClick('orientation')}>
                <Calendar className="mr-2 h-5 w-5" />
                Calendrier des échéances
              </Button>
            </div>
            {isAuthenticated && user && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  👋 Bonjour {user.first_name || user.username} ! Bienvenue sur votre plateforme.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder pour l'image hero */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-700 font-semibold">Votre réussite commence ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Nos services pour votre réussite</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour vous accompagner dans toutes les étapes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>

                  {/* En savoir plus : toggle de contenu */}
                  <div
                    className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center cursor-pointer select-none"
                    onClick={() => toggleDetails(i)}
                    role="button"
                    aria-expanded={openIndex === i}
                  >
                    {openIndex === i ? 'Réduire' : 'En savoir plus'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>

                  {openIndex === i && (
                    <div className="mt-4 text-sm text-gray-700 space-y-2">
                      {service.details.map((line, k) => (
                        <p key={k}>{line}</p>
                      ))}
                      <div className="pt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleServiceClick(service.path)}
                        >
                          {service.cta}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">À la une</h2>
              <p className="text-xl text-muted-foreground">
                Restez informé des dernières actualités
              </p>
            </div>
            <Button variant="outline" onClick={handleBlogClick}>
              Voir toutes les actualités
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={handleBlogClick}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre parcours ?</h2>
            <p className="text-xl mb-8 opacity-90">
              {isAuthenticated
                ? "Accédez à votre espace personnel et découvrez tous nos outils"
                : "Créez votre espace personnel et accédez à tous nos outils"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}
              >
                {isAuthenticated ? 'Mon espace personnel' : 'Créer mon compte'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleServiceClick('orientation')}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
home page actuelle
// ========================================
// FICHIER ADAPTÉ : src/components/HomePage.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre HomePage.jsx actuel (renommez-le HomePage.jsx.old)
// 2. Remplacer tout le contenu de "src/components/HomePage.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

export default function HomePage({ onNavigate }) {
  const { user, isAuthenticated } = useAuth();

  const services = [
    {
      title: "Orientation",
      description: "Trouvez votre voie parmi les formations françaises",
      icon: BookOpen,
      features: ["BTS", "Licence", "Master", "CAP", "Titre professionnel"],
      path: "orientation"
    },
    {
      title: "Démarches administratives",
      description: "Simplifiez vos démarches visa et titre de séjour",
      icon: CheckCircle,
      features: ["Visa étudiant", "Titre de séjour", "Autorisation de travail"],
      path: "demarches"
    },
    {
      title: "Vie étudiante",
      description: "Tout pour réussir votre intégration en France",
      icon: Globe,
      features: ["Logement", "Santé", "Transport", "Culture"],
      path: "vivre-france"
    },
    {
      title: "Emploi",
      description: "Préparez votre insertion professionnelle",
      icon: Users,
      features: ["Jobs étudiants", "Stages", "CDI/CDD", "Changement de statut"],
      path: "travailler"
    },
  ];

  const stats = [
    { number: "50,000+", label: "Étudiants accompagnés" },
    { number: "200+", label: "Formations référencées" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "24/7", label: "Support disponible" },
  ];

  const recentNews = [
    {
      title: "Nouvelles dates Parcoursup 2024",
      date: "15 janvier 2024",
      category: "Orientation",
      excerpt: "Découvrez les dates importantes pour vos candidatures...",
    },
    {
      title: "Changements visa étudiant",
      date: "10 janvier 2024",
      category: "Démarches",
      excerpt: "Les nouvelles procédures pour obtenir votre visa...",
    },
    {
      title: "Aides au logement étudiant",
      date: "8 janvier 2024",
      category: "Vie étudiante",
      excerpt: "Toutes les aides disponibles pour votre logement...",
    },
  ];

  const handleServiceClick = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleDashboardClick = () => {
    if (onNavigate) {
      onNavigate('dashboard');
    }
  };

  const handleBlogClick = () => {
    if (onNavigate) {
      onNavigate('blog');
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary">Plateforme officielle</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Votre parcours d'étudiant étranger en France
              <span className="text-blue-600"> simplifié</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De l'orientation aux démarches administratives, en passant par la vie étudiante et l'emploi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}>
                {isAuthenticated ? 'Mon espace personnel' : 'Commencer mon parcours'}
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleServiceClick('orientation')}>
                <Calendar className="mr-2 h-5 w-5" />
                Calendrier des échéances
              </Button>
            </div>
            {isAuthenticated && user && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  👋 Bonjour {user.first_name || user.username} ! Bienvenue sur votre plateforme.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder pour l'image hero */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-700 font-semibold">Votre réussite commence ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Nos services pour votre réussite</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour vous accompagner dans toutes les étapes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition cursor-pointer"
                onClick={() => handleServiceClick(service.path)}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                  <div className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center">
                    En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">À la une</h2>
              <p className="text-xl text-muted-foreground">
                Restez informé des dernières actualités
              </p>
            </div>
            <Button variant="outline" onClick={handleBlogClick}>
              Voir toutes les actualités
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={handleBlogClick}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre parcours ?</h2>
            <p className="text-xl mb-8 opacity-90">
              {isAuthenticated
                ? "Accédez à votre espace personnel et découvrez tous nos outils"
                : "Créez votre espace personnel et accédez à tous nos outils"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}
              >
                {isAuthenticated ? 'Mon espace personnel' : 'Créer mon compte'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleServiceClick('orientation')}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} ecrit ce que je dois copier coller
Thought for 26s
Copie-colle tout ce fichier dans src/components/HomePage.jsx (il ajoute “En savoir plus” qui ouvre du contenu détaillé dans chaque carte, et “Réduire” pour refermer):

// ========================================
// FICHIER ADAPTÉ : src/components/HomePage.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre HomePage.jsx actuel (renommez-le HomePage.jsx.old)
// 2. Remplacer tout le contenu de "src/components/HomePage.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

export default function HomePage({ onNavigate }) {
  const { user, isAuthenticated } = useAuth();
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Orientation",
      description: "Trouvez votre voie parmi les formations françaises",
      icon: BookOpen,
      features: ["BTS", "Licence", "Master", "CAP", "Titre professionnel"],
      path: "orientation",
      details: [
        "• Choisir son diplôme: comprendre les différences entre BTS, Licence et Master.",
        "• Construire un dossier: CV, lettre de motivation, relevés de notes.",
        "• Calendrier Parcoursup et candidatures directes.",
        "• Conseils pour optimiser vos chances d’admission."
      ],
      cta: "Découvrir l’orientation"
    },
    {
      title: "Démarches administratives",
      description: "Simplifiez vos démarches visa et titre de séjour",
      icon: CheckCircle,
      features: ["Visa étudiant", "Titre de séjour", "Autorisation de travail"],
      path: "demarches",
      details: [
        "• Visa long séjour (VLS-TS): étapes, pièces, RDV.",
        "• Titre de séjour étudiant: renouvellement, délais, obligations.",
        "• Autorisation de travail: combien d’heures ? Comment déclarer ?",
        "• Conseils pratiques pour éviter les refus et retards."
      ],
      cta: "Voir les démarches"
    },
    {
      title: "Vie étudiante",
      description: "Tout pour réussir votre intégration en France",
      icon: Globe,
      features: ["Logement", "Santé", "Transport", "Culture"],
      path: "vivre-france",
      details: [
        "• Se loger: CROUS, résidences, annonces, garants.",
        "• Se soigner: Sécurité sociale, mutuelle, médecin traitant.",
        "• Se déplacer: cartes de transport, bons plans mobilité.",
        "• S’intégrer: associations, évènements, culture et loisirs."
      ],
      cta: "Préparer ma vie en France"
    },
    {
      title: "Emploi",
      description: "Préparez votre insertion professionnelle",
      icon: Users,
      features: ["Jobs étudiants", "Stages", "CDI/CDD", "Changement de statut"],
      path: "travailler",
      details: [
        "• Trouver un job étudiant: CV, sites, réseaux.",
        "• Stages: conventions, rémunération, droits.",
        "• Candidatures pro: CV français, lettre, entretien.",
        "• Après le diplôme: changement de statut étudiant → salarié."
      ],
      cta: "Trouver un job/stage"
    },
  ];

  const stats = [
    { number: "50,000+", label: "Étudiants accompagnés" },
    { number: "200+", label: "Formations référencées" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "24/7", label: "Support disponible" },
  ];

  const recentNews = [
    {
      title: "Nouvelles dates Parcoursup 2024",
      date: "15 janvier 2024",
      category: "Orientation",
      excerpt: "Découvrez les dates importantes pour vos candidatures...",
    },
    {
      title: "Changements visa étudiant",
      date: "10 janvier 2024",
      category: "Démarches",
      excerpt: "Les nouvelles procédures pour obtenir votre visa...",
    },
    {
      title: "Aides au logement étudiant",
      date: "8 janvier 2024",
      category: "Vie étudiante",
      excerpt: "Toutes les aides disponibles pour votre logement...",
    },
  ];

  const handleServiceClick = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleDashboardClick = () => {
    if (onNavigate) {
      onNavigate('dashboard');
    }
  };

  const handleBlogClick = () => {
    if (onNavigate) {
      onNavigate('blog');
    }
  };

  const toggleDetails = (i, e) => {
    e.stopPropagation(); // évite de déclencher la navigation de la carte
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <div>
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary">Plateforme officielle</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Votre parcours d'étudiant étranger en France
              <span className="text-blue-600"> simplifié</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De l'orientation aux démarches administratives, en passant par la vie étudiante et l'emploi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}>
                {isAuthenticated ? 'Mon espace personnel' : 'Commencer mon parcours'}
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleServiceClick('orientation')}>
                <Calendar className="mr-2 h-5 w-5" />
                Calendrier des échéances
              </Button>
            </div>
            {isAuthenticated && user && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  👋 Bonjour {user.first_name || user.username} ! Bienvenue sur votre plateforme.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder pour l'image hero */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-700 font-semibold">Votre réussite commence ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Nos services pour votre réussite</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour vous accompagner dans toutes les étapes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition cursor-pointer"
                onClick={() => handleServiceClick(service.path)}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((f, idx) => (
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>

                  {/* En savoir plus : toggle de contenu */}
                  <div
                    className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center select-none"
                    onClick={(e) => toggleDetails(i, e)}
                    role="button"
                    aria-expanded={openIndex === i}
                  >
                    {openIndex === i ? 'Réduire' : 'En savoir plus'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>

                  {openIndex === i && (
                    <div className="mt-4 text-sm text-gray-700 space-y-2">
                      {service.details.map((line, k) => (
                        <p key={k}>{line}</p>
                      ))}
                      <div className="pt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleServiceClick(service.path)}
                        >
                          {service.cta}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">À la une</h2>
              <p className="text-xl text-muted-foreground">
                Restez informé des dernières actualités
              </p>
            </div>
            <Button variant="outline" onClick={handleBlogClick}>
              Voir toutes les actualités
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={handleBlogClick}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre parcours ?</h2>
            <p className="text-xl mb-8 opacity-90">
              {isAuthenticated
                ? "Accédez à votre espace personnel et découvrez tous nos outils"
                : "Créez votre espace personnel et accédez à tous nos outils"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}
              >
                {isAuthenticated ? 'Mon espace personnel' : 'Créer mon compte'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleServiceClick('orientation')}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
