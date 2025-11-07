/**
 * Valide la force d'un mot de passe
 * Retourne un objet avec isValid (bool) et errors (array de messages)
 */
export const validatePasswordStrength = (password) => {
  const errors = [];

  if (!password) {
    return { isValid: false, errors: ['Le mot de passe est requis'] };
  }

  if (password.length < 8) {
    errors.push('Au moins 8 caractères');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Au moins 1 majuscule');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Au moins 1 chiffre');
  }

  if (!/[!@#$%^&*\-_+=\[\]{}|;:,.<>?]/.test(password)) {
    errors.push('Au moins 1 caractère spécial (!@#$%^&* etc)');
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : ['✅ Mot de passe acceptable']
  };
};

/**
 * Retourne une couleur basée sur la force du mot de passe
 */
export const getPasswordStrengthColor = (password) => {
  const { isValid, errors } = validatePasswordStrength(password);
  if (!password) return 'text-gray-500';
  if (errors.length >= 3) return 'text-red-500';
  if (errors.length === 1) return 'text-yellow-500';
  return 'text-green-500';
};
