import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, Calendar, User, Eye, MessageSquare, Share2, Heart } from 'lucide-react'

function BlogPost({ post, onBack }) {
  if (!post) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <Button variant="outline" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Button>
          <Card className="text-center py-12">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Article non trouvé</h2>
              <p className="text-muted-foreground">
                L'article que vous recherchez n'existe pas ou a été supprimé.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <Button variant="outline" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au blog
        </Button>

        {/* Article */}
        <article className="space-y-6">
          {/* Header */}
          <header className="space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm text-muted-foreground">
                {post.readTime} de lecture
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between py-4 border-y">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {post.views}
                </span>
                <span className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {post.comments}
                </span>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Partager
                </Button>
              </div>
            </div>
          </header>

          {/* Contenu */}
          <div className="prose prose-lg max-w-none">
            <div className="text-lg leading-relaxed space-y-6">
              {/* Contenu de l'article */}
              <p>
                {post.content}
              </p>
              
              {/* Contenu étendu basé sur la catégorie */}
              {post.category === 'Orientation' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Les étapes clés de l'orientation</h2>
                  <p>
                    L'orientation dans l'enseignement supérieur français nécessite une préparation minutieuse. 
                    Voici les étapes essentielles à suivre pour maximiser vos chances de réussite.
                  </p>
                  
                  <h3 className="text-xl font-semibold">1. Définir votre projet professionnel</h3>
                  <p>
                    Avant de choisir une formation, il est crucial de réfléchir à vos objectifs professionnels. 
                    Quels métiers vous intéressent ? Dans quels secteurs souhaitez-vous évoluer ?
                  </p>
                  
                  <h3 className="text-xl font-semibold">2. Explorer les formations disponibles</h3>
                  <p>
                    La France offre une grande diversité de formations : universités, grandes écoles, 
                    BTS, DUT, formations professionnelles... Chaque voie a ses spécificités.
                  </p>
                  
                  <h3 className="text-xl font-semibold">3. Préparer votre candidature</h3>
                  <p>
                    Une candidature réussie nécessite une préparation soignée : dossier académique, 
                    lettre de motivation, projet professionnel cohérent.
                  </p>
                </div>
              )}
              
              {post.category === 'Démarches' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Procédures administratives détaillées</h2>
                  <p>
                    Les démarches administratives pour étudier en France peuvent sembler complexes, 
                    mais avec une bonne préparation, elles deviennent plus simples.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Documents requis</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Passeport en cours de validité</li>
                      <li>• Diplômes traduits et certifiés</li>
                      <li>• Justificatifs de ressources financières</li>
                      <li>• Attestation d'assurance santé</li>
                      <li>• Certificat de logement</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {post.category === 'Vie étudiante' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">S'intégrer dans la vie étudiante française</h2>
                  <p>
                    La vie étudiante en France offre de nombreuses opportunités d'épanouissement 
                    personnel et professionnel au-delà des cours.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Associations étudiantes</h3>
                  <p>
                    Rejoindre une association étudiante est un excellent moyen de rencontrer 
                    d'autres étudiants et de développer vos compétences.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Activités culturelles</h3>
                  <p>
                    Profitez de la richesse culturelle française : musées, théâtres, cinémas, 
                    festivals... De nombreuses réductions sont disponibles pour les étudiants.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 py-6">
            {post.tags && post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between py-6 border-t">
            <Button variant="outline" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>J'aime cet article</span>
            </Button>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Partager
              </Button>
            </div>
          </div>
        </article>

        {/* Articles similaires */}
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <h3 className="font-bold mb-2">Article similaire 1</h3>
                <p className="text-muted-foreground text-sm">
                  Description de l'article similaire qui pourrait intéresser le lecteur...
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <h3 className="font-bold mb-2">Article similaire 2</h3>
                <p className="text-muted-foreground text-sm">
                  Description de l'article similaire qui pourrait intéresser le lecteur...
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogPost

