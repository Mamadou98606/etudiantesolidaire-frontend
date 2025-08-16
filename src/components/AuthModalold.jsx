import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { X, Eye, EyeOff, User, Mail, Lock, Globe, GraduationCap, BookOpen } from 'lucide-react';

function AuthModal({ isOpen, onClose, onAuthSuccess, initialMode = 'login' }) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    nationality: '',
    study_level: '',
    field_of_study: ''
  });

  useEffect(() => {
    setIsLogin(initialMode === 'login');
    setError('');
    setFormData({
      username: '',
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      nationality: '',
      study_level: '',
      field_of_study: ''
    });
  }, [initialMode, isOpen]);

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
  ];

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
  ];

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSelectChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/api/login' : '/api/register';
      const payload = isLogin
        ? { username: formData.username, password: formData.password }
        : formData;

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        onAuthSuccess(data.user);
        onClose();
      } else {
        setError(data.error || 'Une erreur est survenue');
      }
    } catch {
      setError('Erreur de connexion au serveur');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({
      username: '',
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      nationality: '',
      study_level: '',
      field_of_study: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
          <CardTitle className="text-2xl text-center">
            {isLogin ? 'Connexion' : 'Inscription'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin
              ? 'Connectez-vous à votre compte'
              : 'Créez un compte pour accéder à toutes les fonctionnalités'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isLogin ? (
              <>
                <div>
                  <Label htmlFor="username">Nom d'utilisateur</Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    autoComplete="username"
                    placeholder="Votre nom d'utilisateur"
                    icon={<User className="w-4 h-4" />}
                  />
                </div>

                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      autoComplete="current-password"
                      placeholder="Votre mot de passe"
                      icon={<Lock className="w-4 h-4" />}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                      aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Label htmlFor="username">Nom d'utilisateur</Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    placeholder="Choisissez un nom d'utilisateur"
                    icon={<User className="w-4 h-4" />}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre adresse email"
                    icon={<Mail className="w-4 h-4" />}
                  />
                </div>

                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      placeholder="Créez un mot de passe"
                      icon={<Lock className="w-4 h-4" />}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                      aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="first_name">Prénom</Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <Label htmlFor="last_name">Nom</Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <Label htmlFor="nationality">Nationalité</Label>
                  <Input
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    placeholder="Votre nationalité"
                    icon={<Globe className="w-4 h-4" />}
                  />
                </div>

                <div>
                  <Label htmlFor="study_level">Niveau d'étude</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange('study_level', value)}
                    value={formData.study_level}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez votre niveau d'étude" />
                    </SelectTrigger>
                    <SelectContent>
                      {studyLevels.map(level => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="field_of_study">Filière</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange('field_of_study', value)}
                    value={formData.field_of_study}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sélectionnez votre filière" />
                    </SelectTrigger>
                    <SelectContent>
                      {fieldsOfStudy.map(field => (
                        <SelectItem key={field} value={field}>{field}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {error && <p className="text-red-600 text-center">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'En cours...' : (isLogin ? 'Se connecter' : "S'inscrire")}
            </Button>
          </form>

          <div className="mt-4 text-center">
            {isLogin ? (
              <>
                Pas encore de compte ?{' '}
                <button
                  className="text-blue-600 hover:underline"
                  onClick={toggleMode}
                >
                  Créez-en un
                </button>
              </>
            ) : (
              <>
                Vous avez déjà un compte ?{' '}
                <button
                  className="text-blue-600 hover:underline"
                  onClick={toggleMode}
                >
                  Connectez-vous
                </button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AuthModal;
