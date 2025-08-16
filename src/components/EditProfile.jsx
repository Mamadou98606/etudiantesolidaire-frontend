import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function EditProfile() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    nationality: '',
    study_level: '',
    field_of_study: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE_URL}/profile`, { credentials: 'include' });
        const data = await res.json();
        if (res.ok) {
          setForm({
            first_name: data.first_name || '',
            last_name: data.last_name || '',
            email: data.email || '',
            nationality: data.nationality || '',
            study_level: data.study_level || '',
            field_of_study: data.field_of_study || ''
          });
        } else {
          setMessage(data.error || 'Erreur de chargement');
        }
      } catch {
        setMessage('Erreur réseau');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/profile`, {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Profil mis à jour avec succès !');
      } else {
        setMessage(data.error || 'Erreur lors de la mise à jour');
      }
    } catch {
      setMessage('Erreur réseau');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6 text-center">Chargement…</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Modifier mon profil</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Prénom</label>
            <input name="first_name" value={form.first_name} onChange={onChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Nom</label>
            <input name="last_name" value={form.last_name} onChange={onChange} className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Nationalité</label>
          <input name="nationality" value={form.nationality} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Niveau d'études</label>
          <input name="study_level" value={form.study_level} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm mb-1">Domaine d'études</label>
          <input name="field_of_study" value={form.field_of_study} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>

        <button type="submit" disabled={saving} className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50">
          {saving ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </form>
    </div>
  );
}
