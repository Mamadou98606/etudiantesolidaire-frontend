import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://api.etudiantesolidaire.com/api';

export default function Bookmarks() {
  const [items, setItems] = useState([]);
  const [form, setForm]   = useState({ title: '', url: '', category: '' });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks`, { credentials: 'include' });
      const data = await res.json();
      if (res.ok) setItems(data || []);
      else setMessage(data.error || 'Erreur de chargement');
    } catch {
      setMessage('Erreur réseau');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const add = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!form.title || !form.url) {
      setMessage('Titre et URL sont requis');
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setForm({ title: '', url: '', category: '' });
        load();
      } else {
        setMessage(data.error || 'Erreur lors de l’ajout');
      }
    } catch {
      setMessage('Erreur réseau');
    }
  };

  const remove = async (id) => {
    setMessage('');
    try {
      const res = await fetch(`${API_BASE_URL}/bookmarks/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        setItems(prev => prev.filter(i => i.id !== id));
      } else {
        setMessage('Erreur lors de la suppression');
      }
    } catch {
      setMessage('Erreur réseau');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Mes favoris</h1>

      {message && (
        <div className="mb-4 p-3 rounded border text-sm bg-blue-50 border-blue-200 text-blue-700">
          {message}
        </div>
      )}

      <form onSubmit={add} className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <input className="border rounded px-3 py-2" placeholder="Titre" value={form.title} onChange={e=>setForm({...form, title:e.target.value})}/>
        <input className="border rounded px-3 py-2" placeholder="URL (https://…)" value={form.url} onChange={e=>setForm({...form, url:e.target.value})}/>
        <input className="border rounded px-3 py-2" placeholder="Catégorie (optionnel)" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}/>
        <button type="submit" className="md:col-span-3 bg-blue-600 text-white py-2 rounded">Ajouter</button>
      </form>

      {loading ? (
        <div className="text-center">Chargement…</div>
      ) : items.length === 0 ? (
        <div className="text-gray-600">Aucun favori pour le moment</div>
      ) : (
        <div className="space-y-3">
          {items.map(b => (
            <div key={b.id} className="border rounded p-3 flex items-start justify-between">
              <div>
                <div className="font-semibold">{b.title}</div>
                <a href={b.url} target="_blank" rel="noreferrer" className="text-blue-600 text-sm break-all">{b.url}</a>
                {b.category && <div className="text-xs text-gray-500 mt-1">Catégorie: {b.category}</div>}
              </div>
              <button onClick={() => remove(b.id)} className="text-red-600 text-sm hover:underline">Supprimer</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
