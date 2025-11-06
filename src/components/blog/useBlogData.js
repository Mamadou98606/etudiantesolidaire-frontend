import { useMemo } from 'react'
import { blogArticles } from '@/data/blogArticles'

/**
 * Hook pour gérer la logique du blog
 * - Filtrage par catégorie
 * - Recherche
 * - Tri
 */
export function useBlogData(searchTerm = '', selectedCategory = 'tous') {
  return useMemo(() => {
    // Trier du plus récent au plus ancien
    const sorted = [...blogArticles].sort((a, b) => new Date(b.date) - new Date(a.date))

    // Filtrer par catégorie ET recherche
    const filtered = sorted.filter(article => {
      const matchCategory = selectedCategory === 'tous' || article.category === selectedCategory
      const haystack = (
        article.title + ' ' +
        article.excerpt + ' ' +
        (article.tags || []).join(' ')
      ).toLowerCase()
      const matchSearch = haystack.includes(searchTerm.toLowerCase())
      return matchCategory && matchSearch
    })

    // Articles populaires (top 3 par views)
    const popular = [...sorted].sort((a, b) => b.views - a.views).slice(0, 3)

    // Catégories avec compteurs
    const categories = [
      { id: 'tous', label: 'Tous les articles', count: blogArticles.length },
      { id: 'Orientation', label: 'Orientation', count: blogArticles.filter(a => a.category === 'Orientation').length },
      { id: 'Démarches', label: 'Démarches', count: blogArticles.filter(a => a.category === 'Démarches').length },
      { id: 'Vie étudiante', label: 'Vie étudiante', count: blogArticles.filter(a => a.category === 'Vie étudiante').length },
      { id: 'Emploi', label: 'Emploi', count: blogArticles.filter(a => a.category === 'Emploi').length },
      { id: 'Financement', label: 'Financement', count: blogArticles.filter(a => a.category === 'Financement').length },
      { id: 'Culture', label: 'Culture', count: blogArticles.filter(a => a.category === 'Culture').length }
    ]

    return {
      articles: filtered,
      popular,
      categories,
      total: blogArticles.length,
      filtered: filtered.length
    }
  }, [searchTerm, selectedCategory])
}
