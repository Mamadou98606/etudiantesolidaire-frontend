import { useMemo } from 'react'
import { temoignagesData } from '@/data/temoignagesData'

/**
 * Hook pour gérer la logique des témoignages
 * - Filtrage par catégorie
 * - Recherche par nom/formation/pays
 * - Tri par note ou date
 * - Calcul des statistiques
 */
export function useTemoignagesData(searchTerm = '', selectedCategory = 'tous', sortBy = 'recent') {
  return useMemo(() => {
    // 1️⃣ TRI: Par défaut par année (récent), optionnellement par note
    let sorted = [...temoignagesData]
    if (sortBy === 'note') {
      sorted = sorted.sort((a, b) => b.note - a.note)
    } else if (sortBy === 'recent') {
      sorted = sorted.sort((a, b) => parseInt(b.annee) - parseInt(a.annee))
    }

    // 2️⃣ FILTRER: Par catégorie ET par recherche
    const filtered = sorted.filter(temoignage => {
      const matchCategory = selectedCategory === 'tous' || temoignage.categorie === selectedCategory
      const haystack = (
        temoignage.nom + ' ' +
        temoignage.formation + ' ' +
        temoignage.pays + ' ' +
        temoignage.universite + ' ' +
        temoignage.points_forts.join(' ')
      ).toLowerCase()
      const matchSearch = haystack.includes(searchTerm.toLowerCase())
      return matchCategory && matchSearch
    })

    // 3️⃣ MIEUX NOTÉS: Top 3 par note
    const topRated = [...sorted].sort((a, b) => b.note - a.note).slice(0, 3)

    // 4️⃣ CATÉGORIES: Compter les témoignages par catégorie
    const categories = [
      { id: 'tous', label: 'Tous les témoignages', count: temoignagesData.length },
      { id: 'master', label: 'Master', count: temoignagesData.filter(t => t.categorie === 'master').length },
      { id: 'licence', label: 'Licence', count: temoignagesData.filter(t => t.categorie === 'licence').length },
      { id: 'bts', label: 'BTS', count: temoignagesData.filter(t => t.categorie === 'bts').length },
      { id: 'cap', label: 'CAP', count: temoignagesData.filter(t => t.categorie === 'cap').length },
      { id: 'titre', label: 'Titre Pro', count: temoignagesData.filter(t => t.categorie === 'titre').length },
      { id: 'doctorat', label: 'Doctorat', count: temoignagesData.filter(t => t.categorie === 'doctorat').length }
    ]

    // 5️⃣ STATISTIQUES: Calculées dynamiquement
    const totalTemoignages = temoignagesData.length
    const noteMoyenne = (
      temoignagesData.reduce((sum, t) => sum + t.note, 0) / totalTemoignages
    ).toFixed(1)
    const tauxReussite = 95 // À personnaliser selon tes données
    const etudiaptsAccompagnes = 500 // À personnaliser

    // 6️⃣ PAYS REPRÉSENTÉS: Liste unique
    const paysRepresentes = [...new Set(temoignagesData.map(t => t.pays))].length

    // 7️⃣ RETOURNER: Tous les résultats
    return {
      temoignages: filtered,
      topRated,
      categories,
      total: temoignagesData.length,
      filtered: filtered.length,
      stats: {
        total: totalTemoignages,
        noteMoyenne,
        tauxReussite,
        etudiaptsAccompagnes,
        paysRepresentes
      }
    }
  }, [searchTerm, selectedCategory, sortBy])
}
