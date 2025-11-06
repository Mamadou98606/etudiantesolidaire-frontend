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
import { useRDVData } from './priseRdv/useRDVData'
import { infoContact, messages } from '@/data/rdvData'

function PriseRDV() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    pays: '',
    typeRDV: '',
    consultationType: '',
    sujet: '',
    datePreferee: '',
    heurePreferee: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    typesRDV,
    typeRDVDetails,
    creneauxDisponibles,
    consultationsDisponibles,
    validateFormData,
    getFormattedDate,
    getHeureFinRDV
  } = useRDVData(formData.typeRDV, formData.datePreferee, formData.consultationType)

  // Récupérer l'icône pour un type RDV
  const getIconForType = (iconName) => {
    const iconMap = {
      'User': <User className="h-5 w-5" />,
      'MessageSquare': <MessageSquare className="h-5 w-5" />,
      'MapPin': <MapPin className="h-5 w-5" />,
      'Users': <Users className="h-5 w-5" />,
      'Video': <Video className="h-5 w-5" />,
      'AlertCircle': <AlertCircle className="h-5 w-5" />
    }
    return iconMap[iconName] || <User className="h-5 w-5" />
  }

  // Récupérer l'icône pour un type de consultation
  const getIconForConsultation = (iconName) => {
    const iconMap = {
      'Video': <Video className="h-4 w-4" />,
      'Phone': <Phone className="h-4 w-4" />,
      'MapPin': <MapPin className="h-4 w-4" />
    }
    return iconMap[iconName] || null
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Effacer l'erreur pour ce champ
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Valider le formulaire
    const formErrors = validateFormData(formData)
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

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
                  {messages.confirmation.titre}
                </h1>
                <p className="text-lg text-green-700 mb-6">
                  {messages.confirmation.description}
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
                  {messages.form.titre}
                </CardTitle>
                <CardDescription>
                  {messages.form.description}
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
                        className={errors.prenom ? 'border-red-500' : ''}
                        required
                      />
                      {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
                    </div>
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className={errors.nom ? 'border-red-500' : ''}
                        required
                      />
                      {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
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
                        className={errors.email ? 'border-red-500' : ''}
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                      className={errors.pays ? 'border-red-500' : ''}
                      required
                    />
                    {errors.pays && <p className="text-red-500 text-sm mt-1">{errors.pays}</p>}
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
                          onClick={() => {
                            setFormData(prev => ({ 
                              ...prev, 
                              typeRDV: type.id,
                              consultationType: '' // Réinitialiser la sélection
                            }))
                            if (errors.typeRDV) {
                              setErrors(prev => ({ ...prev, typeRDV: '' }))
                            }
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${type.couleur}`}>
                              {getIconForType(type.icon)}
                            </div>
                            <div>
                              <div className="font-medium">{type.titre}</div>
                              <div className="text-sm text-muted-foreground">{type.description}</div>
                              <Badge variant="outline" className="mt-1">
                                <Clock className="h-3 w-3 mr-1" />
                                {type.dureeFichier}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.typeRDV && <p className="text-red-500 text-sm mt-1">{errors.typeRDV}</p>}
                  </div>

                  {/* Type de consultation si sélectionné */}
                  {formData.typeRDV && consultationsDisponibles.length > 1 && (
                    <div>
                      <Label>Type de consultation</Label>
                      <div className="grid md:grid-cols-3 gap-3 mt-2">
                        {consultationsDisponibles.map((consultation) => (
                          <div
                            key={consultation.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              formData.consultationType === consultation.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => setFormData(prev => ({
                              ...prev,
                              consultationType: consultation.id
                            }))}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={consultation.couleur}>
                                {getIconForConsultation(consultation.icon)}
                              </div>
                              <span className="font-medium text-sm">{consultation.titre}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
                        className={errors.datePreferee ? 'border-red-500' : ''}
                        required
                      />
                      {errors.datePreferee && <p className="text-red-500 text-sm mt-1">{errors.datePreferee}</p>}
                    </div>
                    <div>
                      <Label htmlFor="heurePreferee">Heure préférée *</Label>
                      <select
                        id="heurePreferee"
                        name="heurePreferee"
                        value={formData.heurePreferee}
                        onChange={handleInputChange}
                        className={`w-full p-2 border rounded-md ${errors.heurePreferee ? 'border-red-500' : 'border-gray-300'}`}
                        required
                      >
                        <option value="">Choisir un créneau</option>
                        {creneauxDisponibles.length > 0 ? (
                          creneauxDisponibles.map((creneau) => (
                            <option key={creneau} value={creneau}>
                              {creneau}
                            </option>
                          ))
                        ) : (
                          <option disabled>Aucun créneau disponible ce jour</option>
                        )}
                      </select>
                      {errors.heurePreferee && <p className="text-red-500 text-sm mt-1">{errors.heurePreferee}</p>}
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
                  {messages.info.titre}
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
                    {messages.confirmation.delaiReponse}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="py-6">
                <h4 className="font-semibold text-blue-800 mb-2">Consultation gratuite</h4>
                <p className="text-sm text-blue-700">
                  {messages.info.consultation_gratuite}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{messages.info.besoin_aide}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-blue-600" />
                    <a href={`mailto:${infoContact.email}`} className="text-blue-600 hover:underline">
                      {infoContact.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-green-600" />
                    <a href={`tel:${infoContact.telephone}`} className="text-green-600 hover:underline">
                      {infoContact.telephone}
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
