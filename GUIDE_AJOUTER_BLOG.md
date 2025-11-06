/**
 * 📝 GUIDE COMPLET - Comment ajouter un article au blog?
 * 
 * C'est SUPER simple maintenant! Seulement 3 étapes.
 */

// ═══════════════════════════════════════════════════════════════
// ÉTAPE 1: Aller dans src/data/blogArticles.js
// ═══════════════════════════════════════════════════════════════
// Tu vas voir ce template au bas du fichier:
/*
{
  id: 9,                              // Numéro unique (id max + 1)
  title: "Titre de l'article",
  excerpt: "Résumé court (1-2 phrases)",
  author: "Votre nom ou 'Équipe Étudiante Solidaire'",
  date: "2025-11-06",                // Aujourd'hui
  category: "Orientation",           // Orientation, Démarches, Vie étudiante, Emploi, Financement, Culture
  image: "🎓",                       // Emoji au choix
  views: 0,
  comments: 0,
  readTime: "5 min",                 // Estimé
  tags: ["Tag1", "Tag2"],
  sections: [
    {
      heading: "Section 1",
      paragraphs: ["Texte long...", "Texte long..."],  // optionnel
      bullets: ["Point 1", "Point 2"]                   // optionnel
    }
  ]
}
*/

// ═══════════════════════════════════════════════════════════════
// ÉTAPE 2: Copier ce template dans l'array blogArticles
// ═══════════════════════════════════════════════════════════════
// Tu ouvres src/data/blogArticles.js et tu ajoutes:

export const blogArticles = [
  // ... articles existants ...
  
  // TON NOUVEL ARTICLE ICI ↓
  {
    id: 9,
    title: "Mon superbe article",
    // ...remplir les champs
  }
]

// ═══════════════════════════════════════════════════════════════
// ÉTAPE 3: C'est tout! 🎉
// ═══════════════════════════════════════════════════════════════
// L'article apparaîtra automatiquement:
// ✅ Dans la liste du blog
// ✅ Dans les catégories (filtrage)
// ✅ Dans les articles populaires (si views > 0)
// ✅ Dans la recherche (tags + titre + excerpt)


// ═══════════════════════════════════════════════════════════════
// FORMATS DE SECTION:
// ═══════════════════════════════════════════════════════════════

// Option 1: SECTION AVEC PARAGRAPHES
{
  heading: "Mon titre",
  paragraphs: [
    "Paragraphe 1",
    "Paragraphe 2"
  ]
}

// Option 2: SECTION AVEC LISTES
{
  heading: "Points importants",
  bullets: [
    "Point 1",
    "Point 2",
    "Point 3"
  ]
}

// Option 3: SECTION AVEC LES DEUX
{
  heading: "Introduction",
  paragraphs: ["Voici pourquoi c'est important..."],
  bullets: ["Avantage 1", "Avantage 2"]
}

// ═══════════════════════════════════════════════════════════════
// CATÉGORIES DISPONIBLES:
// ═══════════════════════════════════════════════════════════════
// - "Orientation"     (choix de études, carrière)
// - "Démarches"       (administratif, visa, etc)
// - "Vie étudiante"   (logement, santé, social)
// - "Emploi"          (travail, stage, job)
// - "Financement"     (aides, financement études)
// - "Culture"         (événements, loisirs)

// ═══════════════════════════════════════════════════════════════
// EMOJIS SUGGÉRÉS:
// ═══════════════════════════════════════════════════════════════
// 📚 = Livres/Études
// 🎓 = Diplôme
// 🧭 = Orientation
// 💼 = Travail/Emploi
// 🏠 = Logement
// 💰 = Argent/Financement
// 📝 = Articles/Documents
// 🛂 = Visa/Démarches
// 🍽️  = Nourriture
// 🎉 = Événements

// ═══════════════════════════════════════════════════════════════
// EXEMPLE COMPLET:
// ═══════════════════════════════════════════════════════════════
/*
{
  id: 9,
  title: "5 conseils pour réussir vos premiers mois en France",
  excerpt: "Découvrez comment intégrer la culture française et vous faire des amis rapidement.",
  author: "Équipe Étudiante Solidaire",
  date: "2025-11-06",
  category: "Vie étudiante",
  image: "🇫🇷",
  views: 0,
  comments: 0,
  readTime: "4 min",
  tags: ["Intégration", "France", "Conseils", "Vie sociale"],
  sections: [
    {
      heading: "1) Apprendre l'étiquette française",
      paragraphs: [
        "Les Français ont un certain respect pour les protocoles sociaux.",
        "Voici les bases pour bien démarrer..."
      ],
      bullets: [
        "Dire 'Bonjour' et 'Au revoir' systématiquement",
        "Éviter les sujets trop personnels au premier abord",
        "Respecter les heures de silence"
      ]
    },
    {
      heading: "2) Où trouver une communauté?",
      bullets: [
        "Les clubs étudiants de l'université",
        "Meetup.com (groupes locaux)",
        "Les événements de la ville"
      ]
    }
  ]
}
*/

// ═══════════════════════════════════════════════════════════════
// HOW IT WORKS TECHNIQUEMENT:
// ═══════════════════════════════════════════════════════════════
// 1. Tu ajoutes un objet dans blogArticles[]
// 2. Blog.jsx utilise le hook useBlogData()
// 3. useBlogData() importe blogArticles depuis /data/blogArticles.js
// 4. Il filtre, trie, et calcule les catégories AUTOMATIQUEMENT
// 5. Blog.jsx reçoit: articles, popular, categories, total
// 6. Le composant se redessine avec le nouvel article
// C'est tout! 🎉


// ═══════════════════════════════════════════════════════════════
// STRUCTURE DES DOSSIERS:
// ═══════════════════════════════════════════════════════════════
/*
src/
├── components/
│   ├── Blog.jsx              (utilis blogArticles + useBlogData)
│   ├── BlogPost.jsx          (affichage d'un article)
│   ├── BlogEditor.jsx        (éditeur - à refactoriser)
│   └── blog/
│       └── useBlogData.js    (logique: filtrage, tri, catégories)
│
├── data/
│   └── blogArticles.js       ← 📝 AJOUTE TES ARTICLES ICI!
│
└── ... autres fichiers ...
*/
