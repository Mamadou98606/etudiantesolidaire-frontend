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

function Blog() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [selectedPost, setSelectedPost] = useState(null)

  // Articles (exemples + vos 2 articles structurés)
  const articles = [
    {
      id: 8,
      title: "Étudier en France: le guide express pour bien démarrer (2025)",
      excerpt: "Choisir sa formation, préparer ses dossiers, éviter les pièges administratifs: les clés pour réussir votre arrivée.",
      author: "Équipe Étudiante Solidaire",
      date: "2025-09-01",
      category: "Orientation",
      image: "🧭",
      views: 0,
      comments: 0,
      readTime: "6 min",
      tags: ["Orientation", "Parcoursup", "Dossier"],
      sections: [
        {
          heading: "1) Clarifier son projet",
          paragraphs: [
            "Définissez vos objectifs: diplôme visé, métier ciblé, contraintes de budget et de localisation.",
            "Utilisez un tableau simple pour comparer 3 formations (admission, coûts, débouchés)."
          ]
        },
        {
          heading: "2) Choisir la bonne voie",
          bullets: [
            "BTS: professionnalisant, insertion rapide, 2 ans",
            "Licence: bases solides, poursuite en Master",
            "Titres pro: reconversion ciblée, rythme rapide"
          ]
        },
        {
          heading: "3) Construire un dossier solide",
          bullets: [
            "CV clair (1 page) + Lettre adaptée à chaque formation",
            "Pièces scannées en PDF (notes, diplômes, identité)",
            "Projet motivé cohérent (5–10 lignes)"
          ]
        },
        {
          heading: "4) Les pièges à éviter",
          bullets: [
            "Attendre la dernière minute pour les démarches",
            "CV trop long ou non adapté au format français",
            "Oublier de vérifier les prérequis exacts"
          ]
        },
        {
          heading: "5) Checklist de départ",
          bullets: [
            "Créer un dossier cloud (PDF nommés)",
            "Lister 5 formations + dates limites",
            "Bloquer 2 créneaux/semaine pour candidater"
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Étudiante Solidaire : votre guide de A à Z pour réussir vos études en France",
      excerpt: "Tout-en-un : orientation, démarches, logement, emploi et conseils pratiques — avec un accompagnement humain et gratuit.",
      author: "Équipe Étudiante Solidaire",
      date: "2025-08-15",
      category: "Vie étudiante",
      image: "🎓",
      views: 0,
      comments: 0,
      readTime: "7 min",
      tags: ["Étudiante Solidaire", "Orientation", "Démarches", "Vie étudiante", "Emploi"],
      sections: [
        {
          heading: "Pourquoi Étudiante Solidaire ?",
          paragraphs: [
            "Arriver en France pour étudier, c’est excitant… et parfois déroutant. Étudiante Solidaire enlève le stress inutile et vous donne un chemin clair, pas à pas."
          ],
          bullets: [
            "Des informations fiables et à jour, réunies au même endroit",
            "Des parcours guidés (orientation, démarches, vie en France, emploi)",
            "Un accompagnement humain et gratuit pour démarrer sereinement"
          ]
        },
        {
          heading: "Ce que vous trouverez sur la plateforme",
          bullets: [
            "Orientation: diplômes, choix de formation, dossiers, calendrier",
            "Démarches: visa étudiant, VLS-TS, titre de séjour, travail",
            "Vivre en France: logement, santé, transport, intégration",
            "Travailler: job étudiant, stage, premier emploi, secteurs porteurs",
            "Outils: checklists, rappels, RDV 30 min, suivi de progression"
          ]
        },
        {
          heading: "Comment commencer ?",
          bullets: [
            "Créez votre compte (gratuit) en 1 minute",
            "Complétez rapidement votre profil (objectif, pays, niveau)",
            "Suivez le parcours recommandé (orientation → démarches → installation)",
            "Prenez un rendez-vous si besoin d’un coup de pouce"
          ]
        },
        {
          heading: "3 conseils express de l’équipe",
          bullets: [
            "Anticipez VLS-TS et logement: commencez tôt",
            "Centralisez vos documents (PDF) dans un cloud",
            "Soignez votre français écrit (CV/lettres)"
          ]
        },
        {
          heading: "Questions fréquentes",
          paragraphs: [
            "Q: L’accompagnement est-il payant ? R: Le premier RDV (30 min) est gratuit.",
            "Q: Puis-je travailler pendant mes études ? R: Oui, avec des limites annuelles.",
            "Q: Comment éviter les retards ? R: Checklists + rappels d’échéances."
          ]
        },
        {
          heading: "Conclusion",
          paragraphs: [
            "Étudier en France, c’est une aventure extraordinaire. Avec Étudiante Solidaire, vous avez un plan, des ressources concrètes, et une équipe à vos côtés."
          ]
        }
      ]
    },
    // Exemples existants (facultatif si vous les gardez)
    {
      id: 1,
      title: "Guide complet Parcoursup 2024 : Dates et stratégies",
      excerpt: "Tout ce que vous devez savoir sur Parcoursup 2024, les dates importantes et nos conseils pour maximiser vos chances d'admission.",
      content: "Parcoursup est la plateforme nationale de préinscription en première année de l'enseignement supérieur en France...",
      author: "Marie Dubois",
      date: "2024-01-15",
      category: "Orientation",
      image: "📚",
      views: 1250,
      comments: 23,
      readTime: "8 min",
      tags: ["Parcoursup", "Orientation", "Études supérieures"]
    },
    {
      id: 2,
      title: "Visa étudiant 2024 : Nouvelles procédures simplifiées",
      excerpt: "Les dernières modifications des procédures de visa étudiant et comment optimiser votre dossier pour une réponse rapide.",
      content: "Les procédures de visa étudiant ont été simplifiées en 2024. Voici tout ce que vous devez savoir...",
      author: "Ahmed Benali",
      date: "2024-01-10",
      category: "Démarches",
      image: "🛂",
      views: 980,
      comments: 15,
      readTime: "6 min",
      tags: ["Visa", "Démarches", "Immigration"]
    }
  ]

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
  }

  const categories = [
    { id: 'tous', label: 'Tous les articles', count: articles.length },
    { id: 'Orientation', label: 'Orientation', count: articles.filter(a => a.category === 'Orientation').length },
    { id: 'Démarches', label: 'Démarches', count: articles.filter(a => a.category === 'Démarches').length },
    { id: 'Vie étudiante', label: 'Vie étudiante', count: articles.filter(a => a.category === 'Vie étudiante').length },
    { id: 'Emploi', label: 'Emploi', count: articles.filter(a => a.category === 'Emploi').length },
    { id: 'Financement', label: 'Financement', count: articles.filter(a => a.category === 'Financement').length }
  ]

  // Trier du plus récent au plus ancien
  const articlesSorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))

  const articlesFiltres = articlesSorted.filter(article => {
    const matchCategory = selectedCategory === 'tous' || article.category === selectedCategory
    const haystack = (article.title + ' ' + article.excerpt + ' ' + (article.tags || []).join(' ')).toLowerCase()
    const matchSearch = haystack.includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  const articlesPopulaires = [...articlesSorted].sort((a, b) => b.views - a.views).slice(0, 3)

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
                  <div className="text-3xl font-bold text-blue-800">{articles.length}</div>
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
