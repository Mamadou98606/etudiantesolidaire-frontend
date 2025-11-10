// Contexte d'authentification React pour gérer l'état global de l'utilisateur
// À placer dans src/contexts/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

// Créer le contexte d'authentification
const AuthContext = createContext();

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};

// Provider du contexte d'authentification
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sessionExpiresAt, setSessionExpiresAt] = useState(null);
  const [showExpirationWarning, setShowExpirationWarning] = useState(false);
  const [showEmailVerification, setShowEmailVerification] = useState(false);
  const [pendingVerificationEmail, setPendingVerificationEmail] = useState(null);

  // Vérifier la session au chargement de l'application
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setLoading(true);
        const isValid = await authService.checkSession();

        if (isValid) {
          setUser(authService.getCurrentUser());
          // Session dure 24 heures, donc expirera dans 24h
          const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
          setSessionExpiresAt(expiresAt);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de l\'authentification:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // ============ ÉTAPE 8 : Session Auto-refresh ============
  // Rafraîchir la session toutes les 15 minutes et alerter avant expiration
  useEffect(() => {
    if (!user || !sessionExpiresAt) return;

    const checkSessionStatus = async () => {
      const now = new Date();
      const timeUntilExpiration = sessionExpiresAt - now;
      const fiveMinutesInMs = 5 * 60 * 1000;
      const fifteenMinutesInMs = 15 * 60 * 1000;

      // Si moins de 5 minutes avant expiration, afficher l'avertissement
      if (timeUntilExpiration <= fiveMinutesInMs && timeUntilExpiration > 0) {
        setShowExpirationWarning(true);
      }

      // Si plus de 5 minutes, cacher l'avertissement
      if (timeUntilExpiration > fiveMinutesInMs) {
        setShowExpirationWarning(false);
      }

      // Si la session a expiré, déconnecter l'utilisateur
      if (timeUntilExpiration <= 0) {
        console.warn('Session expirée, déconnexion...');
        setShowExpirationWarning(false);
        await logout();
        return;
      }

      // Si moins de 15 minutes avant expiration, rafraîchir la session
      if (timeUntilExpiration <= fifteenMinutesInMs) {
        console.log('Rafraîchissement de la session...');
        const isValid = await authService.checkSession();
        if (isValid) {
          // Prolonger la session pour 24h de plus
          const newExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
          setSessionExpiresAt(newExpiresAt);
          console.log('Session rafraîchie jusqu\'à:', newExpiresAt);
        }
      }
    };

    // Vérifier le statut toutes les 60 secondes
    const interval = setInterval(checkSessionStatus, 60 * 1000);

    return () => clearInterval(interval);
  }, [user, sessionExpiresAt]);
  // ============ FIN ÉTAPE 8 ============

  // Fonction d'inscription
  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const result = await authService.register(userData);

      if (result.success) {
        setUser(authService.getCurrentUser());
        // Session dure 24 heures
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        setSessionExpiresAt(expiresAt);
        setShowExpirationWarning(false);

        // ============ ÉTAPE 6 : Afficher modal de vérification ============
        if (!authService.getCurrentUser()?.email_verified) {
          setPendingVerificationEmail(authService.getCurrentUser()?.email);
          setShowEmailVerification(true);
        }
        // ============ FIN ÉTAPE 6 ============

        return { success: true, message: 'Inscription réussie ! Veuillez vérifier votre email.' };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      const errorMessage = 'Erreur lors de l\'inscription';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Fonction de connexion
  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);

      const result = await authService.login(credentials);

      if (result.success) {
        setUser(authService.getCurrentUser());
        // Session dure 24 heures
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        setSessionExpiresAt(expiresAt);
        setShowExpirationWarning(false);
        return { success: true, message: 'Connexion réussie !' };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      const errorMessage = 'Erreur lors de la connexion';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Fonction de déconnexion
  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
      setUser(null);
      setError(null);
      setSessionExpiresAt(null);
      setShowExpirationWarning(false);
      return { success: true, message: 'Déconnexion réussie' };
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      // Forcer la déconnexion locale même en cas d'erreur
      setUser(null);
      setError(null);
      setSessionExpiresAt(null);
      setShowExpirationWarning(false);
      return { success: false, error: 'Erreur lors de la déconnexion' };
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour mettre à jour le profil utilisateur
  const updateProfile = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      // Mettre à jour localement d'abord
      authService.updateUserData(userData);
      setUser(authService.getCurrentUser());

      // Ici, vous pourriez ajouter un appel API pour mettre à jour sur le serveur
      // const result = await authService.updateProfile(userData);

      return { success: true, message: 'Profil mis à jour avec succès' };
    } catch (error) {
      const errorMessage = 'Erreur lors de la mise à jour du profil';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour rafraîchir les données utilisateur
  const refreshUser = async () => {
    try {
      const result = await authService.getProfile();
      if (result.success) {
        setUser(authService.getCurrentUser());
        return { success: true };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (error) {
      const errorMessage = 'Erreur lors du rafraîchissement des données';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Fonction pour effacer les erreurs
  const clearError = () => {
    setError(null);
  };

  // Vérifier si l'utilisateur est authentifié
  const isAuthenticated = () => {
    return user !== null;
  };

  // Valeurs du contexte
  const value = {
    // État
    user,
    loading,
    error,
    sessionExpiresAt,
    showExpirationWarning,
    showEmailVerification,
    pendingVerificationEmail,
    isAuthenticated: isAuthenticated(),

    // Actions
    register,
    login,
    logout,
    updateProfile,
    refreshUser,
    clearError,
    setShowEmailVerification
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
