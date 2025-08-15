
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Authentification
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import Bookmarks from './components/Bookmarks';

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

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p>© {year} Étudiant Solidaire. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <a href="/mentions-legales" className="hover:text-blue-600">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-blue-600">Confidentialité</a>
          <a href="/cgu" className="hover:text-blue-600">CGU</a>
        </div>
      </div>
    </footer>
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
              <Route path="/mes-favoris" element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            } />
              <Route path="/modifier-profil" element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/prendre-rdv" element={<PriseRDV />} />
          </Routes>
        </main>
        <Footer />

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
Après collage, lancez: npm run dev.
et ça 
Ajoutez l’appel du footer après la fermeture de <main> dans AppContent. Remplacez ce bloc:
</main>

{/* Modal d'authentification */}
par ceci:

</main>
<Footer />

{/* Modal d'authentification */}
Thought for 39s
Oui. Remplacez exactement ce bloc:

</main>

{/* Modal d'authentification */}
par celui-ci:

</main>
<Footer />

{/* Modal d'authentification */}
Assurez-vous d’avoir bien ajouté plus haut dans le fichier le composant Footer que je vous ai donné. Si vous avez déjà collé l’intégralité de src/App.jsx fournie, c’est déjà en place.

selon toi je peux ajouter quo encore sur mon sie facile a mettre en place
Thought for 152s
5 choses faciles à ajouter (avec code prêt à copier-coller)
Option 1: Bouton “Retour en haut”
Option 2: Remonter en haut après chaque changement de page
Option 3: Bannière cookies (RGPD light)
Option 4: Page 404 (quand l’URL n’existe pas)
Option 5: Bouton WhatsApp flottant
Bonus: Balises SEO à mettre dans index.html
Copiez-collez les codes ci-dessous dans src/App.jsx (tous ces petits composants peuvent être collés sous le Header ou sous le Footer dans le même fichier). Puis ajoutez la ligne d’utilisation indiquée pour chacun.

Option 1 — Bouton “Retour en haut”
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-4 z-40 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors p-3"
      aria-label="Retour en haut"
      title="Retour en haut"
    >
      ↑
    </button>
  );
};
Utilisation (dans AppContent, juste après </main> et avant <Footer />):
</main>
<BackToTopButton />
<Footer />
Option 2 — Remonter en haut après chaque changement de page
Modifiez la ligne d’import en haut du fichier pour ajouter useLocation:
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
Collez ce composant:
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};
Utilisation (dans AppContent, juste après <Router>):
<Router>
  <ScrollToTop />
  <div className="flex flex-col min-h-screen">
    {/* ... */}
Option 3 — Bannière cookies
const CookieBanner = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsentES');
    if (!consent) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-3 items-center justify-between text-sm">
        <p className="text-gray-700">
          Nous utilisons des cookies pour améliorer votre expérience.
        </p>
        <div className="flex gap-2">
          <a href="/confidentialite" className="px-3 py-2 text-gray-600 hover:text-blue-600">En savoir plus</a>
          <button
            onClick={() => { localStorage.setItem('cookieConsentES', 'true'); setShow(false); }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            J’accepte
          </button>
        </div>
      </div>
    </div>
  );
};
Utilisation (dans AppContent, tout en bas, juste avant </div> qui ferme le conteneur principal):
<CookieBanner />
</div>
Option 4 — Page 404
const NotFound = () => (
  <div className="max-w-3xl mx-auto py-16 px-4 text-center">
    <h1 className="text-3xl font-bold mb-2">Page introuvable</h1>
    <p className="text-gray-600 mb-6">La page que vous cherchez n’existe pas.</p>
    <Link to="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
      Retour à l’accueil
    </Link>
  </div>
);
Utilisation (dans la liste des Routes, ajoutez la ligne tout à la fin):
<Route path="*" element={<NotFound />} />
Option 5 — Bouton WhatsApp flottant
const WhatsAppButton = () => (
  <a
    href="https://wa.me/33600000000" // Remplacez par votre numéro (format international sans +)
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg px-4 py-3"
    aria-label="WhatsApp"
    title="Discuter sur WhatsApp"
  >
    WhatsApp
  </a>
);
Utilisation (dans AppContent, tout en bas, avant <Footer /> ou après, au choix):
<WhatsAppButton />
<Footer />
Bonus — SEO rapide (dans index.html, entre <head> et </head>)
<meta name="description" content="Plateforme d'information et d'orientation pour étudiants étrangers : démarches, études, travail, vie en France.">
<meta property="og:title" content="Étudiant Solidaire">
<meta property="og:description" content="Aide et orientation pour étudiants étrangers.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://votre-domaine.fr">
<meta property="og:image" content="/og-image.png">
<meta name="twitter:card" content="summary_large_image">
Remplacez https://votre-domaine.fr et /og-image.png par vos valeurs.
J’ai proposé 5 ajouts très simples avec code prêt à coller dans src/App.jsx + un bonus SEO à coller dans index.html. Vous pouvez en mettre 1, plusieurs, ou tous.
donne le code complet pour ça je vais copier coller 
Option 1 — Bouton “Retour en haut”
Thought for 74s
Code complet à copier-coller (Bouton “Retour en haut” uniquement)
Remplacez tout le contenu de src/App.jsx par ceci:

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Authentification
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import Bookmarks from './components/Bookmarks';

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

// Bouton “Retour en haut”
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-4 z-40 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors p-3"
      aria-label="Retour en haut"
      title="Retour en haut"
    >
      ↑
    </button>
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
              <Route path="/mes-favoris" element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            } />
              <Route path="/modifier-profil" element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/prendre-rdv" element={<PriseRDV />} />
          </Routes>
        </main>

        <BackToTopButton />

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
Ensuite lancez: npm run dev
Le bouton apparaît dès que vous descendez d’environ 400px, et remonte la page en douceur.
le  ode pour ça aussi 
Option 2 — Remonter en haut après chaque changement de page
Modifiez la ligne d’import en haut du fichier pour ajouter useLocation:
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
Collez ce composant:
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};
Utilisation (dans AppContent, juste après <Router>):
<Router>
  <ScrollToTop />
  <div className="flex flex-col min-h-screen">
    {/* ... */} et ça 
Option 3 — Bannière cookies
const CookieBanner = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsentES');
    if (!consent) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-3 items-center justify-between text-sm">
        <p className="text-gray-700">
          Nous utilisons des cookies pour améliorer votre expérience.
        </p>
        <div className="flex gap-2">
          <a href="/confidentialite" className="px-3 py-2 text-gray-600 hover:text-blue-600">En savoir plus</a>
          <button
            onClick={() => { localStorage.setItem('cookieConsentES', 'true'); setShow(false); }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            J’accepte
          </button>
        </div>
      </div>
    </div>
  );
};
Utilisation (dans AppContent, tout en bas, juste avant </div> qui ferme le conteneur principal):
<CookieBanner />
</div>
tu as enlevé le copyright ajoute le aussi 
Thought for 48s
Voici le fichier complet à coller dans src/App.jsx avec:

ScrollToTop (remonte en haut à chaque changement de page)
CookieBanner (bannière cookies)
Footer avec copyright
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// Authentification
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import Bookmarks from './components/Bookmarks';

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

// Footer avec copyright
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p>© {year} Étudiant Solidaire. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <a href="/mentions-legales" className="hover:text-blue-600">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-blue-600">Confidentialité</a>
          <a href="/cgu" className="hover:text-blue-600">CGU</a>
        </div>
      </div>
    </footer>
  );
};

// Remonter en haut à chaque changement de page
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Bannière cookies
const CookieBanner = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsentES');
    if (!consent) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-3 items-center justify-between text-sm">
        <p className="text-gray-700">
          Nous utilisons des cookies pour améliorer votre expérience.
        </p>
        <div className="flex gap-2">
          <a href="/confidentialite" className="px-3 py-2 text-gray-600 hover:text-blue-600">En savoir plus</a>
          <button
            onClick={() => { localStorage.setItem('cookieConsentES', 'true'); setShow(false); }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            J’accepte
          </button>
        </div>
      </div>
    </div>
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
      <ScrollToTop />
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
              <Route path="/mes-favoris" element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            } />
              <Route path="/modifier-profil" element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/prendre-rdv" element={<PriseRDV />} />
          </Routes>
        </main>

        <Footer />

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

        <CookieBanner />
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
Lancez: npm run dev
Le footer affiche “© YEAR Étudiant Solidaire. Tous droits réservés.”
Le scroll remonte en haut à chaque navigation.
La bannière cookies s’affiche tant que l’utilisateur n’a pas accepté.
je n'ai plus ça Le scroll remonte en haut à chaque navigation.
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// Authentification
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import Bookmarks from './components/Bookmarks';

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

// Footer avec copyright
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p>© {year} Étudiant Solidaire. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <a href="/mentions-legales" className="hover:text-blue-600">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-blue-600">Confidentialité</a>
          <a href="/cgu" className="hover:text-blue-600">CGU</a>
        </div>
      </div>
    </footer>
  );
};

// Remonter en haut à chaque changement de page
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Bannière cookies
const CookieBanner = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsentES');
    if (!consent) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-3 items-center justify-between text-sm">
        <p className="text-gray-700">
          Nous utilisons des cookies pour améliorer votre expérience.
        </p>
        <div className="flex gap-2">
          <a href="/confidentialite" className="px-3 py-2 text-gray-600 hover:text-blue-600">En savoir plus</a>
          <button
            onClick={() => { localStorage.setItem('cookieConsentES', 'true'); setShow(false); }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            J’accepte
          </button>
        </div>
      </div>
    </div>
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
      <ScrollToTop />
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
              <Route path="/mes-favoris" element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            } />
              <Route path="/modifier-profil" element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/prendre-rdv" element={<PriseRDV />} />
          </Routes>
        </main>

        <Footer />

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

        <CookieBanner />
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
Thought for 83s
Copiez-collez ces 3 blocs pour réactiver le “scroll en haut” à chaque navigation
Remplacez votre ligne d’import react-router-dom par celle-ci:
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
Collez ce composant n’importe où dans src/App.jsx (par exemple juste en dessous du Header):
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};
Utilisation: dans AppContent, ajoutez <ScrollToTop /> juste après <Router>:
return (
  <Router>
    <ScrollToTop />
    <div className="flex flex-col min-h-screen">
      {/* ... le reste inchangé ... */}
Enregistrez, relancez: npm run dev.

Si vous avez déjà le Footer et la bannière cookies, laissez-les, ça ne change rien.

Résultat: à chaque changement de page, la page remonte automatiquement en haut.

Ajouts faits: import useLocation, composant ScrollToTop, appel juste après <Router>.

mets le code 
Thought for 35s
Remplacez tout le contenu de src/App.jsx par ceci:

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// Authentification
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import Bookmarks from './components/Bookmarks';

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

// Footer avec copyright
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600">
        <p>© {year} Étudiant Solidaire. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          <a href="/mentions-legales" className="hover:text-blue-600">Mentions légales</a>
          <a href="/confidentialite" className="hover:text-blue-600">Confidentialité</a>
          <a href="/cgu" className="hover:text-blue-600">CGU</a>
        </div>
      </div>
    </footer>
  );
};

// Remonter en haut à chaque changement de page
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Bannière cookies
const CookieBanner = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookieConsentES');
    if (!consent) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-3 items-center justify-between text-sm">
        <p className="text-gray-700">
          Nous utilisons des cookies pour améliorer votre expérience.
        </p>
        <div className="flex gap-2">
          <a href="/confidentialite" className="px-3 py-2 text-gray-600 hover:text-blue-600">En savoir plus</a>
          <button
            onClick={() => { localStorage.setItem('cookieConsentES', 'true'); setShow(false); }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            J’accepte
          </button>
        </div>
      </div>
    </div>
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
      <ScrollToTop />
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
              <Route path="/mes-favoris" element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            } />
              <Route path="/modifier-profil" element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/prendre-rdv" element={<PriseRDV />} />
          </Routes>
        </main>

        <Footer />

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

        <CookieBanner />
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
