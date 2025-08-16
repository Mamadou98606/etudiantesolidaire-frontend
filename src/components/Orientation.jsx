import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  GraduationCap,
  BookOpen,
  Award,
  Clock,
  Users,
  MapPin,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
  Calendar,
  Filter,
  Building
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Orientation() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('tous')
  const [selectedCity, setSelectedCity] = useState('tous')

  // Calendrier Parcoursup 2024-2025 (dates officielles)
  const calendrierParcoursup = [
    {
      date: "17 janvier 2024",
      evenement: "Ouverture de la plateforme",
      description: "Création du dossier et saisie des vœux",
      type: "debut"
    },
    {
      date: "14 mars 2024",
      evenement: "Clôture des vœux",
      description: "Dernier délai pour finaliser vos candidatures",
      type: "limite"
    },
    {
      date: "2 avril 2024",
      evenement: "Fin de saisie des éléments",
      description: "Dernier délai pour compléter votre dossier",
      type: "limite"
    },
    {
      date: "30 mai 2024",
      evenement: "Début des réponses",
      description: "Premières propositions d'admission",
      type: "reponse"
    },
    {
      date: "12 juillet 2024",
      evenement: "Fin de la procédure",
      description: "Dernier jour pour accepter une proposition",
      type: "fin"
    }
  ]

  const formations = [
    {
      type: "BTS",
      title: "Brevet de Technicien Supérieur",
      duration: "2 ans",
      level: "Bac+2",
      description: "Formation professionnalisante courte avec stage en entreprise",
      specialties: [
        "BTS Commerce International",
        "BTS Management Commercial Opérationnel",
        "BTS Comptabilité et Gestion",
        "BTS Communication",
        "BTS Tourisme",
        "BTS Informatique"
      ],
      requirements: "Baccalauréat ou équivalent",
      opportunities: "Insertion professionnelle directe ou poursuite en licence professionnelle",
      cost: "Gratuit dans le public, 3000-8000€/an dans le privé",
      cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nantes"]
    },
    {
      type: "Licence",
      title: "Licence universitaire",
      duration: "3 ans",
      level: "Bac+3",
      description: "Formation généraliste permettant d'acquérir des bases solides",
      specialties: [
        "Licence Économie et Gestion",
        "Licence Droit",
        "Licence Lettres et Langues",
        "Licence Sciences",
        "Licence Psychologie",
        "Licence STAPS"
      ],
      requirements: "Baccalauréat ou équivalent + dossier Parcoursup",
      opportunities: "Poursuite en Master ou insertion professionnelle",
      cost: "170€/an pour les étudiants UE, 2770€/an pour les non-UE",
      cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nantes", "Strasbourg", "Lille"]
    },
    {
      type: "Master",
      title: "Master universitaire",
      duration: "2 ans",
      level: "Bac+5",
      description: "Formation spécialisée de haut niveau avec recherche ou professionnalisation",
      specialties: [
        "Master Management",
        "Master Ingénierie",
        "Master Recherche",
        "Master Enseignement",
        "Master Droit des Affaires",
        "Master Marketing Digital"
      ],
      requirements: "Licence ou équivalent Bac+3 + dossier + entretien",
      opportunities: "Insertion professionnelle cadre ou poursuite en Doctorat",
      cost: "243€/an pour les étudiants UE, 3770€/an pour les non-UE",
      cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nantes", "Strasbourg", "Lille", "Grenoble"]
    },
    {
      type: "CAP",
      title: "Certificat d'Aptitude Professionnelle",
      duration: "2 ans",
      level: "Niveau V",
      description: "Formation professionnelle courte très spécialisée",
      specialties: [
        "CAP Cuisine",
        "CAP Pâtisserie",
        "CAP Coiffure",
        "CAP Électricien",
        "CAP Menuisier",
        "CAP Esthétique"
      ],
      requirements: "Niveau 3ème ou équivalent",
      opportunities: "Insertion professionnelle immédiate ou poursuite en Bac Pro",
      cost: "Gratuit dans le public, apprentissage rémunéré",
      cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nantes"]
    },
    {
      type: "Titre professionnel",
      title: "Titre professionnel certifié",
      duration: "6 mois à 2 ans",
      level: "Variable",
      description: "Formation courte axée sur l'employabilité immédiate",
      specialties: [
        "Développeur web",
        "Chef de projet digital",
        "Technicien informatique",
        "Assistant de direction",
        "Comptable",
        "Commercial"
      ],
      requirements: "Niveau variable selon la formation",
      opportunities: "Insertion professionnelle rapide",
      cost: "Gratuit à 8000€ selon formation",
      cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nantes"]
    }
  ]

  // Liens officiels vers les universités et établissements
  const liensOfficiels = [
    {
      category: "Plateformes officielles",
      links: [
        {
          name: "Parcoursup",
          url: "https://www.parcoursup.fr",
          description: "Plateforme nationale de préinscription"
        },
        {
          name: "Campus France",
          url: "https://www.campusfrance.org/fr/arriver-etudier-en-france",
          description: "Accompagnement des étudiants internationaux"
        },
        {
          name: "Service Public - Orientation",
          url: "https://www.service-public.fr/particuliers/vosdroits/N35893",
          description: "Informations officielles sur l'orientation"
        }
      ]
    },
    {
      category: "Universités parisiennes",
      links: [
        {
          name: "Sorbonne Université",
          url: "https://www.sorbonne-universite.fr",
          description: "Université pluridisciplinaire de recherche"
        },
        {
          name: "Université Paris-Dauphine",
          url: "https://dauphine.psl.eu",
          description: "Université spécialisée en sciences des organisations"
        },
        {
          name: "Université Paris 1 Panthéon-Sorbonne",
          url: "https://www.pantheonsorbonne.fr",
          description: "Université en droit, économie, gestion et sciences humaines"
        },
        {
          name: "Université Paris 8",
          url: "https://www.univ-paris8.fr",
          description: "Université en arts, lettres et sciences humaines"
        }
      ]
    },
    {
      category: "Grandes écoles",
      links: [
        {
          name: "HEC Paris",
          url: "https://www.hec.edu/fr",
          description: "École de commerce et management"
        },
        {
          name: "École Polytechnique",
          url: "https://www.polytechnique.edu/fr",
          description: "École d'ingénieurs"
        },
        {
          name: "Sciences Po Paris",
          url: "https://www.sciencespo.fr",
          description: "Institut d'études politiques"
        },
        {
          name: "ESSEC Business School",
          url: "https://www.essec.edu/fr",
          description: "École de commerce"
        }
      ]
    },
    {
      category: "Établissements spécialisés",
      links: [
        {
          name: "École 42",
          url: "https://42.fr",
          description: "Formation en informatique gratuite"
        },
        {
          name: "Les Gobelins",
          url: "https://www.gobelins.fr",
          description: "École de l'image"
        },
        {
          name: "ESMOD",
          url: "https://www.esmod.com/fr",
          description: "École de mode"
        },
        {
          name: "Institut Paul Bocuse",
          url: "https://www.institutpaulbocuse.com",
          description: "École de cuisine et hôtellerie"
        }
      ]
    }
  ]

  // Filtrage des formations
  const formationsFiltrees = formations.filter(formation => {
    const matchSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       formation.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchType = selectedType === 'tous' || formation.type === selectedType
    const matchCity = selectedCity === 'tous' || formation.cities.includes(selectedCity)
    return matchSearch && matchType && matchCity
  })

  const typesFormation = ['tous', ...formations.map(f => f.type)]
  const villes = ['tous', ...Array.from(new Set(formations.flatMap(f => f.cities)))]

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Orientation et choix de formation</h1>
          <p className="text-xl text-muted-foreground">
            Trouvez la formation qui correspond à votre projet professionnel
          </p>
        </div>

        {/* Système de recherche */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <Search className="h-6 w-6 mr-2" />
                Rechercher une formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-blue-700 mb-2 block">Recherche libre</label>
                  <Input
                    placeholder="Nom de formation, spécialité..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-blue-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-blue-700 mb-2 block">Type de formation</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border border-blue-300 rounded-md"
                  >
                    {typesFormation.map(type => (
                      <option key={type} value={type}>
                        {type === 'tous' ? 'Tous les types' : type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-blue-700 mb-2 block">Ville</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full p-2 border border-blue-300 rounded-md"
                  >
                    {villes.map(ville => (
                      <option key={ville} value={ville}>
                        {ville === 'tous' ? 'Toutes les villes' : ville}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Calendrier Parcoursup 2024-2025 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Calendrier Parcoursup 2024-2025</h2>
          <div className="space-y-4">
            {calendrierParcoursup.map((item, index) => (
              <Card key={index} className={`border-l-4 ${
                item.type === 'debut' ? 'border-l-green-500 bg-green-50' :
                item.type === 'limite' ? 'border-l-orange-500 bg-orange-50' :
                item.type === 'reponse' ? 'border-l-blue-500 bg-blue-50' :
                'border-l-red-500 bg-red-50'
              }`}>
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-5 w-5 text-gray-600" />
                      <div>
                        <p className="font-semibold">{item.evenement}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <Badge variant={
                      item.type === 'debut' ? 'default' :
                      item.type === 'limite' ? 'secondary' :
                      item.type === 'reponse' ? 'outline' : 'destructive'
                    }>
                      {item.type === 'debut' ? 'Ouverture' :
                       item.type === 'limite' ? 'Limite' :
                       item.type === 'reponse' ? 'Réponses' : 'Fin'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="https://www.parcoursup.fr" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Accéder à Parcoursup
              </a>
            </Button>
          </div>
        </section>

        {/* Formations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Formations disponibles ({formationsFiltrees.length})
          </h2>
          <div className="space-y-6">
            {formationsFiltrees.map((formation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="mb-2">{formation.type}</Badge>
                      <CardTitle className="text-xl">{formation.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          {formation.duration}
                        </Badge>
                        <Badge variant="secondary">
                          <Award className="h-3 w-3 mr-1" />
                          {formation.level}
                        </Badge>
                        <Badge variant="secondary">
                          <MapPin className="h-3 w-3 mr-1" />
                          {formation.cities.length} villes
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {formation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Spécialités :</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {formation.specialties.map((specialty, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                            {specialty}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Informations pratiques :</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Prérequis :</span> {formation.requirements}
                        </div>
                        <div>
                          <span className="font-medium">Débouchés :</span> {formation.opportunities}
                        </div>
                        <div>
                          <span className="font-medium">Coût :</span> {formation.cost}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Universités populaires */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Building className="h-6 w-6 mr-2 text-blue-600" />
            Universités populaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liensOfficiels.slice(1).flatMap(category => 
              category.links.map((universite, index) => (
                <Card key={`${category.category}-${index}`} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{universite.nom}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {category.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-700 mb-2">{universite.description}</p>
                      </div>
                      <Button asChild className="w-full" variant="outline">
                        <a href={universite.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Site officiel
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>

        {/* Liens officiels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Liens officiels</h2>
          {liensOfficiels.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.links.map((link, linkIndex) => (
                  <Card key={linkIndex} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <ExternalLink className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-blue-600 hover:text-blue-800 hover:underline block mb-1"
                          >
                            {link.name}
                          </a>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Conseils */}
        <div className="bg-blue-50 rounded-lg p-6 mb-16">
          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
            <Info className="h-5 w-5 mr-2" />
            Conseils pour bien choisir
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Avant de postuler :</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Vérifiez les prérequis exacts de chaque formation</li>
                <li>• Consultez les taux de réussite et d'insertion</li>
                <li>• Renseignez-vous sur les débouchés professionnels</li>
                <li>• Évaluez les coûts (frais de scolarité, logement)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Pour votre dossier :</h4>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Préparez un CV adapté au format français</li>
                <li>• Rédigez des lettres de motivation personnalisées</li>
                <li>• Rassemblez tous vos justificatifs à l'avance</li>
                <li>• Faites relire vos documents par un natif</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Besoin d'aide pour votre orientation ?</CardTitle>
              <CardDescription className="text-blue-100">
                Nos conseillers sont là pour vous accompagner dans vos choix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Prendre rendez-vous
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Faire le test d'orientation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Orientation
