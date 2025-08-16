// ========================================
// FICHIER 7 : src/components/UserDashboard.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre UserDashboard.jsx actuel (renommez-le UserDashboard.jsx.old)
// 2. Remplacer tout le contenu de "src/components/UserDashboard.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

// UserDashboard.jsx connecté aux vraies données utilisateur
// Remplace le fichier src/components/UserDashboard.jsx existant

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Progress } from '@/components/ui/progress.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import {
  User,
  Settings,
  BookmarkIcon,
  CheckCircle,
  Clock,
  TrendingUp,
  FileText,
  Calendar,
  Star,
  LogOut,
  Edit,
  Trash2,
  Plus,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Globe,
  Save,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function UserDashboard() {
  const { user, updateProfile, refreshUser, logout, loading } = useAuth();

  // États du composant
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [saveLoading, setSaveLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Données simulées pour les fonctionnalités (à remplacer par de vraies données API)
  const [progress, setProgress] = useState(65);
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: 'Guide des démarches administratives', category: 'Démarches', date: '2024-01-15' },
    { id: 2, title: 'Bourses d\'études disponibles', category: 'Financement', date: '2024-01-10' },
    { id: 3, title: 'Logement étudiant Paris', category: 'Logement', date: '2024-01-08' }
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, action: 'Consultation du guide orientation', date: '2024-01-15', type: 'view' },
    { id: 2, action: 'Téléchargement formulaire visa', date: '2024-01-14', type: 'download' },
    { id: 3, action: 'Prise de rendez-vous conseiller', date: '2024-01-12', type: 'appointment' }
  ]);

  // Options pour les sélecteurs
  const studyLevels = [
    'Lycée', 'BTS', 'Licence (L1)', 'Licence (L2)', 'Licence (L3)',
    'Master (M1)', 'Master (M2)', 'Doctorat', 'Autre'
  ];

  const fieldsOfStudy = [
    'Sciences et Technologies', 'Économie et Gestion', 'Lettres et Sciences Humaines',
    'Droit et Sciences Politiques', 'Médecine et Santé', 'Arts et Design',
    'Ingénierie', 'Informatique', 'Commerce et Marketing', 'Autre'
  ];

  // Initialiser les données d'édition
  useEffect(() => {
    if (user) {
      setEditedUser({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        nationality: user.nationality || '',
        study_level: user.study_level || '',
        field_of_study: user.field_of_study || ''
      });
    }
  }, [user]);

  // Gestionnaires d'événements
  const handleEditToggle = () => {
    if (isEditing) {
      // Annuler les modifications
      setEditedUser({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        nationality: user.nationality || '',
        study_level: user.study_level || '',
        field_of_study: user.field_of_study || ''
      });
    }
    setIsEditing(!isEditing);
    setMessage('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setEditedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    try {
      setSaveLoading(true);
      setMessage('');

      const result = await updateProfile(editedUser);

      if (result.success) {
        setMessage('Profil mis à jour avec succès !');
        setIsEditing(false);
        // Rafraîchir les données utilisateur
        await refreshUser();
      } else {
        setMessage(result.error || 'Erreur lors de la mise à jour');
      }
    } catch (error) {
      setMessage('Erreur lors de la sauvegarde');
    } finally {
      setSaveLoading(false);
    }
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'view': return <FileText className="w-4 h-4" />;
      case 'download': return <TrendingUp className="w-4 h-4" />;
      case 'appointment': return <Calendar className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  // Affichage de chargement
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Vérification de l'utilisateur
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accès non autorisé
              </h3>
              <p className="text-gray-600 mb-4">
                Vous devez être connecté pour accéder à cette page.
              </p>
              <Button onClick={() => window.location.href = '/'}>
                Retour à l'accueil
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header du dashboard */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Bonjour, {user.first_name || user.username} ! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                Bienvenue dans votre espace personnel etudiantesolidaire
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                Compte actif
              </Badge>
              <Button variant="outline" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Se déconnecter
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        {message && (
          <div className={`mb-6 p-4 rounded-md ${
            message.includes('succès')
              ? 'bg-green-50 border border-green-200 text-green-700'
              : 'bg-red-50 border border-red-200 text-red-700'
          }`}>
            {message}
          </div>
        )}

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Progression</p>
                  <p className="text-2xl font-bold text-gray-900">{progress}%</p>
                </div>
              </div>
              <Progress value={progress} className="mt-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <BookmarkIcon className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Favoris</p>
                  <p className="text-2xl font-bold text-gray-900">{bookmarks.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Activités</p>
                  <p className="text-2xl font-bold text-gray-900">{recentActivities.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contenu principal avec onglets */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2" />
              Profil
            </TabsTrigger>
            <TabsTrigger value="bookmarks">
              <BookmarkIcon className="w-4 h-4 mr-2" />
              Favoris
            </TabsTrigger>
            <TabsTrigger value="activity">
              <Clock className="w-4 h-4 mr-2" />
              Activité
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </TabsTrigger>
          </TabsList>

          {/* Onglet Profil */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Informations personnelles</CardTitle>
                    <CardDescription>
                      Gérez vos informations de profil et préférences
                    </CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "outline" : "default"}
                    onClick={handleEditToggle}
                    disabled={saveLoading}
                  >
                    {isEditing ? (
                      <>
                        <X className="w-4 h-4 mr-2" />
                        Annuler
                      </>
                    ) : (
                      <>
                        <Edit className="w-4 h-4 mr-2" />
                        Modifier
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Prénom */}
                  <div>
                    <Label htmlFor="first_name">Prénom</Label>
                    {isEditing ? (
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        value={editedUser.first_name}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{user.first_name || 'Non renseigné'}</p>
                    )}
                  </div>

                  {/* Nom */}
                  <div>
                    <Label htmlFor="last_name">Nom</Label>
                    {isEditing ? (
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        value={editedUser.last_name}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{user.last_name || 'Non renseigné'}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={editedUser.email}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{user.email || 'Non renseigné'}</p>
                    )}
                  </div>

                  {/* Nom d'utilisateur */}
                  <div>
                    <Label>Nom d'utilisateur</Label>
                    <p className="mt-1 text-sm text-gray-900">{user.username}</p>
                    <p className="text-xs text-gray-500">Le nom d'utilisateur ne peut pas être modifié</p>
                  </div>

                  {/* Nationalité */}
                  <div>
                    <Label htmlFor="nationality">Nationalité</Label>
                    {isEditing ? (
                      <input
                        id="nationality"
                        name="nationality"
                        type="text"
                        value={editedUser.nationality}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{user.nationality || 'Non renseigné'}</p>
                    )}
                  </div>

                  {/* Niveau d'études */}
                  <div>
                    <Label htmlFor="study_level">Niveau d'études</Label>
                    {isEditing ? (
                      <Select value={editedUser.study_level} onValueChange={(value) => handleSelectChange('study_level', value)}>
                        <SelectTrigger className="w-full mt-1">
                          <SelectValue placeholder="Sélectionnez votre niveau" />
                        </SelectTrigger>
                        <SelectContent>
                          {studyLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{user.study_level || 'Non renseigné'}</p>
                    )}
                  </div>

                  {/* Domaine d'études */}
                  <div className="md:col-span-2">
                    <Label htmlFor="field_of_study">Domaine d'études</Label>
                    {isEditing ? (
                      <Select value={editedUser.field_of_study} onValueChange={(value) => handleSelectChange('field_of_study', value)}>
                        <SelectTrigger className="w-full mt-1">
                          <SelectValue placeholder="Sélectionnez votre domaine" />
                        </SelectTrigger>
                        <SelectContent>
                          {fieldsOfStudy.map((field) => (
                            <SelectItem key={field} value={field}>
                              {field}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">{user.field_of_study || 'Non renseigné'}</p>
                    )}
                  </div>
                </div>

                {/* Bouton de sauvegarde */}
                {isEditing && (
                  <div className="flex justify-end">
                    <Button onClick={handleSaveProfile} disabled={saveLoading}>
                      {saveLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sauvegarde...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Sauvegarder
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Favoris */}
          <TabsContent value="bookmarks">
            <Card>
              <CardHeader>
                <CardTitle>Mes favoris</CardTitle>
                <CardDescription>
                  Retrouvez ici tous les contenus que vous avez sauvegardés
                </CardDescription>
              </CardHeader>
              <CardContent>
                {bookmarks.length > 0 ? (
                  <div className="space-y-4">
                    {bookmarks.map((bookmark) => (
                      <div key={bookmark.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Star className="w-5 h-5 text-yellow-500" />
                          <div>
                            <h4 className="font-medium text-gray-900">{bookmark.title}</h4>
                            <p className="text-sm text-gray-500">
                              {bookmark.category} • {bookmark.date}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeBookmark(bookmark.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookmarkIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Aucun favori pour le moment
                    </h3>
                    <p className="text-gray-600">
                      Commencez à explorer notre contenu et sauvegardez vos articles préférés !
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Activité */}
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Activité récente</CardTitle>
                <CardDescription>
                  Votre historique d'activité sur la plateforme
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recentActivities.length > 0 ? (
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Aucune activité récente
                    </h3>
                    <p className="text-gray-600">
                      Votre activité sur la plateforme apparaîtra ici.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Onglet Paramètres */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres du compte</CardTitle>
                <CardDescription>
                  Gérez vos préférences et paramètres de sécurité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Notifications</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Choisissez comment vous souhaitez être notifié
                    </p>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span className="text-sm">Notifications par email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Notifications push</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Sécurité</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Gérez la sécurité de votre compte
                    </p>
                    <Button variant="outline">
                      Changer le mot de passe
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Zone de danger</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Actions irréversibles sur votre compte
                    </p>
                    <Button variant="destructive">
                      Supprimer le compte
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default UserDashboard;

