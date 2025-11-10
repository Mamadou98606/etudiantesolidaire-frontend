import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Lock, CheckCircle, AlertCircle } from 'lucide-react';
import authService from '../services/authService';
import '../styles/AuthModal.css';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!token) {
      setError('Token manquant. Lien invalide.');
    }
  }, [token]);

  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      digit: /\d/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password),
    };
    return validations;
  };

  const passwordValidations = validatePassword(newPassword);
  const isPasswordValid = Object.values(passwordValidations).every(v => v === true);
  const passwordsMatch = newPassword && confirmPassword && newPassword === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!newPassword || !confirmPassword) {
        setError('Veuillez remplir tous les champs');
        setLoading(false);
        return;
      }

      if (!isPasswordValid) {
        setError('Le mot de passe ne respecte pas les critères de sécurité');
        setLoading(false);
        return;
      }

      if (!passwordsMatch) {
        setError('Les mots de passe ne correspondent pas');
        setLoading(false);
        return;
      }

      if (!token) {
        setError('Token invalide ou manquant');
        setLoading(false);
        return;
      }

      await authService.resetPassword(token, newPassword);
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-modal-overlay">
        <div className="auth-modal">
          <div className="auth-header">
            <button
              onClick={() => navigate('/')}
              className="auth-close-btn"
              title="Fermer"
            >
              ×
            </button>
          </div>

          <div className="auth-content">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <CheckCircle style={{ width: '60px', height: '60px', color: '#4CAF50', margin: '0 auto 20px' }} />
              <h2 style={{ color: '#333', marginBottom: '10px' }}>Mot de passe réinitialisé ! ✅</h2>
              <p style={{ color: '#666', fontSize: '14px' }}>
                Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.
              </p>
            </div>

            <button
              onClick={() => navigate('/')}
              className="auth-submit-btn"
              style={{ marginTop: '20px' }}
            >
              Aller à la connexion
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="auth-modal-overlay">
        <div className="auth-modal">
          <div className="auth-header">
            <button
              onClick={() => navigate('/')}
              className="auth-close-btn"
              title="Fermer"
            >
              ×
            </button>
          </div>

          <div className="auth-content">
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <AlertCircle style={{ width: '60px', height: '60px', color: '#ff6b6b', margin: '0 auto 20px' }} />
              <h2 style={{ color: '#333', marginBottom: '10px' }}>Lien invalide ❌</h2>
              <p style={{ color: '#666', fontSize: '14px' }}>
                Le lien de réinitialisation est manquant ou invalide.
              </p>
            </div>

            <button
              onClick={() => navigate('/')}
              className="auth-submit-btn"
              style={{ marginTop: '20px' }}
            >
              Demander un nouveau lien
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
            title="Fermer"
          >
            ×
          </button>
        </div>

        <div className="auth-content">
          <h2 style={{ marginBottom: '10px', color: '#333' }}>Réinitialiser votre mot de passe 🔐</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '25px' }}>
            Entrez votre nouveau mot de passe ci-dessous.
          </p>

          {error && (
            <div className="auth-error" style={{ marginBottom: '15px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Nouveau mot de passe */}
            <div className="auth-input-group">
              <label htmlFor="new-password" className="auth-label">Nouveau mot de passe</label>
              <div style={{ position: 'relative' }}>
                <Lock style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '18px',
                  height: '18px',
                  color: '#999'
                }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="new-password"
                  placeholder="••••••••"
                  className="auth-input"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setError('');
                  }}
                  disabled={loading}
                  style={{ paddingLeft: '40px', paddingRight: '40px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="auth-show-password-btn"
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>

              {/* Critères de sécurité */}
              <div style={{ marginTop: '12px', fontSize: '12px', color: '#666' }}>
                <div style={{ marginBottom: '6px' }}>
                  <span style={{ color: passwordValidations.length ? '#4CAF50' : '#999' }}>
                    ✓ Au moins 8 caractères
                  </span>
                </div>
                <div style={{ marginBottom: '6px' }}>
                  <span style={{ color: passwordValidations.uppercase ? '#4CAF50' : '#999' }}>
                    ✓ Au moins 1 majuscule
                  </span>
                </div>
                <div style={{ marginBottom: '6px' }}>
                  <span style={{ color: passwordValidations.digit ? '#4CAF50' : '#999' }}>
                    ✓ Au moins 1 chiffre
                  </span>
                </div>
                <div>
                  <span style={{ color: passwordValidations.special ? '#4CAF50' : '#999' }}>
                    ✓ Au moins 1 caractère spécial (!@#$%^&* etc)
                  </span>
                </div>
              </div>
            </div>

            {/* Confirmer le mot de passe */}
            <div className="auth-input-group" style={{ marginTop: '20px' }}>
              <label htmlFor="confirm-password" className="auth-label">Confirmer le mot de passe</label>
              <div style={{ position: 'relative' }}>
                <Lock style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '18px',
                  height: '18px',
                  color: '#999'
                }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirm-password"
                  placeholder="••••••••"
                  className="auth-input"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError('');
                  }}
                  disabled={loading}
                  style={{ paddingLeft: '40px' }}
                />
              </div>
              {confirmPassword && !passwordsMatch && (
                <div style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '5px' }}>
                  ✗ Les mots de passe ne correspondent pas
                </div>
              )}
              {confirmPassword && passwordsMatch && (
                <div style={{ color: '#4CAF50', fontSize: '12px', marginTop: '5px' }}>
                  ✓ Les mots de passe correspondent
                </div>
              )}
            </div>

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={loading || !isPasswordValid || !passwordsMatch}
              style={{ marginTop: '25px' }}
            >
              {loading ? 'Réinitialisation en cours...' : 'Réinitialiser le mot de passe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
