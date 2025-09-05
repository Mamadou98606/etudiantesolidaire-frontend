// src/services/authService.js
// Utilise la session (cookies). Pas de Bearer token nécessaire.

const API_ROOT = (import.meta.env.VITE_API_BASE_URL ?? 'https://api.etudiantesolidaire.com');
const API_BASE_URL = `${API_ROOT}/api`;

class AuthService {
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user_data') || 'null');
  }

  getHeaders() {
    return { 'Content-Type': 'application/json' };
  }

  async register(userData) {
    try {
      const res = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include',
        body: JSON.stringify(userData)
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || "Erreur lors de l'inscription" };

      const user = data?.user || null;
      if (user) {
        this.user = user;
        localStorage.setItem('user_data', JSON.stringify(this.user));
      }
      return { success: true, data };
    } catch {
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }

  async login(credentials) {
    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include',
        body: JSON.stringify(credentials)
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error || 'Identifiants incorrects' };

      const user = data?.user || null;
      if (user) {
        this.user = user;
        localStorage.setItem('user_data', JSON.stringify(this.user));
      }
      return { success: true, data };
    } catch {
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }

  async logout() {
    try {
      await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include'
      });
    } finally {
      this.user = null;
      localStorage.removeItem('user_data');
      return { success: true };
    }
  }

  async getProfile() {
    try {
      const res = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        headers: this.getHeaders(),
        credentials: 'include'
      });
      const data = await res.json();

      if (res.ok && data && typeof data === 'object') {
        const user = data?.user ?? data;
        this.user = user;
        localStorage.setItem('user_data', JSON.stringify(this.user));
        return { success: true, data: user };
      }

      if (res.status === 401) {
        await this.logout();
      }
      return { success: false, error: data.error || 'Erreur lors de la récupération du profil' };
    } catch {
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }

  async checkSession() {
    const res = await fetch(`${API_BASE_URL}/check-auth`, {
      credentials: 'include'
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.authenticated) {
      if (data.user) {
        this.user = data.user;
        localStorage.setItem('user_data', JSON.stringify(this.user));
      }
      return true;
    }
    return false;
  }

  isAuthenticated() { return this.user !== null; }
  getCurrentUser() { return this.user; }
  updateUserData(userData) {
    this.user = { ...this.user, ...userData };
    localStorage.setItem('user_data', JSON.stringify(this.user));
  }
}

const authService = new AuthService();
export default authService;
