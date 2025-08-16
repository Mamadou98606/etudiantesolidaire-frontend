import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
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
  Plus
} from 'lucide-react'

function UserDashboard({ user, onLogout, onClose }) {
  const [progress, setProgress] = useState([])
  const [bookmarks, setBookmarks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      // Récupérer les progrès
      const progressResponse = await fetch('http://localhost:5000/api/progress', {
        credentials: 'include'
      })
      if (progressResponse.ok) {
        const progressData = await progressResponse.json()
        setProgress(progressData)
      }

      // Récupérer les favoris
      const bookmarksResponse = await fetch('http://localhost:5000/api/bookmarks', {
        credentials: 'include'
      })
      if (bookmarksResponse.ok) {
        const bookmarksData = await bookmarksResponse.json()
        setBookmarks(bookmarksData)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error)
    } finally {
      setLoading(false)
    }
  }

  const addProgress = async (category, step) => {
    try {
      const response = await fetch('http://localhost:5000/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          category,
          step,
          completed: false
        })
      })

      if (response.ok) {
        fetchUserData() // Recharger les données
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du progrès:', error)
    }
  }

  const addBookmark = async (title, url, category) => {
    try {
      const response = await fetch('http://localhost:5000/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          title,
          url,
          category
        })
      })

      if (response.ok) {
        fetchUserData() // Recharger les données
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout du favori:', error)
    }
  }

  const deleteBookmark = async (bookmarkId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookmarks/${bookmarkId}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      if (response.ok) {
        fetchUserData() // Recharger les données
      }
    } catch (error) {
      console.error('Erreur lors de la suppression:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        credentials: 'include'
      })
      onLogout()
      onClose()
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error)
    }
  }

  const getProgressByCategory = () => {
    const categories = ['orientation', 'demarches', 'etudes', 'travailler', 'vivre']
    return categories.map(category => {
      const categoryProgress = progress.filter(p => p.category === category)
      const completed = categoryProgress.filter(p => p.completed).length
      const total = categoryProgress.length || 1
      return {
        category,
        completed,
        total,
        percentage: Math.round((completed / total) * 100)
      }
    })
  }

  const getCategoryName = (category) => {
    const names = {
      orientation: 'Orientation',
      demarches: 'Démarches',
      etudes: 'Études',
      travailler: 'Travailler',
      vivre: 'Vivre en France'
    }
    return names[category] || category
  }

  const recentProgress = progress
    .sort((a, b) => new Date(b.completed_at || b.id) - new Date(a.completed_at || a.id))
    .slice(0, 5)

  const recentBookmarks = bookmarks
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5)

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement de votre espace personnel...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  Bonjour, {user.first_name || user.username} !
                </CardTitle>
                <CardDescription>
                  Bienvenue dans votre espace personnel
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
              <Button variant="outline" size="sm" onClick={onClose}>
                ✕
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dashboard">Tableau de bord</TabsTrigger>
              <TabsTrigger value="progress">Mes progrès</TabsTrigger>
              <TabsTrigger value="bookmarks">Mes favoris</TabsTrigger>
              <TabsTrigger value="profile">Mon profil</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Vue d'ensemble */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                      Progrès global
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      {Math.round(progress.filter(p => p.completed).length / Math.max(progress.length, 1) * 100)}%
                    </div>
                    <p className="text-sm text-gray-600">
                      {progress.filter(p => p.completed).length} / {progress.length} étapes complétées
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <BookmarkIcon className="h-5 w-5 mr-2 text-blue-600" />
                      Favoris
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">
                      {bookmarks.length}
                    </div>
                    <p className="text-sm text-gray-600">
                      Ressources sauvegardées
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                      Membre depuis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">
                      {new Date(user.created_at).toLocaleDateString('fr-FR', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                    <p className="text-sm text-gray-600">
                      Date d'inscription
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Progrès par catégorie */}
              <Card>
                <CardHeader>
                  <CardTitle>Progrès par domaine</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {getProgressByCategory().map((cat) => (
                      <div key={cat.category} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{getCategoryName(cat.category)}</span>
                          <span className="text-sm text-gray-600">
                            {cat.completed}/{cat.total} ({cat.percentage}%)
                          </span>
                        </div>
                        <Progress value={cat.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Activité récente */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Progrès récents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recentProgress.length > 0 ? (
                      <div className="space-y-3">
                        {recentProgress.map((item) => (
                          <div key={item.id} className="flex items-center space-x-3">
                            <CheckCircle className={`h-4 w-4 ${item.completed ? 'text-green-600' : 'text-gray-400'}`} />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{item.step}</p>
                              <p className="text-xs text-gray-600">
                                {getCategoryName(item.category)}
                              </p>
                            </div>
                            <Badge variant={item.completed ? 'default' : 'secondary'}>
                              {item.completed ? 'Terminé' : 'En cours'}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-center py-4">
                        Aucun progrès enregistré pour le moment
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Favoris récents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recentBookmarks.length > 0 ? (
                      <div className="space-y-3">
                        {recentBookmarks.map((bookmark) => (
                          <div key={bookmark.id} className="flex items-center space-x-3">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{bookmark.title}</p>
                              <p className="text-xs text-gray-600">
                                {getCategoryName(bookmark.category)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600 text-center py-4">
                        Aucun favori sauvegardé pour le moment
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Suivi de mes démarches</CardTitle>
                  <CardDescription>
                    Suivez votre progression dans chaque domaine
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {progress.length > 0 ? (
                    <div className="space-y-4">
                      {progress.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className={`h-5 w-5 ${item.completed ? 'text-green-600' : 'text-gray-400'}`} />
                            <div>
                              <p className="font-medium">{item.step}</p>
                              <p className="text-sm text-gray-600">{getCategoryName(item.category)}</p>
                              {item.notes && (
                                <p className="text-xs text-gray-500 mt-1">{item.notes}</p>
                              )}
                            </div>
                          </div>
                          <Badge variant={item.completed ? 'default' : 'secondary'}>
                            {item.completed ? 'Terminé' : 'En cours'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">Aucune démarche en cours</p>
                      <Button onClick={() => addProgress('orientation', 'Définir mon projet d\'études')}>
                        <Plus className="h-4 w-4 mr-2" />
                        Commencer mon suivi
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bookmarks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Mes ressources favorites</CardTitle>
                  <CardDescription>
                    Retrouvez facilement vos pages et ressources importantes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {bookmarks.length > 0 ? (
                    <div className="space-y-4">
                      {bookmarks.map((bookmark) => (
                        <div key={bookmark.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Star className="h-5 w-5 text-yellow-500" />
                            <div>
                              <p className="font-medium">{bookmark.title}</p>
                              <p className="text-sm text-gray-600">{getCategoryName(bookmark.category)}</p>
                              <p className="text-xs text-blue-600">{bookmark.url}</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteBookmark(bookmark.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <BookmarkIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">Aucun favori sauvegardé</p>
                      <Button onClick={() => addBookmark('Guide d\'orientation', '/orientation', 'orientation')}>
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter un favori
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informations personnelles</CardTitle>
                  <CardDescription>
                    Gérez vos informations de profil
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                        <p className="mt-1 text-sm text-gray-900">{user.username}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-sm text-gray-900">{user.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Prénom</label>
                        <p className="mt-1 text-sm text-gray-900">{user.first_name || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Nom</label>
                        <p className="mt-1 text-sm text-gray-900">{user.last_name || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Nationalité</label>
                        <p className="mt-1 text-sm text-gray-900">{user.nationality || 'Non renseigné'}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Niveau d'études</label>
                        <p className="mt-1 text-sm text-gray-900">{user.study_level || 'Non renseigné'}</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700">Domaine d'études</label>
                        <p className="mt-1 text-sm text-gray-900">{user.field_of_study || 'Non renseigné'}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Button variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier mes informations
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserDashboard

