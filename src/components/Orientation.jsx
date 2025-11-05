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

        {/* Processus d'orientation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Comment bien s'orienter ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit mx-auto mb-2">
                    Étape {step.step}
                  </Badge>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

        {/* Dates importantes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Dates importantes 2024-2025</h2>
          <div className="space-y-4">
            {importantDates.map((item, index) => (
              <Card key={index} className={`border-l-4 ${
                item.type === 'alert' ? 'border-l-red-500 bg-red-50' :
                item.type === 'warning' ? 'border-l-orange-500 bg-orange-50' :
                'border-l-blue-500 bg-blue-50'
              }`}>
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {item.type === 'alert' ? (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      ) : item.type === 'warning' ? (
                        <Clock className="h-5 w-5 text-orange-600" />
                      ) : (
                        <Info className="h-5 w-5 text-blue-600" />
                      )}
                      <div>
                        <p className="font-semibold">{item.event}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Outils d'aide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Nos outils d'aide à l'orientation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Test d'orientation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Découvrez les formations qui correspondent à votre profil et vos aspirations.
                </p>
                <Button className="w-full">
                  Faire le test
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                  Fiches métiers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explorez les métiers et leurs formations associées.
                </p>
                <Button variant="outline" className="w-full">
                  Consulter les fiches
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  Conseil personnalisé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bénéficiez d'un accompagnement individuel avec nos conseillers.
                </p>
                <Button variant="outline" className="w-full">
                  Prendre RDV
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ressources utiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ressources utiles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sites officiels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Parcoursup.fr</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Onisep.fr</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Etudiant.gouv.fr</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Campus France</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nos guides</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>Guide Parcoursup 2025</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>Choisir sa formation post-bac</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>Les métiers d'avenir</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>Financer ses études</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Checklist Parcoursup */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Checklist Parcoursup</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Créer mon compte et compléter mon profil</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Renseigner mes bulletins et pièces</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Rédiger mes projets de formation motivés</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Confirmer mes vœux avant la date limite</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Suivre les réponses et respecter les délais</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Test d'orientation interactif */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Test d'Orientation Interactif
              </CardTitle>
              <CardDescription className="text-green-700">
                Découvrez les formations qui correspondent à votre profil
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {testStep === 0 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-3">Question 1/5 : Tes principaux intérêts</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {['Sciences & Tech', 'Lettres & Langues', 'Commerce & Gestion', 'Santé & Social'].map((interet) => (
                          <Button key={interet} variant="outline" className="justify-start h-auto py-3 px-4" onClick={() => setTestStep(1)}>
                            {interet}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {testStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-3">Question 2/5 : Durée d'études préférée</h3>
                      <div className="space-y-2">
                        {[
                          { label: 'Courte (2 ans)', value: 'BTS/CAP' },
                          { label: 'Moyenne (3 ans)', value: 'Licence' },
                          { label: 'Longue (5+ ans)', value: 'Master/École' }
                        ].map((option) => (
                          <Button key={option.value} variant="outline" className="w-full justify-start h-auto py-3" onClick={() => setTestStep(2)}>
                            {option.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {testStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-3">Question 3/5 : Type d'apprentissage préféré</h3>
                      <div className="space-y-2">
                        {['Théorique & Généraliste', 'Pratique & Professionnalisante', 'Recherche & Spécialisée'].map((type) => (
                          <Button key={type} variant="outline" className="w-full justify-start h-auto py-3" onClick={() => setTestStep(3)}>
                            {type}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {testStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-3">Question 4/5 : Situation géographique</h3>
                      <div className="space-y-2">
                        {['Grande ville (Paris, Lyon, etc.)', 'Ville moyenne', 'Peu importe'].map((lieu) => (
                          <Button key={lieu} variant="outline" className="w-full justify-start h-auto py-3" onClick={() => setTestStep(4)}>
                            {lieu}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {testStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-3">Question 5/5 : Budget mensuel pour études</h3>
                      <div className="space-y-2">
                        {['Limité (<5k€/an)', 'Moyen (5-15k€/an)', 'Élevé (>15k€/an)'].map((budget) => (
                          <Button key={budget} variant="outline" className="w-full justify-start h-auto py-3" onClick={() => setTestStep(5)}>
                            {budget}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {testStep === 5 && (
                  <div className="space-y-4 bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-lg flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Tes formations recommandées
                    </h3>
                    <div className="space-y-3">
                      <Card>
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-4">
                            <TrendingUp className="h-5 w-5 text-green-600 mt-1" />
                            <div>
                              <p className="font-semibold">BTS/Titre professionnel</p>
                              <p className="text-sm text-muted-foreground">Formation professionnalisante courte (2 ans) avec insertion rapide au marché du travail</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-4">
                            <TrendingUp className="h-5 w-5 text-blue-600 mt-1" />
                            <div>
                              <p className="font-semibold">Licence Généraliste</p>
                              <p className="text-sm text-muted-foreground">Formation polyvalente (3 ans) avec opportunités de poursuite en Master</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-4">
                            <TrendingUp className="h-5 w-5 text-purple-600 mt-1" />
                            <div>
                              <p className="font-semibold">Master Spécialisé</p>
                              <p className="text-sm text-muted-foreground">Formation d'excellence (2 ans) pour carrière de cadre et expertise sectorielle</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Button className="w-full mt-4" onClick={() => setTestStep(0)}>
                      Recommencer le test
                    </Button>
                  </div>
                )}
                
                {testStep < 5 && (
                  <div className="text-sm text-muted-foreground">
                    Progression: {testStep + 1}/5
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Calendrier Parcoursup 2025-26 interactif */}
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

        {/* Débouchés métiers et salaires */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
            <TrendingUp className="h-8 w-8 mr-2 text-green-600" />
            Débouchés Métiers et Salaires
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                formation: 'BTS',
                salaire: '24-32k€/an',
                metiers: ['Technicien', 'Assistant Manager', 'Responsable Qualité'],
                tendance: 'Stable',
                emploi: '85% en 6 mois',
                icon: <Award className="h-5 w-5" />
              },
              {
                formation: 'Licence',
                salaire: '28-42k€/an',
                metiers: ['Cadre junior', 'Chargé de projet', 'Spécialiste'],
                tendance: 'En croissance',
                emploi: '78% en 6 mois',
                icon: <Award className="h-5 w-5" />
              },
              {
                formation: 'Master',
                salaire: '45-75k€/an',
                metiers: ['Manager', 'Expert', 'Consultant'],
                tendance: 'Forte demande',
                emploi: '88% en 6 mois',
                icon: <Award className="h-5 w-5" />
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.formation}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Salaire médian brut</p>
                    <p className="text-2xl font-bold text-green-600">{item.salaire}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">Métiers types:</p>
                    <ul className="space-y-1">
                      {item.metiers.map((metier, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                          {metier}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Tendance marché:</span>
                      <Badge variant="outline">{item.tendance}</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taux d'emploi:</span>
                      <Badge className="bg-blue-600">{item.emploi}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg">Sources: ONISEP, Statistiques France, Salaires moyens 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ces chiffres sont basés sur les données officielles ONISEP (Office National d'Information Sur les Enseignements et les Professions) et représentent les salaires bruts annuels moyens en France. Ils peuvent varier selon la région, l'expérience et le secteur d'activité.
              </p>
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

        {/* Liens utiles */}
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