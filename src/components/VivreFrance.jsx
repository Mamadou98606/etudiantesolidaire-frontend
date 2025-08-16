import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import {
  Home,
  Heart,
  Bus,
  MapPin,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Info,
  CreditCard,
  Shield,
  Users,
  Calendar,
  Phone,
  Mail,
  Globe,
  Building,
  Car,
  Train,
  Plane
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function VivreFrance() {
  const navigate = useNavigate()
  const [selectedArrondissement, setSelectedArrondissement] = useState('tous')

  // Services par arrondissement
  const servicesParArrondissement = [
    {
      arrondissement: "1er",
      nom: "Louvre",
      services: {
        logement: ["Résidences étudiantes", "Colocations", "Studios"],
        transport: ["Métro 1, 7, 14", "RER A, B, D", "Bus 21, 27, 29, 67, 69, 72, 74, 85, 95"],
        sante: ["Hôpital Hôtel-Dieu", "Pharmacies", "Médecins généralistes"],
        culture: ["Musée du Louvre", "Palais Royal", "Théâtres"]
      },
      prixLogement: "1200-2000€/mois",
      securite: "Très sûr"
    },
    {
      arrondissement: "5ème",
      nom: "Panthéon",
      services: {
        logement: ["Résidences CROUS", "Colocations étudiantes", "Studios"],
        transport: ["Métro 7, 10", "RER B", "Bus 21, 27, 38, 47, 67, 84, 89"],
        sante: ["Hôpital Cochin", "Pharmacies", "Médecins"],
        culture: ["Sorbonne", "Muséum d'Histoire Naturelle", "Arènes de Lutèce"]
      },
      prixLogement: "800-1500€/mois",
      securite: "Très sûr"
    },
    {
      arrondissement: "13ème",
      nom: "Gobelins",
      services: {
        logement: ["Résidences étudiantes", "Logements sociaux", "Studios abordables"],
        transport: ["Métro 6, 7, 14", "RER C", "Tram T3a", "Bus nombreux"],
        sante: ["Hôpital Pitié-Salpêtrière", "Pharmacies", "Centres médicaux"],
        culture: ["Bibliothèque François Mitterrand", "Chinatown", "Parc de Bercy"]
      },
      prixLogement: "600-1200€/mois",
      securite: "Sûr"
    },
    {
      arrondissement: "18ème",
      nom: "Montmartre",
      services: {
        logement: ["Colocations", "Studios", "Logements abordables"],
        transport: ["Métro 2, 4, 12", "Bus 30, 31, 54, 80, 85, 95"],
        sante: ["Hôpital Bichat", "Pharmacies", "Médecins"],
        culture: ["Sacré-Cœur", "Place du Tertre", "Moulin Rouge"]
      },
      prixLogement: "700-1300€/mois",
      securite: "Sûr"
    }
  ]

  // Liens officiels
  const liensOfficiels = [
    {
      category: "Logement",
      links: [
        {
          name: "CROUS Paris",
          url: "https://www.crous-paris.fr",
          description: "Résidences étudiantes publiques"
        },
        {
          name: "Studapart",
          url: "https://www.studapart.com/fr",
          description: "Plateforme de logement étudiant"
        },
        {
          name: "LocService",
          url: "https://www.locservice.fr",
          description: "Garant locatif étudiant"
        },
        {
          name: "Action Logement",
          url: "https://www.actionlogement.fr",
          description: "Aides au logement"
        }
      ]
    },
    {
      category: "Transport",
      links: [
        {
          name: "RATP",
          url: "https://www.ratp.fr",
          description: "Métro, bus, tram à Paris"
        },
        {
          name: "SNCF",
          url: "https://www.sncf.com/fr",
          description: "Trains et RER"
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
      category: "Santé",
      links: [
        {
          name: "Ameli",
          url: "https://www.ameli.fr",
          description: "Sécurité sociale étudiante"
        },
        {
          name: "LMDE",
          url: "https://www.lmde.com",
          description: "Mutuelle étudiante"
        },
        {
          name: "SMEREP",
          url: "https://www.smerep.fr",
          description: "Mutuelle étudiante"
        },
        {
          name: "Doctolib",
          url: "https://www.doctolib.fr",
          description: "Rendez-vous médicaux en ligne"
        }
      ]
    },
    {
      category: "Administration",
      links: [
        {
          name: "Service Public",
          url: "https://www.service-public.fr",
          description: "Démarches administratives"
        },
        {
          name: "Préfecture de Police",
          url: "https://www.prefecturedepolice.interieur.gouv.fr",
          description: "Titre de séjour, carte de séjour"
        },
        {
          name: "CAF",
          url: "https://www.caf.fr",
          description: "Allocations familiales et logement"
        },
        {
          name: "Impôts",
          url: "https://www.impots.gouv.fr",
          description: "Déclaration de revenus"
        }
      ]
    }
  ]

  // Conseils pratiques
  const conseilsPratiques = [
    {
      categorie: "Logement",
      conseils: [
        "Commencez vos recherches 3-4 mois à l'avance",
        "Préparez un dossier complet (garant, justificatifs)",
        "Méfiez-vous des arnaques (ne payez jamais sans visiter)",
        "Pensez aux charges (électricité, eau, internet)"
      ]
    },
    {
      categorie: "Transport",
      conseils: [
        "Prenez un abonnement Navigo (moins cher que les tickets)",
        "Téléchargez l'app RATP pour les horaires",
        "Utilisez Vélib' pour les courts trajets",
        "Pensez au covoiturage pour les longs trajets"
      ]
    },
    {
      categorie: "Santé",
      conseils: [
        "Inscrivez-vous à la Sécurité sociale étudiante",
        "Prenez une mutuelle complémentaire",
        "Trouvez un médecin traitant rapidement",
        "Gardez vos ordonnances et justificatifs"
      ]
    },
    {
      categorie: "Administration",
      conseils: [
        "Faites des copies de tous vos documents",
        "Utilisez le site service-public.fr",
        "Prenez RDV en ligne quand possible",
        "Gardez les justificatifs de vos démarches"
      ]
    }
  ]

  const filteredServices = selectedArrondissement === 'tous' 
    ? servicesParArrondissement 
    : servicesParArrondissement.filter(service => service.arrondissement === selectedArrondissement)

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
            Tout ce que vous devez savoir pour bien vivre en France
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center">
                <Home className="h-6 w-6 mr-2" />
                Bienvenue en France !
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-green-700 leading-relaxed mb-4">
                Vivre en France, c'est découvrir une culture riche, une gastronomie exceptionnelle 
                et un mode de vie unique. Mais c'est aussi s'adapter à un nouveau système administratif.
              </p>
              <p className="text-lg text-green-700 leading-relaxed">
                Nous vous accompagnons dans toutes vos démarches : logement, transport, santé, 
                administration et intégration culturelle.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Carte interactive des arrondissements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Services par arrondissement</h2>
          
          {/* Filtre arrondissement */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">Sélectionner un arrondissement :</label>
            <select
              value={selectedArrondissement}
              onChange={(e) => setSelectedArrondissement(e.target.value)}
              className="w-full md:w-64 p-2 border border-gray-300 rounded-md"
            >
              <option value="tous">Tous les arrondissements</option>
              {servicesParArrondissement.map(service => (
                <option key={service.arrondissement} value={service.arrondissement}>
                  {service.arrondissement}ème - {service.nom}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="default" className="text-lg px-3 py-1">
                      {service.arrondissement}ème
                    </Badge>
                    <Badge variant="outline">
                      {service.securite}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{service.nom}</CardTitle>
                  <CardDescription>
                    Logement : {service.prixLogement}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Home className="h-4 w-4 mr-2" />
                      Logement
                    </h4>
                    <ul className="text-sm space-y-1">
                      {service.services.logement.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Bus className="h-4 w-4 mr-2" />
                      Transport
                    </h4>
                    <ul className="text-sm space-y-1">
                      {service.services.transport.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Santé
                    </h4>
                    <ul className="text-sm space-y-1">
                      {service.services.sante.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Globe className="h-4 w-4 mr-2" />
                      Culture
                    </h4>
                    <ul className="text-sm space-y-1">
                      {service.services.culture.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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

        {/* Conseils pratiques */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Conseils pratiques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {conseilsPratiques.map((categorie, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {categorie.categorie === 'Logement' && <Home className="h-5 w-5 mr-2 text-blue-600" />}
                    {categorie.categorie === 'Transport' && <Bus className="h-5 w-5 mr-2 text-green-600" />}
                    {categorie.categorie === 'Santé' && <Heart className="h-5 w-5 mr-2 text-red-600" />}
                    {categorie.categorie === 'Administration' && <Shield className="h-5 w-5 mr-2 text-purple-600" />}
                    {categorie.categorie}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categorie.conseils.map((conseil, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{conseil}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Checklist d'arrivée */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Checklist d'arrivée</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Première semaine</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Ouvrir un compte bancaire</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> S'inscrire à la Sécurité sociale</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Prendre un abonnement transport</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Trouver un médecin traitant</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> S'inscrire à la CAF</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Premier mois</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Faire la demande de titre de séjour</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Souscrire une assurance habitation</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Prendre un abonnement internet/téléphone</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Découvrir les commerces de proximité</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Rejoindre des associations étudiantes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  Prendre rendez-vous
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

export default VivreFrance
