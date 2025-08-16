import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import {
  FileText,
  Clock,
  AlertCircle,
  CheckCircle,
  Info,
  ExternalLink,
  Download,
  Calendar,
  MapPin,
  ArrowLeft,
  CreditCard,
  Shield,
  Users
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Demarches() {
  const navigate = useNavigate()
  const visaSteps = [
    {
      step: 1,
      title: "Préparation du dossier",
      duration: "2-3 semaines",
      description: "Rassemblez tous les documents nécessaires",
      documents: [
        "Passeport valide",
        "Formulaire de demande de visa",
        "Photos d'identité récentes",
        "Attestation d'acceptation dans un établissement",
        "Justificatifs de ressources financières",
        "Attestation de logement"
      ]
    },
    {
      step: 2,
      title: "Prise de rendez-vous",
      duration: "1-4 semaines d'attente",
      description: "Réservez votre créneau au consulat ou centre VFS",
      documents: [
        "Compte en ligne Campus France",
        "Paiement des frais de dossier",
        "Confirmation de rendez-vous"
      ]
    },
    {
      step: 3,
      title: "Dépôt de dossier",
      duration: "1 jour",
      description: "Présentez-vous au rendez-vous avec tous vos documents",
      documents: [
        "Dossier complet",
        "Données biométriques",
        "Entretien éventuel"
      ]
    },
    {
      step: 4,
      title: "Instruction et décision",
      duration: "2-8 semaines",
      description: "Attente de la décision consulaire",
      documents: [
        "Suivi en ligne possible",
        "Notification par email/SMS"
      ]
    }
  ]

  const titreSejourTypes = [
    {
      type: "Première demande",
      title: "Titre de séjour étudiant",
      duration: "Dans les 2 mois suivant l'arrivée",
      description: "Obligatoire pour tout séjour supérieur à 3 mois",
      cost: "225€",
      validity: "1 an renouvelable",
      requirements: [
        "VLS-TS validé ou visa long séjour",
        "Certificat de scolarité",
        "Justificatif de domicile",
        "Justificatif de ressources",
        "Photos d'identité",
        "Passeport"
      ]
    },
    {
      type: "Renouvellement",
      title: "Renouvellement titre de séjour",
      duration: "2-3 mois avant expiration",
      description: "Anticipez votre demande pour éviter les ruptures",
      cost: "225€",
      validity: "1 an renouvelable",
      requirements: [
        "Ancien titre de séjour",
        "Certificat de scolarité",
        "Relevés de notes",
        "Justificatif de domicile récent",
        "Justificatif de ressources",
        "Photos d'identité"
      ]
    },
    {
      type: "Changement",
      title: "Changement de statut",
      duration: "2-4 mois",
      description: "Passage du statut étudiant au statut salarié",
      cost: "225€",
      validity: "Variable selon le nouveau statut",
      requirements: [
        "Contrat de travail ou promesse d'embauche",
        "Diplôme obtenu en France",
        "Justificatifs de recherche d'emploi",
        "Justificatif de domicile",
        "Photos d'identité"
      ]
    }
  ]

  const autorisationTravail = [
    {
      type: "Étudiant UE",
      title: "Étudiants européens",
      description: "Libre accès au marché du travail",
      limitations: "Aucune limitation",
      demarches: "Aucune démarche spécifique"
    },
    {
      type: "Étudiant non-UE",
      title: "Étudiants extra-européens",
      description: "Travail autorisé avec limitations",
      limitations: "964h/an (60% du temps plein)",
      demarches: "Déclaration préalable à la préfecture pour certains emplois"
    },
    {
      type: "Stage",
      title: "Stages en entreprise",
      description: "Stages intégrés au cursus",
      limitations: "Durée selon convention de stage",
      demarches: "Convention de stage obligatoire"
    },
    {
      type: "Jobs d'été",
      title: "Emplois saisonniers",
      description: "Travail pendant les vacances",
      limitations: "Période de vacances universitaires",
      demarches: "Respect du quota annuel d'heures"
    }
  ]

  const importantDates = [
    {
      date: "Dans les 3 mois",
      event: "Validation VLS-TS",
      type: "alert",
      description: "Obligatoire dès l'arrivée en France"
    },
    {
      date: "2 mois avant expiration",
      event: "Renouvellement titre de séjour",
      type: "warning",
      description: "Anticipez votre demande"
    },
    {
      date: "Septembre - Octobre",
      event: "Pic d'affluence préfectures",
      type: "info",
      description: "Prévoyez des délais plus longs"
    }
  ]

  const prefectures = [
    {
      name: "Préfecture de Paris",
      address: "4 rue de Lutèce, 75004 Paris",
      phone: "01 42 76 40 40",
      hours: "Lun-Ven: 8h30-16h30",
      speciality: "Étudiants parisiens"
    },
    {
      name: "Préfecture des Hauts-de-Seine",
      address: "167 avenue Joliot-Curie, 92000 Nanterre",
      phone: "01 40 97 20 00",
      hours: "Lun-Ven: 9h-16h",
      speciality: "Étudiants de la petite couronne"
    },
    {
      name: "Préfecture du Val-de-Marne",
      address: "21-29 avenue du Général de Gaulle, 94000 Créteil",
      phone: "01 49 56 60 00",
      hours: "Lun-Ven: 8h45-16h15",
      speciality: "Étudiants du Val-de-Marne"
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Démarches administratives</h1>
          <p className="text-xl text-muted-foreground">
            Simplifiez vos démarches visa et titre de séjour avec nos guides détaillés
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2" />
                Important : Ne négligez pas vos démarches !
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-red-700 leading-relaxed">
                Les démarches administratives sont obligatoires et doivent être effectuées dans les délais.
                Un retard peut compromettre votre séjour en France et vos études. Nous vous accompagnons
                pas à pas pour éviter tout problème.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Visa étudiant */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Visa étudiant et validation VLS-TS</h2>

          <div className="mb-8">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Qu'est-ce que le VLS-TS ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">
                  Le Visa de Long Séjour valant Titre de Séjour (VLS-TS) est un visa qui vous permet de séjourner
                  en France pour vos études. Il doit être validé dans les 3 mois suivant votre arrivée.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {visaSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="default" className="text-lg px-4 py-2">
                      Étape {step.step}
                    </Badge>
                    <div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <div className="flex items-center mt-2">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Documents nécessaires :</h4>
                  <ul className="space-y-2">
                    {step.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Titre de séjour */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Titre de séjour</h2>

          <div className="space-y-6">
            {titreSejourTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="mb-2">{type.type}</Badge>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="secondary">
                          <CreditCard className="h-3 w-3 mr-1" />
                          {type.cost}
                        </Badge>
                        <Badge variant="secondary">
                          <Shield className="h-3 w-3 mr-1" />
                          {type.validity}
                        </Badge>
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          {type.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Pièces à fournir :</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {type.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-blue-600" />
                        {req}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Autorisation de travail */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Autorisation de travail étudiant</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {autorisationTravail.map((auth, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{auth.type}</Badge>
                  <CardTitle className="text-lg">{auth.title}</CardTitle>
                  <CardDescription>{auth.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm">Limitations :</h4>
                      <p className="text-sm text-muted-foreground">{auth.limitations}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Démarches :</h4>
                      <p className="text-sm text-muted-foreground">{auth.demarches}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Dates importantes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Échéances importantes</h2>
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
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Préfectures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Préfectures en Île-de-France</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {prefectures.map((prefecture, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{prefecture.name}</CardTitle>
                  <Badge variant="secondary">{prefecture.speciality}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600 mt-1" />
                      <p className="text-sm">{prefecture.address}</p>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-green-600" />
                      <p className="text-sm">{prefecture.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-orange-600" />
                      <p className="text-sm">{prefecture.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Outils et ressources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Outils et ressources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  Rappels automatiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Configurez des alertes pour ne jamais manquer une échéance importante.
                </p>
                <Button className="w-full">
                  Configurer mes rappels
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="h-5 w-5 text-green-600 mr-2" />
                  Checklist documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Téléchargez nos listes de documents pour chaque démarche.
                </p>
                <Button variant="outline" className="w-full">
                  Télécharger les listes
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  Accompagnement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bénéficiez d'un accompagnement personnalisé pour vos démarches.
                </p>
                <Button variant="outline" className="w-full">
                  Demander de l'aide
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Liens utiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Liens officiels</h2>
          <Card>
            <CardContent className="py-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3">Sites gouvernementaux</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                      <a href="#" className="text-blue-600 hover:underline">Service-public.fr</a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                      <a href="#" className="text-blue-600 hover:underline">Préfecture de Paris</a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                      <a href="#" className="text-blue-600 hover:underline">ANEF (Titre de séjour)</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Organismes spécialisés</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                      <a href="#" className="text-blue-600 hover:underline">Campus France</a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                      <a href="#" className="text-blue-600 hover:underline">VFS Global</a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                      <a href="#" className="text-blue-600 hover:underline">Consulats de France</a>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Liens officiels indispensables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Liens officiels</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://administration-etrangers-en-france.interieur.gouv.fr" target="_blank" rel="noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-muted">
              <ExternalLink className="h-4 w-4 mr-2" /> Démarches titre de séjour (ANEF)
            </a>
            <a href="https://france-visas.gouv.fr" target="_blank" rel="noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-muted">
              <ExternalLink className="h-4 w-4 mr-2" /> France‑Visas
            </a>
            <a href="https://www.ameli.fr" target="_blank" rel="noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-muted">
              <ExternalLink className="h-4 w-4 mr-2" /> Assurance maladie (Ameli)
            </a>
            <a href="https://www.campusfrance.org/fr/arriver-etudier-en-france" target="_blank" rel="noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-muted">
              <ExternalLink className="h-4 w-4 mr-2" /> Démarches Campus France
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Besoin d'aide pour vos démarches ?</CardTitle>
              <CardDescription className="text-red-100">
                Ne laissez pas les démarches administratives compromettre vos études
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Demander un accompagnement
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
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

export default Demarches