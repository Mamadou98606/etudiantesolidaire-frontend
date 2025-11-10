import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import authService from '../services/authService';

export const EmailVerificationModal = ({ userEmail, onClose, onVerified }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const handleResendEmail = async () => {
    try {
      setResendLoading(true);
      setError('');
      setResendSuccess(false);

      const result = await authService.resendVerificationEmail(userEmail);

      if (result.success) {
        setResendSuccess(true);
        setTimeout(() => setResendSuccess(false), 5000);
      } else {
        setError(result.error || 'Erreur lors de l\'envoi de l\'email');
      }
    } catch (err) {
      setError('Erreur lors de l\'envoi de l\'email');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Mail className="text-blue-600" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Vérifiez votre email</h2>
        </div>

        {/* Message */}
        <div className="mb-6">
          <p className="text-gray-600 text-center mb-4">
            Nous avons envoyé un lien de vérification à <strong>{userEmail}</strong>
          </p>
          <p className="text-gray-500 text-sm text-center">
            Cliquez sur le lien dans l'email pour activer votre compte. Le lien est valide pendant 24 heures.
          </p>
        </div>

        {/* Erreur */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 rounded-lg flex items-start gap-2">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Succès */}
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 rounded-lg flex items-start gap-2">
            <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-green-700 text-sm">Email vérifié avec succès !</p>
          </div>
        )}

        {/* Resend Success */}
        {resendSuccess && (
          <div className="mb-4 p-3 bg-blue-100 border border-blue-400 rounded-lg">
            <p className="text-blue-700 text-sm">✅ Email de vérification renvoyé ! Vérifiez votre boîte de réception.</p>
          </div>
        )}

        {/* Boutons */}
        <div className="space-y-3">
          <button
            onClick={handleResendEmail}
            disabled={resendLoading}
            className="w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {resendLoading ? 'Envoi en cours...' : 'Renvoyer l\'email'}
          </button>

          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          >
            Fermer
          </button>
        </div>

        {/* Aide */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-sm mb-2"><strong>N'avez pas reçu l'email ?</strong></p>
          <ul className="text-gray-600 text-xs space-y-1">
            <li>• Vérifiez votre dossier spam</li>
            <li>• Attendre quelques minutes</li>
            <li>• Utiliser le bouton "Renvoyer l'email" ci-dessus</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationModal;
