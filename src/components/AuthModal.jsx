import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { X, Eye, EyeOff, User, Mail, Lock, Globe, GraduationCap, BookOpen } from 'lucide-react'

function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    nationality: '',
    study_level: '',
    field_of_study: ''
  })

  const studyLevels = [
    'Lycée',
    'BTS',
    'Licence (L1)',
    'Licence (L2)', 
    'Licence (L3)',
    'Master (M1)',
    'Master (M2)',
    'Doctorat',
    'Autre'
  ]

  const fieldsOfStudy = [
    'Sciences et Technologies',
    'Économie et Gestion',
    'Lettres et Sciences Humaines',
    'Droit et Sciences Politiques',
    'Médecine et Santé',
    'Arts et Design',
    'Ingénierie',
    'Informatique',
    'Commerce et Marketing',
    'Autre'
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const endpoint = isLogin ? '/api/login' : '/api/register'
      const payload = isLogin 
        ? { username: formData.username, password: formData.password }
        : formData

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (response.ok) {
        onAuthSuccess(data.user)
        onClose()
        // Reset form
        setFormData({
          username: '',
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          nationality: '',
          study_level: '',
          field_of_study: ''
        })
      } else {
        setError(data.error || 'Une erreur est survenue')
      }
    } catch (err) {
      setError('Erreur de connexion au serveur')
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setError('')
    setFormData({
      username: '',
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      nationality: '',
      study_level: '',
      field_of_study: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
          <CardTitle className="text-2xl text-center">
            {isLogin ? 'Connexion' : 'Inscription'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin 
              ? 'Connectez-vous à votre espace personnel' 
              : 'Créez votre compte pour accéder à tous nos services'
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Champs communs */}
            <div className="space-y-2">
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Votre nom d'utilisateur"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first_name">Prénom</Label>
                    <Input
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder="Prénom"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last_name">Nom</Label>
                    <Input
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder="Nom"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationalité</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="nationality"
                      name="nationality"
                      type="text"
                      placeholder="Votre nationalité"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="study_level">Niveau d'études</Label>
                  <Select onValueChange={(value) => handleSelectChange('study_level', value)}>
                    <SelectTrigger>
                      <div className="flex items-center">
                        <GraduationCap className="h-4 w-4 text-gray-400 mr-2" />
                        <SelectValue placeholder="Sélectionnez votre niveau" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {studyLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="field_of_study">Domaine d'études</Label>
                  <Select onValueChange={(value) => handleSelectChange('field_of_study', value)}>
                    <SelectTrigger>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 text-gray-400 mr-2" />
                        <SelectValue placeholder="Sélectionnez votre domaine" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {fieldsOfStudy.map((field) => (
                        <SelectItem key={field} value={field}>
                          {field}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Votre mot de passe"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {!isLogin && (
                <p className="text-xs text-gray-500">
                  Le mot de passe doit contenir au moins 6 caractères
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Chargement...' : (isLogin ? 'Se connecter' : 'S\'inscrire')}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? 'Pas encore de compte ?' : 'Déjà un compte ?'}
              <button
                onClick={toggleMode}
                className="ml-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                {isLogin ? 'S\'inscrire' : 'Se connecter'}
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AuthModal

