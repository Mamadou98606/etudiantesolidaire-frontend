import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowLeft, 
  Star, 
  Quote,
  GraduationCap,
  MapPin,
  Calendar,
  Heart
} from 'lucide-react'

function Temoignages({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('tous')

  const temoignages = [
    {
      id: 1,
      nom: "Aminata K.",
      pays: "Sénégal",
      formation: "Master Marketing Digital",
      universite: "Université Paris-Dauphine",
      annee: "2023",
      note: 5,
      categorie: "master",
      photo: "👩🏾‍🎓",
      temoignage: "Grâce à etudiantesolidaire, j'ai pu naviguer facilement dans le système universitaire français. L'accompagnement pour les démarches administratives a été précieux. Aujourd'hui, je travaille dans une agence de communication parisienne !",
      points_forts: [
        "Accompagnement personnalisé",
        "Aide pour le logement",
        "Préparation aux entretiens"
      ]
    },
    {
      id: 2,
      nom: "Mohamed B.",
      pays: "Maroc",
      formation: "BTS Commerce International",
      universite: "Lycée Jean-Baptiste Say",
      annee: "2024",
      note: 5,
      categorie: "bts",
      photo: "👨🏽‍🎓",
      temoignage: "Le processus d'orientation m'a permis de choisir la formation parfaite pour mon projet professionnel. Les conseils pour Parcoursup ont été déterminants. Je recommande vivement !",
      points_forts: [
        "Orientation claire",
        "Suivi Parcoursup",
        "Conseils pratiques"
      ]
    },
    {
      id: 3,
      nom: "Fatou D.",
      pays: "Côte d'Ivoire",
      formation: "Licence Psychologie",
      universite: "Université Paris 8",
      annee: "2023",
      note: 5,
      categorie: "licence",
      photo: "👩🏿‍🎓",
      temoignage: "L'équipe m'a aidée à comprendre le système de santé français et à m'intégrer socialement. Les ateliers sur la vie étudiante ont été très utiles pour créer des liens.",
      points_forts: [
        "Intégration sociale",
        "Aide santé",
        "Ateliers pratiques"
      ]
    },
    {
      id: 4,
      nom: "Ibrahim S.",
      pays: "Mali",
      formation: "CAP Électricien",
      universite: "CFA du Bâtiment",
      annee: "2024",
      note: 4,
      categorie: "cap",
      photo: "👨🏾‍🔧",
      temoignage: "Même pour un CAP, l'accompagnement a été excellent. J'ai trouvé une entreprise pour mon apprentissage rapidement grâce aux conseils pour la recherche d'emploi.",
      points_forts: [
        "Recherche apprentissage",
        "CV professionnel",
        "Préparation entretiens"
      ]
    },
    {
      id: 5,
      nom: "Aïcha M.",
      pays: "Tunisie",
      formation: "Master Ingénierie",
      universite: "École Centrale Paris",
      annee: "2023",
      note: 5,
      categorie: "master",
      photo: "👩🏽‍💻",
      temoignage: "L'aide pour les démarches de visa et les premières semaines en France a été cruciale. Aujourd'hui ingénieure dans une startup tech, je suis reconnaissante pour cet accompagnement.",
      points_forts: [
        "Démarches visa",
        "Accueil en France",
        "Réseau professionnel"
      ]
    },
    {
      id: 6,
      nom: "Ousmane T.",
      pays: "Burkina Faso",
      formation: "Titre Pro Développeur Web",
      universite: "AFPA",
      annee: "2024",
      note: 5,
      categorie: "titre",
      photo: "👨🏿‍💻",
      temoignage: "La reconversion professionnelle n'a pas été facile, mais avec le soutien d'etudiantesolidaire, j'ai réussi ma formation et trouvé un emploi en développement web en 3 mois !",
      points_forts: [
        "Reconversion réussie",
        "Formation intensive",
        "Insertion rapide"
      ]
    }
  ]

  const categories = [
    { id: 'tous', label: 'Tous les témoignages', count: temoignages.length },
    { id: 'master', label: 'Master', count: temoignages.filter(t => t.categorie === 'master').length },
    { id: 'licence', label: 'Licence', count: temoignages.filter(t => t.categorie === 'licence').length },
    { id: 'bts', label: 'BTS', count: temoignages.filter(t => t.categorie === 'bts').length },
    { id: 'cap', label: 'CAP', count: temoignages.filter(t => t.categorie === 'cap').length },
    { id: 'titre', label: 'Titre Pro', count: temoignages.filter(t => t.categorie === 'titre').length }
  ]

  const temoignagesFiltres = selectedCategory === 'tous' 
    ? temoignages 
    : temoignages.filter(t => t.categorie === selectedCategory)

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
            onClick={onBack}
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
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">500+</div>
                  <div className="text-sm text-green-600">Étudiants accompagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">95%</div>
                  <div className="text-sm text-green-600">Taux de réussite</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-800">4.8/5</div>
                  <div className="text-sm text-green-600">Satisfaction moyenne</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Filtres */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Filtrer par formation</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className="flex items-center space-x-2"
              >
                <span>{cat.label}</span>
                <Badge variant="secondary" className="ml-2">
                  {cat.count}
                </Badge>
              </Button>
            ))}
          </div>
        </section>

        {/* Témoignages */}
        <section className="mb-16">
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
                    <h4 className="font-semibold text-sm mb-2">Points forts de l'accompagnement :</h4>
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

