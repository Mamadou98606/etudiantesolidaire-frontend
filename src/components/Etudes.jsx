import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  BookOpen, 
  Users, 
  Award,
  Clock,
  MapPin,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Info,
  CreditCard,
  Calendar,
  Laptop,
  Coffee,
  Wifi
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Etudes() {
  const navigate = useNavigate()
  const etablissements = [
    {
      type: "Universités publiques",
      description: "Formations généralistes et recherche",
      examples: [
        "Sorbonne Université",
        "Université Paris-Saclay",
        "Université de Lyon",
        "Université de Bordeaux"
      ],
      advantages: [
        "Frais de scolarité modérés",
        "Large choix de formations",
        "Recherche de haut niveau",
        "Campus internationaux"
      ],
      cost: "170€-3770€/an selon nationalité"
    },
    {
      type: "Grandes écoles",
      description: "Formations d'excellence sélectives",
      examples: [
        "HEC Paris",
        "École Polytechnique",
        "Sciences Po",
        "ESSEC Business School"
      ],
      advantages: [
        "Prestige international",
        "Réseau alumni puissant",
        "Insertion professionnelle excellente",
        "Partenariats entreprises"
      ],
      cost: "500€-20000€/an selon école"
    },
    {
      type: "Écoles spécialisées",
      description: "Formations techniques et professionnelles",
      examples: [
        "École 42 (Informatique)",
        "Les Gobelins (Animation)",
        "ESMOD (Mode)",
        "Institut Paul Bocuse (Cuisine)"
      ],
      advantages: [
        "Spécialisation poussée",
        "Équipements professionnels",
        "Liens avec l'industrie",
        "Stages intégrés"
      ],
      cost: "Gratuit à 15000€/an"
    }
  ]

  const ressourcesEtudiantes = [
    {
      category: "Bibliothèques",
      title: "Accès aux ressources académiques",
      resources: [
        {
          name: "Bibliothèque nationale de France",
          description: "Plus grande bibliothèque de France",
          access: "Gratuit avec carte étudiant"
        },
        {
          name: "Bibliothèques universitaires",
          description: "Ressources spécialisées par domaine",
          access: "Accès libre pour les étudiants"
        },
        {
          name: "Bibliothèque Sainte-Geneviève",
          description: "Spécialisée en lettres et sciences humaines",
          access: "Gratuit sur inscription"
        }
      ]
    },
    {
      category: "Numérique",
      title: "Outils et plateformes en ligne",
      resources: [
        {
          name: "ENT (Espace Numérique de Travail)",
          description: "Plateforme de votre établissement",
          access: "Fourni par l'établissement"
        },
        {
          name: "Cairn.info",
          description: "Articles et ouvrages académiques",
          access: "Gratuit via les universités"
        },
        {
          name: "Microsoft Office 365",
          description: "Suite bureautique complète",
          access: "Gratuit pour les étudiants"
        }
      ]
    }
  ]

  const methodesEtude = [
    {
      title: "Organisation du temps",
      tips: [
        "Utilisez un agenda ou application de planning",
        "Planifiez vos révisions à l'avance",
        "Alternez travail et pauses régulières",
        "Respectez vos heures de sommeil"
      ],
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Techniques d'apprentissage",
      tips: [
        "Prenez des notes manuscrites en cours",
        "Créez des fiches de révision synthétiques",
        "Formez des groupes de travail",
        "Utilisez des méthodes actives (cartes mentales, etc.)"
      ],
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Préparation aux examens",
      tips: [
        "Commencez les révisions 3-4 semaines avant",
        "Entraînez-vous avec des annales",
        "Simulez les conditions d'examen",
        "Gérez votre stress avec des techniques de relaxation"
      ],
      icon: <Award className="h-6 w-6" />
    }
  ]

  const aides = [
    {
      type: "Bourses sur critères sociaux",
      description: "Aide financière selon revenus familiaux",
      montant: "1 084€ à 5 965€/an",
      conditions: "Étudiants UE, revenus familiaux limités",
      organisme: "CROUS"
    },
    {
      type: "Aide au mérite",
      description: "Complément pour excellents résultats",
      montant: "900€/an",
      conditions: "Mention TB au bac + bourse sur critères sociaux",
      organisme: "CROUS"
    },
    {
      type: "Aide d'urgence",
      description: "Soutien ponctuel en cas de difficulté",
      montant: "Jusqu'à 2 597€",
      conditions: "Situation d'urgence avérée",
      organisme: "CROUS"
    },
    {
      type: "Bourses d'excellence",
      description: "Pour étudiants internationaux méritants",
      montant: "Variable selon programme",
      conditions: "Excellence académique, projet d'études",
      organisme: "Campus France, établissements"
    }
  ]

  const calendrierUniversitaire = [
    {
      periode: "Septembre - Décembre",
      nom: "Premier semestre",
      evenements: [
        "Rentrée universitaire",
        "Inscriptions pédagogiques",
        "Début des cours",
        "Examens partiels"
      ]
    },
    {
      periode: "Janvier - Mai",
      nom: "Deuxième semestre",
      evenements: [
        "Reprise des cours",
        "Stages et projets",
        "Examens finaux",
        "Soutenances"
      ]
    },
    {
      periode: "Juin - Août",
      nom: "Période estivale",
      evenements: [
        "Examens de rattrapage",
        "Stages d'été",
        "Vacances universitaires",
        "Préparation rentrée"
      ]
    }
  ]

  const espacesEtude = [
    {
      nom: "Bibliothèques universitaires",
      description: "Espaces calmes avec ressources spécialisées",
      horaires: "8h-22h en semaine",
      services: ["WiFi gratuit", "Prêt de livres", "Espaces groupe", "Ordinateurs"],
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      nom: "Espaces de coworking",
      description: "Environnements collaboratifs et modernes",
      horaires: "24h/24 pour certains",
      services: ["WiFi haut débit", "Café", "Salles de réunion", "Événements"],
      icon: <Laptop className="h-5 w-5" />
    },
    {
      nom: "Cafés étudiants",
      description: "Ambiance détendue pour étudier",
      horaires: "7h-20h généralement",
      services: ["WiFi", "Boissons", "Ambiance calme", "Prises électriques"],
      icon: <Coffee className="h-5 w-5" />
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Études</h1>
          <p className="text-xl text-muted-foreground">
            Tout pour réussir votre parcours académique en France
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center">
                <BookOpen className="h-6 w-6 mr-2" />
                Excellence académique à la française
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-green-700 leading-relaxed">
                Le système éducatif français offre une formation de qualité reconnue mondialement. 
                Découvrez comment optimiser votre parcours d'études, accéder aux meilleures ressources 
                et bénéficier des aides disponibles pour réussir vos études en France.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Types d'établissements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Types d'établissements</h2>
          <div className="space-y-6">
            {etablissements.map((etablissement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl">{etablissement.type}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {etablissement.description}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">
                      <CreditCard className="h-3 w-3 mr-1" />
                      {etablissement.cost}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Exemples d'établissements :</h4>
                      <ul className="space-y-1">
                        {etablissement.examples.map((example, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Avantages :</h4>
                      <ul className="space-y-1">
                        {etablissement.advantages.map((advantage, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                            {advantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Ressources pour étudier */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ressources pour étudier</h2>
          <div className="space-y-8">
            {ressourcesEtudiantes.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                <p className="text-muted-foreground mb-6">{category.title}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.resources.map((resource, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{resource.name}</CardTitle>
                        <Badge variant="secondary">{resource.access}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Méthodes d'étude */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Méthodes d'étude efficaces</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {methodesEtude.map((methode, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-blue-600">
                      {methode.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{methode.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {methode.tips.map((tip, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Aides financières */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Aides financières aux études</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aides.map((aide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{aide.type}</CardTitle>
                    <Badge variant="default">{aide.montant}</Badge>
                  </div>
                  <CardDescription>{aide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-semibold text-sm">Conditions :</h4>
                      <p className="text-sm text-muted-foreground">{aide.conditions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Organisme :</h4>
                      <p className="text-sm text-muted-foreground">{aide.organisme}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Calendrier universitaire */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Calendrier universitaire</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {calendrierUniversitaire.map((periode, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{periode.periode}</Badge>
                  <CardTitle className="text-lg">{periode.nom}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {periode.evenements.map((evenement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-2 text-blue-600" />
                        {evenement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Espaces d'étude */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Où étudier ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {espacesEtude.map((espace, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <div className="text-blue-600">
                        {espace.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{espace.nom}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{espace.horaires}</Badge>
                    </div>
                  </div>
                  <CardDescription>{espace.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {espace.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-xs text-muted-foreground">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-600" />
                        {service}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Outils numériques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Outils numériques essentiels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Laptop className="h-5 w-5 text-blue-600 mr-2" />
                  Applications d'étude
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Notion (prise de notes)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Anki (mémorisation)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Forest (concentration)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Grammarly (correction)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Discord (groupes d'étude)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Slack (projets de groupe)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Google Workspace (partage)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Zoom (cours en ligne)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 text-orange-600 mr-2" />
                  Ressources académiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Google Scholar (recherche)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Zotero (bibliographie)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Khan Academy (cours)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                    Coursera (formations)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Liens utiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Liens utiles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Organismes officiels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">CROUS (aides financières)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Campus France</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Ministère de l'Enseignement Supérieur</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Étudiant.gouv.fr</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ressources d'étude</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">BNF (Bibliothèque nationale)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Cairn.info (articles académiques)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Persée (revues scientifiques)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">HAL (archives ouvertes)</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Optimisez votre réussite académique</CardTitle>
              <CardDescription className="text-green-100">
                Accédez à tous nos outils et conseils personnalisés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Créer mon planning d'études
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Découvrir les ressources
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
