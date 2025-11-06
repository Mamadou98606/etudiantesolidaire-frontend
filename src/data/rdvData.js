// Données centralisées pour la gestion des rendez-vous
// Facilite la maintenance et permet d'ajouter/modifier des types de RDV facilement

export const typesRDV = [
  {
    id: 'orientation',
    titre: 'Orientation scolaire',
    description: 'Choisir la bonne formation',
    duree: 45,
    dureeFichier: '45 min',
    icon: 'User',
    couleur: 'bg-blue-100 text-blue-800',
    consultationType: ['visio', 'phone', 'presentiel'],
    priorite: 1
  },
  {
    id: 'demarches',
    titre: 'Démarches administratives',
    description: 'Visa, titre de séjour, etc.',
    duree: 30,
    dureeFichier: '30 min',
    icon: 'MessageSquare',
    couleur: 'bg-green-100 text-green-800',
    consultationType: ['visio', 'phone'],
    priorite: 2
  },
  {
    id: 'logement',
    titre: 'Aide au logement',
    description: 'Trouver un logement étudiant',
    duree: 30,
    dureeFichier: '30 min',
    icon: 'MapPin',
    couleur: 'bg-purple-100 text-purple-800',
    consultationType: ['visio', 'phone', 'presentiel'],
    priorite: 3
  },
  {
    id: 'emploi',
    titre: 'Recherche d\'emploi',
    description: 'CV, entretiens, stages',
    duree: 45,
    dureeFichier: '45 min',
    icon: 'Users',
    couleur: 'bg-orange-100 text-orange-800',
    consultationType: ['visio', 'phone'],
    priorite: 4
  },
  {
    id: 'integration',
    titre: 'Intégration sociale',
    description: 'Vie étudiante, culture française',
    duree: 30,
    dureeFichier: '30 min',
    icon: 'Video',
    couleur: 'bg-pink-100 text-pink-800',
    consultationType: ['visio'],
    priorite: 5
  },
  {
    id: 'urgence',
    titre: 'Consultation d\'urgence',
    description: 'Problème urgent à résoudre',
    duree: 20,
    dureeFichier: '20 min',
    icon: 'AlertCircle',
    couleur: 'bg-red-100 text-red-800',
    consultationType: ['phone', 'visio'],
    priorite: 6
  }
]

// Créneau horaires disponibles
export const creneauxHoraires = {
  matin: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
  apres_midi: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
}

// Horaires d'ouverture
export const horairesOuverture = {
  lundi: { ouverture: '09:00', fermeture: '17:30', ouvert: true },
  mardi: { ouverture: '09:00', fermeture: '17:30', ouvert: true },
  mercredi: { ouverture: '09:00', fermeture: '17:30', ouvert: true },
  jeudi: { ouverture: '09:00', fermeture: '17:30', ouvert: true },
  vendredi: { ouverture: '09:00', fermeture: '17:30', ouvert: true },
  samedi: { ouverture: '09:00', fermeture: '12:00', ouvert: true },
  dimanche: { ouverture: null, fermeture: null, ouvert: false }
}

// Types de consultation disponibles
export const typesConsultation = [
  {
    id: 'visio',
    titre: 'Visioconférence',
    icon: 'Video',
    couleur: 'text-blue-600'
  },
  {
    id: 'phone',
    titre: 'Téléphone',
    icon: 'Phone',
    couleur: 'text-green-600'
  },
  {
    id: 'presentiel',
    titre: 'Présentiel (Paris)',
    icon: 'MapPin',
    couleur: 'text-purple-600'
  }
]

// Informations de contact
export const infoContact = {
  email: 'contact@etudiantesolidaire.com',
  telephone: '+33 1 23 45 67 89',
  ville: 'Paris',
  paysCode: 'FR'
}

// Messages et contenu statique
export const messages = {
  confirmation: {
    titre: 'Rendez-vous confirmé !',
    description: 'Votre demande de rendez-vous a été envoyée avec succès. Nous vous contacterons dans les 24h pour confirmer le créneau.',
    delaiReponse: 'Nous vous confirmons votre rendez-vous dans les 24h ouvrées.'
  },
  info: {
    titre: 'Informations pratiques',
    consultation_gratuite: 'Votre premier rendez-vous de 30 minutes est entièrement gratuit et sans engagement.',
    besoin_aide: 'Besoin d\'aide ?'
  },
  form: {
    titre: 'Informations du rendez-vous',
    description: 'Remplissez ce formulaire pour réserver votre créneau'
  }
}

/**
 * TEMPLATE POUR AJOUTER UN NOUVEAU TYPE DE RDV
 *
 * {
 *   id: 'identifiant-unique',
 *   titre: 'Titre affiché',
 *   description: 'Description courte',
 *   duree: 30,
 *   dureeFichier: '30 min',
 *   icon: 'NomIcone', // Voir lucide-react icons
 *   couleur: 'bg-color-100 text-color-800',
 *   consultationType: ['visio', 'phone', 'presentiel'],
 *   priorite: 7
 * }
 */

/**
 * ICONS DISPONIBLES DANS LUCIDE-REACT :
 * User, MessageSquare, MapPin, Users, Video, AlertCircle, etc.
 */

/**
 * COULEURS TAILWIND DISPONIBLES :
 * bg-blue-100 text-blue-800
 * bg-green-100 text-green-800
 * bg-purple-100 text-purple-800
 * bg-orange-100 text-orange-800
 * bg-pink-100 text-pink-800
 * bg-red-100 text-red-800
 * bg-indigo-100 text-indigo-800
 * bg-teal-100 text-teal-800
 */
