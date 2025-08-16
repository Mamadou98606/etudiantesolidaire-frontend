import React, { useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword]         = useState('');
  const [confirm, setConfirm]                 = useState('');
  const [message, setMessage]                 = useState('');
  const [submitting, setSubmitting]           = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!currentPassword || !newPassword) {
      setMessage('Veuillez remplir tous les champs');
      return;
    }
    if (newPassword !== confirm) {
      setMessage('Les mots de passe ne correspondent pas');
      return;
    }
    if (newPassword.length < 6) {
      setMessage('Le nouveau mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/change-password`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Mot de passe changé avec succès !');
        setCurrentPassword('');
        setNewPassword('');
        setConfirm('');
      } else {
        setMessage(data.error || 'Erreur lors du changement de mot de passe');
      }
    } catch {
      setMessage('Erreur réseau. Réessayez.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Changer mon mot de passe</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Mot de passe actuel</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e)=>setCurrentPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Votre mot de passe actuel"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Nouveau mot de passe</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Nouveau mot de passe"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Confirmer le nouveau mot de passe</label>
          <input
            type="password"
            value={confirm}
            onChange={(e)=>setConfirm(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Confirmez le nouveau mot de passe"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        >
          {submitting ? 'Veuillez patienter…' : 'Enregistrer'}
        </button>
      </form>
    </div>
  );
}
