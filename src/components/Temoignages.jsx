import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  ArrowLeft, 
  Star, 
  Quote,
  GraduationCap,
  MapPin,
  Calendar,
  Heart,
  Search,
  TrendingUp
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTemoignagesData } from './temoignages/useTemoignagesData'

function Temoignages() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [sortBy, setSortBy] = useState('recent')

  // Utiliser le hook pour obtenir les témoignages filtrés
  const { 
    temoignages: temoignagesFiltres, 
    topRated: temoignagesMieuxNotes, 
    categories,
    stats 
  } = useTemoignagesData(searchTerm, selectedCategory, sortBy)

  const renderStars = (note) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < note ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Button>
          <h1 className="text-4xl font-bold text-foreground mb-4">Témoignages</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez les parcours inspirants de nos étudiants accompagnés
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                Leurs réussites, notre fierté
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-green-700 leading-relaxed mb-4">
                Chaque étudiant que nous accompagnons a une histoire unique. Découvrez comment 
                etudiantesolidaire a contribué à leur réussite en France.
              </p>
              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">{stats.etudiaptsAccompagnes}+</div>
                  <div className="text-sm text-green-600">Étudiants accompagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">{stats.tauxReussite}%</div>
                  <div className="text-sm text-green-600">Taux de réussite</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">{stats.noteMoyenne}/5</div>
                  <div className="text-sm text-green-600">Satisfaction moyenne</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">{stats.paysRepresentes}</div>
                  <div className="text-sm text-green-600">Pays représentés</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recherche et Filtres */}
        <section className="mb-8">
          <div className="space-y-4">
            {/* Barre de recherche */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher un témoignage (nom, formation, pays)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filtres par catégorie */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Filtrer par formation</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat.id)}
                    size="sm"
                    className="flex items-center space-x-1"
                  >
                    <span>{cat.label}</span>
                    <Badge variant="secondary" className="ml-1">
                      {cat.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Tri */}
            <div className="flex gap-2">
              <Button
                variant={sortBy === 'recent' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('recent')}
              >
                Récents
              </Button>
              <Button
                variant={sortBy === 'note' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('note')}
                className="flex items-center space-x-1"
              >
                <TrendingUp className="h-4 w-4" />
                <span>Mieux notés</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-16">
          {temoignagesFiltres.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {temoignagesFiltres.map((temoignage) => (
                <Card key={temoignage.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl">{temoignage.photo}</div>
                      <div>
                        <CardTitle className="text-lg">{temoignage.nom}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{temoignage.pays}</span>
                          <Calendar className="h-3 w-3 ml-2" />
                          <span>{temoignage.annee}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">{temoignage.formation}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">{temoignage.universite}</div>
                      <div className="flex items-center space-x-1">
                        {renderStars(temoignage.note)}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <Quote className="h-5 w-5 text-muted-foreground mb-2" />
                      <p className="text-sm leading-relaxed italic">
                        "{temoignage.temoignage}"
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Points forts :</h4>
                      <div className="space-y-1">
                        {temoignage.points_forts.map((point, index) => (
                          <div key={index} className="flex items-center text-xs">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Aucun témoignage ne correspond à ta recherche.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('tous')
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Vous aussi, écrivez votre histoire de réussite !
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rejoignez les centaines d'étudiants qui ont réalisé leurs rêves d'études en France 
                avec notre accompagnement personnalisé.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Commencer mon accompagnement
                </Button>
                <Button variant="outline" size="lg">
                  Prendre rendez-vous
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Temoignages
