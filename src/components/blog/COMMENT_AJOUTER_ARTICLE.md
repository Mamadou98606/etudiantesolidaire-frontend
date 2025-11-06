# 📝 Comment ajouter un article au blog (GUIDE POUR LES NULS)

## C'EST TRÈS SIMPLE! 5 MINUTES TOPS! 🚀

---

## ✅ **ÉTAPE 1: Ouvrir le fichier**

Ouvre ce fichier:
```
src/data/blogArticles.js
```

---

## ✅ **ÉTAPE 2: Voir la structure**

Tu verras ceci (à la fin du fichier):

```javascript
export const blogArticles = [
  {
    id: 1,
    title: "Article 1",
    // ... plus de données
  },
  {
    id: 2,
    title: "Article 2",
    // ... plus de données
  }
  // ← ICI C'EST LÀ QU'ON AJOUTE!
]
```

---

## ✅ **ÉTAPE 3: Copier/Coller ce template**

Ajoute une virgule après le dernier article, puis copie ceci:

```javascript
,
{
  id: 3,                                    // ← Change: 3, 4, 5...
  title: "Ton titre d'article ici",         // ← OBLIGATOIRE (au moins 5 mots)
  excerpt: "Résumé court: 1-2 phrases",     // ← OBLIGATOIRE
  author: "Ton Nom ou 'Équipe'",
  date: "2025-11-06",                       // ← Aujourd'hui (format YYYY-MM-DD)
  category: "Orientation",                  // ← Choix: Orientation | Démarches | Vie étudiante | Emploi | Financement | Culture
  image: "🎓",                              // ← Un EMOJI (ex: 📚 🏠 💼 🇫🇷)
  views: 0,
  comments: 0,
  readTime: "5 min",                        // ← Estimé (ex: "3 min", "7 min")
  tags: ["tag1", "tag2", "tag3"],          // ← 2-5 tags (mots-clés)
  sections: [
    {
      heading: "Mon titre de section",
      paragraphs: [
        "Paragraphe 1: explique ton idée...",
        "Paragraphe 2: continue..."
      ]
    },
    {
      heading: "Autre section",
      bullets: [
        "Point important 1",
        "Point important 2",
        "Point important 3"
      ]
    }
  ]
}
```

---

## ✅ **ÉTAPE 4: Remplir LES CHAMPS OBLIGATOIRES**

**Ces 2 champs DOIVENT être remplis:**
- ✅ `title` - Le titre de ton article
- ✅ `excerpt` - Le résumé (1-2 phrases max)

**Les autres sont optionnels mais recommandés:**
- 📅 `date` - La date de publication
- 🏷️ `category` - La catégorie
- 🎨 `image` - Un emoji
- 📊 `readTime` - Temps de lecture estimé
- 🔖 `tags` - Mots-clés pour la recherche
- 📄 `sections` - Le contenu

---

## ✅ **ÉTAPE 5: Sauvegarde!**

Appuie sur **Ctrl+S** (ou Cmd+S sur Mac)

---

## 🎉 **C'EST FAIT!**

L'article apparaît **automatiquement** sur le blog:
- ✨ Dans la liste
- 🔍 Dans la recherche
- 🏷️ Dans le filtre de catégorie
- 📈 Dans les articles populaires (si views > 0)

---

## 📋 SECTIONS: 2 FORMATS

### Format 1: Paragraphes longs
```javascript
{
  heading: "Pourquoi c'est important?",
  paragraphs: [
    "Explication détaillée du sujet...",
    "Plus de détails et contexte..."
  ]
}
```

### Format 2: Points à puces
```javascript
{
  heading: "5 conseils",
  bullets: [
    "Conseil numéro 1",
    "Conseil numéro 2",
    "Conseil numéro 3"
  ]
}
```

### Format 3: Les deux!
```javascript
{
  heading: "Introduction",
  paragraphs: ["Contexte du sujet..."],
  bullets: ["Avantage 1", "Avantage 2"]
}
```

---

## 🏷️ CATÉGORIES (CHOISIS UNE)

| Catégorie | Quand l'utiliser? | Emoji suggéré |
|-----------|-------------------|---------------|
| **Orientation** | Choix d'études, carrière, formations | 🧭 📚 🎓 |
| **Démarches** | Visa, administratif, documents | 🛂 📋 ✅ |
| **Vie étudiante** | Logement, santé, amis, intégration | 🏠 👥 🍽️ |
| **Emploi** | Travail, stage, premier job | 💼 🏢 📊 |
| **Financement** | Aides, budgets, argent | 💰 💵 💳 |
| **Culture** | Événements, loisirs, découvertes | 🎉 🎨 🎭 |

---

## 🎨 EMOJIS POPULAIRES

```
📚 📖 📝 = Livres/Études
🎓 🏆 = Diplôme/Succès
🧭 🎯 = Direction/Orientation
💼 🏢 = Travail
🏠 🏡 = Logement
💰 💵 = Argent
🛂 📋 = Visa/Documents
🇫🇷 🌍 = France/International
👥 🤝 = Communauté/Amis
🍽️ 🥗 = Nourriture
🎉 🎊 = Événements
```

---

## ❌ ERREURS COURANTES À ÉVITER

| ❌ Erreur | ✅ Solution |
|-----------|-----------|
| Oublier la **virgule** après l'article précédent | Ajoute `,` avant ton nouvel article |
| `title` vide ou trop court | Écris au moins 5-10 mots |
| `excerpt` trop long | Max 2 phrases courtes |
| Oublier les **guillemets** | "Texte" pas Texte |
| `category` mal orthographiée | Copie/colle depuis la liste |
| Date en mauvais format | Utilise YYYY-MM-DD (ex: 2025-11-06) |
| Pas de `sections` | Au minimum 1 section avec `heading` |

---

## 💡 EXEMPLE COMPLET (COPY/PASTE READY)

```javascript
,
{
  id: 3,
  title: "Comment trouver un logement en France: 5 conseils pratiques",
  excerpt: "Découvrez les meilleures plateformes et stratégies pour trouver votre logement étudiant rapidement et sans vous faire arnaquer.",
  author: "Marie Dupont",
  date: "2025-11-06",
  category: "Vie étudiante",
  image: "🏠",
  views: 0,
  comments: 0,
  readTime: "6 min",
  tags: ["Logement", "Conseils", "Pratique"],
  sections: [
    {
      heading: "Les meilleures plateformes",
      paragraphs: [
        "Il existe plusieurs sites réputés pour trouver un logement.",
        "Voici les incontournables pour les étudiants en France..."
      ],
      bullets: [
        "SeLoger.com - Le plus grand site français",
        "LeBonCoin.fr - Annonces variées",
        "Housing Anywhere - Pour les étudiants",
        "PAD.fr - Immobilier moderne"
      ]
    },
    {
      heading: "5 conseils pour réussir",
      bullets: [
        "Commencez la recherche 3 mois avant",
        "Visitez TOUJOURS avant de payer",
        "Vérifiez le contrat attentivement",
        "Prenez une assurance habitation",
        "Documentez l'état des lieux"
      ]
    }
  ]
}
```

---

## ❓ QUESTIONS FRÉQUENTES

**Q: Combien de sections je dois avoir?**
R: Minimum 1, idéalement 2-4. Plus c'est lisible!

**Q: Puis-je utiliser HTML ou Markdown?**
R: Non, juste du texte simple dans `paragraphs` et `bullets`.

**Q: Les views et comments, c'est quoi?**
R: `views: 0` = nombre de lectures, `comments: 0` = nombre de commentaires. Commence toujours à 0.

**Q: Comment ajouter une image?**
R: Pour l'instant, utilise juste un emoji dans `image`. Une image réelle c'est pour plus tard!

**Q: L'article n'apparaît pas?**
R: Vérifie:
1. As-tu sauvegardé (Ctrl+S)?
2. La virgule avant ton article?
3. Les guillemets partout?
4. Le fichier: `src/data/blogArticles.js`?

---

## 🚀 C'EST VRAIMENT TOUT!

Tu ajoutes 1 objet → Il apparaît magiquement! ✨

**Besoin d'aide? Regarde:**
- `src/data/blogArticles.js` - Vois les exemples réels
- `src/components/blog/useBlogData.js` - La logique interne

**Amuse-toi bien avec ton blog!** 🎉
