import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import {
  Users,
  Target,
  Heart,
  Award,
  MapPin,
  Mail,
  Phone,
  ArrowLeft
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function QuiSommesNous() {
  const navigate = useNavigate()
  const teamMembers = [
    {
      name: "Adama CAMARA DIABY",
      role: "Directrice générale",
      description: "Experte en accompagnement des étudiants internationaux depuis 5 ans"
    },
    {
      name: "Mouctar DAIBY",
      role: "Responsable démarches administratives",
      description: "Spécialiste des procédures visa et titre de séjour"
    },
    {
      name: "Mamadou GUIRASSY",
      role: "Conseillère orientation",
      description: "Accompagne les étudiants dans leur choix de formation"
    },
    {
      name: "Kady GUIRASSY",
      role: "Responsable partenariats",
      description: "Développe les relations avec les établissements d'enseignement"
    }
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Solidarité",
      description: "Nous croyons en l'entraide et l'accompagnement bienveillant de chaque étudiant"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services et conseils"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Inclusion",
      description: "Nous accueillons tous les étudiants, quelle que soit leur origine"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Réussite",
      description: "Votre réussite académique et professionnelle est notre priorité"
    }
  ]

  const partners = [
    "Université Sorbonne",
    "Sciences Po Paris",
    "ESSEC Business School",
    "École Polytechnique",
    "Campus France",
    "CROUS",
    "Préfecture de Paris",
    "Ministère de l'Enseignement Supérieur"
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header avec bouton retour */}
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Button>
          <h1 className="text-4xl font-bold text-foreground mb-4">Qui sommes-nous ?</h1>
          <p className="text-xl text-muted-foreground">
            Découvrez etudiantesolidaire, votre partenaire de confiance pour réussir vos études en France
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Notre Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-blue-700 leading-relaxed">
                etudiantesolidaire accompagne les étudiants étrangers à chaque étape de leur parcours d'études en France.
                Nous simplifions les démarches administratives, facilitons l'orientation académique et soutenons
                l'intégration sociale et professionnelle. Notre objectif est de faire de votre expérience étudiante
                en France un succès complet.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Notre Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  Vision 2030
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Devenir la plateforme de référence pour l'accompagnement des étudiants internationaux en France,
                  en digitalisant et simplifiant toutes les étapes du parcours étudiant.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Avoir accompagné plus de 100,000 étudiants étrangers dans leur réussite académique et
                  professionnelle en France, avec un taux de satisfaction de 98%.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Valeurs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Équipe */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Notre Équipe</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partenaires */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Nos Partenaires</h2>
          <Card>
            <CardHeader>
              <CardTitle>Institutions de confiance</CardTitle>
              <CardDescription>
                Nous travaillons en étroite collaboration avec les principales institutions françaises
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                    <Award className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historique */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Notre Historique</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">2020</Badge>
                  Création d'etudiantesolidaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lancement de la plateforme avec une équipe de 3 personnes et l'accompagnement
                  des premiers 500 étudiants étrangers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">2022</Badge>
                  Expansion des services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Développement des services d'orientation et de placement professionnel.
                  Partenariats avec 50+ établissements d'enseignement supérieur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">2024</Badge>
                  Digitalisation complète
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lancement de la plateforme digitale complète avec espace personnel,
                  calendrier interactif et outils d'orientation automatisés.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Nous Contacter</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rue Daubenton<br />
                  59100 Lille, France
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  contact@etudiantesolidaire.fr<br />
                  info@etudiantesolidaire.fr
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  +33 7 00 00 00 00<br />
                  Lun-Ven: 9h-18h
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Rejoignez notre communauté</CardTitle>
              <CardDescription className="text-blue-100">
                Plus de 50,000 étudiants nous font déjà confiance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Créer mon compte
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Nous contacter
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default QuiSommesNous
