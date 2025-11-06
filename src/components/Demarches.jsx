import React, { useState } from 'react'
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
  ArrowLeft,
  Shield,
  Home,
  Heart,
  Briefcase,
  Calendar,
  MapPin
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Demarches() {
  const navigate = useNavigate()
  const [studentType, setStudentType] = useState('non-eu')

  // TIMELINE - Ce que tu dois faire AVANT de partir et une fois arrivé
  const timeline = [
    { 
      month: "T-6 mois (Avril 2025)", 
      title: "Cherche logement + Accepte université",
      tasks: ["Accepter place université", "Chercher logement", "Vérifier conditions visa"],
      priority: "HAUTE",
      icon: "📚"
    },
    { 
      month: "T-4 mois (Juin 2025)", 
      title: "DEMANDE VISA (NON-UE ONLY!)",
      tasks: ["Rassembler docs dossier", "Prendre RDV consulat", "Payer frais visa"],
      priority: "CRITIQUE",
      icon: "🛂",
      critical: true
    },
    { 
      month: "T-2 mois (Août 2025)", 
      title: "Avant départ: derniers préparatifs",
      tasks: ["Réserver logement", "Ouvrir compte bancaire en ligne si possible", "Assurance voyage"],
      priority: "HAUTE",
      icon: "✈️"
    },
    { 
      month: "J0 (Septembre 2025)", 
      title: "🚨 ARRIVÉE EN FRANCE: URGENT",
      tasks: ["Valider VLS-TS en ligne (NON-UE)", "Ouvrir compte bancaire français", "Inscrire sécu", "Trouver adresse mail université"],
      priority: "CRITIQUE",
      icon: "🏁",
      critical: true
    },
    { 
      month: "J+30 (Octobre 2025)", 
      title: "Après arrivée: démarches administratives",
      tasks: ["Demander titre de séjour (préfecture)", "Dossier CAF logement", "Souscrire mutuelle"],
      priority: "HAUTE",
      icon: "📋"
    },
    { 
      month: "J+90 (Décembre 2025)", 
      title: "Avant fin délai: vérifier tout",
      tasks: ["Fin délai validation VLS-TS (NON-UE)", "CFE avant 30 nov si travail", "Renouvellement titre avant expiration"],
      priority: "CRITIQUE",
      icon: "⏰",
      critical: true
    }
  ]

  // NON-UE: Visa + Titre de séjour (compliqué mais OBLIGATOIRE)
  const nonEuSteps = [
    {
      step: 1,
      title: "Demander VISA long séjour",
      time: "Juin-Juillet (4-8 semaines avant départ)",
      description: "C'est ton sésame pour entrer en France",
      what: [
        "Passeport valide min 15 mois",
        "Certificat d'acceptation université",
        "Preuve ressources financières (~1000€/mois)",
        "Assurance maladie",
        "Attestation logement"
      ],
      where: "Auprès du consulat de France de ton pays",
      link: "https://www.campusfrance.org/fr"
    },
    {
      step: 2,
      title: "VALIDER VLS-TS dès arrivée",
      time: "DANS LES 3 MOIS - PAS DE DÉLAI!",
      description: "⚠️ CRITIQUE: Ne pas valider = situation irrégulière = risque déportation",
      what: [
        "Timbre fiscal (60€) acheté à la gare/tabac",
        "Connexion internet pour valider en ligne",
        "Puis validation physique à préfecture/sous-préfecture"
      ],
      where: "En ligne puis à la préfecture",
      link: "https://administration-etrangers-en-france.interieur.gouv.fr",
      critical: true
    },
    {
      step: 3,
      title: "Demander titre de séjour",
      time: "Septembre-Octobre (2-4 semaines)",
      description: "Document officiel français après validation VLS-TS",
      what: [
        "VLS-TS déjà validé",
        "Certificat de scolarité",
        "Justificatif domicile (bail loyer / attestation logement univ)",
        "Photos identité",
        "Passeport"
      ],
      where: "Préfecture de ton département",
      cost: "225€ (timbre fiscal)"
    },
    {
      step: 4,
      title: "Ouvrir compte bancaire français",
      time: "Semaine 1 d'arrivée",
      description: "Indispensable pour bourse, salaire, loyer",
      what: [
        "Passeport",
        "Certificat de scolarité",
        "Titre de séjour provisoire OK"
      ],
      where: "Banque près de ton université",
      tip: "Les banques étudiantes offrent souvent compte gratuit + carte gratuite"
    },
    {
      step: 5,
      title: "S'inscrire à Sécurité Sociale",
      time: "Semaine 1 (PRIORITÉ!)",
      description: "⚠️ Pas de sécu = frais énormes (100€+/jour d'hospitalisation)",
      what: [
        "Passeport",
        "Titre de séjour",
        "Certificat de scolarité"
      ],
      where: "Centre de sécu local / via université",
      tip: "C'est gratuit pour étudiants!"
    },
    {
      step: 6,
      title: "Demander APL/ALS (aide logement)",
      time: "Après signature bail",
      description: "Jusqu'à 50-70% de ton loyer remboursé!",
      what: [
        "Bail de location",
        "Justificatif ressources",
        "Titre de séjour"
      ],
      where: "CAF.fr - Demande en ligne",
      delay: "Attente: 4-6 semaines",
      link: "https://www.caf.fr"
    }
  ]

  // UE: Simple (liberté de circulation)
  const euSteps = [
    {
      step: 1,
      title: "C'est simple: tu peux partir!",
      description: "UE = Liberté de circulation totale",
      what: ["Carte d'identité ou passeport valides", "C'est tout! 🎉"]
    },
    {
      step: 2,
      title: "À l'arrivée: Sécurité Sociale",
      description: "Couverture maladie gratuite",
      what: [
        "Carte d'identité",
        "Certificat de scolarité",
        "Inscription université"
      ]
    },
    {
      step: 3,
      title: "Ouvrir compte bancaire",
      description: "Pour recevoir argent de poche / bourse",
      what: ["Pièce identité", "Certificat de scolarité"]
    },
    {
      step: 4,
      title: "Demander APL logement",
      description: "Jusqu'à 50% du loyer remboursé",
      what: ["Bail location", "Justificatif ressources"]
    }
  ]

  // SANTÉ: C'est critique!
  const health = [
    {
      name: "Sécurité Sociale",
      cost: "GRATUIT",
      coverage: "Remboursement 70% soins, 100% urgence",
      register: "Via centre sécu + certificat scolarité",
      warning: "❌ Pas de sécu = Très cher en urgence!"
    },
    {
      name: "Mutuelle étudiante",
      cost: "15-40€/mois",
      coverage: "Complémente sécu + dents/lunettes",
      register: "Via LMDE ou autres mutuelles étudiantes",
      tip: "Fortement recommandée"
    }
  ]

  // TRAVAIL: Droits différents selon profil
  const workRights = {
    eu: {
      title: "🇪🇺 Travail pour UE",
      rights: "Liberté totale",
      hours: "Illimité",
      limit: "Mais attention: revenus > ~1250€/mois = perte aides étudiantes"
    },
    nonEu: {
      title: "🌍 Travail pour Non-UE",
      rights: "Travail autorisé MAIS limité",
      hours: "964h/an (= 60% temps plein)",
      limit: "Stages/jobs d'été = sans limites. Année académique = strict"
    }
  }

  // AIDES FINANCIÈRES
  const aids = [
    {
      name: "APL/ALS (Logement)",
      amount: "50-70% loyer",
      requirement: "Location individuelle, loyer 200-600€",
      apply: "CAF.fr - délai 4-6 semaines",
      link: "https://www.caf.fr"
    },
    {
      name: "Bourse ministérielle",
      amount: "180-300€/mois",
      requirement: "Non-UE, ressources faibles, via Campus France",
      apply: "Campus France",
      link: "https://www.campusfrance.org"
    }
  ]

  const links = [
    { name: "Campus France (visa + bourse)", url: "https://www.campusfrance.org", icon: "🎓" },
    { name: "ANEF (Titre de séjour)", url: "https://administration-etrangers-en-france.interieur.gouv.fr", icon: "📋" },
    { name: "Service-Public (infos officielles)", url: "https://www.service-public.fr/particuliers/vosdroits/N19804", icon: "📖" },
    { name: "Ameli (Sécurité Sociale)", url: "https://www.ameli.fr", icon: "🏥" },
    { name: "CAF (APL/ALS)", url: "https://www.caf.fr", icon: "🏠" }
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" onClick={() => navigate('/')} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour accueil
          </Button>
          <h1 className="text-4xl font-bold mb-4">Démarches administratives</h1>
          <p className="text-xl text-muted-foreground">
            Guide complet pour étudiants internationaux - Visa, titre de séjour, santé, logement
          </p>
        </div>

        {/* ALERTE CRITIQUE */}
        <section className="mb-8">
          <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white border-red-800">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <AlertCircle className="h-6 w-6 mr-2" />
                ⚠️ CRITIQUE: Ces démarches changent tout!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-red-50">
              <p>🚫 <strong>Visa expiré?</strong> = Déportation possible</p>
              <p>🚫 <strong>VLS-TS non validé?</strong> = Situation irrégulière</p>
              <p>🚫 <strong>Pas de sécu?</strong> = Urgence = 100€+/jour</p>
              <p>✅ <strong>Solution:</strong> Anticipe 2-3 mois d'avance!</p>
            </CardContent>
          </Card>
        </section>

        {/* TABS PROFESSIONNEL */}
        <section className="mb-12">
          <div className="flex gap-2 border-b border-gray-200 mb-8">
            <button
              onClick={() => setStudentType('eu')}
              className={`px-6 py-3 font-semibold text-sm transition-all ${
                studentType === 'eu'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="text-lg mr-2">🇪🇺</span>
              Union Européenne
            </button>
            <button
              onClick={() => setStudentType('non-eu')}
              className={`px-6 py-3 font-semibold text-sm transition-all ${
                studentType === 'non-eu'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="text-lg mr-2">🌍</span>
              Pays tiers
            </button>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">📅 Timeline: Ce que tu dois faire quand</h2>
          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <Card
                key={idx}
                className={`border-l-4 ${
                  item.critical
                    ? 'border-l-red-600 bg-red-50'
                    : item.priority === 'HAUTE'
                    ? 'border-l-orange-500 bg-orange-50'
                    : 'border-l-blue-500 bg-blue-50'
                }`}
              >
                <CardContent className="py-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-bold text-lg">{item.month}</p>
                        <Badge
                          className={
                            item.critical ? 'bg-red-600' : item.priority === 'HAUTE' ? 'bg-orange-600' : 'bg-blue-600'
                          }
                        >
                          {item.priority}
                        </Badge>
                      </div>
                      <p className="font-semibold mb-2">{item.title}</p>
                      <ul className="space-y-1">
                        {item.tasks.map((task, i) => (
                          <li key={i} className="text-sm flex items-center">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-600" />
                            {task}
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

        {/* PROCÉDURE PAR PROFIL */}
        <section className="mb-16">
          {studentType === 'non-eu' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">🌍 Procédure Non-UE (LA VRAIE PROCÉDURE)</h2>
              <div className="space-y-6">
                {nonEuSteps.map((step, idx) => (
                  <Card
                    key={idx}
                    className={`hover:shadow-lg transition-shadow ${step.critical ? 'border-2 border-red-400' : ''}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <Badge className={step.critical ? 'bg-red-600' : 'bg-blue-600'}>
                            Étape {step.step} {step.critical ? '🚨' : ''}
                          </Badge>
                          <CardTitle className="text-xl mt-2">{step.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1 font-semibold">{step.time}</p>
                        </div>
                        {step.cost && (
                          <Badge variant="secondary" className="h-fit">
                            💰 {step.cost}
                          </Badge>
                        )}
                      </div>
                      <p className="text-base">{step.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">📋 Documents à apporter:</h4>
                          <ul className="space-y-1">
                            {step.what.map((item, i) => (
                              <li key={i} className="text-sm flex items-center">
                                <FileText className="h-4 w-4 mr-2 text-blue-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">📍 Où: {step.where}</p>
                        </div>
                        {step.tip && (
                          <div className="bg-blue-50 p-3 rounded border border-blue-200">
                            <p className="text-sm"><strong>💡 Conseil:</strong> {step.tip}</p>
                          </div>
                        )}
                        {step.link && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={step.link} target="_blank" rel="noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" /> Lien officiel
                            </a>
                          </Button>
                        )}
                        {step.delay && (
                          <p className="text-sm text-muted-foreground"><strong>⏱️ Attente:</strong> {step.delay}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {studentType === 'eu' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">🇪🇺 Procédure UE (BEAUCOUP PLUS SIMPLE!)</h2>
              <div className="space-y-6">
                {euSteps.map((step, idx) => (
                  <Card key={idx} className="border-2 border-green-200 bg-green-50 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge className="bg-green-600 w-fit">Étape {step.step}</Badge>
                      <CardTitle className="text-xl mt-2">{step.title}</CardTitle>
                      <p className="text-base mt-2">{step.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.what.map((item, i) => (
                          <li key={i} className="text-sm flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* SANTÉ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🏥 Santé (OBLIGATOIRE!)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {health.map((h, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-red-600" />
                    {h.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Coût:</p>
                    <p className="font-bold text-lg text-green-600">{h.cost}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Couverture:</p>
                    <p className="text-sm">{h.coverage}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Comment s'inscrire:</p>
                    <p className="text-sm">{h.register}</p>
                  </div>
                  {h.warning && <div className="bg-red-50 p-2 rounded text-sm text-red-700">{h.warning}</div>}
                  {h.tip && <div className="bg-blue-50 p-2 rounded text-sm text-blue-700">{h.tip}</div>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* TRAVAIL */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">💼 Droits de travail</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle>{workRights.eu.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Droits:</strong> {workRights.eu.rights}</p>
                <p><strong>Heures:</strong> {workRights.eu.hours}</p>
                <div className="bg-yellow-50 p-2 rounded text-sm border border-yellow-200">
                  <p>⚠️ {workRights.eu.limit}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle>{workRights.nonEu.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Droits:</strong> {workRights.nonEu.rights}</p>
                <p><strong>Heures/an:</strong> {workRights.nonEu.hours}</p>
                <div className="bg-blue-50 p-2 rounded text-sm border border-blue-200">
                  <p>✅ {workRights.nonEu.limit}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AIDES FINANCIÈRES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">💰 Aides financières (TU PEUX RECEVOIR DE L'ARGENT!)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aids.map((aid, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Home className="h-5 w-5 mr-2 text-blue-600" />
                    {aid.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Montant:</p>
                    <p className="text-lg font-bold text-green-600">{aid.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Conditions:</p>
                    <p className="text-sm">{aid.requirement}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Demander ici:</p>
                    <p className="text-sm font-semibold">{aid.apply}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={aid.link} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" /> Visiter le site
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* LIENS OFFICIELS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔗 Liens officiels (À bookmarquer!)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300 transition"
              >
                <span className="text-2xl mr-3">{link.icon}</span>
                <div>
                  <p className="font-semibold text-blue-600">{link.name}</p>
                  <p className="text-xs text-muted-foreground">{link.url}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Tu as encore des questions?</CardTitle>
              <CardDescription className="text-blue-100">
                Contacte ton université, Campus France, ou une association d'étudiants internationaux
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Contacter université
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                  asChild
                >
                  <a href="/orientation">Voir guide Orientation →</a>
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
