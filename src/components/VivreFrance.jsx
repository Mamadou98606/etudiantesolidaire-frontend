import React, { useState } from 'react'
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
  Utensils,
  Wifi,
  Car,
  Train,
  Bike
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function VivreFrance() {
  const navigate = useNavigate()
  const [selectedArrondissement, setSelectedArrondissement] = useState('tous')

  // Services par arrondissement
  const servicesParArrondissement = {
    "1er": {
      name: "1er arrondissement",
      services: [
        { name: "CROUS Louvre", type: "logement", address: "15 rue de Rivoli" },
        { name: "Bibliothèque Sainte-Geneviève", type: "etude", address: "10 place du Panthéon" },
        { name: "RATP - Station Louvre-Rivoli", type: "transport", address: "Rue de Rivoli" }
      ]
    },
    "5e": {
      name: "5e arrondissement (Quartier Latin)",
      services: [
        { name: "CROUS Censier", type: "logement", address: "13 rue Santeuil" },
        { name: "Sorbonne Université", type: "etude", address: "21 rue de l'École de Médecine" },
        { name: "RATP - Station Saint-Michel", type: "transport", address: "Place Saint-Michel" }
      ]
    },
    "6e": {
      name: "6e arrondissement (Saint-Germain)",
      services: [
        { name: "CROUS Mabillon", type: "logement", address: "3 rue Mabillon" },
        { name: "Sciences Po Paris", type: "etude", address: "27 rue Saint-Guillaume" },
        { name: "RATP - Station Saint-Germain-des-Prés", type: "transport", address: "Boulevard Saint-Germain" }
      ]
    },
    "13e": {
      name: "13e arrondissement",
      services: [
        { name: "CROUS Cité universitaire", type: "logement", address: "17 boulevard Jourdan" },
        { name: "Université Paris 8", type: "etude", address: "2 rue de la Liberté" },
        { name: "RATP - Station Place d'Italie", type: "transport", address: "Place d'Italie" }
      ]
    }
  }

  // Liens officiels des services
  const liensOfficiels = [
    {
      category: "Logement étudiant",
      links: [
        {
          name: "CROUS Paris",
          url: "https://www.crous-paris.fr",
          description: "Résidences universitaires et logement étudiant"
        },
        {
          name: "Cité internationale universitaire",
          url: "https://www.ciup.fr",
          description: "Résidences internationales"
        },
        {
          name: "Action Logement",
          url: "https://www.actionlogement.fr",
          description: "Aides au logement et garantie Visale"
        },
        {
          name: "1% Logement",
          url: "https://www.1pourcentlogement.fr",
          description: "Fonds d'aide au logement"
        }
      ]
    },
    {
      category: "Transport",
      links: [
        {
          name: "RATP",
          url: "https://www.ratp.fr",
          description: "Transports en commun parisiens"
        },
        {
          name: "SNCF Transilien",
          url: "https://www.transilien.com",
          description: "Trains de banlieue"
        },
        {
          name: "Vélib'",
          url: "https://www.velib-metropole.fr",
          description: "Vélos en libre-service"
        },
        {
          name: "Navigo",
          url: "https://www.navigo.fr",
          description: "Carte de transport Île-de-France"
        }
      ]
    },
    {
      category: "Santé et sécurité sociale",
      links: [
        {
          name: "Ameli",
          url: "https://www.ameli.fr",
          description: "Sécurité sociale étudiante"
        },
        {
          name: "CPAM de Paris",
          url: "https://www.ameli.fr/paris",
          description: "Caisse primaire d'assurance maladie de Paris"
        },
        {
          name: "LMDE",
          url: "https://www.lmde.com",
          description: "Mutuelle étudiante"
        },
        {
          name: "HEYME",
          url: "https://www.heyme.care",
          description: "Mutuelle étudiante"
        }
      ]
    },
    {
      category: "Services bancaires",
      links: [
        {
          name: "LCL",
          url: "https://www.lcl.fr/particulier/etudiants",
          description: "Compte étudiant gratuit"
        },
        {
          name: "Société Générale",
          url: "https://www.societegenerale.fr/particuliers/etudiants",
          description: "Offres bancaires étudiantes"
        },
        {
          name: "BNP Paribas",
          url: "https://www.bnpparibas.fr/particuliers/etudiants",
          description: "Solutions bancaires étudiantes"
        }
      ]
    }
  ]

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
    }
  ]

  const budgetMensuel = [
    {
      categorie: "Logement",
      montant: "400-800€",
      details: "Loyer + charges + assurance"
    },
    {
      categorie: "Alimentation",
      montant: "200-300€",
      details: "Courses + restaurants occasionnels"
    },
    {
      categorie: "Transport",
      montant: "20-75€",
      details: "Abonnement transports en commun"
    },
    {
      categorie: "Santé",
      montant: "15-50€",
      details: "Mutuelle étudiante"
    },
    {
      categorie: "Loisirs",
      montant: "100-200€",
      details: "Sorties, culture, sports"
    },
    {
      categorie: "Divers",
      montant: "50-100€",
      details: "Téléphone, internet, vêtements"
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
            Tout ce que vous devez savoir pour réussir votre intégration en France
          </p>
        </div>

        {/* Carte interactive des services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Services par arrondissement</h2>
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <MapPin className="h-6 w-6 mr-2" />
                Carte interactive des services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <label className="text-sm font-medium text-green-700 mb-2 block">Sélectionner un arrondissement :</label>
                <select
                  value={selectedArrondissement}
                  onChange={(e) => setSelectedArrondissement(e.target.value)}
                  className="w-full md:w-64 p-2 border border-green-300 rounded-md"
                >
                  <option value="tous">Tous les arrondissements</option>
                  {Object.keys(servicesParArrondissement).map(arr => (
                    <option key={arr} value={arr}>
                      {servicesParArrondissement[arr].name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(servicesParArrondissement)
                  .filter(([arr]) => selectedArrondissement === 'tous' || arr === selectedArrondissement)
                  .map(([arr, data]) => (
                    <Card key={arr} className="bg-white">
                      <CardHeader>
                        <CardTitle className="text-lg">{data.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {data.services.map((service, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              {service.type === 'logement' && <Home className="h-4 w-4 text-blue-600 mt-1" />}
                              {service.type === 'etude' && <BookOpen className="h-4 w-4 text-green-600 mt-1" />}
                              {service.type === 'transport' && <Bus className="h-4 w-4 text-orange-600 mt-1" />}
                              <div>
                                <p className="font-medium text-sm">{service.name}</p>
                                <p className="text-xs text-muted-foreground">{service.address}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Aspects de la vie étudiante */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Aspects de la vie étudiante</h2>
          <div className="space-y-8">
            {aspectsVie.map((aspect, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {aspect.icon}
                    <div>
                      <CardTitle className="text-xl">{aspect.categorie}</CardTitle>
                      <CardDescription>{aspect.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {aspect.sousCategories.map((sousCat, idx) => (
                      <div key={idx} className="space-y-3">
                        <div>
                          <h4 className="font-semibold">{sousCat.type}</h4>
                          <Badge variant="secondary" className="mt-1">
                            <CreditCard className="h-3 w-3 mr-1" />
                            {sousCat.prix}
                          </Badge>
                        </div>
                        <div>
                          <h5 className="font-medium text-sm text-green-600 mb-1">Avantages :</h5>
                          <ul className="text-sm space-y-1">
                            {sousCat.avantages.map((avantage, i) => (
                              <li key={i} className="flex items-center">
                                <CheckCircle className="h-3 w-3 mr-1 text-green-600" />
                                {avantage}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-sm text-orange-600 mb-1">Inconvénients :</h5>
                          <ul className="text-sm space-y-1">
                            {sousCat.inconvenients.map((inconvenient, i) => (
                              <li key={i} className="flex items-center">
                                <AlertCircle className="h-3 w-3 mr-1 text-orange-600" />
                                {inconvenient}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Budget mensuel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Budget mensuel estimé</h2>
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Répartition des dépenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {budgetMensuel.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{item.categorie}</h4>
                      <Badge variant="outline">{item.montant}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-center mb-2">Budget total mensuel</h4>
                <p className="text-2xl font-bold text-purple-800 text-center">785€ - 1525€</p>
                <p className="text-sm text-muted-foreground text-center">Selon votre mode de vie et localisation</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Liens officiels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Liens officiels</h2>
          
          {liensOfficiels.map((category, categoryIndex) => (
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

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Besoin d'aide pour votre installation ?</CardTitle>
              <CardDescription className="text-green-100">
                Nos conseillers vous accompagnent dans toutes vos démarches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Demander de l'aide
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
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
export default VivreFrance;
