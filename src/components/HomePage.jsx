
// ========================================
// FICHIER ADAPTÉ : src/components/HomePage.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre HomePage.jsx actuel (renommez-le HomePage.jsx.old)
// 2. Remplacer tout le contenu de "src/components/HomePage.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

export default function HomePage({ onNavigate }) {
  const { user, isAuthenticated } = useAuth();
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Orientation",
      description: "Trouvez votre voie parmi les formations françaises",
      icon: BookOpen,
      features: ["BTS", "Licence", "Master", "CAP", "Titre professionnel"],
      path: "orientation",
      details: [
        "• Choisir son diplôme: comprendre les différences entre BTS, Licence et Master.",
        "• Construire un dossier: CV, lettre de motivation, relevés de notes.",
        "• Calendrier Parcoursup et candidatures directes.",
        "• Conseils pour optimiser vos chances d’admission."
      ],
      cta: "Découvrir l’orientation"
    },
    {
      title: "Démarches administratives",
      description: "Simplifiez vos démarches visa et titre de séjour",
      icon: CheckCircle,
      features: ["Visa étudiant", "Titre de séjour", "Autorisation de travail"],
      path: "demarches",
      details: [
        "• Visa long séjour (VLS-TS): étapes, pièces, RDV.",
        "• Titre de séjour étudiant: renouvellement, délais, obligations.",
        "• Autorisation de travail: combien d’heures ? Comment déclarer ?",
        "• Conseils pratiques pour éviter les refus et retards."
      ],
      cta: "Voir les démarches"
    },
    {
      title: "Vie étudiante",
      description: "Tout pour réussir votre intégration en France",
      icon: Globe,
      features: ["Logement", "Santé", "Transport", "Culture"],
      path: "vivre-france",
      details: [
        "• Se loger: CROUS, résidences, annonces, garants.",
        "• Se soigner: Sécurité sociale, mutuelle, médecin traitant.",
        "• Se déplacer: cartes de transport, bons plans mobilité.",
        "• S’intégrer: associations, évènements, culture et loisirs."
      ],
      cta: "Préparer ma vie en France"
    },
    {
      title: "Emploi",
      description: "Préparez votre insertion professionnelle",
      icon: Users,
      features: ["Jobs étudiants", "Stages", "CDI/CDD", "Changement de statut"],
      path: "travailler",
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

  const recentNews = [
    {
      title: "Nouvelles dates Parcoursup 2024",
      date: "15 janvier 2024",
      category: "Orientation",
      excerpt: "Découvrez les dates importantes pour vos candidatures...",
    },
    {
      title: "Changements visa étudiant",
      date: "10 janvier 2024",
      category: "Démarches",
      excerpt: "Les nouvelles procédures pour obtenir votre visa...",
    },
    {
      title: "Aides au logement étudiant",
      date: "8 janvier 2024",
      category: "Vie étudiante",
      excerpt: "Toutes les aides disponibles pour votre logement...",
    },
  ];

  const handleServiceClick = (path) => {
    if (onNavigate) onNavigate(path);
  };

  const handleDashboardClick = () => {
    if (onNavigate) onNavigate('dashboard');
  };

  const handleBlogClick = () => {
    if (onNavigate) onNavigate('blog');
  };

  const toggleDetails = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div>
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary">Plateforme officielle</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Votre parcours d'étudiant étranger en France
              <span className="text-blue-600"> simplifié</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De l'orientation aux démarches administratives, en passant par la vie étudiante et l'emploi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}>
                {isAuthenticated ? 'Mon espace personnel' : 'Commencer mon parcours'}
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleServiceClick('orientation')}>
                <Calendar className="mr-2 h-5 w-5" />
                Calendrier des échéances
              </Button>
            </div>
            {isAuthenticated && user && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  👋 Bonjour {user.first_name || user.username} ! Bienvenue sur votre plateforme.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder pour l'image hero */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-700 font-semibold">Votre réussite commence ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
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
              <Card key={i} className="hover:shadow-lg transition">
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
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>

                  {/* En savoir plus : toggle de contenu */}
                  <div
                    className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center cursor-pointer select-none"
                    onClick={() => toggleDetails(i)}
                    role="button"
                    aria-expanded={openIndex === i}
                  >
                    {openIndex === i ? 'Réduire' : 'En savoir plus'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>

                  {openIndex === i && (
                    <div className="mt-4 text-sm text-gray-700 space-y-2">
                      {service.details.map((line, k) => (
                        <p key={k}>{line}</p>
                      ))}
                      <div className="pt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleServiceClick(service.path)}
                        >
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

      {/* NEWS */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">À la une</h2>
              <p className="text-xl text-muted-foreground">
                Restez informé des dernières actualités
              </p>
            </div>
            <Button variant="outline" onClick={handleBlogClick}>
              Voir toutes les actualités
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={handleBlogClick}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre parcours ?</h2>
            <p className="text-xl mb-8 opacity-90">
              {isAuthenticated
                ? "Accédez à votre espace personnel et découvrez tous nos outils"
                : "Créez votre espace personnel et accédez à tous nos outils"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}
              >
                {isAuthenticated ? 'Mon espace personnel' : 'Créer mon compte'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleServiceClick('orientation')}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
home page actuelle
// ========================================
// FICHIER ADAPTÉ : src/components/HomePage.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre HomePage.jsx actuel (renommez-le HomePage.jsx.old)
// 2. Remplacer tout le contenu de "src/components/HomePage.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

export default function HomePage({ onNavigate }) {
  const { user, isAuthenticated } = useAuth();

  const services = [
    {
      title: "Orientation",
      description: "Trouvez votre voie parmi les formations françaises",
      icon: BookOpen,
      features: ["BTS", "Licence", "Master", "CAP", "Titre professionnel"],
      path: "orientation"
    },
    {
      title: "Démarches administratives",
      description: "Simplifiez vos démarches visa et titre de séjour",
      icon: CheckCircle,
      features: ["Visa étudiant", "Titre de séjour", "Autorisation de travail"],
      path: "demarches"
    },
    {
      title: "Vie étudiante",
      description: "Tout pour réussir votre intégration en France",
      icon: Globe,
      features: ["Logement", "Santé", "Transport", "Culture"],
      path: "vivre-france"
    },
    {
      title: "Emploi",
      description: "Préparez votre insertion professionnelle",
      icon: Users,
      features: ["Jobs étudiants", "Stages", "CDI/CDD", "Changement de statut"],
      path: "travailler"
    },
  ];

  const stats = [
    { number: "50,000+", label: "Étudiants accompagnés" },
    { number: "200+", label: "Formations référencées" },
    { number: "95%", label: "Taux de satisfaction" },
    { number: "24/7", label: "Support disponible" },
  ];

  const recentNews = [
    {
      title: "Nouvelles dates Parcoursup 2024",
      date: "15 janvier 2024",
      category: "Orientation",
      excerpt: "Découvrez les dates importantes pour vos candidatures...",
    },
    {
      title: "Changements visa étudiant",
      date: "10 janvier 2024",
      category: "Démarches",
      excerpt: "Les nouvelles procédures pour obtenir votre visa...",
    },
    {
      title: "Aides au logement étudiant",
      date: "8 janvier 2024",
      category: "Vie étudiante",
      excerpt: "Toutes les aides disponibles pour votre logement...",
    },
  ];

  const handleServiceClick = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleDashboardClick = () => {
    if (onNavigate) {
      onNavigate('dashboard');
    }
  };

  const handleBlogClick = () => {
    if (onNavigate) {
      onNavigate('blog');
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary">Plateforme officielle</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Votre parcours d'étudiant étranger en France
              <span className="text-blue-600"> simplifié</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De l'orientation aux démarches administratives, en passant par la vie étudiante et l'emploi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}>
                {isAuthenticated ? 'Mon espace personnel' : 'Commencer mon parcours'}
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleServiceClick('orientation')}>
                <Calendar className="mr-2 h-5 w-5" />
                Calendrier des échéances
              </Button>
            </div>
            {isAuthenticated && user && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  👋 Bonjour {user.first_name || user.username} ! Bienvenue sur votre plateforme.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder pour l'image hero */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-700 font-semibold">Votre réussite commence ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
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
                className="hover:shadow-lg transition cursor-pointer"
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
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                  <div className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center">
                    En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">À la une</h2>
              <p className="text-xl text-muted-foreground">
                Restez informé des dernières actualités
              </p>
            </div>
            <Button variant="outline" onClick={handleBlogClick}>
              Voir toutes les actualités
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={handleBlogClick}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre parcours ?</h2>
            <p className="text-xl mb-8 opacity-90">
              {isAuthenticated
                ? "Accédez à votre espace personnel et découvrez tous nos outils"
                : "Créez votre espace personnel et accédez à tous nos outils"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}
              >
                {isAuthenticated ? 'Mon espace personnel' : 'Créer mon compte'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleServiceClick('orientation')}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} ecrit ce que je dois copier coller
Thought for 26s
Copie-colle tout ce fichier dans src/components/HomePage.jsx (il ajoute “En savoir plus” qui ouvre du contenu détaillé dans chaque carte, et “Réduire” pour refermer):

// ========================================
// FICHIER ADAPTÉ : src/components/HomePage.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre HomePage.jsx actuel (renommez-le HomePage.jsx.old)
// 2. Remplacer tout le contenu de "src/components/HomePage.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';

export default function HomePage({ onNavigate }) {
  const { user, isAuthenticated } = useAuth();
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Orientation",
      description: "Trouvez votre voie parmi les formations françaises",
      icon: BookOpen,
      features: ["BTS", "Licence", "Master", "CAP", "Titre professionnel"],
      path: "orientation",
      details: [
        "• Choisir son diplôme: comprendre les différences entre BTS, Licence et Master.",
        "• Construire un dossier: CV, lettre de motivation, relevés de notes.",
        "• Calendrier Parcoursup et candidatures directes.",
        "• Conseils pour optimiser vos chances d’admission."
      ],
      cta: "Découvrir l’orientation"
    },
    {
      title: "Démarches administratives",
      description: "Simplifiez vos démarches visa et titre de séjour",
      icon: CheckCircle,
      features: ["Visa étudiant", "Titre de séjour", "Autorisation de travail"],
      path: "demarches",
      details: [
        "• Visa long séjour (VLS-TS): étapes, pièces, RDV.",
        "• Titre de séjour étudiant: renouvellement, délais, obligations.",
        "• Autorisation de travail: combien d’heures ? Comment déclarer ?",
        "• Conseils pratiques pour éviter les refus et retards."
      ],
      cta: "Voir les démarches"
    },
    {
      title: "Vie étudiante",
      description: "Tout pour réussir votre intégration en France",
      icon: Globe,
      features: ["Logement", "Santé", "Transport", "Culture"],
      path: "vivre-france",
      details: [
        "• Se loger: CROUS, résidences, annonces, garants.",
        "• Se soigner: Sécurité sociale, mutuelle, médecin traitant.",
        "• Se déplacer: cartes de transport, bons plans mobilité.",
        "• S’intégrer: associations, évènements, culture et loisirs."
      ],
      cta: "Préparer ma vie en France"
    },
    {
      title: "Emploi",
      description: "Préparez votre insertion professionnelle",
      icon: Users,
      features: ["Jobs étudiants", "Stages", "CDI/CDD", "Changement de statut"],
      path: "travailler",
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

  const recentNews = [
    {
      title: "Nouvelles dates Parcoursup 2024",
      date: "15 janvier 2024",
      category: "Orientation",
      excerpt: "Découvrez les dates importantes pour vos candidatures...",
    },
    {
      title: "Changements visa étudiant",
      date: "10 janvier 2024",
      category: "Démarches",
      excerpt: "Les nouvelles procédures pour obtenir votre visa...",
    },
    {
      title: "Aides au logement étudiant",
      date: "8 janvier 2024",
      category: "Vie étudiante",
      excerpt: "Toutes les aides disponibles pour votre logement...",
    },
  ];

  const handleServiceClick = (path) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleDashboardClick = () => {
    if (onNavigate) {
      onNavigate('dashboard');
    }
  };

  const handleBlogClick = () => {
    if (onNavigate) {
      onNavigate('blog');
    }
  };

  const toggleDetails = (i, e) => {
    e.stopPropagation(); // évite de déclencher la navigation de la carte
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <div>
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary">Plateforme officielle</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Votre parcours d'étudiant étranger en France
              <span className="text-blue-600"> simplifié</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De l'orientation aux démarches administratives, en passant par la vie étudiante et l'emploi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}>
                {isAuthenticated ? 'Mon espace personnel' : 'Commencer mon parcours'}
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleServiceClick('orientation')}>
                <Calendar className="mr-2 h-5 w-5" />
                Calendrier des échéances
              </Button>
            </div>
            {isAuthenticated && user && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  👋 Bonjour {user.first_name || user.username} ! Bienvenue sur votre plateforme.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder pour l'image hero */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-700 font-semibold">Votre réussite commence ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
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
                className="hover:shadow-lg transition cursor-pointer"
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
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>

                  {/* En savoir plus : toggle de contenu */}
                  <div
                    className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center select-none"
                    onClick={(e) => toggleDetails(i, e)}
                    role="button"
                    aria-expanded={openIndex === i}
                  >
                    {openIndex === i ? 'Réduire' : 'En savoir plus'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>

                  {openIndex === i && (
                    <div className="mt-4 text-sm text-gray-700 space-y-2">
                      {service.details.map((line, k) => (
                        <p key={k}>{line}</p>
                      ))}
                      <div className="pt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleServiceClick(service.path)}
                        >
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

      {/* NEWS */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">À la une</h2>
              <p className="text-xl text-muted-foreground">
                Restez informé des dernières actualités
              </p>
            </div>
            <Button variant="outline" onClick={handleBlogClick}>
              Voir toutes les actualités
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={handleBlogClick}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre parcours ?</h2>
            <p className="text-xl mb-8 opacity-90">
              {isAuthenticated
                ? "Accédez à votre espace personnel et découvrez tous nos outils"
                : "Créez votre espace personnel et accédez à tous nos outils"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={isAuthenticated ? handleDashboardClick : () => onNavigate('qui-sommes-nous')}
              >
                {isAuthenticated ? 'Mon espace personnel' : 'Créer mon compte'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleServiceClick('orientation')}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
quand je clique sur orientation en savoir plus je veux que ça m'envoie vers orientation.jsx, pareil pour les autres sur vie etudiante en savoir plus/vivre en france 
Thought for 111s
Je vais ouvrir votre fichier src/components/HomePage.jsx pour voir le code actuel, puis je vais le modifier pour que le clic sur « En savoir plus » redirige vers la page correspondante (et corriger la route « vivre-en-france » si besoin). Ensuite, je sauvegarderai les changements.

Read HomePage.jsx and thought for 73s
je veux dire en savoir plus puis decouvrir l'orientation ça m'envoie sur la page orientation et ainsi de suite
Thought for 16s
Je vais ouvrir vos routes pour confirmer les chemins (par ex. orientation, vivre-en-france) et ensuite modifier src/components/HomePage.jsx pour que « En savoir plus » affiche un bloc avec un bouton « Découvrir … » qui navigue correctement vers la bonne page.

je te laisse choisir ce qu'il y'a de mieux pour les autres pages 
Thought for 14s
Je regarde vos routes pour confirmer les chemins, puis je mets à jour src/components/HomePage.jsx pour ajouter l’ouverture/fermeture « En savoir plus » et un bouton « Découvrir … » qui navigue vers les bonnes pages (ex. /orientation, /vivre-en-france). Ensuite je sauvegarde.

Read App.jsx and thought for 61s
Je vais mettre à jour src/components/HomePage.jsx pour:

utiliser useNavigate au lieu de onNavigate
corriger les chemins (/orientation, /demarches, /vivre-en-france, /travailler)
ajouter l’ouverture “En savoir plus” avec bouton “Découvrir …” qui redirige. Ensuite, j’enregistre.
C’est fait. Maintenant:

Clic “En savoir plus” ouvre le bloc.
Clic sur “Découvrir l’orientation” (ou autres) envoie vers la bonne page: /orientation, /demarches, /vivre-en-france, /travailler.
La carte elle-même reste cliquable et navigue aussi.
J’ai corrigé vivre-france en /vivre-en-france.
Pour copier-coller, remplacez tout le contenu de src/components/HomePage.jsx par ceci:

// ========================================
// FICHIER ADAPTÉ : src/components/HomePage.jsx (REMPLACEMENT)
// ========================================
//
// INSTRUCTIONS :
// 1. SAUVEGARDER votre HomePage.jsx actuel (renommez-le HomePage.jsx.old)
// 2. Remplacer tout le contenu de "src/components/HomePage.jsx" par le contenu ci-dessous
// 3. Sauvegarder
//
// ========================================

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users } from "lucide-react";
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
        "• Conseils pour optimiser vos chances d’admission."
      ],
      cta: "Découvrir l’orientation"
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
        "• Autorisation de travail: combien d’heures ? Comment déclarer ?",
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
        "• S’intégrer: associations, évènements, culture et loisirs."
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

  const recentNews = [
    {
      title: "Nouvelles dates Parcoursup 2024",
      date: "15 janvier 2024",
      category: "Orientation",
      excerpt: "Découvrez les dates importantes pour vos candidatures...",
    },
    {
      title: "Changements visa étudiant",
      date: "10 janvier 2024",
      category: "Démarches",
      excerpt: "Les nouvelles procédures pour obtenir votre visa...",
    },
    {
      title: "Aides au logement étudiant",
      date: "8 janvier 2024",
      category: "Vie étudiante",
      excerpt: "Toutes les aides disponibles pour votre logement...",
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
      <section className="py-20 px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary">Plateforme officielle</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Votre parcours d'étudiant étranger en France
              <span className="text-blue-600"> simplifié</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              De l'orientation aux démarches administratives, en passant par la vie étudiante et l'emploi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={isAuthenticated ? handleDashboardClick : () => navigate('/qui-sommes-nous')}>
                {isAuthenticated ? 'Mon espace personnel' : 'Commencer mon parcours'}
              </Button>
              <Button variant="outline" size="lg" onClick={() => handleServiceClick('/orientation')}>
                <Calendar className="mr-2 h-5 w-5" />
                Calendrier des échéances
              </Button>
            </div>
            {isAuthenticated && user && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700">
                  👋 Bonjour {user.first_name || user.username} ! Bienvenue sur votre plateforme.
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center">
            {/* Placeholder pour l'image hero */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-blue-700 font-semibold">Votre réussite commence ici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
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
                className="hover:shadow-lg transition cursor-pointer"
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
                      <li key={idx}>• {f}</li>
                    ))}
                  </ul>
                  <div
                    className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center"
                    onClick={(e) => toggleDetails(i, e)}
                    role="button"
                    aria-expanded={openIndex === i}
                  >
                    {openIndex === i ? 'Réduire' : 'En savoir plus'} <ArrowRight className="w-4 h-4 ml-1" />
                  </div>

                  {openIndex === i && (
                    <div className="mt-4 text-sm text-gray-700 space-y-2">
                      {service.details.map((line, k) => (
                        <p key={k}>{line}</p>
                      ))}
                      <div className="pt-3">
                        <Button size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); handleServiceClick(service.path); }}>
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

      {/* NEWS */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">À la une</h2>
              <p className="text-xl text-muted-foreground">
                Restez informé des dernières actualités
              </p>
            </div>
            <Button variant="outline" onClick={handleBlogClick}>
              Voir toutes les actualités
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <Card key={i} className="hover:shadow-lg transition cursor-pointer" onClick={handleBlogClick}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre parcours ?</h2>
            <p className="text-xl mb-8 opacity-90">
              {isAuthenticated
                ? "Accédez à votre espace personnel et découvrez tous nos outils"
                : "Créez votre espace personnel et accédez à tous nos outils"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={isAuthenticated ? handleDashboardClick : () => navigate('/qui-sommes-nous')}
              >
                {isAuthenticated ? 'Mon espace personnel' : 'Créer mon compte'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => handleServiceClick('/orientation')}
              >
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
