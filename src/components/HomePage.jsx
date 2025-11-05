import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users, AlertCircle } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Orientation",
      description: "Trouvez votre voie parmi les formations françaises",
      icon: BookOpen,
      features: ["BTS", "Licence", "Master", "CAP", "Titre professionnel"],
      path: "/orientation",
      details: [
        "• Choisir son diplôme: differences entre BTS, Licence et Master.",
        "• Construire un dossier: CV, lettre de motivation, relevés de notes.",
        "• Calendrier Parcoursup et candidatures directes.",
        "• Conseils pour optimiser vos chances d'admission."
      ],
      cta: "Découvrir l'orientation"
    },
    {
      title: "Démarches administratives",
      description: "Simplifiez vos démarches visa et titre de séjour",
      icon: CheckCircle,
      features: ["Visa étudiant", "Titre de séjour", "Autorisation de travail"],
      path: "/demarches",
      details: [
        "• Visa long séjour (VLS-TS): étapes, pièces, RDV.",
        "• Titre de séjour étudiant: renouvellement, délais, obligations.",
        "• Autorisation de travail: combien d'heures ? Comment déclarer ?",
        "• Conseils pratiques pour éviter les refus et retards."
      ],
      cta: "Voir les démarches"
    },
    {
      title: "Vie étudiante",
      description: "Tout pour réussir votre intégration en France",
      icon: Globe,
      features: ["Logement", "Santé", "Transport", "Culture"],
      path: "/vivre-en-france",
      details: [
        "• Se loger: CROUS, résidences, annonces, garants.",
        "• Se soigner: Sécurité sociale, mutuelle, médecin traitant.",
        "• Se déplacer: cartes de transport, bons plans mobilité.",
        "• S'intégrer: associations, évènements, culture et loisirs."
      ],
      cta: "Préparer ma vie en France"
    },
    {
      title: "Emploi",
      description: "Préparez votre insertion professionnelle",
      icon: Users,
      features: ["Jobs étudiants", "Stages", "CDI/CDD", "Changement de statut"],
      path: "/travailler",
      details: [
        "• Trouver un job étudiant: CV, sites, réseaux.",
        "• Stages: conventions, rémunération, droits.",
        "• Candidatures pro: CV français, lettre, entretien.",
        "• Après le diplôme: changement de statut étudiant → salarié."
      ],
      cta: "Trouver un job/stage"
    },
  ];

  const stats = [
    { number: "50,000+", label: "Étudiants accompagnés" },
    { number: "200+", label: "Formations référencées" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "24/7", label: "Support disponible" },
  ];

  const keyDates = [
    {
      period: "Nov - Déc 2025",
      title: "Parcoursup - Ouverture",
      description: "Créez votre dossier et ajoutez vos vœux",
      priority: "high",
      link: "https://www.parcoursup.fr"
    },
    {
      period: "Jan - Mar 2026",
      title: "Parcoursup - Phase de candidature",
      description: "Finalisez vos dossiers avant la clôture (27 janvier)",
      priority: "high",
      link: "https://www.parcoursup.fr"
    },
    {
      period: "Toute l'année",
      title: "Visa étudiant - Demandes",
      description: "Démarches Campus France et consultation",
      priority: "high",
      link: "https://www.campusfrance.org"
    },
    {
      period: "Oct - Déc 2025",
      title: "Titre de séjour - Renouvellement",
      description: "Demandez avant l'expiration de votre document",
      priority: "medium",
      link: "https://www.campusfrance.org"
    },
    {
      period: "Sep 2025",
      title: "Rentrée universitaire",
      description: "Début des cours et inscriptions",
      priority: "high",
      link: "https://www.etudes-en-france.fr"
    },
    {
      period: "Jan 2026",
      title: "Salons de l'étudiant",
      description: "Rendez-vous Parcoursup et orientation",
      priority: "medium",
      link: "https://www.letudiant.fr"
    },
  ];

  const faqData = [
    {
      q: "Comment candidater en France ?",
      a: "Les étudiants étrangers peuvent candidater via Parcoursup (licences), candidatures directes auprès des universités/écoles (masters), ou via Campus France pour certains pays. Consultez campusfrance.org pour votre pays.",
      links: ["https://www.campusfrance.org", "https://www.parcoursup.fr"]
    },
    {
      q: "Quel budget mensuel prévoir ?",
      a: "Comptez 700–1200€/mois selon la ville : 400–600€ logement, 200€ nourriture, 100€ transport, 100€ assurances/santé. Des bourses (Eiffel, Excel, etc.) sont disponibles. Consultez les aides financières.",
      links: ["https://www.campusfrance.org/fr"]
    },
    {
      q: "Puis-je travailler pendant mes études ?",
      a: "Oui ! Ressortissants non-UE : jusqu'à 964h/an (≈20h/semaine). UE/EEE : pas de limite. Jobs étudiants, stages et alternance sont autorisés. Déclarez auprès des autorités fiscales.",
      links: ["https://www.letudiant.fr/jobs-stages-alternance"]
    },
    {
      q: "Ai-je droit à une mutuelle ?",
      a: "Sécurité sociale étudiante obligatoire et gratuite. Mutuelle conseillée pour compléter : 50–100€/an. Consultez l'IFSE (Intersyndicale Française des Étudiants).",
      links: ["https://www.letudiant.fr/lifestyle/Sante-mutuelle-et-assurance"]
    },
    {
      q: "Quels diplômes français existent ?",
      a: "Licence (Bac+3), Master (Bac+5), BTS/BUT (Bac+2/3), Doctorat (Bac+8). Les écoles d'ingénieurs et de commerce offrent aussi des diplômes reconnus. Voir ONISEP pour les filières.",
      links: ["https://www.onisep.fr"]
    },
    {
      q: "Comment trouver un logement ?",
      a: "CROUS (résidences sociales), LaBourse des logements (site collectif), LeBonCoin, SeLoger. Conseil: Inscrivez-vous au CROUS avant avril. Ayez un garant français ou utilisez les services d'hébergement.",
      links: ["https://www.letudiant.fr/lifestyle/logement"]
    },
  ];

  const handleServiceClick = (path) => {
    navigate(path);
  };

  const handleDashboardClick = () => {
    navigate('/espace-perso');
  };

  const handleBlogClick = () => {
    navigate('/blog');
  };

  const toggleDetails = (index, e) => {
    e.stopPropagation();
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      {/* HERO */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">✨ Plateforme officielle 2025-2026</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Votre parcours d'étudiant étranger en France
              <span className="text-blue-600"> simplifié</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Orientation, démarches visa, logement, emploi... Tout sur une seule plateforme. ✅
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={isAuthenticated ? handleDashboardClick : () => navigate('/qui-sommes-nous')} className="bg-blue-600 hover:bg-blue-700">
                {isAuthenticated ? '🎯 Mon espace personnel' : '🚀 Commencer mon parcours'}
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleServiceClick('/orientation')}>
                <Calendar className="mr-2 h-5 w-5" />
                📅 Dates clés 2025-26
              </Button>
            </div>
            {isAuthenticated && user && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  👋 Bonjour {user.first_name || user.username} ! Prêt(e) à réussir vos études ?
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4">🎓</div>
                  <p className="text-blue-700 font-semibold text-lg">Votre réussite</p>
                  <p className="text-blue-700 font-semibold text-lg">commence ici</p>
                </div>
              </div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
              <div className="absolute bottom-20 left-5 w-32 h-32 bg-blue-400 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Nos services pour votre réussite</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour vous accompagner dans toutes les étapes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition cursor-pointer hover:border-blue-400"
                onClick={() => handleServiceClick(service.path)}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((f, idx) => (
                      <li key={idx}>✓ {f}</li>
                    ))}
                  </ul>
                  <div
                    className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center"
                    onClick={(e) => toggleDetails(i, e)}
                    role="button"
                    aria-expanded={openIndex === i}
                  >
                    {openIndex === i ? 'Réduire ▲' : 'En savoir plus ▼'} <ArrowRight className="w-4 h-4 ml-1" />
                  </div>

                  {openIndex === i && (
                    <div className="mt-4 text-sm text-gray-700 space-y-2 bg-blue-50 p-3 rounded">
                      {service.details.map((line, k) => (
                        <p key={k}>{line}</p>
                      ))}
                      <div className="pt-3">
                        <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); handleServiceClick(service.path); }} className="w-full">
                          {service.cta}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDRIER DATES CLÉS */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-amber-200 text-amber-900 mb-4">⏰ Calendrier Important</Badge>
            <h2 className="text-3xl font-bold">Dates clés 2025-2026</h2>
            <p className="text-xl text-muted-foreground mt-2">
              Ne ratez pas les échéances importantes !
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyDates.map((date, i) => (
              <a key={i} href={date.link} target="_blank" rel="noopener noreferrer">
                <Card className={`hover:shadow-lg transition h-full border-l-4 ${date.priority === 'high' ? 'border-l-red-500 bg-red-50' : 'border-l-yellow-500 bg-yellow-50'}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant={date.priority === 'high' ? 'destructive' : 'secondary'}>
                          {date.period}
                        </Badge>
                      </div>
                      {date.priority === 'high' && <AlertCircle className="w-5 h-5 text-red-500" />}
                    </div>
                    <CardTitle className="text-lg mt-2">{date.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{date.description}</p>
                    <p className="text-xs text-blue-600 mt-2 hover:underline">→ Voir les détails</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources officielles */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Ressources officielles & partenaires</h2>
            <p className="text-xl text-blue-100 mt-2">
              Accédez directement aux sources officielles pour les infos à jour
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="https://www.campusfrance.org" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-xl transition h-full hover:scale-105 transform duration-200 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                    CF
                  </div>
                  <CardTitle className="text-blue-900">Campus France</CardTitle>
                  <CardDescription>Candidature & Visa</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-center text-muted-foreground">
                  Admission, visa étudiant, calendrier, FAQ officielles
                </CardContent>
              </Card>
            </a>

            <a href="https://www.onisep.fr" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-xl transition h-full hover:scale-105 transform duration-200 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-2xl">
                    ON
                  </div>
                  <CardTitle className="text-green-900">ONISEP</CardTitle>
                  <CardDescription>Formations & Métiers</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-center text-muted-foreground">
                  Toutes les formations, métiers, débouchés professionnels
                </CardContent>
              </Card>
            </a>

            <a href="https://www.letudiant.fr" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-xl transition h-full hover:scale-105 transform duration-200 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-2xl">
                    LE
                  </div>
                  <CardTitle className="text-red-900">L'Étudiant</CardTitle>
                  <CardDescription>Orientation & Actualités</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-center text-muted-foreground">
                  Tests orientation, salons, conseils pratiques
                </CardContent>
              </Card>
            </a>

            <a href="https://www.etudes-en-france.fr" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-xl transition h-full hover:scale-105 transform duration-200 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                    EF
                  </div>
                  <CardTitle className="text-purple-900">Études en France</CardTitle>
                  <CardDescription>Système éducatif</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-center text-muted-foreground">
                  Guide complet du système français
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ améliorée */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">❓ FAQ</Badge>
            <h2 className="text-3xl font-bold">Questions fréquentes</h2>
            <p className="text-muted-foreground">Vos réponses, directement liées aux sources officielles</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqData.map((faq, i) => (
              <Card key={i} className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">Q{i + 1}:</span>
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{faq.a}</p>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Sources:</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.links.map((link, j) => (
                        <a key={j} href={link} target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">
                          🔗 Lien officiel {j + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-3">📬 Recevoir nos conseils</h2>
          <p className="text-muted-foreground mb-6">Dates clés, modèles, bons plans (1 email par mois max)</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('✅ Merci ! Vous serez contacté(e) très prochainement.') }} className="max-w-xl mx-auto flex gap-3">
            <input type="email" required placeholder="Votre email" className="flex-1 border border-gray-300 rounded-md px-4 py-3" />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">S'abonner</Button>
          </form>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">🎯 Prêt à commencer votre parcours ?</h2>
            <p className="text-xl mb-8 opacity-90">
              {isAuthenticated
                ? "Accédez à votre espace personnel et découvrez tous nos outils gratuits"
                : "Créez votre compte gratuitement et accédez à tous nos outils"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={isAuthenticated ? handleDashboardClick : () => navigate('/qui-sommes-nous')}
              >
                {isAuthenticated ? '📱 Mon espace personnel' : '✍️ Créer mon compte'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleServiceClick('/orientation')}
              >
                🚀 Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
