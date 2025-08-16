import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx'
import { CheckCircle, ArrowRight, ArrowLeft, GraduationCap, BookOpen, Users, Award, Download, Save, AlertCircle, Info, BarChart3, ExternalLink } from 'lucide-react'
import { Badge } from './ui/badge.jsx'
import { Button } from './ui/button.jsx'
import { Input } from './ui/input.jsx'
import { 
  Search, 
  GraduationCap, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowLeft,
  ExternalLink,
  Filter
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function FichesMetiers() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSector, setSelectedSector] = useState('tous')

  const metiers = [
    // INFORMATIQUE
    {
      id: 1,
      nom: "Développeur Web",
      secteur: "informatique",
      description: "Conçoit et développe des sites web et applications",
      formations: ["BTS Informatique", "Licence Informatique", "Titre professionnel Développeur Web"],
      duree: "2-3 ans",
      salaire: "2500-4500€",
      competences: ["HTML/CSS", "JavaScript", "React", "Node.js"],
      qualites: ["Logique", "Créatif", "Autonome", "Curieux"],
      evolution: ["Lead Developer", "Architecte", "Chef de projet"],
      icon: "💻"
    },
    {
      id: 2,
      nom: "Data Scientist",
      secteur: "informatique",
      description: "Analyse et interprète des données massives",
      formations: ["Master Data Science", "Licence Mathématiques", "École d'ingénieur"],
      duree: "5 ans",
      salaire: "3500-6000€",
      competences: ["Python", "R", "Machine Learning", "Statistiques"],
      qualites: ["Analytique", "Rigoureux", "Curieux", "Logique"],
      evolution: ["Lead Data Scientist", "Chief Data Officer", "Consultant"],
      icon: "📊"
    },
    {
      id: 3,
      nom: "Administrateur Système",
      secteur: "informatique",
      description: "Gère et maintient les infrastructures informatiques",
      formations: ["BTS Informatique", "Licence Informatique", "Titre professionnel"],
      duree: "2-3 ans",
      salaire: "2800-5000€",
      competences: ["Linux", "Windows Server", "Réseaux", "Sécurité"],
      qualites: ["Méthodique", "Réactif", "Autonome", "Technique"],
      evolution: ["Architecte système", "Directeur IT", "Consultant"],
      icon: "🖥️"
    },
    {
      id: 4,
      nom: "Expert Cybersécurité",
      secteur: "informatique",
      description: "Protège les systèmes informatiques contre les menaces",
      formations: ["Master Cybersécurité", "École d'ingénieur", "Certifications"],
      duree: "5 ans",
      salaire: "4000-7000€",
      competences: ["Sécurité réseau", "Cryptographie", "Audit", "Forensics"],
      qualites: ["Vigilant", "Analytique", "Éthique", "Curieux"],
      evolution: ["CISO", "Consultant senior", "Expert indépendant"],
      icon: "🔒"
    },
    {
      id: 5,
      nom: "Développeur Mobile",
      secteur: "informatique",
      description: "Crée des applications pour smartphones et tablettes",
      formations: ["BTS Informatique", "Licence Informatique", "École spécialisée"],
      duree: "2-3 ans",
      salaire: "2800-5000€",
      competences: ["Swift", "Kotlin", "React Native", "Flutter"],
      qualites: ["Créatif", "Technique", "Adaptable", "Précis"],
      evolution: ["Lead Mobile", "Architecte mobile", "Freelance"],
      icon: "📱"
    },

    // COMMERCE
    {
      id: 6,
      nom: "Commercial",
      secteur: "commerce",
      description: "Développe la clientèle et vend des produits/services",
      formations: ["BTS Commerce", "Licence Économie", "Titre professionnel Commercial"],
      duree: "2-3 ans",
      salaire: "2000-4000€ + commissions",
      competences: ["Négociation", "CRM", "Techniques de vente", "Communication"],
      qualites: ["Persuasif", "Dynamique", "Résistant au stress", "Sociable"],
      evolution: ["Chef de secteur", "Directeur commercial", "Directeur des ventes"],
      icon: "💼"
    },
    {
      id: 7,
      nom: "Chef de Projet",
      secteur: "commerce",
      description: "Pilote et coordonne des projets d'entreprise",
      formations: ["Master Management", "École de commerce", "Licence + expérience"],
      duree: "5 ans",
      salaire: "3500-6000€",
      competences: ["Gestion de projet", "Management", "Communication", "Planification"],
      qualites: ["Leader", "Organisé", "Décideur", "Communicant"],
      evolution: ["Directeur de projet", "Directeur général", "Consultant"],
      icon: "📋"
    },
    {
      id: 8,
      nom: "Analyste Financier",
      secteur: "commerce",
      description: "Analyse les données financières pour conseiller les investissements",
      formations: ["Master Finance", "École de commerce", "Licence Économie"],
      duree: "5 ans",
      salaire: "3500-6000€",
      competences: ["Excel", "Analyse financière", "Modélisation", "Réglementation"],
      qualites: ["Analytique", "Rigoureux", "Curieux", "Stressé"],
      evolution: ["Directeur financier", "Trader", "Consultant"],
      icon: "📈"
    },
    {
      id: 9,
      nom: "Responsable Marketing",
      secteur: "commerce",
      description: "Élabore et met en œuvre des stratégies marketing",
      formations: ["Master Marketing", "École de commerce", "Licence Marketing"],
      duree: "5 ans",
      salaire: "3000-5500€",
      competences: ["Stratégie", "Digital", "Analytics", "Créativité"],
      qualites: ["Créatif", "Analytique", "Communicant", "Adaptable"],
      evolution: ["Directeur marketing", "CMO", "Consultant"],
      icon: "🎯"
    },
    {
      id: 10,
      nom: "Chargé de Recrutement",
      secteur: "commerce",
      description: "Recrute et sélectionne les candidats pour l'entreprise",
      formations: ["Master RH", "École de commerce", "Licence Psychologie"],
      duree: "5 ans",
      salaire: "2500-4500€",
      competences: ["Entretien", "Évaluation", "Communication", "Organisation"],
      qualites: ["Empathique", "Objectif", "Organisé", "Discret"],
      evolution: ["Directeur RH", "Consultant RH", "Freelance"],
      icon: "👥"
    },

    // SANTÉ
    {
      id: 11,
      nom: "Infirmier(ère)",
      secteur: "sante",
      description: "Soigne et accompagne les patients",
      formations: ["IFSI (Institut de Formation en Soins Infirmiers)"],
      duree: "3 ans",
      salaire: "2000-3500€",
      competences: ["Soins", "Relationnel", "Techniques médicales", "Hygiène"],
      qualites: ["Empathique", "Rigoureux", "Résistant", "Altruiste"],
      evolution: ["Cadre de santé", "Infirmier spécialisé", "Directeur de soins"],
      icon: "🏥"
    },
    {
      id: 12,
      nom: "Kinésithérapeute",
      secteur: "sante",
      description: "Rééduque et soigne par le mouvement",
      formations: ["IFMK (Institut de Formation en Masso-Kinésithérapie)"],
      duree: "4 ans",
      salaire: "2500-5000€",
      competences: ["Anatomie", "Techniques de rééducation", "Relationnel", "Diagnostic"],
      qualites: ["Patient", "Empathique", "Physique", "Scientifique"],
      evolution: ["Cabinet libéral", "Spécialisation", "Formateur"],
      icon: "💪"
    },
    {
      id: 13,
      nom: "Psychologue",
      secteur: "sante",
      description: "Accompagne les personnes dans leur bien-être mental",
      formations: ["Master Psychologie", "Licence Psychologie + Master"],
      duree: "5 ans",
      salaire: "2000-4000€",
      competences: ["Écoute", "Analyse", "Thérapies", "Éthique"],
      qualites: ["Empathique", "Patient", "Discret", "Équilibré"],
      evolution: ["Psychothérapeute", "Cabinet libéral", "Chercheur"],
      icon: "🧠"
    },
    {
      id: 14,
      nom: "Assistant(e) Social(e)",
      secteur: "sante",
      description: "Aide les personnes en difficulté sociale",
      formations: ["DEASS (Diplôme d'État d'Assistant de Service Social)"],
      duree: "3 ans",
      salaire: "1800-3000€",
      competences: ["Accompagnement", "Droit social", "Écoute", "Organisation"],
      qualites: ["Empathique", "Patient", "Organisé", "Altruiste"],
      evolution: ["Chef de service", "Directeur", "Consultant"],
      icon: "🤝"
    },
    {
      id: 15,
      nom: "Pharmacien",
      secteur: "sante",
      description: "Délivre des médicaments et conseille les patients",
      formations: ["Doctorat en Pharmacie"],
      duree: "6 ans",
      salaire: "3000-6000€",
      competences: ["Médicaments", "Conseil", "Gestion", "Sécurité"],
      qualites: ["Rigoureux", "Scientifique", "Responsable", "Accueillant"],
      evolution: ["Pharmacien d'officine", "Industrie pharmaceutique", "Hospitalier"],
      icon: "💊"
    },

    // CRÉATIF
    {
      id: 16,
      nom: "Designer Graphique",
      secteur: "creatif",
      description: "Crée des supports visuels et identités de marque",
      formations: ["BTS Design", "Licence Arts", "École d'art"],
      duree: "2-5 ans",
      salaire: "2000-4000€",
      competences: ["Photoshop", "Illustrator", "InDesign", "Créativité"],
      qualites: ["Créatif", "Sensible", "Organisé", "Curieux"],
      evolution: ["Directeur artistique", "Freelance", "Chef de projet"],
      icon: "🎨"
    },
    {
      id: 17,
      nom: "Chef Cuisinier",
      secteur: "creatif",
      description: "Crée et supervise la préparation des plats",
      formations: ["CAP Cuisine", "Bac Pro Cuisine", "École hôtelière"],
      duree: "2-3 ans",
      salaire: "2000-4000€",
      competences: ["Techniques culinaires", "Gestion d'équipe", "Créativité", "Hygiène"],
      qualites: ["Créatif", "Résistant", "Organisé", "Passionné"],
      evolution: ["Chef de cuisine", "Restaurateur", "Consultant culinaire"],
      icon: "👨‍🍳"
    },
    {
      id: 18,
      nom: "Coiffeur(se)",
      secteur: "creatif",
      description: "Soigne et coiffe les cheveux des clients",
      formations: ["CAP Coiffure", "Bac Pro Coiffure"],
      duree: "2 ans",
      salaire: "1500-3000€",
      competences: ["Techniques de coiffure", "Relationnel", "Créativité", "Hygiène"],
      qualites: ["Créatif", "Sociable", "Patient", "Précis"],
      evolution: ["Chef d'équipe", "Salon à son compte", "Formateur"],
      icon: "✂️"
    },
    {
      id: 19,
      nom: "Architecte",
      secteur: "creatif",
      description: "Conçoit et dessine des bâtiments et espaces",
      formations: ["École d'architecture", "Master Architecture"],
      duree: "5 ans",
      salaire: "2500-5000€",
      competences: ["Dessin", "Logiciels 3D", "Réglementation", "Créativité"],
      qualites: ["Créatif", "Technique", "Organisé", "Visionnaire"],
      evolution: ["Architecte en chef", "Agence à son compte", "Enseignant"],
      icon: "🏗️"
    },
    {
      id: 20,
      nom: "Photographe",
      secteur: "creatif",
      description: "Capture des images pour différents supports",
      formations: ["École de photo", "Formation professionnelle", "Autodidacte"],
      duree: "Variable",
      salaire: "1500-4000€",
      competences: ["Technique photo", "Retouche", "Créativité", "Relationnel"],
      qualites: ["Créatif", "Patient", "Observateur", "Adaptable"],
      evolution: ["Photographe spécialisé", "Studio à son compte", "Artiste"],
      icon: "📸"
    },

    // ENSEIGNEMENT
    {
      id: 21,
      nom: "Professeur des Écoles",
      secteur: "enseignement",
      description: "Enseigne aux enfants de 3 à 11 ans",
      formations: ["Master MEEF", "CRPE (Concours)"],
      duree: "5 ans",
      salaire: "2000-3500€",
      competences: ["Pédagogie", "Patience", "Organisation", "Polyvalence"],
      qualites: ["Patient", "Créatif", "Organisé", "Bienveillant"],
      evolution: ["Directeur d'école", "Inspecteur", "Formateur"],
      icon: "👨‍🏫"
    },
    {
      id: 22,
      nom: "Professeur de Collège/Lycée",
      secteur: "enseignement",
      description: "Enseigne une discipline spécifique aux adolescents",
      formations: ["Master MEEF", "CAPES ou Agrégation"],
      duree: "5 ans",
      salaire: "2000-4000€",
      competences: ["Pédagogie", "Discipline", "Organisation", "Autorité"],
      qualites: ["Patient", "Autoritaire", "Organisé", "Passionné"],
      evolution: ["Chef d'établissement", "Inspecteur", "Formateur"],
      icon: "📚"
    },

    // ENVIRONNEMENT
    {
      id: 23,
      nom: "Ingénieur Environnement",
      secteur: "environnement",
      description: "Développe des solutions pour protéger l'environnement",
      formations: ["École d'ingénieur", "Master Environnement"],
      duree: "5 ans",
      salaire: "3000-5500€",
      competences: ["Écologie", "Techniques", "Réglementation", "Innovation"],
      qualites: ["Engagé", "Technique", "Créatif", "Responsable"],
      evolution: ["Directeur environnement", "Consultant", "Chercheur"],
      icon: "🌱"
    },
    {
      id: 24,
      nom: "Technicien de l'Environnement",
      secteur: "environnement",
      description: "Surveille et protège les milieux naturels",
      formations: ["BTS Gestion et Protection de la Nature", "Licence Environnement"],
      duree: "2-3 ans",
      salaire: "1800-3000€",
      competences: ["Écologie", "Terrain", "Réglementation", "Observation"],
      qualites: ["Observateur", "Physique", "Patient", "Engagé"],
      evolution: ["Chef de projet", "Garde nature", "Consultant"],
      icon: "🌿"
    },

    // SPORT
    {
      id: 25,
      nom: "Éducateur Sportif",
      secteur: "sport",
      description: "Enseigne et encadre des activités sportives",
      formations: ["BPJEPS", "DEUST STAPS", "Licence STAPS"],
      duree: "1-3 ans",
      salaire: "1500-3000€",
      competences: ["Technique sportive", "Pédagogie", "Sécurité", "Motivation"],
      qualites: ["Dynamique", "Patient", "Motivant", "Physique"],
      evolution: ["Directeur de club", "Formateur", "Coach personnel"],
      icon: "🏃‍♂️"
    },
    {
      id: 26,
      nom: "Kinésithérapeute du Sport",
      secteur: "sport",
      description: "Soigne les sportifs et prévient les blessures",
      formations: ["IFMK + spécialisation sport"],
      duree: "4-5 ans",
      salaire: "2500-5000€",
      competences: ["Rééducation", "Sport", "Prévention", "Performance"],
      qualites: ["Physique", "Analytique", "Patient", "Passionné"],
      evolution: ["Kiné d'équipe", "Cabinet spécialisé", "Consultant"],
      icon: "⚽"
    }
  ]

  const secteurs = [
    { id: 'tous', nom: 'Tous les secteurs', icon: '🏢' },
    { id: 'informatique', nom: 'Informatique', icon: '💻' },
    { id: 'commerce', nom: 'Commerce', icon: '💼' },
    { id: 'sante', nom: 'Santé', icon: '🏥' },
    { id: 'creatif', nom: 'Créatif', icon: '🎨' },
    { id: 'enseignement', nom: 'Enseignement', icon: '👨‍🏫' },
    { id: 'environnement', nom: 'Environnement', icon: '🌱' },
    { id: 'sport', nom: 'Sport', icon: '🏃‍♂️' }
  ]

  const filteredMetiers = metiers.filter(metier => {
    const matchesSearch = metier.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         metier.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSector = selectedSector === 'tous' || metier.secteur === selectedSector
    return matchesSearch && matchesSector
  })

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <Button variant="outline" onClick={() => navigate('/orientation')} className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'orientation
        </Button>
        <h1 className="text-3xl font-bold mb-2">Fiches métiers</h1>
        <p className="text-muted-foreground">
          Découvrez {metiers.length} métiers d'avenir et leurs formations associées
        </p>
      </div>

      {/* Filtres */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher un métier..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate('/test-orientation')}>
            Test d'orientation
          </Button>
        </div>

        {/* Filtres par secteur */}
        <div className="flex flex-wrap gap-2">
          {secteurs.map((secteur) => (
            <Button
              key={secteur.id}
              variant={selectedSector === secteur.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSector(secteur.id)}
            >
              <span className="mr-1">{secteur.icon}</span>
              {secteur.nom}
            </Button>
          ))}
        </div>
      </div>

      {/* Résultats */}
      <div className="mb-4">
        <p className="text-sm text-muted-foreground">
          {filteredMetiers.length} métier{filteredMetiers.length > 1 ? 's' : ''} trouvé{filteredMetiers.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Grille des métiers */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMetiers.map((metier) => (
          <Card key={metier.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{metier.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{metier.nom}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {secteurs.find(s => s.id === metier.secteur)?.nom}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{metier.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    Formations
                  </h4>
                  <ul className="text-xs space-y-1">
                    {metier.formations.map((formation, idx) => (
                      <li key={idx} className="text-muted-foreground">• {formation}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <h4 className="font-semibold mb-1 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      Durée
                    </h4>
                    <p className="text-muted-foreground">{metier.duree}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 flex items-center">
                      <DollarSign className="h-3 w-3 mr-1" />
                      Salaire
                    </h4>
                    <p className="text-muted-foreground">{metier.salaire}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Qualités requises
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {metier.qualites.map((qualite, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {qualite}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Évolutions possibles</h4>
                  <ul className="text-xs space-y-1">
                    {metier.evolution.map((evo, idx) => (
                      <li key={idx} className="text-muted-foreground">• {evo}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={`https://www.onisep.fr/decouvrir-les-metiers/${metier.nom.toLowerCase().replace(/\s+/g, '-')}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Plus d'infos
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lien vers Onisep */}
      <div className="mt-8 text-center">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Besoin de plus d'informations ?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Consultez la base complète de métiers sur Onisep
            </p>
            <Button asChild>
              <a href="https://www.onisep.fr/decouvrir-les-metiers" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Voir tous les métiers sur Onisep
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FichesMetiers
