import React, { useState } from 'react'
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
  Wifi,
  Globe,
  AlertCircle,
  Briefcase
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Etudes() {
  const navigate = useNavigate()
  const [studentType, setStudentType] = useState('eu')

  const etablissements = [
    {
      type: "Universités publiques",
      description: "Formations généralistes et recherche de qualité",
      examples: [
        "Sorbonne Université",
        "Université Paris-Saclay",
        "Université de Lyon",
        "Université de Bordeaux"
      ],
      advantages: [
        "Frais de scolarité réduits pour internationaux",
        "Large choix de formations en anglais",
        "Recherche de haut niveau",
        "Campus internationaux bien établis"
      ],
      costEU: "170€/an",
      costNonEU: "2 770€/an (Licence), 3 770€/an (Master)"
    },
    {
      type: "Grandes écoles",
      description: "Formations d'excellence avec très bon prestige international",
      examples: [
        "HEC Paris (~12 000€/an)",
        "École Polytechnique (~10 500€/an)",
        "Sciences Po (~18 000€/an)",
        "ESSEC Business School (~18 000€/an)"
      ],
      advantages: [
        "Prestige international reconnu",
        "Réseau alumni mondial très puissant",
        "Insertion professionnelle excellente (90%+)",
        "Partenariats avec grandes entreprises"
      ],
      costEU: "Variable selon école",
      costNonEU: "8 000€ - 20 000€/an"
    },
    {
      type: "Écoles spécialisées",
      description: "Formations techniques et professionnelles de haut niveau",
      examples: [
        "École 42 (Informatique - gratuite)",
        "Les Gobelins (Animation - ~3 000€/an)",
        "ESMOD (Mode - ~6 000€/an)",
        "Institut Paul Bocuse (Cuisine - ~6 000€/an)"
      ],
      advantages: [
        "Spécialisation reconnue mondialement",
        "Équipements professionnels de pointe",
        "Liens forts avec l'industrie",
        "Stages et alternances intégrés"
      ],
      costEU: "Gratuit à 6 000€/an",
      costNonEU: "Gratuit à 8 000€/an"
    }
  ]

  const ressourcesEtudiantes = [
    {
      category: "Accueil & Intégration",
      title: "Services pour étudiants internationaux",
      resources: [
        {
          name: "Office d'accueil international",
          description: "Service d'aide aux démarches administratives et visa",
          access: "Gratuit - Contactez la scolarité"
        },
        {
          name: "Parrainage étudiant / Buddy system",
          description: "Étudiant local pour vous guider et vous intégrer",
          access: "Gratuit - Proposé par établissement"
        },
        {
          name: "Visite guidée du campus",
          description: "Découvrir les installations et ressources académiques",
          access: "Gratuit lors de l'orientation"
        }
      ]
    },
    {
      category: "Bibliothèques & Ressources",
      title: "Accès aux ressources académiques",
      resources: [
        {
          name: "Bibliothèque nationale de France (BNF)",
          description: "Plus grande bibliothèque, accès aux archives numériques",
          access: "Gratuit avec carte étudiant"
        },
        {
          name: "Bibliothèques universitaires",
          description: "Ressources spécialisées par domaine, salles d'étude",
          access: "Accès libre pour tous les étudiants"
        },
        {
          name: "Cairn.info, Persée, HAL",
          description: "Bases de données académiques gratuites pour les universités",
          access: "Gratuit via VPN universitaire"
        }
      ]
    },
    {
      category: "Logement & Vie de campus",
      title: "Ressources pour se loger et s'intégrer",
      resources: [
        {
          name: "Résidences CROUS",
          description: "Logements étudiants abordables et communautaires",
          access: "~300-500€/mois - Candidature auprès CROUS"
        },
        {
          name: "Office du logement de l'établissement",
          description: "Aide pour trouver logement privé, bailleurs partenaires",
          access: "Services gratuits, logements variables"
        },
        {
          name: "Services de vie étudiante",
          description: "Clubs, associations, événements culturels et sportifs",
          access: "Gratuits ou peu coûteux"
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

  const aidesEU = [
    {
      type: "Bourses sur critères sociaux",
      description: "Pour étudiants UE en difficulté financière",
      montant: "1 084€ - 5 965€/an",
      conditions: "Revenus familiaux limités, projet d'études valide",
      organisme: "CROUS",
      url: "https://www.messervices.etudiant.gouv.fr/envole/"
    },
    {
      type: "Aide au mérite",
      description: "Complément pour excellents résultats",
      montant: "900€/an",
      conditions: "Mention TB au bac + bourse sur critères sociaux",
      organisme: "CROUS",
      url: "https://www.crous-paris.fr/aides-et-services/"
    },
    {
      type: "Aide d'urgence",
      description: "Soutien ponctuel en difficulté financière",
      montant: "Jusqu'à 2 597€",
      conditions: "Situation d'urgence avérée documentée",
      organisme: "CROUS",
      url: "https://www.crous-paris.fr/aides-et-services/"
    },
    {
      type: "Bourses d'excellence (Erasmus+)",
      description: "Mobilité académique dans UE pour études/stages",
      montant: "200€ - 800€/mois",
      conditions: "Inscription dans établissement UE, sélection",
      organisme: "Établissement + Commission Européenne",
      url: "https://www.france-education-international.fr/bourses-erasmus"
    }
  ]

  const aidesNonEU = [
    {
      type: "Bourses Campus France",
      description: "Bourses du gouvernement français pour pays prioritaires",
      montant: "Variable selon programme",
      conditions: "Pays d'origine prioritaire, excellence académique",
      organisme: "Campus France / Ministère",
      url: "https://www.campusfrance.org/fr/nos-bourses"
    },
    {
      type: "Bourses des établissements",
      description: "Aides offertes directement par les universités/écoles",
      montant: "1 000€ - 15 000€/an",
      conditions: "Excellence académique, projet d'études fort",
      organisme: "Université / Grande école",
      url: "https://www.messervices.etudiant.gouv.fr/"
    },
    {
      type: "Bourses du gouvernement du pays d'origine",
      description: "Bourses de votre gouvernement (au niveau national/régional)",
      montant: "Variable selon pays",
      conditions: "À vérifier auprès de votre gouvernement",
      organisme: "Gouvernement pays d'origine",
      url: "https://www.campusfrance.org/fr"
    },
    {
      type: "Programmes de bourses internationales",
      description: "Fondations, NGOs, organisations internationales",
      montant: "Variable",
      conditions: "Dépend du programme, excellence généralement requise",
      organisme: "Diverses organisations",
      url: "https://www.mastersportal.com/scholarships"
    }
  ]

  const aides = studentType === 'eu' ? aidesEU : aidesNonEU

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Études en France</h1>
          <p className="text-xl text-muted-foreground">
            Guide complet pour choisir votre formation et financer vos études
          </p>
        </div>

        {/* Student Type Selector - Professional Tabs */}
        <section className="mb-8">
          <div className="flex border-b border-border">
            <button
              onClick={() => setStudentType('eu')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                studentType === 'eu'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Globe className="h-4 w-4 inline mr-2" />
              Étudiant Union Européenne
            </button>
            <button
              onClick={() => setStudentType('non-eu')}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                studentType === 'non-eu'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Globe className="h-4 w-4 inline mr-2" />
              Étudiant pays tiers
            </button>
          </div>
        </section>

        {/* Information Alert */}
        {studentType === 'non-eu' && (
          <section className="mb-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-blue-900">
                      <strong>Important :</strong> Les frais d'inscription sont plus élevés pour les étudiants non-UE.
                      Cependant, vous avez accès à des bourses du gouvernement français et des établissements.
                      Consultez <a href="https://www.campusfrance.org/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Campus France</a> pour les opportunités de financement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Types d'établissements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Types d'établissements</h2>
          <div className="space-y-6">
            {etablissements.map((etablissement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl">{etablissement.type}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {etablissement.description}
                      </CardDescription>
                    </div>
                    <Badge variant="default" className="text-xs">
                      <CreditCard className="h-3 w-3 mr-1" />
                      {studentType === 'eu' ? etablissement.costEU : etablissement.costNonEU}
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

        {/* Droits et obligations */}
        {studentType === 'non-eu' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Droits et obligations spéciales</h2>
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center">
                  <Info className="h-6 w-6 mr-2" />
                  Ce que vous devez savoir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-amber-900">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Droit de travail :</strong> 15-20h/semaine pendant les cours, illimité durant les vacances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Couverture sociale :</strong> Inscription automatique à la Sécurité Sociale française</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Titre de séjour :</strong> Demande auprès de la Préfecture durant vos études (voir page Démarches)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Logement :</strong> Réductions disponibles via CROUS et APL (aides au logement)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Assurance santé :</strong> Incluse en Sécu, complémentaire recommandée (~50-150€/an)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {studentType === 'eu' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Avantages pour étudiants UE</h2>
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Vos privilèges en tant qu'étudiant UE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-green-900">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Frais réduits :</strong> Les frais d'inscription des universités publiques sont les mêmes pour tous UE</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Bourses CROUS :</strong> Vous pouvez candidater aux bourses sur critères sociaux</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Pas de visa :</strong> Liberté de circulation, juste inscription simple</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Erasmus+ :</strong> Mobilité académique et stages dans toute l'UE</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Droits du travail :</strong> Mêmes droits que les étudiants français</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        )}
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
          <h2 className="text-3xl font-bold text-foreground mb-8">
            {studentType === 'eu' ? 'Aides financières (Étudiants UE)' : 'Aides financières (Étudiants pays tiers)'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aides.map((aide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <CardTitle className="text-lg">{aide.type}</CardTitle>
                    <Badge variant="default" className="text-xs">{aide.montant}</Badge>
                  </div>
                  <CardDescription>{aide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Conditions :</h4>
                      <p className="text-sm text-muted-foreground">{aide.conditions}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Organisme :</h4>
                      <p className="text-sm text-muted-foreground">{aide.organisme}</p>
                    </div>
                    {aide.url && (
                      <div>
                        <a
                          href={aide.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline flex items-center"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Voir plus d'infos
                        </a>
                      </div>
                    )}
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
          <h2 className="text-3xl font-bold text-foreground mb-8">Liens officiels essentiels</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Organismes officiels</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.crous-paris.fr/aides-et-services/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      CROUS (Bourses et aides financières)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.campusfrance.org/fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Campus France (Accueil et bourses internationaux)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.etudiant.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Étudiant.gouv.fr (Portail officiel du MESRI)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.messervices.etudiant.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Mes Services Étudiant (Bourses, logement, dossiers)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.france-education-international.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      France Éducation International (Erasmus+ et mobilité)
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ressources académiques</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.bnf.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      BNF (Bibliothèque nationale de France)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.cairn.info/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Cairn.info (Articles et ouvrages académiques)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.persee.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Persée (Revues scientifiques en libre accès)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://hal.archives-ouvertes.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      HAL (Archives ouvertes scientifiques)
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Google Scholar (Recherche académique mondiale)
                    </a>
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
