import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Menu,
  X,
  GraduationCap,
  FileText,
  BookOpen,
  Briefcase,
  Home,
  Calendar,
  User,
  ChevronDown,
  MapPin,
  Clock,
  Users,
  Star,
  ArrowRight
} from 'lucide-react'
import heroImage from './assets/hero-illustration.png'
import orientationIcon from './assets/orientation-icon.png'
import demarchesIcon from './assets/demarches-icon.png'
import vieEtudianteIcon from './assets/vie-etudiante-icon.png'
import emploiIcon from './assets/emploi-icon.png'
import './App.css'

import QuiSommesNous from './components/QuiSommesNous.jsx'
import Orientation from './components/Orientation.jsx'
import Demarches from './components/Demarches.jsx'
import Etudes from './components/Etudes.jsx'
import Travailler from './components/Travailler.jsx'
import VivreFrance from './components/VivreFrance.jsx'
import AuthModal from './components/AuthModal.jsx'
import UserDashboard from './components/UserDashboard.jsx'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  // Vérifier l'authentification au chargement
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/check-auth', {
        credentials: 'include'
      })
      const data = await response.json()
      
      if (data.authenticated) {
        setUser(data.user)
      }
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'authentification:', error)
    } finally {
      setAuthLoading(false)
    }
  }

  const handleAuthSuccess = (userData) => {
    setUser(userData)
    setShowAuthModal(false)
  }

  const handleLogout = () => {
    setUser(null)
    setShowDashboard(false)
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navigationItems = [
    { name: 'Qui sommes-nous ?', href: '/qui-sommes-nous' },
    { name: 'Orientation', href: '/orientation' },
    { name: 'Démarches', href: '/demarches' },
    { name: 'Études', href: '/etudes' },
    { name: 'Travailler', href: '/travailler' },
    { name: 'Vivre en France', href: '/vivre-en-france' }
  ]

  const services = [
    {
      title: 'Orientation',
      description: 'Trouvez votre voie parmi les formations françaises',
      icon: orientationIcon,
      features: ['BTS', 'Licence', 'Master', 'CAP', 'Titre professionnel']
    },
    {
      title: 'Démarches administratives',
      description: 'Simplifiez vos démarches visa et titre de séjour',
      icon: demarchesIcon,
      features: ['Visa étudiant', 'Titre de séjour', 'Autorisation de travail']
    },
    {
      title: 'Vie étudiante',
      description: 'Tout pour réussir votre intégration en France',
      icon: vieEtudianteIcon,
      features: ['Logement', 'Santé', 'Transport', 'Culture']
    },
    {
      title: 'Emploi',
      description: 'Préparez votre insertion professionnelle',
      icon: emploiIcon,
      features: ['Jobs étudiants', 'Stages', 'CDI/CDD', 'Changement de statut']
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Étudiants accompagnés' },
    { number: '200+', label: 'Formations référencées' },
    { number: '95%', label: 'Taux de satisfaction' },
    { number: '24/7', label: 'Support disponible' }
  ]

  const recentNews = [
    {
      title: 'Nouvelles dates Parcoursup 2024',
      date: '15 janvier 2024',
      category: 'Orientation',
      excerpt: 'Découvrez les dates importantes pour vos candidatures...'
    },
    {
      title: 'Changements visa étudiant',
      date: '10 janvier 2024',
      category: 'Démarches',
      excerpt: 'Les nouvelles procédures pour obtenir votre visa...'
    },
    {
      title: 'Aides au logement étudiant',
      date: '8 janvier 2024',
      category: 'Vie étudiante',
      excerpt: 'Toutes les aides disponibles pour votre logement...'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-foreground">etudiantesolidaire</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-popover border rounded-md shadow-lg">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Button variant="outline" size="sm" onClick={() => setShowDashboard(true)}>
                    <User className="h-4 w-4 mr-2" />
                    {user.first_name || user.username}
                  </Button>
                  <Button size="sm" onClick={() => setShowDashboard(true)}>
                    Espace personnel
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={() => setShowAuthModal(true)}>
                    <User className="h-4 w-4 mr-2" />
                    Connexion
                  </Button>
                  <Button size="sm" onClick={() => setShowAuthModal(true)}>
                    Espace personnel
                  </Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-accent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  {user ? (
                    <>
                      <Button variant="outline" size="sm" onClick={() => setShowDashboard(true)}>
                        <User className="h-4 w-4 mr-2" />
                        {user.first_name || user.username}
                      </Button>
                      <Button size="sm" onClick={() => setShowDashboard(true)}>
                        Espace personnel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" onClick={() => setShowAuthModal(true)}>
                        <User className="h-4 w-4 mr-2" />
                        Connexion
                      </Button>
                      <Button size="sm" onClick={() => setShowAuthModal(true)}>
                        Espace personnel
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Plateforme officielle
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Votre parcours d'étudiant étranger en France
                <span className="text-blue-600"> simplifié</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                De l'orientation aux démarches administratives, en passant par la vie étudiante et l'emploi. 
                Nous vous accompagnons à chaque étape de votre réussite en France.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => user ? setShowDashboard(true) : setShowAuthModal(true)}>
                  {user ? 'Mon espace personnel' : 'Commencer mon parcours'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Calendar className="mr-2 h-5 w-5" />
                  Calendrier des échéances
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Étudiants internationaux en France"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos services pour votre réussite
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une plateforme complète pour vous accompagner dans toutes les étapes de votre parcours étudiant en France
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <img src={service.icon} alt={service.title} className="w-12 h-12" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-muted/50 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                À la une
              </h2>
              <p className="text-xl text-muted-foreground">
                Restez informé des dernières actualités et échéances importantes
              </p>
            </div>
            <Button variant="outline">
              Voir toutes les actualités
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Créez votre espace personnel et accédez à tous nos outils d'accompagnement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => setShowAuthModal(true)}>
                {user ? 'Mon espace personnel' : 'Créer mon compte'}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modales */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={handleAuthSuccess}
      />
      
      {showDashboard && user && (
        <UserDashboard 
          user={user}
          onLogout={handleLogout}
          onClose={() => setShowDashboard(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-muted py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">etudiantesolidaire</span>
              </div>
              <p className="text-muted-foreground">
                Votre plateforme de référence pour réussir vos études en France
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Orientation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Démarches</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Vie étudiante</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Emploi</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">CGU</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 etudiantesolidaire. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous onBack={() => window.history.back()} />} />
        <Route path="/orientation" element={<Orientation onBack={() => window.history.back()} />} />
        <Route path="/demarches" element={<Demarches onBack={() => window.history.back()} />} />
        <Route path="/etudes" element={<Etudes onBack={() => window.history.back()} />} />
        <Route path="/travailler" element={<Travailler onBack={() => window.history.back()} />} />
        <Route path="/vivre-en-france" element={<VivreFrance onBack={() => window.history.back()} />} />
      </Routes>
    </Router>
  )
}

export default App


