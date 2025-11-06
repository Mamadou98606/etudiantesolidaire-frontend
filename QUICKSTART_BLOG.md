# 🚀 QUICK START - AJOUTER UN ARTICLE EN 2 MIN

## C'est ULTRA simple! Suis ces 4 étapes:

### Étape 1: Ouvre le fichier des données
```
src/data/blogArticles.js
```

### Étape 2: Scroll jusqu'en bas
Tu verras ce template:
```javascript
/**
 * ✨ TEMPLATE POUR AJOUTER UN NOUVEL ARTICLE
 * 
 * Copiez ceci et complétez les champs:
 */
```

### Étape 3: Copie/colle dans le tableau

**Avant:**
```javascript
export const blogArticles = [
  { id: 1, ... },
  { id: 2, ... }
]
```

**Après:**
```javascript
export const blogArticles = [
  { id: 1, ... },
  { id: 2, ... },
  { id: 3, title: "Mon nouvel article", ... }  // ← TON ARTICLE ICI
]
```

### Étape 4: Complète les champs

Minimum requis:
- `id`: Numéro unique (2, 3, 4, etc)
- `title`: Titre de l'article ✅ OBLIGATOIRE
- `excerpt`: Résumé court ✅ OBLIGATOIRE
- `category`: "Orientation" | "Démarches" | "Vie étudiante" | "Emploi" | "Financement" | "Culture"
- `date`: Format YYYY-MM-DD (ex: "2025-11-06")
- `author`: Ton nom
- `image`: Un emoji 🎓
- `readTime`: "5 min"
- `tags`: ["tag1", "tag2"]
- `sections`: Contenu avec paragraphes/bullets

### Étape 5: Sauvegarde! 
Ctrl+S ou Cmd+S

## ✨ C'est fait! 

L'article apparaît **automatiquement**:
- 📚 Dans la liste du blog
- 🔍 Dans la recherche  
- 🏷️ Dans les filtres de catégorie
- 🔝 En haut (si c'est le plus récent)

## Besoin d'aide?

Voir les fichiers:
- `README_BLOG.md` - Guide complet
- `TEMPLATE_ARTICLE.js` - Template à copier
- `GUIDE_AJOUTER_BLOG.md` - Explications détaillées

C'est VRAIMENT simple maintenant! 🎉
