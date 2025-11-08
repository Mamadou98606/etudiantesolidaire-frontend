import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Clock } from 'lucide-react';

export const SessionExpirationWarning = () => {
  const { showExpirationWarning, sessionExpiresAt } = useAuth();
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    if (!showExpirationWarning || !sessionExpiresAt) return;

    const updateTimer = () => {
      const now = new Date();
      const diff = sessionExpiresAt - now;

      if (diff <= 0) {
        setTimeRemaining('Expirée');
        return;
      }

      const minutes = Math.floor((diff / 1000) / 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeRemaining(`${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [showExpirationWarning, sessionExpiresAt]);

  if (!showExpirationWarning) return null;

  return (
    <div className="fixed top-4 right-4 bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 shadow-lg z-50 max-w-sm animate-pulse">
      <div className="flex items-center gap-3">
        <Clock className="text-yellow-600" size={24} />
        <div>
          <p className="font-bold text-yellow-800">⚠️ Session expire bientôt</p>
          <p className="text-sm text-yellow-700">
            Votre session expirera dans <span className="font-bold">{timeRemaining}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SessionExpirationWarning;
