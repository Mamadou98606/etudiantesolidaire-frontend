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
  Building,
  TrendingUp,
  BarChart3,
  Star,
  Globe,
  Target,
  Calculator,
  FileText
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Etudes() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('tous')
  const [selectedCity, setSelectedCity] = useState('tous')
  const [selectedFormation, setSelectedFormation] = useState('tous')

  // Formations disponibles
  const formations = [
    {
      type: "BTS",
      nom: "BTS Commerce International",
      etablissement: "Lycée Jean-Baptiste Say",
      ville: "Paris",
      duree: "2 ans",
      niveau: "Bac+2",
      description: "Formation en commerce international avec stages à l'étranger",
      specialites: ["Commerce", "International", "Langues", "Marketing"],
      tauxReussite: "85%",
      tauxInsertion: "92%",
      salaireMoyen: "28000€",
      cout: "Gratuit",
      lien: "https://www.lycee-jean-baptiste-say.fr",
      statistiques: {
        etudiants: 120,
        enseignants: 15,
        partenariats: 25
      }
    },
    {
      type: "Licence",
      nom: "Licence Économie et Gestion",
      etablissement: "Université Paris 1 Panthéon-Sorbonne",
      ville: "Paris",
      duree: "3 ans",
      niveau: "Bac+3",
      description: "Formation en économie et gestion avec spécialisation progressive",
      specialites: ["Économie", "Gestion", "Finance", "Statistiques"],
      tauxReussite: "78%",
      tauxInsertion: "88%",
      salaireMoyen: "32000€",
      cout: "170€/an (UE)",
      lien: "https://www.pantheonsorbonne.fr",
      statistiques: {
        etudiants: 450,
        enseignants: 45,
        partenariats: 60
      }
    },
    {
      type: "Master",
      nom: "Master Marketing Digital",
      etablissement: "Université Paris-Dauphine",
      ville: "Paris",
      duree: "2 ans",
      niveau: "Bac+5",
      description: "Formation spécialisée en marketing digital et transformation numérique",
      specialites: ["Marketing", "Digital", "Data", "E-commerce"],
      tauxReussite: "92%",
      tauxInsertion: "95%",
      salaireMoyen: "45000€",
      cout: "243€/an (UE)",
      lien: "https://dauphine.psl.eu",
      statistiques: {
        etudiants: 80,
        enseignants: 20,
        partenariats: 40
      }
    },
    {
      type: "CAP",
      nom: "CAP Cuisine",
      etablissement: "Lycée Hôtelier de Paris",
      ville: "Paris",
      duree: "2 ans",
      niveau: "Niveau V",
      description: "Formation professionnelle en cuisine et arts culinaires",
      specialites: ["Cuisine", "Pâtisserie", "Service", "Hôtellerie"],
      tauxReussite: "88%",
      tauxInsertion: "96%",
      salaireMoyen: "22000€",
      cout: "Gratuit",
      lien: "https://www.lycee-hotelier-paris.fr",
      statistiques: {
        etudiants: 60,
        enseignants: 12,
        partenariats: 30
      }
    },
    {
      type: "Titre Pro",
      nom: "Développeur Web",
      etablissement: "École 42",
      ville: "Paris",
      duree: "1 an",
      niveau: "Bac+2",
      description: "Formation intensive en développement web et programmation",
      specialites: ["Programmation", "Web", "Base de données", "Frameworks"],
      tauxReussite: "75%",
      tauxInsertion: "98%",
      salaireMoyen: "38000€",
      cout: "Gratuit",
      lien: "https://42.fr",
      statistiques: {
        etudiants: 200,
        enseignants: 25,
        partenariats: 50
      }
    }
  ]

  // Comparateur de formations
  const comparateurFormations = [
    {
      critere: "Durée",
      BTS: "2 ans",
      Licence: "3 ans",
      Master: "2 ans",
      CAP: "2 ans",
      "Titre Pro": "6-12 mois"
    },
    {
      critere: "Niveau",
      BTS: "Bac+2",
      Licence: "Bac+3",
      Master: "Bac+5",
      CAP: "Niveau V",
      "Titre Pro": "Variable"
    },
    {
      critere: "Coût (public)",
      BTS: "Gratuit",
      Licence: "170€/an",
      Master: "243€/an",
      CAP: "Gratuit",
      "Titre Pro": "Variable"
    },
    {
      critere: "Insertion pro",
      BTS: "92%",
      Licence: "88%",
      Master: "95%",
      CAP: "96%",
      "Titre Pro": "98%"
    },
    {
      critere: "Poursuite études",
      BTS: "Licence Pro",
      Licence: "Master",
      Master: "Doctorat",
      CAP: "Bac Pro",
      "Titre Pro": "Formation continue"
    }
  ]

  // Témoignages par formation
  const temoignages = [
    {
      formation: "BTS",
      nom: "Aminata K.",
      pays: "Sénégal",
      formation: "BTS Commerce International",
      temoignage: "Le BTS m'a permis d'acquérir des compétences pratiques et de trouver un emploi rapidement.",
      note: 5,
      date: "2024"
    },
    {
      formation: "Licence",
      nom: "Mohamed B.",
      pays: "Maroc",
      formation: "Licence Économie",
      temoignage: "Excellente formation théorique et pratique. Les professeurs sont très disponibles.",
      note: 5,
      date: "2024"
    },
    {
      formation: "Master",
      nom: "Fatou D.",
      pays: "Mali",
      formation: "Master Marketing",
      temoignage: "Formation de qualité avec de nombreux projets concrets. Insertion professionnelle réussie.",
      note: 5,
      date: "2024"
    },
    {
      formation: "CAP",
      nom: "Ibrahim T.",
      pays: "Côte d'Ivoire",
      formation: "CAP Cuisine",
      temoignage: "Formation pratique et professionnalisante. J'ai trouvé un emploi dans un restaurant étoilé.",
      note: 5,
      date: "2024"
    }
  ]

  // Statistiques d'insertion
  const statistiquesInsertion = [
    {
      formation: "BTS",
      tauxInsertion: 92,
      salaireMoyen: 28000,
      delaiMoyen: "3 mois",
      secteurs: ["Commerce", "Services", "Industrie"]
    },
    {
      formation: "Licence",
      tauxInsertion: 88,
      salaireMoyen: 32000,
      delaiMoyen: "4 mois",
      secteurs: ["Administration", "Services", "Éducation"]
    },
    {
      formation: "Master",
      tauxInsertion: 95,
      salaireMoyen: 45000,
      delaiMoyen: "2 mois",
      secteurs: ["Consulting", "Finance", "Tech"]
    },
    {
      formation: "CAP",
      tauxInsertion: 96,
      salaireMoyen: 22000,
      delaiMoyen: "1 mois",
      secteurs: ["Artisanat", "Services", "Hôtellerie"]
    }
  ]

  // Liens formations
  const liensFormations = [
    {
      category: "Établissements publics",
      links: [
        {
          name: "Université Paris 1 Panthéon-Sorbonne",
          url: "https://www.pantheonsorbonne.fr",
          description: "Droit, économie, gestion, sciences humaines"
        },
        {
          name: "Université Paris-Dauphine",
          url: "https://dauphine.psl.eu",
          description: "Sciences des organisations"
        },
        {
          name: "Sorbonne Université",
          url: "https://www.sorbonne-universite.fr",
          description: "Lettres, sciences, médecine"
        },
        {
          name: "École 42",
          url: "https://42.fr",
          description: "Formation informatique gratuite"
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
      category: "Ressources",
      links: [
        {
          name: "Onisep",
          url: "https://www.onisep.fr",
          description: "Informations sur les formations"
        },
        {
          name: "Campus France",
          url: "https://www.campusfrance.org/fr",
          description: "Étudier en France"
        },
        {
          name: "Service Public",
          url: "https://www.service-public.fr/particuliers/vosdroits/N35893",
          description: "Informations officielles"
        },
        {
          name: "Parcoursup",
          url: "https://www.parcoursup.fr",
          description: "Inscription dans l'enseignement supérieur"
        }
      ]
    }
  ]

  // Filtrage des formations
  const formationsFiltrees = formations.filter(formation => {
    const matchSearch = formation.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       formation.etablissement.toLowerCase().includes(searchTerm.toLowerCase())
    const matchType = selectedType === 'tous' || formation.type === selectedType
    const matchCity = selectedCity === 'tous' || formation.ville === selectedCity
    const matchFormation = selectedFormation === 'tous' || formation.nom === selectedFormation
    
    return matchSearch && matchType && matchCity && matchFormation
  })

  const typesFormation = ['tous', ...Array.from(new Set(formations.map(f => f.type)))]
  const villes = ['tous', ...Array.from(new Set(formations.map(f => f.ville)))]
  const nomsFormations = ['tous', ...formations.map(f => f.nom)]

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Études en France</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez les formations disponibles et comparez-les
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2" />
                L'excellence académique française
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-indigo-700 leading-relaxed mb-4">
                La France dispose d'un système éducatif reconnu mondialement avec des universités 
                prestigieuses, des grandes écoles et des formations professionnelles de qualité.
              </p>
              <p className="text-lg text-indigo-700 leading-relaxed">
                Explorez nos formations, comparez-les et trouvez celle qui correspond à vos ambitions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Système de recherche avancé */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <Search className="h-6 w-6 mr-2" />
                Rechercher une formation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium text-blue-700 mb-2 block">Recherche libre</label>
                  <Input
                    placeholder="Nom formation, établissement..."
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
                <div>
                  <label className="text-sm font-medium text-blue-700 mb-2 block">Formation spécifique</label>
                  <select
                    value={selectedFormation}
                    onChange={(e) => setSelectedFormation(e.target.value)}
                    className="w-full p-2 border border-blue-300 rounded-md"
                  >
                    {nomsFormations.map(formation => (
                      <option key={formation} value={formation}>
                        {formation === 'tous' ? 'Toutes les formations' : formation}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Formations disponibles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Formations disponibles ({formationsFiltrees.length})
          </h2>
          <div className="space-y-6">
            {formationsFiltrees.map((formation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Badge variant="default" className="text-lg px-4 py-2">
                        {formation.type}
                      </Badge>
                      <div>
                        <CardTitle className="text-xl">{formation.nom}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="outline">
                            <Building className="h-3 w-3 mr-1" />
                            {formation.etablissement}
                          </Badge>
                          <Badge variant="outline">
                            <MapPin className="h-3 w-3 mr-1" />
                            {formation.ville}
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {formation.duree}
                          </Badge>
                        </div>
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
                      <div className="flex flex-wrap gap-2">
                        {formation.specialites.map((specialite, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialite}
                          </Badge>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold mb-3 mt-4">Statistiques :</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Taux de réussite :</span>
                          <p className="text-green-600 font-semibold">{formation.tauxReussite}</p>
                        </div>
                        <div>
                          <span className="font-medium">Taux d'insertion :</span>
                          <p className="text-blue-600 font-semibold">{formation.tauxInsertion}</p>
                        </div>
                        <div>
                          <span className="font-medium">Salaire moyen :</span>
                          <p className="text-purple-600 font-semibold">{formation.salaireMoyen}</p>
                        </div>
                        <div>
                          <span className="font-medium">Coût :</span>
                          <p className="text-orange-600 font-semibold">{formation.cout}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Informations pratiques :</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-blue-600" />
                          <span><strong>Étudiants :</strong> {formation.statistiques.etudiants}</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2 text-green-600" />
                          <span><strong>Enseignants :</strong> {formation.statistiques.enseignants}</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-purple-600" />
                          <span><strong>Partenariats :</strong> {formation.statistiques.partenariats}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button asChild className="w-full" variant="outline">
                          <a href={formation.lien} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Site officiel
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Comparateur de formations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Comparateur de formations</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Critères</th>
                      <th className="text-center p-2 font-semibold">BTS</th>
                      <th className="text-center p-2 font-semibold">Licence</th>
                      <th className="text-center p-2 font-semibold">Master</th>
                      <th className="text-center p-2 font-semibold">CAP</th>
                      <th className="text-center p-2 font-semibold">Titre Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparateurFormations.map((ligne, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-2 font-medium">{ligne.critere}</td>
                        <td className="p-2 text-center">{ligne.BTS}</td>
                        <td className="p-2 text-center">{ligne.Licence}</td>
                        <td className="p-2 text-center">{ligne.Master}</td>
                        <td className="p-2 text-center">{ligne.CAP}</td>
                        <td className="p-2 text-center">{ligne["Titre Pro"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Statistiques d'insertion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Statistiques d'insertion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistiquesInsertion.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{stat.formation}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Taux d'insertion</span>
                      <Badge variant="default" className="text-green-600">
                        {stat.tauxInsertion}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Salaire moyen</span>
                      <span className="font-semibold">{stat.salaireMoyen}€</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Délai moyen</span>
                      <span className="font-semibold">{stat.delaiMoyen}</span>
                    </div>
                    <div>
                      <span className="text-sm">Secteurs principaux :</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {stat.secteurs.map((secteur, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {secteur}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Témoignages par formation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Témoignages d'étudiants</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {temoignages.map((temoignage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{temoignage.nom}</CardTitle>
                      <CardDescription>
                        {temoignage.pays} • {temoignage.formation} • {temoignage.date}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      {[...Array(temoignage.note)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{temoignage.temoignage}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Liens formations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Liens utiles</h2>
          
          {liensFormations.map((category, categoryIndex) => (
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

        {/* Conseils pour choisir */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Conseils pour bien choisir</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Avant de choisir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Définissez vos objectifs professionnels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Consultez les taux d'insertion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Vérifiez les prérequis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Évaluez les coûts et financements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Pour votre dossier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Préparez un CV adapté au format français</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Rédigez une lettre de motivation personnalisée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Rassemblez tous vos justificatifs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Respectez les dates limites</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Besoin d'aide pour choisir votre formation ?</CardTitle>
              <CardDescription className="text-indigo-100">
                Nos conseillers vous accompagnent dans votre choix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Prendre rendez-vous
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  Télécharger nos guides
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Etudes
