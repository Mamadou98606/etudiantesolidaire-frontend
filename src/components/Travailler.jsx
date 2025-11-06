import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  Briefcase, 
  Clock, 
  Users,
  Award,
  MapPin,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Info,
  CreditCard,
  FileText,
  TrendingUp,
  Building,
  GraduationCap,
  Globe,
  AlertCircle
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Travailler() {
  const navigate = useNavigate()
  const [studentType, setStudentType] = useState('eu')
  const droitsTravail = {
    eu: [
      {
        titre: "Restrictions pendant études",
        details: "Travail libre (sauf cumul avec formation",
        limite: "Pas de limite d'heures"
      },
      {
        titre: "Après diplôme",
        details: "CDI/CDD sans restrictions administratives",
        limite: "Changement de titre automatique"
      },
      {
        titre: "Secteurs ouverts",
        details: "TOUS les secteurs sans discrimination",
        limite: "Aucune restriction"
      }
    ],
    nonEu: [
      {
        titre: "Restrictions pendant études",
        details: "15-20h/semaine pendant cours + illimité vacances",
        limite: "Autorisé par titre de séjour étudiant"
      },
      {
        titre: "Après diplôme",
        details: "CDI/CDD avec changement de titre nécessaire",
        limite: "Passeport talent ou changement titre séjour"
      },
      {
        titre: "Secteurs ouverts",
        details: "Selon domaine étude (Passeport Talent)",
        limite: "Métiers en pénurie de main d'oeuvre prioritaires"
      }
    ]
  }

  const droitsActuels = studentType === 'eu' ? droitsTravail.eu : droitsTravail.nonEu

  const typesEmplois = [
    {
      type: "Job étudiant",
      description: "Emploi à temps partiel pendant les études",
      duree: "Pendant l'année scolaire",
      limitation: "964h/an (60% temps plein)",
      salaire: "11,65€/h minimum",
      secteurs: [
        "Restauration et hôtellerie",
        "Commerce et vente",
        "Garde d'enfants",
        "Cours particuliers",
        "Livraison",
        "Animation"
      ],
      avantages: [
        "Expérience professionnelle",
        "Revenus complémentaires",
        "Développement de compétences",
        "Réseau professionnel"
      ]
    },
    {
      type: "Stage",
      description: "Formation pratique en entreprise",
      duree: "2 semaines à 6 mois",
      limitation: "Selon convention de stage",
      salaire: "Gratification si > 2 mois (4,35€/h min)",
      secteurs: [
        "Tous secteurs d'activité",
        "Startup et PME",
        "Grandes entreprises",
        "Organisations internationales",
        "Secteur public",
        "ONG et associations"
      ],
      avantages: [
        "Application des connaissances",
        "Découverte du monde professionnel",
        "Possibilité d'embauche",
        "Validation du cursus"
      ]
    },
    {
      type: "Emploi post-diplôme",
      description: "CDI/CDD après obtention du diplôme",
      duree: "Contrat permanent ou temporaire",
      limitation: "Changement de statut nécessaire",
      salaire: "Selon qualification et secteur",
      secteurs: [
        "Ingénierie et tech",
        "Finance et banque",
        "Conseil et audit",
        "Marketing et communication",
        "Recherche et développement",
        "Secteur public"
      ],
      avantages: [
        "Stabilité financière",
        "Évolution de carrière",
        "Intégration durable",
        "Développement professionnel"
      ]
    }
  ]

  const secteursDemandeurs = [
    {
      secteur: "Technologies de l'information",
      demande: "Très forte",
      salaire: "45-80k€/an",
      competences: [
        "Développement web/mobile",
        "Intelligence artificielle",
        "Cybersécurité",
        "Data science"
      ],
      opportunites: "Startup, GAFAM, ESN, banques"
    },
    {
      secteur: "Ingénierie",
      demande: "Forte",
      salaire: "40-70k€/an",
      competences: [
        "Génie civil",
        "Mécanique",
        "Électronique",
        "Environnement"
      ],
      opportunites: "Grands groupes, bureaux d'études, industrie"
    },
    {
      secteur: "Finance",
      demande: "Modérée",
      salaire: "50-90k€/an",
      competences: [
        "Analyse financière",
        "Trading",
        "Risk management",
        "Audit"
      ],
      opportunites: "Banques, assurances, fonds d'investissement"
    },
    {
      secteur: "Santé",
      demande: "Forte",
      salaire: "35-60k€/an",
      competences: [
        "Soins infirmiers",
        "Recherche médicale",
        "Biotechnologies",
        "Pharmacie"
      ],
      opportunites: "Hôpitaux, laboratoires, industrie pharmaceutique"
    }
  ]

  const processusRecherche = [
    {
      etape: 1,
      titre: "Préparation",
      description: "Définir son projet professionnel",
      actions: [
        "Bilan de compétences",
        "Définition d'objectifs",
        "Recherche sectorielle",
        "Identification des entreprises cibles"
      ],
      duree: "2-3 semaines"
    },
    {
      etape: 2,
      titre: "Candidatures",
      description: "Créer et diffuser ses candidatures",
      actions: [
        "Rédaction CV et lettre de motivation",
        "Création profil LinkedIn",
        "Candidatures spontanées",
        "Réponses aux offres"
      ],
      duree: "4-6 semaines"
    },
    {
      etape: 3,
      titre: "Entretiens",
      description: "Passer les entretiens de sélection",
      actions: [
        "Préparation aux entretiens",
        "Recherche sur l'entreprise",
        "Simulation d'entretiens",
        "Négociation salariale"
      ],
      duree: "2-4 semaines"
    },
    {
      etape: 4,
      titre: "Intégration",
      description: "Réussir son intégration en entreprise",
      actions: [
        "Signature du contrat",
        "Changement de statut",
        "Période d'essai",
        "Formation interne"
      ],
      duree: "1-3 mois"
    }
  ]

  const plateformesEmploi = [
    {
      nom: "LinkedIn",
      type: "Réseau professionnel",
      specialite: "Tous secteurs",
      avantages: "Networking, visibilité, recruteurs",
      url: "https://www.linkedin.com/jobs/"
    },
    {
      nom: "Indeed",
      type: "Moteur de recherche",
      specialite: "Tous types d'emplois",
      avantages: "Large choix, alertes, candidature facile",
      url: "https://fr.indeed.com/"
    },
    {
      nom: "Welcome to the Jungle",
      type: "Plateforme moderne",
      specialite: "Startup, tech, scale-up",
      avantages: "Culture d'entreprise, vidéos, modernité",
      url: "https://www.welcometothejungle.com/fr"
    },
    {
      nom: "Pôle emploi",
      type: "Service public",
      specialite: "Tous secteurs",
      avantages: "Accompagnement, formations, aides",
      url: "https://www.francetravail.fr/"
    },
    {
      nom: "APEC",
      type: "Association pour cadres",
      specialite: "Postes cadres",
      avantages: "Conseil, accompagnement, expertise",
      url: "https://www.apec.fr/"
    },
    {
      nom: "JobTeaser",
      type: "Plateforme étudiante",
      specialite: "Stages, premiers emplois",
      avantages: "Spécialisé jeunes diplômés, partenariats écoles",
      url: "https://www.jobteaser.com/fr"
    }
  ]

  const competencesRecherchees = [
    {
      categorie: "Compétences techniques",
      competences: [
        "Programmation (Python, Java, JavaScript)",
        "Analyse de données",
        "Gestion de projet",
        "Langues étrangères",
        "Outils bureautiques avancés",
        "Compétences sectorielles spécifiques"
      ]
    },
    {
      categorie: "Soft skills",
      competences: [
        "Communication",
        "Travail en équipe",
        "Adaptabilité",
        "Leadership",
        "Résolution de problèmes",
        "Créativité et innovation"
      ]
    },
    {
      categorie: "Compétences interculturelles",
      competences: [
        "Multilinguisme",
        "Compréhension culturelle",
        "Adaptabilité internationale",
        "Perspective globale",
        "Ouverture d'esprit",
        "Expérience internationale"
      ]
    }
  ]

  const aidesRecherche = [
    {
      aide: "Accompagnement Pôle emploi",
      description: "Conseil et suivi personnalisé",
      eligibilite: "Demandeurs d'emploi inscrits",
      services: "CV, entretiens, formations, aides financières"
    },
    {
      aide: "Mission locale",
      description: "Accompagnement des 16-25 ans",
      eligibilite: "Jeunes de 16 à 25 ans",
      services: "Orientation, formation, emploi, logement"
    },
    {
      aide: "APEC",
      description: "Association pour l'emploi des cadres",
      eligibilite: "Cadres et jeunes diplômés Bac+3",
      services: "Conseil, offres d'emploi, événements networking"
    },
    {
      aide: "Services carrière des écoles",
      description: "Accompagnement par l'établissement",
      eligibilite: "Étudiants et diplômés de l'école",
      services: "Job dating, partenariats entreprises, alumni"
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Travailler en France</h1>
          <p className="text-xl text-muted-foreground">
            Guide complet pour naviguer le marché du travail français et lancer votre carrière
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

        {/* Information Alert for Non-EU */}
        {studentType === 'non-eu' && (
          <section className="mb-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-blue-900">
                      <strong>Important :</strong> Vos droits de travail dépendent de votre titre de séjour. 
                      Vous pouvez travailler 15-20h/semaine pendant vos études. Après votre diplôme, vous pouvez 
                      demander un changement de titre pour rester en France (Passeport Talent, VLS-TS salarié ou changement de titre).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Droits de travail par statut */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            {studentType === 'eu' ? 'Vos droits de travail (Étudiant UE)' : 'Vos droits de travail (Étudiant pays tiers)'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {droitsActuels.map((droit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{droit.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-blue-600 mb-1">Situation :</p>
                      <p className="text-sm text-muted-foreground">{droit.details}</p>
                    </div>
                    <div className="bg-blue-50 p-2 rounded">
                      <p className="text-xs font-semibold text-blue-900">
                        {droit.limite}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Types d'emplois */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Types d'emplois pour étudiants</h2>
          <div className="space-y-8">
            {typesEmplois.map((emploi, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-xl">{emploi.type}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {emploi.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="default" className="mb-2">
                        <CreditCard className="h-3 w-3 mr-1" />
                        {emploi.salaire}
                      </Badge>
                      <br />
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {emploi.limitation}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Secteurs populaires :</h4>
                      <ul className="space-y-1">
                        {emploi.secteurs.map((secteur, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <Building className="h-3 w-3 mr-2 text-blue-600" />
                            {secteur}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Avantages :</h4>
                      <ul className="space-y-1">
                        {emploi.avantages.map((avantage, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                            {avantage}
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

        {/* Secteurs qui recrutent */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Secteurs qui recrutent</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {secteursDemandeurs.map((secteur, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{secteur.secteur}</CardTitle>
                    <div className="text-right">
                      <Badge variant={
                        secteur.demande === 'Très forte' ? 'default' :
                        secteur.demande === 'Forte' ? 'secondary' : 'outline'
                      }>
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {secteur.demande}
                      </Badge>
                      <br />
                      <Badge variant="outline" className="mt-1">
                        {secteur.salaire}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Compétences recherchées :</h4>
                      <div className="flex flex-wrap gap-1">
                        {secteur.competences.map((comp, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {comp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Opportunités :</h4>
                      <p className="text-sm text-muted-foreground">{secteur.opportunites}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Processus de recherche */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Processus de recherche d'emploi</h2>
          <div className="space-y-6">
            {processusRecherche.map((etape, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="default" className="text-lg px-4 py-2">
                      Étape {etape.etape}
                    </Badge>
                    <div>
                      <CardTitle className="text-xl">{etape.titre}</CardTitle>
                      <div className="flex items-center mt-2">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{etape.duree}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {etape.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Actions à mener :</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {etape.actions.map((action, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        {action}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Plateformes d'emploi */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Plateformes de recherche d'emploi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plateformesEmploi.map((plateforme, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{plateforme.nom}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{plateforme.type}</Badge>
                    <Badge variant="outline">{plateforme.specialite}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{plateforme.avantages}</p>
                  <a 
                    href={plateforme.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline text-sm"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Visiter le site
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Compétences recherchées */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Compétences recherchées par les employeurs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {competencesRecherchees.map((categorie, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{categorie.categorie}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categorie.competences.map((competence, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <Award className="h-3 w-3 mr-2 text-orange-600 mt-1 flex-shrink-0" />
                        {competence}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Aides à la recherche */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Aides à la recherche d'emploi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aidesRecherche.map((aide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{aide.aide}</CardTitle>
                  <CardDescription>{aide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Éligibilité :</h4>
                      <p className="text-sm text-muted-foreground">{aide.eligibilite}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Services :</h4>
                      <p className="text-sm text-muted-foreground">{aide.services}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conseils pratiques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Conseils pour réussir</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  CV et lettre de motivation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600 mt-1" />
                    Adaptez votre CV au format français (1-2 pages max)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600 mt-1" />
                    Mettez en avant vos expériences internationales
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600 mt-1" />
                    Personnalisez chaque candidature
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600 mt-1" />
                    Soignez votre français écrit
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  Entretiens d'embauche
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600 mt-1" />
                    Préparez vos réponses aux questions classiques
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600 mt-1" />
                    Renseignez-vous sur l'entreprise et le secteur
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600 mt-1" />
                    Préparez des questions à poser au recruteur
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 mr-2 text-green-600 mt-1" />
                    Soignez votre présentation et ponctualité
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Changement de statut - Section détaillée */}
        {studentType === 'non-eu' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Rester en France après vos études</h2>
            <Card className="bg-green-50 border-green-200 mb-6">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Options pour prolonger votre séjour
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-green-900">Passeport Talent (VLS-TS Salarié)</h4>
                    <ul className="text-sm text-green-800 mt-2 space-y-1">
                      <li>• Durée: 4 ans renouvelable</li>
                      <li>• Condition: CDI dans secteur à forte demande</li>
                      <li>• Salaire: Au minimum 1,5 × SMIC</li>
                      <li>• Formation: Bac+3 minimum</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-blue-900">Changement titre de séjour étudiant</h4>
                    <ul className="text-sm text-blue-800 mt-2 space-y-1">
                      <li>• Durée: 1 an initialement</li>
                      <li>• Condition: Contrat de travail + permis de travail</li>
                      <li>• Démarche: Avant fin du titre étudiant</li>
                      <li>• Auprès: Préfecture de votre département</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-purple-900">Stage post-diplôme (APS)</h4>
                    <ul className="text-sm text-purple-800 mt-2 space-y-1">
                      <li>• Durée: 6 mois à 1 an</li>
                      <li>• Condition: Moins de 6 mois après diplôme</li>
                      <li>• Permet: Recherche d'emploi ou fin de stage</li>
                      <li>• Travail: Autorisé si lié à formation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Démarches importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-orange-900 space-y-2">
                  <li>✓ Commencez vos démarches 2-3 mois AVANT la fin de votre titre étudiant</li>
                  <li>✓ Contactez <a href="https://www.campusfrance.org/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Campus France</a> pour les options</li>
                  <li>✓ Consultez la <a href="https://www.interieur.gouv.fr/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Direction générale des finances publiques</a> pour conditions spécifiques</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Ressources utiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ressources officielles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Organismes d'aide à l'emploi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.francetravail.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      France Travail (anciennement Pôle emploi) - Accompagnement et offres d'emploi
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.apec.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      APEC - Association pour emploi cadres
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.jeunes.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Mission locale (16-25 ans) - Orientation et emploi
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.campusfrance.org/fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Campus France - Aide spéciale étudiants étrangers
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outils et formations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.moncompteformation.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Mon compte formation - Formations gratuites et certifications
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.openclassrooms.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      OpenClassrooms - Formations en ligne gratuites et payantes
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.mesfichesmetiers.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Mes fiches métiers - Guide des métiers et formations
                    </a>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <a href="https://www.service-public.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                      Service-Public.fr - Démarches administratives
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Lancez votre carrière en France</CardTitle>
              <CardDescription className="text-purple-100">
                Accédez à nos outils personnalisés et à l'accompagnement de nos experts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Créer mon profil professionnel
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Consulter les offres d'emploi
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Travailler
