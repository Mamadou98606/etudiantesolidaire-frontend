import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
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
  Calculator,
  Search,
  Download,
  Mail,
  Phone,
  Calendar
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Travailler() {
  const navigate = useNavigate()
  const [salaireBrut, setSalaireBrut] = useState('')
  const [salaireNet, setSalaireNet] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('tous')

  // Types d'emplois
  const typesEmplois = [
    {
      type: "Job étudiant",
      title: "Emplois à temps partiel",
      description: "Travail flexible adapté à vos études",
      avantages: ["Flexibilité horaires", "Gain d'expérience", "Revenus complémentaires"],
      secteurs: ["Restauration", "Commerce", "Services", "Animation"],
      salaire: "10-15€/h",
      heures: "10-20h/semaine",
      liens: [
        {
          name: "Pôle Emploi",
          url: "https://www.pole-emploi.fr/candidat/recherche-emploi.html",
          description: "Offres d'emploi officielles"
        },
        {
          name: "Indeed France",
          url: "https://fr.indeed.com",
          description: "Plateforme de recherche d'emploi"
        },
        {
          name: "Apec",
          url: "https://www.apec.fr",
          description: "Emplois cadres et ingénieurs"
        }
      ]
    },
    {
      type: "Stage",
      title: "Stages en entreprise",
      description: "Expérience professionnelle dans votre domaine",
      avantages: ["Expérience terrain", "Réseau professionnel", "Possibilité CDI"],
      secteurs: ["Tous secteurs", "Tech", "Commerce", "Marketing", "Finance"],
      salaire: "Gratuit à 1000€/mois",
      heures: "35h/semaine",
      liens: [
        {
          name: "Stages.fr",
          url: "https://www.stages.fr",
          description: "Spécialisé stages et alternance"
        },
        {
          name: "Welcome to the Jungle",
          url: "https://www.welcometothejungle.com/fr",
          description: "Stages et emplois jeunes"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/jobs",
          description: "Réseau professionnel"
        }
      ]
    },
    {
      type: "CDI/CDD",
      title: "Contrats à durée déterminée/indéterminée",
      description: "Emplois stables avec tous les avantages",
      avantages: ["Sécurité de l'emploi", "Avantages sociaux", "Évolution de carrière"],
      secteurs: ["Tous secteurs", "Tech", "Finance", "Consulting", "Industrie"],
      salaire: "Variable selon poste",
      heures: "35h/semaine",
      liens: [
        {
          name: "Pôle Emploi",
          url: "https://www.pole-emploi.fr/candidat/recherche-emploi.html",
          description: "Offres d'emploi officielles"
        },
        {
          name: "Apec",
          url: "https://www.apec.fr",
          description: "Emplois cadres et ingénieurs"
        },
        {
          name: "Indeed France",
          url: "https://fr.indeed.com",
          description: "Plateforme de recherche d'emploi"
        }
      ]
    },
    {
      type: "Alternance",
      title: "Formation en alternance",
      description: "Études et travail en entreprise",
      avantages: ["Formation gratuite", "Salaire", "Expérience", "Diplôme"],
      secteurs: ["Tous secteurs", "Tech", "Commerce", "Industrie"],
      salaire: "600-1500€/mois",
      heures: "Alternance école/entreprise",
      liens: [
        {
          name: "Alternance.emploi.gouv.fr",
          url: "https://alternance.emploi.gouv.fr",
          description: "Site officiel de l'alternance"
        },
        {
          name: "Stages.fr",
          url: "https://www.stages.fr",
          description: "Offres d'alternance"
        },
        {
          name: "Pôle Emploi",
          url: "https://www.pole-emploi.fr/candidat/recherche-emploi.html",
          description: "Alternances et formations"
        }
      ]
    }
  ]

  // Modèles de CV
  const modelesCV = [
    {
      nom: "CV Français Classique",
      description: "Format traditionnel français",
      url: "https://www.pole-emploi.fr/candidat/rediger-mon-cv.html",
      type: "Gratuit"
    },
    {
      nom: "CV Europass",
      description: "Format européen standardisé",
      url: "https://europa.eu/europass/fr/create-europass-cv",
      type: "Gratuit"
    },
    {
      nom: "CV Créatif",
      description: "Design moderne et original",
      url: "https://www.canva.com/fr_fr/creer/cv/",
      type: "Gratuit"
    },
    {
      nom: "CV Tech",
      description: "Spécialisé secteur informatique",
      url: "https://www.welcometothejungle.com/fr/articles/cv-tech",
      type: "Gratuit"
    }
  ]

  // Liens utiles
  const liensUtiles = [
    {
      category: "Recherche d'emploi",
      links: [
        {
          name: "Pôle Emploi",
          url: "https://www.pole-emploi.fr",
          description: "Service public de l'emploi"
        },
        {
          name: "Apec",
          url: "https://www.apec.fr",
          description: "Association pour l'emploi des cadres"
        },
        {
          name: "Indeed France",
          url: "https://fr.indeed.com",
          description: "Plateforme internationale"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/jobs",
          description: "Réseau professionnel"
        }
      ]
    },
    {
      category: "Stages et alternance",
      links: [
        {
          name: "Stages.fr",
          url: "https://www.stages.fr",
          description: "Spécialisé stages et alternance"
        },
        {
          name: "Welcome to the Jungle",
          url: "https://www.welcometothejungle.com/fr",
          description: "Emplois et stages jeunes"
        },
        {
          name: "Alternance.emploi.gouv.fr",
          url: "https://alternance.emploi.gouv.fr",
          description: "Site officiel alternance"
        },
        {
          name: "JobTeaser",
          url: "https://www.jobteaser.com/fr",
          description: "Stages et premiers emplois"
        }
      ]
    },
    {
      category: "Ressources",
      links: [
        {
          name: "Service Public - Travail",
          url: "https://www.service-public.fr/particuliers/vosdroits/N35893",
          description: "Informations officielles"
        },
        {
          name: "Droit du travail",
          url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006075116/",
          description: "Code du travail"
        },
        {
          name: "Simulateur salaire",
          url: "https://www.urssaf.fr/portail/home/utile-et-pratique/estimateur-de-cotisations-2019.html",
          description: "Calculer son salaire net"
        },
        {
          name: "Convention collective",
          url: "https://www.legifrance.gouv.fr/liste/code?etatTexte=VIGUEUR&etatLien=VIGUEUR",
          description: "Trouver sa convention"
        }
      ]
    }
  ]

  // Simulateur de salaire
  const calculerSalaireNet = () => {
    if (salaireBrut) {
      const brut = parseFloat(salaireBrut)
      // Calcul simplifié (environ 75% du brut pour un étudiant)
      const net = brut * 0.75
      setSalaireNet(net.toFixed(2))
    }
  }

  const filteredEmplois = typesEmplois.filter(emploi => {
    const matchSearch = emploi.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       emploi.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchType = selectedType === 'tous' || emploi.type === selectedType
    return matchSearch && matchType
  })

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
            Trouvez un emploi, un stage ou une alternance adaptés à votre profil
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                Votre carrière en France
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-purple-700 leading-relaxed mb-4">
                La France offre de nombreuses opportunités professionnelles : jobs étudiants, 
                stages, alternance, CDI/CDD. Chaque type d'emploi a ses avantages et ses spécificités.
              </p>
              <p className="text-lg text-purple-700 leading-relaxed">
                Nous vous aidons à comprendre le marché du travail français et à trouver 
                l'opportunité qui correspond à vos objectifs.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Simulateur de salaire */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Simulateur de salaire</h2>
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Calculer votre salaire net
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-blue-700 mb-2 block">Salaire brut mensuel (€)</label>
                  <Input
                    type="number"
                    placeholder="Ex: 2000"
                    value={salaireBrut}
                    onChange={(e) => setSalaireBrut(e.target.value)}
                    className="border-blue-300"
                  />
                  <Button 
                    onClick={calculerSalaireNet}
                    className="mt-4 bg-blue-600 hover:bg-blue-700"
                  >
                    Calculer
                  </Button>
                </div>
                <div>
                  <label className="text-sm font-medium text-blue-700 mb-2 block">Salaire net estimé (€)</label>
                  <div className="p-4 bg-white rounded-md border border-blue-300">
                    <p className="text-2xl font-bold text-blue-800">
                      {salaireNet ? `${salaireNet}€` : '---'}
                    </p>
                    <p className="text-sm text-blue-600 mt-1">
                      Estimation basée sur les charges sociales étudiantes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Système de recherche */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Search className="h-6 w-6 mr-2" />
                Rechercher un type d'emploi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-green-700 mb-2 block">Recherche libre</label>
                  <Input
                    placeholder="Type d'emploi, secteur..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-green-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-green-700 mb-2 block">Type d'emploi</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md"
                  >
                    <option value="tous">Tous les types</option>
                    {typesEmplois.map(emploi => (
                      <option key={emploi.type} value={emploi.type}>
                        {emploi.type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Types d'emplois */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Types d'emplois disponibles ({filteredEmplois.length})
          </h2>
          <div className="space-y-8">
            {filteredEmplois.map((emploi, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Badge variant="default" className="text-lg px-4 py-2">
                        {emploi.type}
                      </Badge>
                      <div>
                        <CardTitle className="text-xl">{emploi.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge variant="outline">
                            <CreditCard className="h-3 w-3 mr-1" />
                            {emploi.salaire}
                          </Badge>
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {emploi.heures}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {emploi.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Avantages
                      </h4>
                      <ul className="space-y-1">
                        {emploi.avantages.map((avantage, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                            {avantage}
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold mb-3 mt-4 flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        Secteurs
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {emploi.secteurs.map((secteur, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {secteur}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Sites de recherche
                      </h4>
                      <div className="space-y-2">
                        {emploi.liens.map((lien, idx) => (
                          <a
                            key={idx}
                            href={lien.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-2 rounded hover:bg-muted transition-colors"
                          >
                            <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                            <div>
                              <p className="font-medium text-blue-600 hover:underline">
                                {lien.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {lien.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Modèles de CV */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Modèles de CV</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelesCV.map((modele, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    {modele.nom}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {modele.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {modele.description}
                  </p>
                  <Button asChild className="w-full" variant="outline">
                    <a href={modele.url} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Liens utiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Liens utiles</h2>
          
          {liensUtiles.map((category, categoryIndex) => (
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

        {/* Conseils pour l'emploi */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Conseils pour trouver un emploi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  CV et lettre de motivation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>CV en français, 1 page maximum</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Lettre de motivation personnalisée</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Mettez en avant vos compétences linguistiques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Adaptez votre CV au poste visé</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Entretien et réseautage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Préparez vos réponses aux questions classiques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Rejoignez des groupes LinkedIn</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Participez aux événements professionnels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                    <span>Suivez les entreprises qui vous intéressent</span>
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
              <CardTitle className="text-2xl">Besoin d'aide pour votre recherche d'emploi ?</CardTitle>
              <CardDescription className="text-purple-100">
                Nos conseillers vous accompagnent dans votre recherche
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Prendre rendez-vous
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
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

export default Travailler
