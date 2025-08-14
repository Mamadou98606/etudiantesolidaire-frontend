// src/components/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Search, Download, RefreshCw, Mail, MapPin, GraduationCap, BookOpen, Calendar } from 'lucide-react';

const API = 'https://api.etudiantesolidaire.com/api';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0, recent: 0 });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const computeStats = (list) => {
    const total = list.length;
    const active = list.filter(u => u.is_active).length;
    const inactive = total - active;
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recent = list.filter(u => u.created_at && new Date(u.created_at) > sevenDaysAgo).length;
    setStats({ total, active, inactive, recent });
  };

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API}/users`, {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 401) throw new Error('Non authentifié');
      if (res.status === 403) throw new Error('Accès refusé');
      if (!res.ok || data.success === false) throw new Error(data.error || `Erreur ${res.status}`);

      const list = data.users || [];
      setUsers(list);
      computeStats(list);
    } catch (e) {
      setError(e.message);
      setUsers([]);
      computeStats([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(u => {
    const fullName = `${u.first_name ?? ''} ${u.last_name ?? ''}`.toLowerCase();
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      fullName.includes(search) ||
      (u.email ?? '').toLowerCase().includes(search) ||
      (u.username ?? '').toLowerCase().includes(search);
    const matchesFilter =
      filterStatus === 'all' ||
      (filterStatus === 'active' && u.is_active) ||
      (filterStatus === 'inactive' && !u.is_active);
    return matchesSearch && matchesFilter;
  });

  const formatDate = (s) => {
    if (!s) return 'Non disponible';
    try {
      return new Date(s).toLocaleString('fr-FR', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
      });
    } catch { return 'Date invalide'; }
  };

  const exportUsers = () => {
    const csv = [
      ['ID','Username','Email','Prénom','Nom','Nationalité','Niveau','Domaine','Actif','Inscription','Dernière connexion'],
      ...filteredUsers.map(u => [
        u.id, u.username, u.email, u.first_name, u.last_name, u.nationality,
        u.study_level, u.field_of_study, u.is_active ? 'Oui' : 'Non',
        formatDate(u.created_at), formatDate(u.last_login)
      ])
    ].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `utilisateurs_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => { fetchUsers(); }, []);

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
            <p className="text-gray-600">Chargement des utilisateurs…</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Users className="w-8 h-8 mr-3 text-blue-600" />
            Administration des Utilisateurs
          </h1>
          {error && <p className="text-sm text-red-600 mt-2">Erreur: {error}</p>}
        </div>
        <div className="flex gap-3">
          <Button onClick={fetchUsers} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" /> Actualiser
          </Button>
          <Button onClick={exportUsers} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" /> Exporter CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-gray-600">Total</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold text-blue-600">{stats.total}</div></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-gray-600">Actifs</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold text-green-600">{stats.active}</div></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-gray-600">Inactifs</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold text-red-600">{stats.inactive}</div></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm text-gray-600">Nouveaux (7j)</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold text-purple-600">{stats.recent}</div></CardContent></Card>
      </div>

      <Card className="mb-6">
        <CardHeader><CardTitle className="text-lg">Filtres et Recherche</CardTitle></CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher par nom, e-mail ou username"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant={filterStatus === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setFilterStatus('all')}>Tous ({stats.total})</Button>
              <Button variant={filterStatus === 'active' ? 'default' : 'outline'} size="sm" onClick={() => setFilterStatus('active')}>Actifs ({stats.active})</Button>
              <Button variant={filterStatus === 'inactive' ? 'default' : 'outline'} size="sm" onClick={() => setFilterStatus('inactive')}>Inactifs ({stats.inactive})</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Liste des Utilisateurs ({filteredUsers.length})</CardTitle>
          <CardDescription>Cliquez sur un utilisateur pour voir plus de détails</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredUsers.length === 0 ? (
            <div className="text-center py-12 text-gray-600">Aucun utilisateur trouvé</div>
          ) : (
            <div className="space-y-4">
              {filteredUsers.map(user => (
                <div key={user.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">
                            {(user.first_name?.[0] || user.username?.[0] || 'U').toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {user.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : user.username}
                          </h3>
                          <p className="text-sm text-gray-600">@{user.username}</p>
                        </div>
                        <Badge variant={user.is_active ? 'default' : 'secondary'}>
                          {user.is_active ? 'Actif' : 'Inactif'}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center text-gray-600"><Mail className="w-4 h-4 mr-2" />{user.email}</div>
                        {user.nationality && <div className="flex items-center text-gray-600"><MapPin className="w-4 h-4 mr-2" />{user.nationality}</div>}
                        {user.study_level && <div className="flex items-center text-gray-600"><GraduationCap className="w-4 h-4 mr-2" />{user.study_level}</div>}
                        {user.field_of_study && <div className="flex items-center text-gray-600"><BookOpen className="w-4 h-4 mr-2" />{user.field_of_study}</div>}
                      </div>

                      <div className="flex items-center gap-6 mt-3 text-xs text-gray-500">
                        <div className="flex items-center"><Calendar className="w-3 h-3 mr-1" />Inscrit le {formatDate(user.created_at)}</div>
                        {user.last_login && <div className="flex items-center"><Users className="w-3 h-3 mr-1" />Dernière connexion: {formatDate(user.last_login)}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
