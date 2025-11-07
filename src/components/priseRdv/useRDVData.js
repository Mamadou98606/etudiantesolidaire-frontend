import { useMemo, useState, useEffect } from 'react'
import { typesRDV, creneauxHoraires, horairesOuverture, typesConsultation } from '@/data/rdvData'
import { getCreneauxOccupes } from '@/services/rdvService'

/**
 * Hook personnalisé pour la gestion des rendez-vous
 * Fournit la logique de filtrage, validation et calcul des créneau disponibles
 * Récupère aussi les créneau occupés depuis l'API
 *
 * @param {string} selectedTypeRDV - ID du type de RDV sélectionné
 * @param {string} selectedDate - Date sélectionnée (format YYYY-MM-DD)
 * @param {string} selectedConsultationType - Type de consultation sélectionné
 * @returns {object} Données formatées et métadonnées RDV
 */
export function useRDVData(selectedTypeRDV = '', selectedDate = '', selectedConsultationType = '') {
  const [heuresOccupees, setHeuresOccupees] = useState([])
  const [isLoadingOccupees, setIsLoadingOccupees] = useState(false)

  // Récupérer les créneau occupés quand la date change
  useEffect(() => {
    if (!selectedDate) {
      setHeuresOccupees([])
      return
    }

    const fetchOccupees = async () => {
      setIsLoadingOccupees(true)
      const result = await getCreneauxOccupes(selectedDate)
      if (result.success) {
        setHeuresOccupees(result.heuresOccupees || [])
      }
      setIsLoadingOccupees(false)
    }

    fetchOccupees()
  }, [selectedDate])

  return useMemo(() => {
    // Récupérer le type RDV sélectionné
    const typeRDVDetails = typesRDV.find(type => type.id === selectedTypeRDV) || null

    // Obtenir les types de consultation disponibles pour ce RDV
    const consultationsDisponibles = typeRDVDetails
      ? typesConsultation.filter(ct => typeRDVDetails.consultationType.includes(ct.id))
      : typesConsultation

    // Vérifier si la date est un jour ouvrable
    const isDateOuvrable = (dateString) => {
      if (!dateString) return false
      const date = new Date(dateString)
      const dayIndex = date.getDay()
      const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
      const jour = jours[dayIndex]
      return horairesOuverture[jour]?.ouvert === true
    }

    // Obtenir les créneau disponibles pour une date donnée (excluant les occupés)
    const getCreneauxDisponibles = (dateString) => {
      if (!isDateOuvrable(dateString)) {
        return []
      }

      const date = new Date(dateString)
      const dayIndex = date.getDay()
      const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
      const jour = jours[dayIndex]
      const horaires = horairesOuverture[jour]

      if (!horaires.ouvert) {
        return []
      }

      // Combiner tous les créneau disponibles
      const tousLesCreneaux = [
        ...creneauxHoraires.matin,
        ...creneauxHoraires.apres_midi
      ]

      // Filtrer les créneau en fonction des horaires du jour ET des créneau occupés
      return tousLesCreneaux.filter(creneau => {
        const [heure, minute] = creneau.split(':').map(Number)
        const creneauTime = heure * 60 + minute
        const [ouvertureH, ouvertureM] = horaires.ouverture.split(':').map(Number)
        const [fermetureH, fermetureM] = horaires.fermeture.split(':').map(Number)
        const ouvertureTime = ouvertureH * 60 + ouvertureM
        const fermetureTime = fermetureH * 60 + fermetureM

        const isInOpeningHours = creneauTime >= ouvertureTime && creneauTime < fermetureTime
        const isNotOccupied = !heuresOccupees.includes(creneau)

        return isInOpeningHours && isNotOccupied
      })
    }

    // Validation de formule
    const validateFormData = (formData) => {
      const errors = {}

      if (!formData.prenom || formData.prenom.trim() === '') {
        errors.prenom = 'Prénom requis'
      }
      if (!formData.nom || formData.nom.trim() === '') {
        errors.nom = 'Nom requis'
      }
      if (!formData.email || formData.email.trim() === '') {
        errors.email = 'Email requis'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Email invalide'
      }
      if (!formData.pays || formData.pays.trim() === '') {
        errors.pays = 'Pays requis'
      }
      if (!formData.type_rdv) {
        errors.type_rdv = 'Type de rendez-vous requis'
      }
      if (!formData.consultation_type) {
        errors.consultation_type = 'Type de consultation requis'
      }
      if (!formData.date_rdv) {
        errors.date_rdv = 'Date préférée requise'
      } else if (!isDateOuvrable(formData.date_rdv)) {
        errors.date_rdv = 'Cette date est fermée'
      }
      if (!formData.heure_rdv) {
        errors.heure_rdv = 'Heure préférée requise'
      }

      return errors
    }

    // Formater les données pour l'affichage
    const getFormattedDate = (dateString) => {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    // Calculer l'heure de fin du RDV
    const getHeureFinRDV = (heure, duree) => {
      if (!heure) return ''
      const [h, m] = heure.split(':').map(Number)
      const heureTotal = h * 60 + m + duree
      const heureFinH = Math.floor(heureTotal / 60)
      const heureFinM = heureTotal % 60
      return `${String(heureFinH).padStart(2, '0')}:${String(heureFinM).padStart(2, '0')}`
    }

    // Vérifier si un créneau spécifique est occupé
    const isCreneauOccupied = (heure) => {
      return heuresOccupees.includes(heure)
    }

    return {
      // Types de RDV
      typesRDV: typesRDV.sort((a, b) => a.priorite - b.priorite),
      typeRDVDetails,

      // Consultation types
      typesConsultation,
      consultationsDisponibles,

      // Créneau et horaires
      creneauxDisponibles: getCreneauxDisponibles(selectedDate),
      heuresOccupees,
      isLoadingOccupees,
      isCreneauOccupied,
      horairesOuverture,

      // Validation
      validateFormData,
      isDateOuvrable,

      // Formatage
      getFormattedDate,
      getHeureFinRDV
    }
  }, [selectedTypeRDV, selectedDate, selectedConsultationType, heuresOccupees, isLoadingOccupees])
}
