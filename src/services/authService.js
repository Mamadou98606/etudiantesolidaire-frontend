// src/services/authService.js
// Utilise la session (cookies). Pas de Bearer token nécessaire.

const API_ROOT = (import.meta.env.VITE_API_BASE_URL ?? 'https://api.etudiantesolidaire.com');
const API_BASE_URL = `${API_ROOT}/api`;

class AuthService {
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user_data') || 'null');
    this.csrfToken = null;
  }

  getHeaders(includeCSRF = false) {
    const headers = { 'Content-Type': 'application/json' };
    if (includeCSRF && this.csrfToken) {
      headers['X-CSRF-Token'] = this.csrfToken;
    }
    return headers;
  }

  async getCsrfToken() {
    try {
      const res = await fetch(`${API_BASE_URL}/csrf-token`, {
        method: 'GET',
        credentials: 'include'
      });
      const data = await res.json();
      if (res.ok && data.csrf_token) {
        this.csrfToken = data.csrf_token;
        return data.csrf_token;
      }
      throw new Error('Impossible de récupérer le token CSRF');
    } catch (error) {
      console.error('Erreur lors de la récupération du token CSRF:', error);
      throw error;
    }
  }

  async register(userData) {
    try {
      // Récupérer le token CSRF
      const csrfToken = await this.getCsrfToken();

      const res = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: this.getHeaders(true),
        credentials: 'include',
        body: JSON.stringify({ ...userData, csrf_token: csrfToken })
      });
      const data = await res.json();

      // Si token CSRF invalide, essayer une nouvelle fois
      if (res.status === 403 && data.error === 'CSRF token invalide') {
        const newToken = await this.getCsrfToken();
        const retryRes = await fetch(`${API_BASE_URL}/register`, {
          method: 'POST',
          headers: this.getHeaders(true),
          credentials: 'include',
          body: JSON.stringify({ ...userData, csrf_token: newToken })
        });
        const retryData = await retryRes.json();
        if (!retryRes.ok) return { success: false, error: retryData.error || "Erreur lors de l'inscription" };

        const user = retryData?.user || null;
        if (user) {
          this.user = user;
          localStorage.setItem('user_data', JSON.stringify(this.user));
        }
        return { success: true, data: retryData };
      }

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
      // Récupérer le token CSRF
      const csrfToken = await this.getCsrfToken();

      const res = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: this.getHeaders(true),
        credentials: 'include',
        body: JSON.stringify({ ...credentials, csrf_token: csrfToken })
      });
      const data = await res.json();

      // Si token CSRF invalide, essayer une nouvelle fois
      if (res.status === 403 && data.error === 'CSRF token invalide') {
        const newToken = await this.getCsrfToken();
        const retryRes = await fetch(`${API_BASE_URL}/login`, {
          method: 'POST',
          headers: this.getHeaders(true),
          credentials: 'include',
          body: JSON.stringify({ ...credentials, csrf_token: newToken })
        });
        const retryData = await retryRes.json();
        if (!retryRes.ok) return { success: false, error: retryData.error || 'Identifiants incorrects' };

        const user = retryData?.user || null;
        if (user) {
          this.user = user;
          localStorage.setItem('user_data', JSON.stringify(this.user));
        }
        return { success: true, data: retryData };
      }

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

  // ============ ÉTAPE 6 : Email Verification ============
  async verifyEmail(token) {
    try {
      const res = await fetch(`${API_BASE_URL}/verify-email/${token}`, {
        method: 'GET',
        credentials: 'include'
      });
      const data = await res.json();

      if (res.ok) {
        const user = data?.user || null;
        if (user) {
          this.user = user;
          localStorage.setItem('user_data', JSON.stringify(this.user));
        }
        return { success: true, data };
      }
      return { success: false, error: data.error || 'Erreur lors de la vérification' };
    } catch (error) {
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }

  async resendVerificationEmail(email) {
    try {
      const res = await fetch(`${API_BASE_URL}/resend-verification-email`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include',
        body: JSON.stringify({ email })
      });
      const data = await res.json();

      if (res.ok) {
        return { success: true, message: data.message };
      }
      return { success: false, error: data.error || 'Erreur lors de l\'envoi' };
    } catch (error) {
      return { success: false, error: 'Erreur de connexion au serveur' };
    }
  }
  // ============ FIN ÉTAPE 6 ============

  // ============ ÉTAPE 7 : Password Reset ============
  async forgotPassword(email) {
    try {
      const res = await fetch(`${API_BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include',
        body: JSON.stringify({ email })
      });
      const data = await res.json();

      if (res.ok) {
        return { success: true, message: data.message };
      }
      throw new Error(data.error || 'Erreur lors de la demande');
    } catch (error) {
      throw new Error(error.message || 'Erreur de connexion au serveur');
    }
  }

  async resetPassword(token, newPassword) {
    try {
      const res = await fetch(`${API_BASE_URL}/reset-password/${token}`, {
        method: 'POST',
        headers: this.getHeaders(),
        credentials: 'include',
        body: JSON.stringify({ new_password: newPassword })
      });
      const data = await res.json();

      if (res.ok) {
        // Mettre à jour les données utilisateur si le mot de passe a été réinitialisé
        if (data.user) {
          this.user = data.user;
          localStorage.setItem('user_data', JSON.stringify(this.user));
        }
        return { success: true, message: data.message };
      }
      throw new Error(data.error || 'Erreur lors de la réinitialisation');
    } catch (error) {
      throw new Error(error.message || 'Erreur de connexion au serveur');
    }
  }
  // ============ FIN ÉTAPE 7 ============

  isAuthenticated() { return this.user !== null; }
  getCurrentUser() { return this.user; }
  updateUserData(userData) {
    this.user = { ...this.user, ...userData };
    localStorage.setItem('user_data', JSON.stringify(this.user));
  }
}

const authService = new AuthService();
export default authService;
