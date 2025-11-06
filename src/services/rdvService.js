/**
 * Service API pour la gestion des rendez-vous
 * Communique avec le backend Flask sur Railway
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

/**
 * Réserver un nouveau rendez-vous
 * @param {object} formData - Données du formulaire
 * @returns {Promise<object>} Réponse de l'API
 */
export async function reserverRDV(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/rdv/reserver`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Erreur lors de la réservation')
    }

    return {
      success: true,
      rdv: data.rdv,
      message: data.message
    }
  } catch (error) {
    console.error('Erreur réservation RDV:', error)
    return {
      success: false,
      error: error.message || 'Erreur lors de la réservation'
    }
  }
}

/**
 * Récupérer les créneau occupés pour une date
 * @param {string} date - Date au format YYYY-MM-DD
 * @returns {Promise<array>} Liste des heures occupées
 */
export async function getCreneauxOccupes(date) {
  try {
    const response = await fetch(`${API_BASE_URL}/rdv/disponibilites/${date}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Erreur lors de la récupération des disponibilités')
    }

    return {
      success: true,
      heuresOccupees: data.heures_occupees,
      date: data.date,
      totalReservations: data.total_reservations
    }
  } catch (error) {
    console.error('Erreur récupération créneau occupés:', error)
    return {
      success: false,
      heuresOccupees: [],
      error: error.message
    }
  }
}

/**
 * Récupérer les réservations d'un utilisateur
 * @param {string} email - Email de l'utilisateur
 * @returns {Promise<array>} Liste des réservations
 */
export async function getMesReservations(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/rdv/mes-reservations?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Erreur lors de la récupération')
    }

    return {
      success: true,
      reservations: data.reservations
    }
  } catch (error) {
    console.error('Erreur récupération réservations:', error)
    return {
      success: false,
      reservations: [],
      error: error.message
    }
  }
}

/**
 * Annuler une réservation
 * @param {number} rdvId - ID de la réservation
 * @param {string} email - Email pour vérification
 * @returns {Promise<object>} Réponse de l'API
 */
export async function annulerRDV(rdvId, email) {
  try {
    const response = await fetch(`${API_BASE_URL}/rdv/annuler/${rdvId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Erreur lors de l\'annulation')
    }

    return {
      success: true,
      message: data.message,
      rdv: data.rdv
    }
  } catch (error) {
    console.error('Erreur annulation RDV:', error)
    return {
      success: false,
      error: error.message || 'Erreur lors de l\'annulation'
    }
  }
}

/**
 * Vérifier si un créneau est disponible
 * @param {string} date - Date au format YYYY-MM-DD
 * @param {string} heure - Heure au format HH:MM
 * @param {array} heuresOccupees - Liste des heures occupées
 * @returns {boolean} true si disponible
 */
export function isCreneauDisponible(date, heure, heuresOccupees = []) {
  return !heuresOccupees.includes(heure)
}
