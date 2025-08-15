import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  ArrowLeft, 
  Calendar, 
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Video,
  MapPin,
  Users
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function PriseRDV() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    pays: '',
    typeRDV: '',
    sujet: '',
    datePreferee: '',
    heurePreferee: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const typesRDV = [
    {
      id: 'orientation',
      titre: 'Orientation scolaire',
      description: 'Choisir la bonne formation',
      duree: '45 min',
      icon: <User className="h-5 w-5" />,
      couleur: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'demarches',
      titre: 'Démarches administratives',
      description: 'Visa, titre de séjour, etc.',
      duree: '30 min',
      icon: <MessageSquare className="h-5 w-5" />,
      couleur: 'bg-green-100 text-green-800'
    },
    {
      id: 'logement',
      titre: 'Aide au logement',
      description: 'Trouver un logement étudiant',
      duree: '30 min',
      icon: <MapPin className="h-5 w-5" />,
      couleur: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'emploi',
      titre: 'Recherche d\'emploi',
      description: 'CV, entretiens, stages',
      duree: '45 min',
      icon: <Users className="h-5 w-5" />,
      couleur: 'bg-orange-100 text-orange-800'
    },
    {
      id: 'integration',
      titre: 'Intégration sociale',
      description: 'Vie étudiante, culture française',
      duree: '30 min',
      icon: <Video className="h-5 w-5" />,
      couleur: 'bg-pink-100 text-pink-800'
    },
    {
      id: 'urgence',
      titre: 'Consultation d\'urgence',
      description: 'Problème urgent à résoudre',
      duree: '20 min',
      icon: <AlertCircle className="h-5 w-5" />,
      couleur: 'bg-red-100 text-red-800'
    }
  ]

  const creneauxDisponibles = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi (remplacer par vraie API)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-green-800 mb-4">
                  Rendez-vous confirmé !
                </h1>
                <p className="text-lg text-green-700 mb-6">
                  Votre demande de rendez-vous a été envoyée avec succès. 
                  Nous vous contacterons dans les 24h pour confirmer le créneau.
                </p>
                <div className="space-y-4">
                  <Button onClick={() => navigate('/')} className="mr-4">
                    Retour à l'accueil
                  </Button>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Prendre un autre RDV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

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
          <h1 className="text-4xl font-bold text-foreground mb-4">Prendre Rendez-vous</h1>
          <p className="text-xl text-muted-foreground">
            Réservez un créneau avec nos conseillers pour un accompagnement personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Informations du rendez-vous
                </CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour réserver votre créneau
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="pays">Pays d'origine *</Label>
                    <Input
                      id="pays"
                      name="pays"
                      value={formData.pays}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Type de RDV */}
                  <div>
                    <Label>Type de rendez-vous *</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                      {typesRDV.map((type) => (
                        <div
                          key={type.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            formData.typeRDV === type.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, typeRDV: type.id }))}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${type.couleur}`}>
                              {type.icon}
                            </div>
                            <div>
                              <div className="font-medium">{type.titre}</div>
                              <div className="text-sm text-muted-foreground">{type.description}</div>
                              <Badge variant="outline" className="mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                {type.duree}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date et heure */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="datePreferee">Date préférée *</Label>
                      <Input
                        id="datePreferee"
                        name="datePreferee"
                        type="date"
                        value={formData.datePreferee}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="heurePreferee">Heure préférée *</Label>
                      <select
                        id="heurePreferee"
                        name="heurePreferee"
                        value={formData.heurePreferee}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                      >
                        <option value="">Choisir un créneau</option>
                        {creneauxDisponibles.map((creneau) => (
                          <option key={creneau} value={creneau}>
                            {creneau}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Sujet */}
                  <div>
                    <Label htmlFor="sujet">Sujet du rendez-vous</Label>
                    <Input
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleInputChange}
                      placeholder="Ex: Aide pour Parcoursup, Recherche de logement..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Message complémentaire</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre situation ou vos questions..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Réserver le rendez-vous'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations pratiques */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Informations pratiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Horaires d'ouverture</h4>
                  <div className="text-sm space-y-1">
                    <div>Lundi - Vendredi : 9h00 - 17h30</div>
                    <div>Samedi : 9h00 - 12h00</div>
                    <div>Dimanche : Fermé</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Types de consultation</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center">
                      <Video className="h-4 w-4 mr-2 text-blue-600" />
                      Visioconférence
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-green-600" />
                      Téléphone
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                      Présentiel (Paris)
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Délai de réponse</h4>
                  <p className="text-sm text-muted-foreground">
                    Nous vous confirmons votre rendez-vous dans les 24h ouvrées.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="py-6">
                <h4 className="font-semibold text-blue-800 mb-2">Consultation gratuite</h4>
                <p className="text-sm text-blue-700">
                  Votre premier rendez-vous de 30 minutes est entièrement gratuit et sans engagement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Besoin d'aide ?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="mailto:contact@etudiantesolidaire.com" className="text-blue-600 hover:underline">
                      contact@etudiantesolidaire.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-green-600" />
                    <a href="tel:+33123456789" className="text-green-600 hover:underline">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriseRDV
