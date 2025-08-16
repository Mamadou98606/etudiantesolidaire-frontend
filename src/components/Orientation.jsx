import React from 'react'
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
  Info
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Orientation() {
  const navigate = useNavigate()
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