import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import heroImage from "../assets/hero-illustration.png";
import orientationIcon from "../assets/orientation-icon.png";
import demarchesIcon from "../assets/demarches-icon.png";
import vieEtudianteIcon from "../assets/vie-etudiante-icon.png";
import emploiIcon from "../assets/emploi-icon.png";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Vérifier l'authentification au chargement
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/check-auth", {
        credentials: "include",
      });
      const data = await response.json();

      if (data.authenticated) {
        setUser(data.user);
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'authentification:", error);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleAuthSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const services = [
    {
      title: "Orientation",
      description: "Trouvez votre voie parmi les formations françaises",
      icon: orientationIcon,
      features: ["BTS", "Licence", "Master", "CAP", "Titre professionnel"],
    },
    {
      title: "Démarches administratives",
      description: "Simplifiez vos démarches visa et titre de séjour",
      icon: demarchesIcon,
      features: ["Visa étudiant", "Titre de séjour", "Autorisation de travail"],
    },
    {
      title: "Vie étudiante",
      description: "Tout pour réussir votre intégration en France",
      icon: vieEtudianteIcon,
      features: ["Logement", "Santé", "Transport", "Culture"],
    },
    {
      title: "Emploi",
      description: "Préparez votre insertion professionnelle",
      icon: emploiIcon,
      features: ["Jobs étudiants", "Stages", "CDI/CDD", "Changement de statut"],
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

  if (authLoading) {
    return <div className="p-10 text-center">Chargement...</div>;
  }

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
              <Button size="lg" asChild>
                {user ? (
                  <Link to="/espace-perso">Mon espace personnel</Link>
                ) : (
                  <Link to="/login">Commencer mon parcours</Link>
                )}
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Calendrier des échéances
              </Button>
            </div>
          </div>
          <div>
            <img src={heroImage} alt="Étudiants" className="rounded-2xl shadow-xl" />
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
                    <img src={service.icon} alt={service.title} className="w-12 h-12" />
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
            <Button variant="outline">Voir toutes les actualités</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, i) => (
              <Card key={i} className="hover:shadow-lg transition">
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
              Créez votre espace personnel et accédez à tous nos outils
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                {user ? (
                  <Link to="/espace-perso">Mon espace personnel</Link>
                ) : (
                  <Link to="/login">Créer mon compte</Link>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
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
