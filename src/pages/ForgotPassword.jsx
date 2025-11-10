import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import authService from '../services/authService';
import '../styles/AuthModal.css';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!email.trim()) {
        setError('Veuillez entrer votre email');
        setLoading(false);
        return;
      }

      await authService.forgotPassword(email);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="auth-modal-overlay">
        <div className="auth-modal">
          <div className="auth-header">
            <button 
              onClick={() => navigate('/')}
              className="auth-close-btn"
              title="Retour"
            >
              ×
            </button>
          </div>

          <div className="auth-content">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <CheckCircle style={{ width: '60px', height: '60px', color: '#4CAF50', margin: '0 auto 20px' }} />
              <h2 style={{ color: '#333', marginBottom: '10px' }}>Email envoyé ! ✅</h2>
              <p style={{ color: '#666', fontSize: '14px' }}>
                Si un compte avec cet email existe, vous recevrez un lien de réinitialisation dans quelques instants.
              </p>
            </div>

            <div style={{ 
              backgroundColor: '#f0f8ff', 
              padding: '15px', 
              borderRadius: '8px', 
              marginBottom: '20px',
              fontSize: '13px',
              color: '#666'
            }}>
              <strong>💡 Conseil :</strong> Vérifiez votre dossier spam si vous ne recevez rien dans 5 minutes.
            </div>

            <button
              onClick={() => navigate('/')}
              className="auth-submit-btn"
              style={{ marginTop: '20px' }}
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <div className="auth-header">
          <button 
            onClick={() => navigate('/')}
            className="auth-close-btn"
            title="Retour"
          >
            ×
          </button>
        </div>

        <div className="auth-content">
          <h2 style={{ marginBottom: '10px', color: '#333' }}>Mot de passe oublié ? 🔐</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '25px' }}>
            Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
          </p>

          {error && (
            <div className="auth-error" style={{ marginBottom: '15px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="auth-input-group">
              <label htmlFor="email" className="auth-label">Email</label>
              <div style={{ position: 'relative' }}>
                <Mail style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  width: '18px',
                  height: '18px',
                  color: '#999'
                }} />
                <input
                  type="email"
                  id="email"
                  placeholder="votre.email@example.com"
                  className="auth-input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  disabled={loading}
                  style={{ paddingLeft: '40px' }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading}
              style={{ marginTop: '20px' }}
            >
              {loading ? 'Envoi en cours...' : 'Envoyer le lien'}
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
            <button
              onClick={() => navigate('/')}
              className="auth-link-btn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#0066cc', fontSize: '14px' }}
            >
              <ArrowLeft style={{ width: '16px', height: '16px' }} />
              Retour à la connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
