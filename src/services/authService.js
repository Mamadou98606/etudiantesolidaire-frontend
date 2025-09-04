// ========================================
// FICHIER 1 : src/services/authService.js
// ========================================
//
// INSTRUCTIONS :
// 1. Créer le dossier "services" dans "src" si pas encore fait
// 2. Créer un nouveau fichier "authService.js" dans "src/services/"
// 3. Copier tout le contenu ci-dessous dans ce fichier
// 4. Sauvegarder
//
// ========================================

// Service d'authentification pour connecter le frontend au backend
// authService.js

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

class AuthService {
  constructor() {
    this.token = localStorage.getItem('auth_token');
    this.user = JSON.parse(localStorage.getItem('user_data') || 'null');
  }

  // Configuration des headers pour les requêtes API
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  // Inscription d'un nouvel utilisateur
  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include', // Pour les cookies de session
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        // Succès de l'inscription
        if (data.user) {
          this.user = data.user;
          localStorage.setItem('user_data', JSON.stringify(data.user));
        }
        return { success: true, data };
      } else {
        // Erreur d'inscription
        return { success: false, error: data.error || 'Erreur lors de l\'inscription' };
      }
    } catch (error) {
      console.error('Erreur réseau lors de l\'inscription:', error);
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }

  // Connexion d'un utilisateur existant
  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include', // Pour les cookies de session
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.ok) {
        // Succès de la connexion
        if (data.user) {
          this.user = data.user;
          localStorage.setItem('user_data', JSON.stringify(data.user));
        }
        return { success: true, data };
      } else {
        // Erreur de connexion
        return { success: false, error: data.error || 'Identifiants incorrects' };
      }
    } catch (error) {
      console.error('Erreur réseau lors de la connexion:', error);
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }

  // Déconnexion de l'utilisateur
  async logout() {
    try {
      const response = await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include'
      });

      // Nettoyer les données locales même si la requête échoue
      this.token = null;
      this.user = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');

      if (response.ok) {
        return { success: true };
      } else {
        return { success: false, error: 'Erreur lors de la déconnexion' };
      }
    } catch (error) {
      console.error('Erreur réseau lors de la déconnexion:', error);
      // Nettoyer quand même les données locales
      this.token = null;
      this.user = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_data');
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }

  // Récupérer le profil utilisateur
  async getProfile() {
    try {
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        headers: this.getHeaders(),
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        this.user = data.user;
        localStorage.setItem('user_data', JSON.stringify(data.user));
        return { success: true, data };
      } else {
        // Si non authentifié, nettoyer les données locales
        if (response.status === 401) {
          this.logout();
        }
        return { success: false, error: data.error || 'Erreur lors de la récupération du profil' };
      }
    } catch (error) {
      console.error('Erreur réseau lors de la récupération du profil:', error);
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }

  // Vérifier si l'utilisateur est connecté
  isAuthenticated() {
    return this.user !== null;
  }

  // Obtenir les données de l'utilisateur actuel
  getCurrentUser() {
    return this.user;
  }

  // Mettre à jour les données utilisateur localement
  updateUserData(userData) {
    this.user = { ...this.user, ...userData };
    localStorage.setItem('user_data', JSON.stringify(this.user));
  }

  // Vérifier la validité de la session au démarrage de l'app
  async checkSession() {
    if (this.user) {
      // Vérifier si la session est toujours valide
      const result = await this.getProfile();
      return result.success;
    }
    return false;
  }
}

// Créer une instance unique du service
const authService = new AuthService();

export default authService;
