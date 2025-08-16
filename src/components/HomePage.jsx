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

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, CheckCircle, Globe, Users, ChevronLeft, ChevronRight, Star, Quote, GraduationCap, MapPin, Eye, MessageSquare } from "lucide-react";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  // Articles du Blog (mêmes données que Blog.jsx)
  const articles = [
    {
      id: 8,
      title: "Étudier en France: le guide express pour bien démarrer (2025)",
      excerpt: "Choisir sa formation, préparer ses dossiers, éviter les pièges administratifs: les clés pour réussir votre arrivée.",
      author: "Équipe Étudiante Solidaire",
      date: "2025-09-01",
      category: "Orientation",
      image: "🧭",
      views: 0,
      comments: 0,
      readTime: "6 min",
      tags: ["Orientation", "Parcoursup", "Dossier"]
    },
    {
      id: 7,
      title: "Étudiante Solidaire : votre guide de A à Z pour réussir vos études en France",
      excerpt: "Tout-en-un : orientation, démarches, logement, emploi et conseils pratiques — avec un accompagnement humain et gratuit.",
      author: "Équipe Étudiante Solidaire",
      date: "2025-08-15",
      category: "Vie étudiante",
      image: "🎓",
      views: 0,
      comments: 0,
      readTime: "7 min",
      tags: ["Étudiante Solidaire", "Orientation", "Démarches", "Vie étudiante", "Emploi"]
    },
    {
      id: 1,
      title: "Guide complet Parcoursup 2024 : Dates et stratégies",
      excerpt: "Tout ce que vous devez savoir sur Parcoursup 2024, les dates importantes et nos conseils pour maximiser vos chances d'admission.",
      author: "Marie Dubois",
      date: "2024-01-15",
      category: "Orientation",
      image: "📚",
      views: 1250,
      comments: 23,
      readTime: "8 min",
      tags: ["Parcoursup", "Orientation", "Études supérieures"]
    },
    {
      id: 2,
      title: "Visa étudiant 2024 : Nouvelles procédures simplifiées",
      excerpt: "Les dernières modifications des procédures de visa étudiant et comment optimiser votre dossier pour une réponse rapide.",
      author: "Ahmed Benali",
      date: "2024-01-10",
      category: "Démarches",
      image: "🛂",
      views: 980,
      comments: 15,
      readTime: "6 min",
      tags: ["Visa", "Démarches", "Immigration"]
    }
  ];

  // Trier du plus récent au plus ancien
  const articlesSorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  const articlesRecents = articlesSorted.slice(0, 3); // 3 articles les plus récents

  // Témoignages (utilisant les mêmes données que Temoignages.jsx)
  const temoignages = [
    {
      id: 1,
      nom: "Aminata K.",
      pays: "Sénégal",
      formation: "Master Marketing Digital",
      universite: "Université Paris-Dauphine",
      annee: "2023",
      note: 5,
      categorie: "master",
      photo: "👩🏾‍🎓",
      temoignage: "Grâce à etudiantesolidaire, j'ai pu naviguer facilement dans le système universitaire français. L'accompagnement pour les démarches administratives a été précieux. Aujourd'hui, je travaille dans une agence de communication parisienne !",
      points_forts: [
        "Accompagnement personnalisé",
        "Aide pour le logement",
        "Préparation aux entretiens"
      ]
    },
    {
      id: 2,
      nom: "Mohamed B.",
      pays: "Maroc",
      formation: "BTS Commerce International",
      universite: "Lycée Jean-Baptiste Say",
      annee: "2024",
      note: 5,
      categorie: "bts",
      photo: "👨🏽‍🎓",
      temoignage: "Le processus d'orientation m'a permis de choisir la formation parfaite pour mon projet professionnel. Les conseils pour Parcoursup ont été déterminants. Je recommande vivement !",
      points_forts: [
        "Orientation claire",
        "Suivi Parcoursup",
        "Conseils pratiques"
      ]
    },
    {
      id: 3,
      nom: "Fatou D.",
      pays: "Côte d'Ivoire",
      formation: "Licence Psychologie",
      universite: "Université Paris 8",
      annee: "2023",
      note: 5,
      categorie: "licence",
      photo: "👩🏿‍🎓",
      temoignage: "L'équipe m'a aidée à comprendre le système de santé français et à m'intégrer socialement. Les ateliers sur la vie étudiante ont été très utiles pour créer des liens.",
      points_forts: [
        "Intégration sociale",
        "Aide santé",
        "Ateliers pratiques"
      ]
    },
    {
      id: 4,
      nom: "Aïcha M.",
      pays: "Tunisie",
      formation: "Master Ingénierie",
      universite: "École Centrale Paris",
      annee: "2023",
      note: 5,
      categorie: "master",
      photo: "👩🏽‍💻",
      temoignage: "L'aide pour les démarches de visa et les premières semaines en France a été cruciale. Aujourd'hui ingénieure dans une startup tech, je suis reconnaissante pour cet accompagnement.",
      points_forts: [
        "Démarches visa",
        "Accueil en France",
        "Réseau professionnel"
      ]
    },
    {
      id: 5,
      nom: "Ousmane T.",
      pays: "Burkina Faso",
      formation: "Titre Pro Développeur Web",
      universite: "AFPA",
      annee: "2024",
      note: 5,
      categorie: "titre",
      photo: "👨🏿‍💻",
      temoignage: "La reconversion professionnelle n'a pas été facile, mais avec le soutien d'etudiantesolidaire, j'ai réussi ma formation et trouvé un emploi en développement web en 3 mois !",
      points_forts: [
        "Reconversion réussie",
        "Formation intensive",
        "Insertion rapide"
      ]
    }
  ];

  // Auto-rotation du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % temoignages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [temoignages.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % temoignages.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + temoignages.length) % temoignages.length);
  };

  const renderStars = (note) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < note ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const handleServiceClick = (path) => {
    navigate(path);
  };

  const handleDashboardClick = () => {
    navigate('/espace-perso');
  };

  const handleBlogClick = () => {
    navigate('/blog');
  };

  const handleTemoignagesClick = () => {
    navigate('/temoignages');
  };

  const handleArticleClick = (articleId) => {
    navigate(`/blog/${articleId}`);
  };

  const toggleDetails = (index, e) => {
    e.stopPropagation();
    setOpenIndex(prev => (prev === index ? null : index));
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
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

      {/* ACTUALITÉS DU BLOG */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold">Derniers articles du blog</h2>
              <p className="text-xl text-muted-foreground">
                Conseils, guides et actualités pour réussir vos études en France
              </p>
            </div>
            <Button variant="outline" onClick={handleBlogClick}>
              Voir tous les articles
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {articlesRecents.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition cursor-pointer" onClick={() => handleArticleClick(article.id)}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{article.image}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">{article.excerpt}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{formatDate(article.date)}</span>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        {article.comments}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CARROUSEL DE TÉMOIGNAGES */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Ils nous font confiance</h2>
            <p className="text-xl text-muted-foreground">
              Découvrez les témoignages de nos étudiants
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Témoignage actuel */}
            <Card className="p-8 text-center relative">
              <div className="absolute top-4 left-4 text-6xl opacity-10">
                <Quote />
              </div>
              <div className="absolute top-4 right-4 text-6xl opacity-10">
                <Quote />
              </div>
              
              <div className="mb-6">
                <div className="text-6xl mb-4">{temoignages[currentTestimonial].photo}</div>
                <h3 className="text-xl font-semibold">{temoignages[currentTestimonial].nom}</h3>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-3 w-3" />
                  <span>{temoignages[currentTestimonial].pays}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-blue-600 font-medium mb-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>{temoignages[currentTestimonial].formation}</span>
                </div>
                <p className="text-sm text-muted-foreground">{temoignages[currentTestimonial].universite}</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-center gap-1">
                  {renderStars(temoignages[currentTestimonial].note)}
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "{temoignages[currentTestimonial].temoignage}"
              </blockquote>
              
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Points forts de l'accompagnement :</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {temoignages[currentTestimonial].points_forts.map((point, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {point}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">{temoignages[currentTestimonial].annee}</p>
            </Card>

            {/* Contrôles du carrousel */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Indicateurs */}
            <div className="flex justify-center mt-6 gap-2">
              {temoignages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            {/* Bouton pour voir tous les témoignages */}
            <div className="text-center mt-8">
              <Button variant="outline" onClick={handleTemoignagesClick}>
                Voir tous les témoignages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Comment candidater en France ?</CardTitle>
                <CardDescription>Parcoursup (licences), candidatures directes (masters/écoles), Campus France selon pays.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quel budget mensuel prévoir ?</CardTitle>
                <CardDescription>700–1200€ selon ville (logement, transport, nourriture, assurances).</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Puis-je travailler pendant mes études ?</CardTitle>
                <CardDescription>Oui, jusqu'à 964h/an pour non-UE; jobs étudiants/stages possibles.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ai‑je droit à une mutuelle ?</CardTitle>
                <CardDescription>Sécurité sociale étudiante gratuite; mutuelle conseillée pour compléter.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-3">Recevoir nos conseils</h2>
          <p className="text-muted-foreground mb-6">Dates clés, modèles, bons plans (1 email / mois)</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Merci ! Vous serez contacté(e) prochainement.') }} className="max-w-xl mx-auto flex gap-3">
            <input type="email" required placeholder="Votre email" className="flex-1 border border-gray-300 rounded-md px-4 py-3" />
            <Button type="submit">S'abonner</Button>
          </form>
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
