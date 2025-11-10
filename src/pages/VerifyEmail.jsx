import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import authService from '../services/authService';

export const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('Vérification en cours...');
  const [error, setError] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = searchParams.get('token');

        if (!token) {
          setStatus('error');
          setError('Token de vérification manquant');
          return;
        }

        // Appeler l'API pour vérifier l'email
        const result = await authService.verifyEmail(token);

        if (result.success) {
          setStatus('success');
          setMessage('🎉 Votre email a été vérifié avec succès !');
          
          // Rediriger vers la page d'accueil après 3 secondes
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          setStatus('error');
          setError(result.error || 'Erreur lors de la vérification');
        }
      } catch (err) {
        console.error('Erreur de vérification:', err);
        setStatus('error');
        setError('Erreur lors de la vérification de l\'email');
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        {/* Icône de chargement */}
        {status === 'loading' && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Loader className="text-blue-600 animate-spin" size={64} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Vérification en cours</h1>
            <p className="text-gray-600">{message}</p>
          </div>
        )}

        {/* Succès */}
        {status === 'success' && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-green-600" size={64} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Succès !</h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <p className="text-sm text-gray-500">Redirection vers l'accueil dans quelques secondes...</p>
          </div>
        )}

        {/* Erreur */}
        {status === 'error' && (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <AlertCircle className="text-red-600" size={64} />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Erreur</h1>
            <p className="text-red-600 mb-6 font-semibold">{error}</p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-gray-700 text-sm mb-3">
                <strong>Raisons possibles :</strong>
              </p>
              <ul className="text-gray-600 text-sm space-y-2 text-left">
                <li>• Le lien a expiré (valide 24h)</li>
                <li>• Le token est invalide</li>
                <li>• L'email a déjà été vérifié</li>
              </ul>
            </div>

            <button
              onClick={() => navigate('/')}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Retour à l'accueil
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
