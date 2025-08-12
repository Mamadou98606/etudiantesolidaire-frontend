// ========================================
// FICHIER : src/components/AdminPanel.jsx
// ========================================
// 
// INSTRUCTIONS :
// 1. Créer un nouveau fichier "AdminPanel.jsx" dans "src/components/"
// 2. Copier tout le contenu ci-dessous dans ce fichier
// 3. Sauvegarder
//
// ========================================

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Users,
  Search,
  Filter,
  Download,
  Eye, 
  Edit, 
  Trash2, 
  UserCheck, 
  UserX,
  Calendar,
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
    recent: 0
  });

  // Charger les utilisateurs
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://etudiantesolidaire-backend.onrender.com/users', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success) {
        setUsers(data.users || []);
        calculateStats(data.users || []);
      } else {
        throw new Error(data.error || 'Erreur lors du chargement des utilisateurs');
      }
    } catch (err) {
      console.error('Erreur lors du chargement des utilisateurs:', err);
      setError(err.message);
      // Données de démonstration en cas d'erreur
      const demoUsers = [
        {
          id: 1,
          username: 'demo_user',
          email: 'demo@example.com',
          first_name: 'Utilisateur',
          last_name: 'Démo',
          nationality: 'France',
          study_level: 'Licence',
          field_of_study: 'Informatique',
          is_active: true,
          created_at: new Date().toISOString(),
          last_login: new Date().toISOString()
        }
      ];
      setUsers(demoUsers);
      calculateStats(demoUsers);
    } finally {
      setLoading(false);
    }
  };

  // Calculer les statistiques
  const calculateStats = (usersList) => {
    const total = usersList.length;
    const active = usersList.filter(user => user.is_active).length;
    const inactive = total - active;
    
    // Utilisateurs récents (derniers 7 jours)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recent = usersList.filter(user => {
      if (!user.created_at) return false;
      return new Date(user.created_at) > sevenDaysAgo;
    }).length;

    setStats({ total, active, inactive, recent });
  };

  // Suspendre un utilisateur
  const handleSuspend = async (userId) => {
    try {
      const response = await fetch(`https://etudiantesolidaire-backend.onrender.com/users/${userId}/suspend`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error(`Erreur ${response.status}`);

      setUsers(prev => {
        const updated = prev.map(u => u.id === userId ? { ...u, is_active: false } : u);
        calculateStats(updated);
        return updated;
      });
    } catch (err) {
      console.error('Erreur lors de la suspension:', err);
    }
  };

  // Supprimer un utilisateur
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`https://etudiantesolidaire-backend.onrender.com/users/${userId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error(`Erreur ${response.status}`);

      setUsers(prev => {
        const updated = prev.filter(u => u.id !== userId);
        calculateStats(updated);
        return updated;
      });
    } catch (err) {
      console.error('Erreur lors de la suppression:', err);
    }
  };

  // Filtrer les utilisateurs
  const filteredUsers = users.filter(user => {
    const fullName = `${user.first_name ?? ''} ${user.last_name ?? ''}`.toLowerCase();
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      fullName.includes(search) ||
      user.email?.toLowerCase().includes(search);

    const matchesFilter = 
      filterStatus === 'all' ||
      (filterStatus === 'active' && user.is_active) ||
      (filterStatus === 'inactive' && !user.is_active);

    return matchesSearch && matchesFilter;
  });

  // Formater la date
  const formatDate = (dateString) => {
    if (!dateString) return 'Non disponible';
    try {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Date invalide';
    }
  };

  // Exporter les données
  const exportUsers = () => {
    const csvContent = [
      ['ID', 'Nom d\'utilisateur', 'Email', 'Prénom', 'Nom', 'Nationalité', 'Niveau d\'études', 'Domaine d\'études', 'Actif', 'Date d\'inscription', 'Dernière connexion'],
      ...filteredUsers.map(user => [
        user.id,
        user.username,
        user.email,
        user.first_name,
        user.last_name,
        user.nationality,
        user.study_level,
        user.field_of_study,
        user.is_active ? 'Oui' : 'Non',
        formatDate(user.created_at),
        formatDate(user.last_login)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `utilisateurs_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
            <p className="text-gray-600">Chargement des utilisateurs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Users className="w-8 h-8 mr-3 text-blue-600" />
              Administration des Utilisateurs
            </h1>
            <p className="text-gray-600 mt-2">
              Gérez et visualisez tous les utilisateurs inscrits sur la plateforme
            </p>
          </div>
          <div className="flex gap-3">
            <Button onClick={fetchUsers} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualiser
            </Button>
            <Button onClick={exportUsers} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exporter CSV
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
              <div>
                <p className="text-yellow-800 font-medium">Attention</p>
                <p className="text-yellow-700 text-sm">
                  {error}. Affichage des données de démonstration.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Utilisateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Utilisateurs Actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Utilisateurs Inactifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.inactive}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Nouveaux (7j)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.recent}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filtres et recherche */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Filtres et Recherche</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher par nom ou e-mail"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('all')}
              >
                Tous ({stats.total})
              </Button>
              <Button
                variant={filterStatus === 'active' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('active')}
              >
                <UserCheck className="w-4 h-4 mr-1" />
                Actifs ({stats.active})
              </Button>
              <Button
                variant={filterStatus === 'inactive' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('inactive')}
              >
                <UserX className="w-4 h-4 mr-1" />
                Inactifs ({stats.inactive})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des utilisateurs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Liste des Utilisateurs ({filteredUsers.length})
          </CardTitle>
          <CardDescription>
            Cliquez sur un utilisateur pour voir plus de détails
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredUsers.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Aucun utilisateur trouvé</p>
              <p className="text-gray-500 text-sm">
                {searchTerm || filterStatus !== 'all' 
                  ? 'Essayez de modifier vos critères de recherche'
                  : 'Les utilisateurs apparaîtront ici une fois inscrits'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
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
                            {user.first_name && user.last_name 
                              ? `${user.first_name} ${user.last_name}`
                              : user.username
                            }
                          </h3>
                          <p className="text-sm text-gray-600">@{user.username}</p>
                        </div>
                        <Badge variant={user.is_active ? 'default' : 'secondary'}>
                          {user.is_active ? 'Actif' : 'Inactif'}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          {user.email}
                        </div>
                        {user.nationality && (
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            {user.nationality}
                          </div>
                        )}
                        {user.study_level && (
                          <div className="flex items-center text-gray-600">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            {user.study_level}
                          </div>
                        )}
                        {user.field_of_study && (
                          <div className="flex items-center text-gray-600">
                            <BookOpen className="w-4 h-4 mr-2" />
                            {user.field_of_study}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-6 mt-3 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          Inscrit le {formatDate(user.created_at)}
                        </div>
                        {user.last_login && (
                          <div className="flex items-center">
                            <UserCheck className="w-3 h-3 mr-1" />
                            Dernière connexion: {formatDate(user.last_login)}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <UserX className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Suspension de l'utilisateur</AlertDialogTitle>
                            <AlertDialogDescription>
                              Êtes-vous sûr de vouloir suspendre {user.username} ?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleSuspend(user.id)}>
                              Suspendre
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Supprimer l'utilisateur</AlertDialogTitle>
                            <AlertDialogDescription>
                              Cette action est définitive. Supprimer {user.username} ?
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(user.id)} className="bg-red-600 hover:bg-red-700">
                              Supprimer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
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

