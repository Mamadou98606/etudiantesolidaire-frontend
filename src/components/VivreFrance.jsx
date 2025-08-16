import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import {
  Home,
  Heart,
  Bus,
  Stethoscope,
  MapPin,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Info,
  CreditCard,
  Phone,
  Calendar,
  Users,
  Coffee,
  Music,
  Camera,
  Utensils
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function VivreFrance() {
  const navigate = useNavigate()
  const aspectsVie = [
    {
      categorie: "Logement",
      icon: <Home className="h-6 w-6" />,
      description: "Trouvez votre chez-vous en France",
      sousCategories: [
        {
          type: "Résidence universitaire",
          prix: "200-600€/mois",
          avantages: ["Proche campus", "Communauté étudiante", "Charges incluses"],
          inconvenients: ["Places limitées", "Règles strictes", "Espaces partagés"]
        },
        {
          type: "Colocation",
          prix: "400-800€/mois",
          avantages: ["Convivialité", "Coûts partagés", "Flexibilité"],
          inconvenients: ["Compatibilité colocataires", "Responsabilité solidaire"]
        },
        {
          type: "Studio/Appartement",
          prix: "500-1500€/mois",
          avantages: ["Indépendance", "Intimité", "Liberté"],
          inconvenients: ["Coût élevé", "Charges à prévoir", "Isolation possible"]
        }
      ]
    },
    {
      categorie: "Santé",
      icon: <Stethoscope className="h-6 w-6" />,
      description: "Prenez soin de votre santé en France",
      sousCategories: [
        {
          type: "Sécurité sociale étudiante",
          prix: "Gratuit",
          avantages: ["Remboursements soins", "Couverture de base", "Accès médecins"],
          inconvenients: ["Délais remboursement", "Reste à charge"]
        },
        {
          type: "Mutuelle étudiante",
          prix: "15-50€/mois",
          avantages: ["Complément remboursement", "Soins dentaires/optiques", "Médecines douces"],
          inconvenients: ["Coût supplémentaire", "Conditions d'âge"]
        },
        {
          type: "Médecine préventive",
          prix: "Gratuit",
          avantages: ["Bilans de santé", "Vaccinations", "Conseils personnalisés"],
          inconvenients: ["Disponibilité limitée", "Délais RDV"]
        }
      ]
    },
    {
      categorie: "Transport",
      icon: <Bus className="h-6 w-6" />,
      description: "Déplacez-vous facilement en France",
      sousCategories: [
        {
          type: "Transports en commun",
          prix: "20-75€/mois",
          avantages: ["Tarifs étudiants", "Réseau dense", "Écologique"],
          inconvenients: ["Horaires contraints", "Affluence", "Grèves possibles"]
        },
        {
          type: "Vélo/Trottinette",
          prix: "10-30€/mois",
          avantages: ["Économique", "Flexible", "Exercice physique"],
          inconvenients: ["Météo", "Sécurité", "Vol possible"]
        },
        {
          type: "Voiture",
          prix: "200-500€/mois",
          avantages: ["Liberté totale", "Confort", "Bagages"],
          inconvenients: ["Coût élevé", "Stationnement", "Assurance"]
        }
      ]
    },
    {
      categorie: "Épanouissement",
      icon: <Heart className="h-6 w-6" />,
      description: "Développez-vous personnellement et socialement",
      sousCategories: [
        {
          type: "Associations étudiantes",
          prix: "5-20€/an",
          avantages: ["Réseau social", "Activités variées", "Développement compétences"],
          inconvenients: ["Engagement temps", "Responsabilités"]
        },
        {
          type: "Sport universitaire",
          prix: "15-50€/an",
          avantages: ["Santé physique", "Esprit d'équipe", "Compétitions"],
          inconvenients: ["Créneaux limités", "Niveau requis"]
        },
        {
          type: "Culture et loisirs",
          prix: "Variable",
          avantages: ["Enrichissement culturel", "Détente", "Découvertes"],
          inconvenients: ["Budget à prévoir", "Temps nécessaire"]
        }
      ]
    }
  ]

  const aidesLogement = [
    {
      aide: "APL (Aide Personnalisée au Logement)",
      montant: "50-300€/mois",
      conditions: "Selon revenus et type de logement",
      organisme: "CAF",
      description: "Aide pour réduire le coût du loyer"
    },
    {
      aide: "ALS (Allocation de Logement Social)",
      montant: "50-250€/mois",
      conditions: "Logements non conventionnés",
      organisme: "CAF",
      description: "Alternative à l'APL pour certains logements"
    },
    {
      aide: "Garantie Visale",
      montant: "Gratuit",
      conditions: "Étudiants de moins de 30 ans",
      organisme: "Action Logement",
      description: "Caution gratuite pour la location"
    },
    {
      aide: "Aide Mobili-Jeune",
      montant: "10-100€/mois",
      conditions: "Alternants de moins de 30 ans",
      organisme: "Action Logement",
      description: "Subvention loyer pour apprentis"
    }
  ]

  const cultureActivites = [
    {
      domaine: "Musées et patrimoine",
      icon: <Camera className="h-5 w-5" />,
      activites: [
        "Louvre, Orsay, Centre Pompidou",
        "Châteaux de la Loire",
        "Sites UNESCO",
        "Monuments historiques"
      ],
      tarifs: "Gratuit ou réduit avec carte étudiant",
      conseils: "Profitez des nocturnes et journées gratuites"
    },
    {
      domaine: "Spectacles et concerts",
      icon: <Music className="h-5 w-5" />,
      activites: [
        "Opéra et théâtres",
        "Concerts classiques et modernes",
        "Festivals d'été",
        "Scènes alternatives"
      ],
      tarifs: "Tarifs jeunes disponibles",
      conseils: "Réservez à l'avance pour les meilleurs prix"
    },
    {
      domaine: "Gastronomie",
      icon: <Utensils className="h-5 w-5" />,
      activites: [
        "Marchés locaux",
        "Restaurants traditionnels",
        "Cours de cuisine",
        "Dégustations vins et fromages"
      ],
      tarifs: "Menus étudiants dans les RU",
      conseils: "Explorez les spécialités régionales"
    },
    {
      domaine: "Vie nocturne",
      icon: <Coffee className="h-5 w-5" />,
      activites: [
        "Bars étudiants",
        "Clubs et discothèques",
        "Soirées associatives",
        "Événements culturels"
      ],
      tarifs: "Soirées étudiantes à prix réduits",
      conseils: "Respectez les horaires et la réglementation"
    }
  ]

  const servicePratiques = [
    {
      service: "Banque",
      description: "Ouvrir un compte bancaire français",
      documents: ["Passeport", "Justificatif de domicile", "Certificat de scolarité"],
      conseils: "Comparez les offres étudiantes, négociez les frais",
      urgence: "Non urgent, mais recommandé dans le premier mois"
    },
    {
      service: "Téléphonie",
      description: "Souscrire un forfait mobile français",
      documents: ["Pièce d'identité", "RIB", "Justificatif de domicile"],
      conseils: "Forfaits sans engagement disponibles, attention au roaming",
      urgence: "Priorité moyenne, utile pour les démarches"
    },
    {
      service: "Internet",
      description: "Installer internet dans votre logement",
      documents: ["Justificatif de domicile", "RIB", "Pièce d'identité"],
      conseils: "Vérifiez l'éligibilité fibre, négociez les frais d'installation",
      urgence: "Important pour les études et démarches en ligne"
    },
    {
      service: "Assurance habitation",
      description: "Assurer votre logement (obligatoire)",
      documents: ["Contrat de bail", "RIB", "Inventaire du mobilier"],
      conseils: "Obligatoire avant remise des clés, comparez les tarifs",
      urgence: "Urgent, requis pour la location"
    }
  ]

  const conseilsIntegration = [
    {
      aspect: "Langue française",
      conseils: [
        "Pratiquez quotidiennement avec des natifs",
        "Regardez films et séries en français",
        "Lisez la presse locale",
        "Participez aux cafés des langues"
      ]
    },
    {
      aspect: "Codes sociaux",
      conseils: [
        "Respectez la ponctualité",
        "Maîtrisez les formules de politesse",
        "Comprenez l'importance du 'savoir-vivre'",
        "Adaptez-vous aux horaires français"
      ]
    },
    {
      aspect: "Réseau social",
      conseils: [
        "Rejoignez des associations étudiantes",
        "Participez aux événements de votre école",
        "Utilisez les apps de rencontre amicale",
        "Soyez ouvert aux invitations"
      ]
    },
    {
      aspect: "Gestion du budget",
      conseils: [
        "Tenez un budget mensuel détaillé",
        "Profitez des réductions étudiantes",
        "Cuisinez plutôt que de manger dehors",
        "Partagez les frais avec des amis"
      ]
    }
  ]

  const urgences = [
    {
      type: "Urgences médicales",
      numero: "15 (SAMU) ou 112",
      description: "Urgences vitales, accidents graves",
      gratuit: true
    },
    {
      type: "Police/Gendarmerie",
      numero: "17 ou 112",
      description: "Urgences sécuritaires, agressions, vols",
      gratuit: true
    },
    {
      type: "Pompiers",
      numero: "18 ou 112",
      description: "Incendies, accidents, secours",
      gratuit: true
    },
    {
      type: "SOS Amitié",
      numero: "09 72 39 40 50",
      description: "Soutien psychologique, détresse morale",
      gratuit: false
    },
    {
      type: "Violences femmes",
      numero: "3919",
      description: "Information et orientation pour femmes victimes",
      gratuit: true
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Vivre en France</h1>
          <p className="text-xl text-muted-foreground">
            Tout pour réussir votre intégration et vous épanouir en France
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border-pink-200">
            <CardHeader>
              <CardTitle className="text-2xl text-pink-800 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                Votre nouvelle vie en France
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-pink-700 leading-relaxed">
                Vivre en France, c'est bien plus que suivre des cours. C'est découvrir une culture riche,
                créer des liens durables, et construire votre avenir dans un environnement stimulant.
                Nous vous accompagnons dans tous les aspects de votre vie quotidienne.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Aspects de la vie */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Les piliers de votre vie en France</h2>
          <div className="space-y-12">
            {aspectsVie.map((aspect, index) => (
              <div key={index}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <div className="text-blue-600">
                      {aspect.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{aspect.categorie}</h3>
                    <p className="text-muted-foreground">{aspect.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {aspect.sousCategories.map((sousCategorie, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg">{sousCategorie.type}</CardTitle>
                          <Badge variant="outline">
                            <CreditCard className="h-3 w-3 mr-1" />
                            {sousCategorie.prix}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm text-green-700 mb-1">Avantages :</h4>
                            <ul className="space-y-1">
                              {sousCategorie.avantages.map((avantage, i) => (
                                <li key={i} className="text-xs text-muted-foreground flex items-center">
                                  <CheckCircle className="h-3 w-3 mr-1 text-green-600" />
                                  {avantage}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {sousCategorie.inconvenients && (
                            <div>
                              <h4 className="font-semibold text-sm text-orange-700 mb-1">À considérer :</h4>
                              <ul className="space-y-1">
                                {sousCategorie.inconvenients.map((inconvenient, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-center">
                                    <Info className="h-3 w-3 mr-1 text-orange-600" />
                                    {inconvenient}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Aides au logement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Aides au logement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aidesLogement.map((aide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{aide.aide}</CardTitle>
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

        {/* Culture et activités */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Culture et activités</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cultureActivites.map((culture, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <div className="text-purple-600">
                        {culture.icon}
                      </div>
                    </div>
                    {culture.domaine}
                  </CardTitle>
                  <Badge variant="secondary">{culture.tarifs}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Activités populaires :</h4>
                      <ul className="space-y-1">
                        {culture.activites.map((activite, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                            {activite}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm text-purple-800 mb-1">Conseil :</h4>
                      <p className="text-sm text-purple-700">{culture.conseils}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Services pratiques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Services pratiques à organiser</h2>
          <div className="space-y-4">
            {servicePratiques.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{service.service}</CardTitle>
                    <Badge variant={service.urgence.includes('Urgent') ? 'destructive' :
                                  service.urgence.includes('Important') ? 'default' : 'secondary'}>
                      {service.urgence.includes('Urgent') ? 'Urgent' :
                       service.urgence.includes('Important') ? 'Important' : 'Optionnel'}
                    </Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Documents nécessaires :</h4>
                      <ul className="space-y-1">
                        {service.documents.map((doc, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Conseils :</h4>
                      <p className="text-sm text-muted-foreground">{service.conseils}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conseils d'intégration */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Conseils pour une intégration réussie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {conseilsIntegration.map((conseil, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{conseil.aspect}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {conseilsIntegration[index].conseils.map((tip, idx) => (
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

        {/* Numéros d'urgence */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Numéros d'urgence</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {urgences.map((urgence, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${
                urgence.gratuit ? 'border-green-200 bg-green-50' : 'border-orange-200 bg-orange-50'
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{urgence.type}</CardTitle>
                    <Badge variant={urgence.gratuit ? 'default' : 'secondary'}>
                      {urgence.gratuit ? 'Gratuit' : 'Payant'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="font-bold text-lg">{urgence.numero}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{urgence.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Budget type */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Budget mensuel type</h2>
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Estimation pour un étudiant en région parisienne</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Dépenses essentielles :</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-sm">
                      <span>Logement (avec aides)</span>
                      <span className="font-semibold">400-800€</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Alimentation</span>
                      <span className="font-semibold">200-300€</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Transport</span>
                      <span className="font-semibold">30-75€</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Téléphone/Internet</span>
                      <span className="font-semibold">30-50€</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Assurances</span>
                      <span className="font-semibold">20-40€</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Dépenses variables :</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between text-sm">
                      <span>Loisirs/Culture</span>
                      <span className="font-semibold">50-150€</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Vêtements</span>
                      <span className="font-semibold">30-80€</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Santé (mutuelle)</span>
                      <span className="font-semibold">15-50€</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Divers/Imprévus</span>
                      <span className="font-semibold">50-100€</span>
                    </li>
                    <li className="flex justify-between text-sm font-bold border-t pt-2">
                      <span>TOTAL MENSUEL</span>
                      <span>825-1645€</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Ressources utiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ressources utiles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Services publics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">CAF (aides logement)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Ameli.fr (sécurité sociale)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Service-public.fr</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Impots.gouv.fr</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vie pratique</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Leboncoin (petites annonces)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Citymapper (transports)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Doctolib (rendez-vous médicaux)</a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:underline">Meetup (rencontres)</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Budget mensuel indicatif */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Budget mensuel indicatif</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Logement</span><span className="font-medium">400–900€</span></li>
                <li className="flex justify-between"><span>Transport</span><span className="font-medium">20–75€</span></li>
                <li className="flex justify-between"><span>Nourriture</span><span className="font-medium">150–300€</span></li>
                <li className="flex justify-between"><span>Assurances / santé</span><span className="font-medium">15–50€</span></li>
                <li className="flex justify-between"><span>Loisirs / télécom</span><span className="font-medium">30–80€</span></li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">Varie selon la ville (Paris plus élevé).</p>
            </CardContent>
          </Card>
        </section>

        {/* Numéros utiles */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Numéros utiles</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <p className="font-medium">Urgences</p>
                <p className="text-muted-foreground">112</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="font-medium">SAMU</p>
                <p className="text-muted-foreground">15</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="font-medium">Police</p>
                <p className="text-muted-foreground">17</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-pink-600 to-pink-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Prêt à vivre pleinement votre expérience française ?</CardTitle>
              <CardDescription className="text-pink-100">
                Accédez à tous nos outils et conseils personnalisés pour réussir votre intégration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Créer mon guide personnalisé
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                  Rejoindre la communauté
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default VivreFrance