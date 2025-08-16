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
  Filter
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Orientation() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('tous')

  const formations = [
    {
      type: "BTS",
      title: "Brevet de Technicien Supérieur",
      duration: "2 ans",
      description: "Formation professionnalisante avec stages",
      features: ["Bac+2", "Professionnalisant", "Stages obligatoires", "Insertion rapide"],
      link: "https://www.onisep.fr/Formation-et-handicap/Mes-etudes-apres-le-bac/Etudes-superieures/Les-BTS"
    },
    {
      type: "Licence",
      title: "Licence universitaire",
      duration: "3 ans",
      description: "Formation académique avec spécialisation progressive",
      features: ["Bac+3", "Académique", "Recherche", "Poursuite Master"],
      link: "https://www.enseignementsup-recherche.gouv.fr/fr/licence-0"
    },
    {
      type: "Master",
      title: "Master universitaire",
      duration: "2 ans",
      description: "Spécialisation avancée et recherche",
      features: ["Bac+5", "Spécialisation", "Recherche", "Doctorat"],
      link: "https://www.enseignementsup-recherche.gouv.fr/fr/master-0"
    },
    {
      type: "CAP",
      title: "Certificat d'Aptitude Professionnelle",
      duration: "1-2 ans",
      description: "Formation professionnelle qualifiante",
      features: ["Niveau 3", "Professionnel", "Pratique", "Insertion directe"],
      link: "https://www.onisep.fr/Formation-et-handicap/Mes-etudes-apres-le-bac/Etudes-superieures/Les-CAP"
    },
    {
      type: "Titre Pro",
      title: "Titre professionnel",
      duration: "6-12 mois",
      description: "Formation courte et ciblée",
      features: ["Reconversion", "Court", "Ciblé", "Certification"],
      link: "https://travail-emploi.gouv.fr/formation-professionnelle/certification-competences-professionnelles/titre-professionnel"
    }
  ]

  const calendrier = [
    {
      periode: "Janvier - Mars 2025",
      evenements: [
        "Ouverture Parcoursup (22 janvier)",
        "Saisie des vœux (jusqu'au 9 mars)",
        "Finalisation des dossiers (jusqu'au 6 avril)"
      ]
    },
    {
      periode: "Avril - Mai 2025",
      evenements: [
        "Réception des réponses (2 mai - 19 juillet)",
        "Phase d'admission principale",
        "Confirmation des vœux"
      ]
    },
    {
      periode: "Juin - Juillet 2025",
      evenements: [
        "Phase complémentaire (15 juin)",
        "Dernières admissions",
        "Préparation rentrée"
      ]
    }
  ]

  const universites = [
    {
      nom: "Université Paris-Sorbonne",
      ville: "Paris",
      specialites: ["Lettres", "Langues", "Histoire"],
      lien: "https://www.sorbonne-universite.fr"
    },
    {
      nom: "Université Paris-Dauphine",
      ville: "Paris",
      specialites: ["Économie", "Gestion", "Mathématiques"],
      lien: "https://dauphine.psl.eu"
    },
    {
      nom: "Université Lyon 1",
      ville: "Lyon",
      specialites: ["Sciences", "Médecine", "Sport"],
      lien: "https://www.univ-lyon1.fr"
    },
    {
      nom: "Université Aix-Marseille",
      ville: "Marseille",
      specialites: ["Droit", "Économie", "Sciences"],
      lien: "https://www.univ-amu.fr"
    },
    {
      nom: "Université de Strasbourg",
      ville: "Strasbourg",
      specialites: ["Droit", "Médecine", "Sciences"],
      lien: "https://www.unistra.fr"
    }
  ]

  const filteredFormations = formations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'tous' || formation.type === selectedType
    return matchesSearch && matchesType
  })

  const filteredUniversites = universites.filter(universite => {
    return universite.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
           universite.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
           universite.specialites.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Orientation</h1>
              <p className="text-gray-600 mt-1">Trouvez votre voie parmi les formations françaises</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barre de recherche */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Rechercher une formation, une université, une ville..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
          
          {/* Filtres */}
          <div className="flex flex-wrap gap-2 mt-4">
            <Button
              variant={selectedType === 'tous' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('tous')}
            >
              Tous
            </Button>
            {formations.map(formation => (
              <Button
                key={formation.type}
                variant={selectedType === formation.type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType(formation.type)}
              >
                {formation.type}
              </Button>
            ))}
          </div>
        </div>

        {/* Calendrier Parcoursup */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-blue-600" />
            Calendrier Parcoursup 2025
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {calendrier.map((periode, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{periode.periode}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {periode.evenements.map((evenement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{evenement}</span>
                      </li>
                    ))}
                  </ul>
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
        </div>

        {/* Formations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
            Types de formations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFormations.map((formation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {formation.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {formation.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{formation.title}</CardTitle>
                  <CardDescription>{formation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {formation.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <a href={formation.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        En savoir plus
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Universités */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Building className="h-6 w-6 mr-2 text-blue-600" />
            Universités populaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversites.map((universite, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{universite.nom}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {universite.ville}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Spécialités :</p>
                      <div className="flex flex-wrap gap-1">
                        {universite.specialites.map((specialite, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialite}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <a href={universite.lien} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Site officiel
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conseils */}
        <div className="bg-blue-50 rounded-lg p-6">
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
      </div>
    </div>
  )
}

export default Orientation
