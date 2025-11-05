import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
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
  Target,
  TrendingUp,
  Calendar,
  FileText
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Orientation() {
  const navigate = useNavigate()
  const [selectedFormation, setSelectedFormation] = useState(null)
  const [testStep, setTestStep] = useState(0)
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
      cost: "Gratuit dans le public, 3000-8000€/an dans le privé"
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
      cost: "170€/an pour les étudiants UE, 2770€/an pour les non-UE"
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
      cost: "243€/an pour les étudiants UE, 3770€/an pour les non-UE"
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
      cost: "Gratuit dans le public, apprentissage rémunéré"
    },
    {
      type: "Titre professionnel",
      title: "Titre professionnel certifié",
      duration: "6 mois à 2 ans",
      level: "Variable",
      description: "Formation courte axée sur l'employabilité immédiate",
      specialties: [
        "Développeur Web",
        "Assistant de Direction",
        "Technicien Réseau",
        "Gestionnaire de Paie",
        "Commercial",
        "Formateur Professionnel"
      ],
      requirements: "Variable selon le titre visé",
      opportunities: "Insertion professionnelle rapide dans le secteur visé",
      cost: "Variable, souvent pris en charge par les organismes de formation"
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Auto-évaluation",
      description: "Définissez vos objectifs, compétences et contraintes",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Recherche d'informations",
      description: "Explorez les formations et leurs débouchés",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Test d'orientation",
      description: "Utilisez nos outils pour affiner votre choix",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Candidature",
      description: "Préparez vos dossiers Parcoursup ou candidatures directes",
      icon: <Award className="h-6 w-6" />
    }
  ]

  const importantDates = [
    {
      date: "20 décembre 2024",
      event: "Ouverture de Parcoursup",
      type: "info"
    },
    {
      date: "17 janvier 2025",
      event: "Début des inscriptions Parcoursup",
      type: "warning"
    },
    {
      date: "14 mars 2025",
      event: "Fin des inscriptions Parcoursup",
      type: "alert"
    },
    {
      date: "3 avril 2025",
      event: "Fin de confirmation des vœux",
      type: "alert"
    },
    {
      date: "30 mai 2025",
      event: "Début des réponses Parcoursup",
      type: "info"
    }
  ]

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Orientation</h1>
          <p className="text-xl text-muted-foreground">
            Trouvez votre voie parmi les formations françaises et construisez votre projet d'études
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2" />
                Votre orientation, notre priorité
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-blue-700 leading-relaxed mb-4">
                L'orientation est une étape cruciale de votre parcours. En France, vous avez accès à un large éventail
                de formations, du CAP au Master, en passant par les BTS et les titres professionnels.
              </p>
              <p className="text-lg text-blue-700 leading-relaxed">
                Notre équipe vous accompagne pour identifier la formation qui correspond le mieux à vos aspirations,
                vos compétences et vos objectifs professionnels.
              </p>
            </CardContent>
          </Card>
        </section>



        {/* Types de formations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Types de formations disponibles</h2>
          <div className="space-y-8">
            {formations.map((formation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Badge variant="default" className="text-lg px-4 py-2">
                        {formation.type}
                      </Badge>
                      <div>
                        <CardTitle className="text-xl">{formation.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {formation.duration}
                          </Badge>
                          <Badge variant="outline">
                            <Award className="h-3 w-3 mr-1" />
                            {formation.level}
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
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Spécialités populaires
                      </h4>
                      <ul className="space-y-1">
                        {formation.specialties.map((specialty, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Conditions d'accès
                        </h4>
                        <p className="text-sm text-muted-foreground">{formation.requirements}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Débouchés
                        </h4>
                        <p className="text-sm text-muted-foreground">{formation.opportunities}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Info className="h-4 w-4 mr-2" />
                          Coût approximatif
                        </h4>
                        <p className="text-sm text-muted-foreground">{formation.cost}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>









        {/* Tests d'orientation officiels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <Target className="h-8 w-8 mr-2 text-green-600" />
            Découvrez Votre Voie avec des Tests Officiels
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Test ORI',
                description: 'Assistant IA personnalisé pour explorer vos formations et métiers',
                source: 'L\'Étudiant',
                url: 'https://ori.letudiant.fr/',
                icon: '🤖',
                features: ['Recommandations personnalisées', 'Parcours d\'études', 'Débouchés métiers']
              },
              {
                title: 'Quiz Métiers',
                description: 'Explorez 500+ métiers avec données ONISEP',
                source: 'ONISEP',
                url: 'https://www.onisep.fr/metier/quiz-quels-metiers-selon-mes-gouts',
                icon: '🎯',
                features: ['Quiz interactif', 'Fiches métiers détaillées', 'Formations associées']
              },
              {
                title: 'Conseil en ligne',
                description: 'Discutez avec des spécialistes orientation en direct',
                source: 'ONISEP',
                url: 'https://www.onisep.fr/mon-orientation-en-ligne',
                icon: '💬',
                features: ['Chat avec experts', 'Réponses personnalisées', 'Gratuit']
              }
            ].map((test, idx) => (
              <a key={idx} href={test.url} target="_blank" rel="noreferrer" className="hover:no-underline">
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="text-4xl mb-2">{test.icon}</div>
                    <CardTitle className="text-xl">{test.title}</CardTitle>
                    <CardDescription className="text-xs text-blue-600 font-semibold">Source: {test.source}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{test.description}</p>
                    <div className="space-y-1">
                      {test.features.map((feat, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                          {feat}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Essayer →</Button>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>        {/* Calendrier Parcoursup 2025-26 interactif */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <Calendar className="h-8 w-8 mr-2 text-blue-600" />
            Calendrier Parcoursup 2025-2026
          </h2>
          <div className="space-y-4">
            {[
              {
                date: '20 novembre 2024',
                title: 'Ouverture de Parcoursup',
                description: 'Consultez les formations, recherchez vos vœux, créez votre dossier',
                status: 'completed',
                actions: ['Créer mon compte', 'Consulter les formations']
              },
              {
                date: '17 janvier 2025',
                title: 'Ouverture des inscriptions',
                description: 'Commencez à ajouter vos vœux sur la plateforme',
                status: 'active',
                actions: ['Ajouter un vœu', 'Consulter mes vœux']
              },
              {
                date: '14 mars 2025',
                title: 'Fin des inscriptions',
                description: 'Dernier délai pour ajouter vos vœux (23h59)',
                status: 'upcoming',
                actions: ['Finaliser mes vœux']
              },
              {
                date: '3-4 avril 2025',
                title: 'Confirmation des vœux',
                description: 'Confirmer tous vos vœux et finaliser votre dossier',
                status: 'upcoming',
                actions: ['Confirmer mes vœux']
              },
              {
                date: '30 mai 2025',
                title: 'Premières réponses',
                description: 'Première étape de réponses des formations',
                status: 'upcoming',
                actions: ['Consulter mes réponses']
              },
              {
                date: 'juin 2025',
                title: 'Phase complémentaire',
                description: 'Accès aux places disponibles si première étape insuffisante',
                status: 'upcoming',
                actions: ['Ajouter des vœux']
              }
            ].map((event, idx) => (
              <Card key={idx} className={`border-l-4 ${
                event.status === 'completed' ? 'border-l-green-500 bg-green-50' :
                event.status === 'active' ? 'border-l-blue-500 bg-blue-50' :
                'border-l-gray-300 bg-gray-50'
              }`}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant={event.status === 'completed' ? 'default' : event.status === 'active' ? 'secondary' : 'outline'}>
                        {event.status === 'completed' ? '✓ Passé' : event.status === 'active' ? '● En cours' : '○ À venir'}
                      </Badge>
                      <p className="font-semibold text-sm mt-2">{event.date}</p>
                      <h3 className="font-bold text-lg mt-1">{event.title}</h3>
                      <p className="text-muted-foreground mt-2">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Débouchés professionnels par secteur (ONISEP) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 mr-2 text-green-600" />
            Débouchés Professionnels par Secteur (Données ONISEP 2024)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                secteur: 'Informatique & Tech',
                demande: 'TRÈS FORTE',
                couleur: 'from-blue-50 to-blue-100',
                salaire: '35-65k€/an',
                emploi: '92% en 6 mois',
                metiers: ['Développeur Web/Mobile', 'Data Scientist', 'Ingénieur Cybersécurité', 'Admin Réseau'],
                formation: 'Master Informatique, Ingénieur, BTS SIO',
                onisepLink: 'https://www.onisep.fr/formation/les-principaux-domaines-de-formation/informatique-et-telecoms'
              },
              {
                secteur: 'Santé & Social',
                demande: 'FORTE',
                couleur: 'from-red-50 to-red-100',
                salaire: '28-48k€/an',
                emploi: '88% en 6 mois',
                metiers: ['Infirmier', 'Aide-soignant', 'Psychologue', 'Travailleur Social'],
                formation: 'Licence Santé, BTS SP3S, Diplôme d\'État',
                onisepLink: 'https://www.onisep.fr/formation/les-principaux-domaines-de-formation/sante'
              },
              {
                secteur: 'Finance & Banque',
                demande: 'FORTE',
                couleur: 'from-green-50 to-green-100',
                salaire: '40-70k€/an',
                emploi: '85% en 6 mois',
                metiers: ['Analyste Financier', 'Gestionnaire Patrimoine', 'Contrôleur de Gestion', 'Auditeur'],
                formation: 'Master Finance, Licence Économie, BTS Comptabilité',
                onisepLink: 'https://www.onisep.fr/formation/les-principaux-domaines-de-formation/economie-commerce-gestion'
              },
              {
                secteur: 'Commerce & Marketing',
                demande: 'STABLE',
                couleur: 'from-yellow-50 to-yellow-100',
                salaire: '30-50k€/an',
                emploi: '80% en 6 mois',
                metiers: ['Commercial', 'Chef de Produit', 'Community Manager', 'Responsable Marketing'],
                formation: 'Master Commerce, Licence Gestion, BTS MCO',
                onisepLink: 'https://www.onisep.fr/formation/les-principaux-domaines-de-formation/economie-commerce-gestion'
              },
              {
                secteur: 'Ingénierie & BTP',
                demande: 'FORTE',
                couleur: 'from-orange-50 to-orange-100',
                salaire: '40-65k€/an',
                emploi: '90% en 6 mois',
                metiers: ['Ingénieur Civil', 'Technicien BTP', 'Architecte', 'Chef de Projet'],
                formation: 'École d\'Ingénieur, Master Génie Civil, BTS BTP',
                onisepLink: 'https://www.onisep.fr/formation/les-principaux-domaines-de-formation/sciences-et-technologies'
              },
              {
                secteur: 'Éducation & Recherche',
                demande: 'STABLE',
                couleur: 'from-purple-50 to-purple-100',
                salaire: '32-55k€/an',
                emploi: '78% en 6 mois',
                metiers: ['Enseignant', 'Chercheur', 'Formateur', 'Doctorant'],
                formation: 'Master MEEF, Doctorat, Agrégation',
                onisepLink: 'https://www.onisep.fr/formation/les-principaux-domaines-de-formation/lettres-et-langues'
              }
            ].map((item, idx) => (
              <Card key={idx} className={`bg-gradient-to-br ${item.couleur} border-2`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{item.secteur}</CardTitle>
                      <Badge className={`mt-2 ${
                        item.demande === 'TRÈS FORTE' ? 'bg-red-600' :
                        item.demande === 'FORTE' ? 'bg-orange-600' :
                        'bg-blue-600'
                      }`}>
                        {item.demande}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Salaire moyen brut</p>
                      <p className="font-bold text-lg text-green-600">{item.salaire}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Taux d'emploi</p>
                      <p className="font-bold text-lg text-blue-600">{item.emploi}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Métiers qui recrutent:</p>
                    <ul className="space-y-1">
                      {item.metiers.map((metier, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <TrendingUp className="h-3 w-3 mr-2 text-green-600" />
                          {metier}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Formations recommandées:</p>
                      <p className="text-sm font-semibold">{item.formation}</p>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={item.onisepLink} target="_blank" rel="noreferrer">
                        Voir les formations ONISEP →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="h-5 w-5 mr-2" />
                Source & Méthodologie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm"><strong>Données:</strong> ONISEP 2024, Pôle Emploi, INSEE</p>
              <p className="text-sm"><strong>Salaires:</strong> Bruts annuels moyens France entière, hors bonus/primes</p>
              <p className="text-sm"><strong>Taux d'emploi:</strong> % d'embauche dans les 6 mois post-diplôme</p>
              <p className="text-sm"><strong>Tendance:</strong> Basée sur les offres d'emploi 2024 vs 2023</p>
              <Button variant="outline" className="w-full mt-3" asChild>
                <a href="https://www.onisep.fr/metier/des-metiers-qui-recrutent" target="_blank" rel="noreferrer">
                  Voir tous les métiers qui recrutent →
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Conseils avancés Parcoursup */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <FileText className="h-8 w-8 mr-2 text-purple-600" />
            Conseils pour Réussir votre Dossier Parcoursup
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
                  Erreurs à Éviter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Négliger votre projet de formation motivé - c\'est votre meilleure chance',
                    'Attendre la dernière minute - déposez au moins 2-3 semaines avant',
                    'Avoir des lettres de motivation génériques - personnalisez pour chaque vœu',
                    'Oublier de vérifier vos relevés de notes - signalez toute erreur',
                    'Ignorer les formations moins prestigieuses - elles aussi valent le coup'
                  ].map((erreur, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <AlertCircle className="h-4 w-4 mr-2 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>{erreur}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Bonnes Pratiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Diversifiez vos vœux: formations sélectives ET accessibles',
                    'Rédigez des projets motivés authentiques et détaillés (max 1500 caractères)',
                    'Mettez en avant vos expériences: stages, bénévolat, projets personnels',
                    'Consultez les critères d\'admission officiels de chaque formation',
                    'N\'hésitez pas à contacter les formations pour des questions'
                  ].map((conseil, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{conseil}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardHeader>
              <CardTitle>Exemple d'un bon projet de formation motivé</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded border border-purple-200 text-sm space-y-3">
                <p className="italic text-muted-foreground">
                  "Après 2 ans d'études en [votre domaine actuel], j'aspire à approfondir mes connaissances en [domaine du Master].
                  Mon stage chez [entreprise] m'a confirmé ma passion pour [spécialité]. Votre Master, réputé pour son approche
                  [pratico-théorique], son partenariat avec [entreprise], et sa spécialisation en [domaine], correspond exactement
                  à mon projet. Je suis particulièrement motivé par le cours sur [spécialité] et l'opportunité de stage en entreprise.
                  Je suis convaincu que cette formation me permettra de [objectif professionnel]."
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                💡 Conseil: Soyez spécifique, montrez votre connaissance du programme, et connectez vos expériences à vos objectifs.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Mon Plan d'Action Personnalisé */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <CheckCircle className="h-8 w-8 mr-3 text-indigo-600" />
                Mon Plan d'Action Personnalisé
              </CardTitle>
              <CardDescription className="text-base text-indigo-800 mt-2">
                Voici les étapes concrètes à suivre selon ton profil
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pour étudiant étranger */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center">
                  <Badge className="bg-red-600 mr-2">PRIORITÉ 1</Badge>
                  Si tu viens de l'étranger
                </h3>
                <div className="grid md:grid-cols-2 gap-4 ml-4">
                  <Card className="border-red-200">
                    <CardHeader>
                      <CardTitle className="text-base">Étape 1: Visa étudiant</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>📋 Avant tout, tu dois obtenir ton visa</p>
                      <p>⏱️ <strong>Délai:</strong> 2-8 semaines avant le départ</p>
                      <Button variant="outline" className="w-full mt-3" asChild>
                        <a href="/demarches">Voir le guide visa →</a>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200">
                    <CardHeader>
                      <CardTitle className="text-base">Étape 2: Formation + inscription</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <p>🎓 En MÊME temps, candidater aux formations</p>
                      <p>📅 <strong>Parcoursup:</strong> Jan-Mar 2025</p>
                      <p>📌 <strong>Candidatures directes:</strong> Toute l'année</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Pour tous */}
              <div className="space-y-4 pt-4 border-t-2 border-indigo-200">
                <h3 className="text-xl font-bold flex items-center">
                  <Badge className="bg-blue-600 mr-2">ÉTAPES CLÉS</Badge>
                  Pour tous les étudiants
                </h3>
                <div className="space-y-3 ml-4">
                  {[
                    {
                      step: '1',
                      title: 'Fais tes tests d\'orientation',
                      action: 'ORI (L\'Étudiant), Quiz ONISEP',
                      when: 'Maintenant'
                    },
                    {
                      step: '2',
                      title: 'Explore les débouchés',
                      action: 'Vois les salaires & métiers qui recrutent',
                      when: 'Pendant tes tests'
                    },
                    {
                      step: '3',
                      title: 'Consulte Parcoursup',
                      action: 'Liste 10-15 vœux: sélectifs + accessibles',
                      when: 'Jan-Mar 2025'
                    },
                    {
                      step: '4',
                      title: 'Rédige tes projets motivés',
                      action: 'Personnalisé pour chaque vœu (max 1500 char)',
                      when: 'Avant le 14 mars'
                    },
                    {
                      step: '5',
                      title: 'Valide ton dossier',
                      action: 'Vérifies notes, pièces, confirme tes vœux',
                      when: 'Avant le 4 avril'
                    },
                    {
                      step: '6',
                      title: 'Attends les réponses',
                      action: 'Réponses à partir du 30 mai 2025',
                      when: 'Juin 2025'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 text-white font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.action}</p>
                        <Badge variant="outline" className="mt-1">{item.when}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prochaines étapes */}
              <div className="space-y-4 pt-4 border-t-2 border-indigo-200">
                <h3 className="text-xl font-bold flex items-center">
                  <Badge className="bg-green-600 mr-2">APRÈS L'INSCRIPTION</Badge>
                  Quand tu as ta formation
                </h3>
                <div className="grid md:grid-cols-3 gap-4 ml-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">📚 Prépare ta rentrée</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• Logement</li>
                        <li>• Sécurité sociale</li>
                        <li>• Transports</li>
                        <li>• Budgets</li>
                      </ul>
                      <Button variant="outline" className="w-full mt-3" asChild>
                        <a href="/vivre-en-france">Guide Vie →</a>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">💼 Cherche des jobs/stages</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                      <Button variant="outline" className="w-full justify-start text-xs" asChild>
                        <a href="https://jobs-stages.letudiant.fr/" target="_blank" rel="noreferrer">
                          📌 L'Étudiant Jobs/Stages
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-xs" asChild>
                        <a href="https://www.pole-emploi.fr/" target="_blank" rel="noreferrer">
                          📌 Pôle Emploi
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-xs" asChild>
                        <a href="/travailler">Guide Emploi local →</a>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">📋 Prépare ton diplôme</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• Système français</li>
                        <li>• Équivalences</li>
                        <li>• Bourses</li>
                        <li>• Alternance</li>
                      </ul>
                      <Button variant="outline" className="w-full mt-3" asChild>
                        <a href="/etudes">Guide Études →</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-indigo-200">
                <Card className="bg-white border-indigo-300">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <Info className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">💡 Conseil d'or</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ne fais pas ces étapes seul(e). Parle avec un conseiller d'orientation (ONISEP, campus France, ton école actuelle). Ils sont là pour ça et c'est gratuit!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Liens utiles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.parcoursup.gouv.fr" target="_blank" rel="noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-muted">
              <ExternalLink className="h-4 w-4 mr-2" /> Parcoursup (officiel)
            </a>
            <a href="https://www.campusfrance.org" target="_blank" rel="noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-muted">
              <ExternalLink className="h-4 w-4 mr-2" /> Campus France
            </a>
            <a href="https://www.onisep.fr" target="_blank" rel="noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-muted">
              <ExternalLink className="h-4 w-4 mr-2" /> Onisep
            </a>
            <a href="https://www.service-public.fr/particuliers/vosdroits/N110" target="_blank" rel="noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-muted">
              <ExternalLink className="h-4 w-4 mr-2" /> Aides financières
            </a>
          </div>
        </section>

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