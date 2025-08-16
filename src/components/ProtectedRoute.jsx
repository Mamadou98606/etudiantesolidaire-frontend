// INSTRUCTIONS :
// 1. Aller dans le dossier "src/components/"
// 2. Créer un nouveau fichier "ProtectedRoute.jsx"
// 3. Copier tout le contenu ci-dessous dans ce fichier
// 4. Sauvegarder
//
// ========================================

// Composant pour protéger les routes qui nécessitent une authentification
// ProtectedRoute.jsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
  const { isAuthenticated, loading } = useAuth();

  // Afficher un loader pendant la vérification de l'authentification
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Si l'utilisateur n'est pas authentifié, afficher un message
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Accès restreint</h2>
          <p className="text-gray-600 mb-4">Vous devez être connecté pour accéder à cette page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Se connecter
          </button>
        </div>
      </div>
    );
  }

  // Si l'utilisateur est authentifié, afficher le contenu protégé
  return children;
};

export default ProtectedRoute;