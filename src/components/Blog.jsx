import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  ArrowLeft,
  Search,
  Calendar,
  User,
  Eye,
  MessageSquare,
  Plus,
  Clock,
  BookOpen,
  TrendingUp
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BlogPost from './BlogPost'
import { useBlogData } from './blog/useBlogData'

function Blog() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [selectedPost, setSelectedPost] = useState(null)

  // Utiliser le hook pour obtenir les articles filtrés
  const { articles: articlesFiltres, popular: articlesPopulaires, categories } = useBlogData(searchTerm, selectedCategory)

  // Liste complète des articles (pour le compte total)
  const { articles: tousLesArticles } = useBlogData('', 'tous')

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog etudiantesolidaire</h1>
          <p className="text-xl text-muted-foreground">
            Conseils, guides et actualités pour réussir vos études en France
          </p>
        </div>

        {/* Stats et CTA */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="py-8">
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">
                    Restez informé de l'actualité étudiante
                  </h2>
                  <p className="text-blue-700">
                    Guides pratiques, conseils d'experts et témoignages pour votre réussite
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">{tousLesArticles.length}</div>
                  <div className="text-sm text-blue-600">Articles publiés</div>
                </div>
                <div className="text-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    S'abonner
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-3">
            {/* Barre de recherche et filtres */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
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

            {/* Liste des articles */}
            <div className="space-y-6">
              {articlesFiltres.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{article.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {article.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {article.author || '—'}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(article.date).toLocaleDateString('fr-FR')}
                            </span>
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {article.views}
                            </span>
                            <span className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              {article.comments}
                            </span>
                          </div>

                          <Button variant="outline" size="sm" onClick={() => setSelectedPost(article)}>
                            Lire la suite
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-3">
                          {(article.tags || []).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {articlesFiltres.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Aucun article trouvé</h3>
                  <p className="text-muted-foreground">
                    Essayez de modifier vos critères de recherche ou de filtrage.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Articles populaires
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {articlesPopulaires.map((article, index) => (
                  <div key={article.id} className="flex items-start space-x-3 pb-4 border-b last:border-b-0">
                    <div className="text-2xl font-bold text-blue-600 min-w-[24px]">
                      {index + 1}
                    </div>
                    <div>
                      <h4
                        className="font-medium text-sm leading-tight mb-1 hover:text-blue-600 cursor-pointer"
                        onClick={() => setSelectedPost(article)}
                      >
                        {article.title}
                      </h4>
                      <div className="flex items-center text-xs text-muted-foreground space-x-2">
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {article.views}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Newsletter</CardTitle>
                <CardDescription className="text-green-700">
                  Recevez nos derniers articles directement dans votre boîte mail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Votre adresse email" />
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    S'abonner
                  </Button>
                  <p className="text-xs text-green-600">
                    Pas de spam, désabonnement en un clic
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Catégories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.filter(cat => cat.id !== 'tous').map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className="flex items-center justify-between w-full p-2 rounded hover:bg-accent transition-colors"
                    >
                      <span className="text-sm">{cat.label}</span>
                      <Badge variant="outline">{cat.count}</Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
