import React, { useState, useEffect } from 'react';
import { X, Eye, EyeOff, User, Mail, Lock, Globe, GraduationCap, BookOpen } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AuthModal = ({ isOpen, onClose, mode = 'login', onSuccess, onSwitchMode }) => {
  const { login, register, error, clearError } = useAuth();

  // États du formulaire
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    nationality: '',
    study_level: '',
    field_of_study: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [submitting, setSubmitting] = useState(false); // spinner local fiable

  // Options pour les sélecteurs
  const studyLevels = [
    'Lycée', 'BTS', 'Licence (L1)', 'Licence (L2)', 'Licence (L3)',
    'Master (M1)', 'Master (M2)', 'Doctorat', 'Autre'
  ];

  const fieldsOfStudy = [
    'Sciences et Technologies', 'Économie et Gestion', 'Lettres et Sciences Humaines',
    'Droit et Sciences Politiques', 'Médecine et Santé', 'Arts et Design',
    'Ingénierie', 'Informatique', 'Commerce et Marketing', 'Autre'
  ];

  // Réinitialiser le formulaire quand le mode change
  useEffect(() => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      first_name: '',
      last_name: '',
      nationality: '',
      study_level: '',
      field_of_study: ''
    });
    setFormErrors({});
    setSuccessMessage('');
    clearError();
  }, [mode, clearError]);

  // Fermer le modal quand on clique à l'extérieur / ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Gestion des changements de formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const errors = {};

    if (mode === 'register') {
      if (!formData.username.trim()) errors.username = "Le nom d'utilisateur est requis";
      if (!formData.email.trim()) {
        errors.email = "L'email est requis";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Format d'email invalide";
      }
      if (!formData.password) {
        errors.password = 'Le mot de passe est requis';
      } else if (formData.password.length < 6) {
        errors.password = 'Le mot de passe doit contenir au moins 6 caractères';
      }
      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Veuillez confirmer le mot de passe';
      } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Les mots de passe ne correspondent pas';
      }
      if (!formData.first_name.trim()) errors.first_name = 'Le prénom est requis';
      if (!formData.last_name.trim()) errors.last_name = 'Le nom est requis';
    } else {
      if (!formData.username.trim()) errors.username = "Le nom d'utilisateur est requis";
      if (!formData.password) errors.password = 'Le mot de passe est requis';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    setSuccessMessage('');
    try {
      let result;
      if (mode === 'register') {
        result = await register({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          first_name: formData.first_name,
          last_name: formData.last_name,
          nationality: formData.nationality,
          study_level: formData.study_level,
          field_of_study: formData.field_of_study
        });
      } else {
        result = await login({
          username: formData.username,
          password: formData.password
        });
      }

      if (result.success) {
        setSuccessMessage(mode === 'register' ? 'Compte créé avec succès !' : 'Connexion réussie !');
        setTimeout(() => onSuccess(), 900);
      } else {
        setSuccessMessage(result.error || (mode === 'register' ? "Erreur lors de l'inscription" : 'Erreur lors de la connexion'));
      }
    } catch (err) {
      setSuccessMessage("Erreur réseau. Réessayez.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">
              {mode === 'login' ? 'Connexion' : 'Inscription'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Contenu */}
          <div className="p-6">
            {/* Messages */}
            {successMessage && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-700 text-sm">{successMessage}</p>
              </div>
            )}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nom d'utilisateur */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom d'utilisateur
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.username ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Votre nom d'utilisateur"
                  />
                </div>
                {formErrors.username && <p className="mt-1 text-sm text-red-600">{formErrors.username}</p>}
              </div>

              {/* Champs supplémentaires pour l'inscription */}
              {mode === 'register' && (
                <>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="votre@email.com"
                      />
                    </div>
                    {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                  </div>

                  {/* Prénom et Nom */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.first_name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Prénom"
                      />
                      {formErrors.first_name && <p className="mt-1 text-sm text-red-600">{formErrors.first_name}</p>}
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.last_name ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Nom"
                      />
                      {formErrors.last_name && <p className="mt-1 text-sm text-red-600">{formErrors.last_name}</p>}
                    </div>
                  </div>

                  {/* Nationalité */}
                  <div>
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationalité</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="nationality"
                        name="nationality"
                        type="text"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Votre nationalité"
                      />
                    </div>
                  </div>

                  {/* Niveau d'études */}
                  <div>
                    <label htmlFor="study_level" className="block text-sm font-medium text-gray-700 mb-1">Niveau d'études</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        id="study_level"
                        name="study_level"
                        value={formData.study_level}
                        onChange={(e) => handleSelectChange('study_level', e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez votre niveau</option>
                        {studyLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Domaine d'études */}
                  <div>
                    <label htmlFor="field_of_study" className="block text-sm font-medium text-gray-700 mb-1">Domaine d'études</label>
                    <div className="relative">
                      <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        id="field_of_study"
                        name="field_of_study"
                        value={formData.field_of_study}
                        onChange={(e) => handleSelectChange('field_of_study', e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez votre domaine</option>
                        {fieldsOfStudy.map((field) => (
                          <option key={field} value={field}>{field}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Mot de passe */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Votre mot de passe"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formErrors.password && <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>}
              </div>

              {/* Confirmation mot de passe (inscription seulement) */}
              {mode === 'register' && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Confirmez votre mot de passe"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formErrors.confirmPassword && <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>}
                </div>
              )}

              {/* Bouton de soumission */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {mode === 'login' ? 'Connexion...' : 'Inscription...'}
                  </div>
                ) : (
                  mode === 'login' ? 'Se connecter' : "S'inscrire"
                )}
              </button>
            </form>

            {/* Lien pour changer de mode */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {mode === 'login' ? (
                  <>
                    Pas encore de compte ?{' '}
                    <button
                      onClick={() => onSwitchMode('register')}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      S'inscrire
                    </button>
                  </>
                ) : (
                  <>
                    Déjà un compte ?{' '}
                    <button
                      onClick={() => onSwitchMode('login')}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Se connecter
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
