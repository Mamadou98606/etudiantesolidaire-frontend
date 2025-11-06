/**
 * 📋 TEMPLATE PRÊT À COPIER/COLLER
 * 
 * Pour ajouter un nouvel article, copie ceci dans blogArticles.js
 * et complète les [ ] avec tes informations
 */

// ⬇️ COPIE CECI ET METS-LE DANS src/data/blogArticles.js ⬇️

{
  id: 9,                                    // ← CHANGE en 9, 10, 11, etc
  title: "[Titre de ton article]",          // ← OBLIGATOIRE
  excerpt: "[Résumé court: 1-2 phrases]",   // ← OBLIGATOIRE
  author: "[Ton nom ou Équipe]",
  date: "[2025-11-06]",                     // ← Format YYYY-MM-DD
  category: "[Orientation]",                // ← Voir les options ci-dessous
  image: "[🎓]",                            // ← Un emoji
  views: 0,
  comments: 0,
  readTime: "[5 min]",                      // ← Estimé
  tags: [                                   // ← 3-5 tags max
    "[Tag 1]",
    "[Tag 2]",
    "[Tag 3]"
  ],
  sections: [                               // ← Structure de l'article
    {
      heading: "[Titre section 1]",
      paragraphs: [                         // ← Optionnel
        "[Paragraphe long...]",
        "[Paragraphe 2...]"
      ],
      // OU bullets: ["Point 1", "Point 2"]
    },
    {
      heading: "[Titre section 2]",
      bullets: [                            // ← Optionnel
        "[Conseil 1]",
        "[Conseil 2]",
        "[Conseil 3]"
      ]
    }
  ]
}

// ═══════════════════════════════════════════════════════════════
// CATÉGORIES VALIDES:
// ═══════════════════════════════════════════════════════════════
// "Orientation"
// "Démarches"
// "Vie étudiante"
// "Emploi"
// "Financement"
// "Culture"

// ═══════════════════════════════════════════════════════════════
// INSTRUCTIONS D'INSERTION:
// ═══════════════════════════════════════════════════════════════
// 1. Ouvre src/data/blogArticles.js
// 2. Va à la fin du tableau blogArticles
// 3. Ajoute une virgule après le dernier article
// 4. Copie ce template et complète les [ ]
// 5. SAUVEGARDE (Ctrl+S)
// 6. L'article apparaît automatiquement dans le blog! 🎉

// ═══════════════════════════════════════════════════════════════
// EXEMPLE RÉEL COMPLÉTÉ:
// ═══════════════════════════════════════════════════════════════

/*
{
  id: 9,
  title: "Comment trouver un logement en France: guide complet",
  excerpt: "Découvrez les meilleures plateformes et stratégies pour trouver un logement étudiant en France.",
  author: "Claire Martin",
  date: "2025-11-06",
  category: "Vie étudiante",
  image: "🏠",
  views: 0,
  comments: 0,
  readTime: "7 min",
  tags: ["Logement", "Conseils pratiques", "France"],
  sections: [
    {
      heading: "1) Les meilleures plateformes",
      paragraphs: [
        "Il existe plusieurs sites réputés pour trouver un logement en France.",
        "Voici les incontournables pour les étudiants..."
      ],
      bullets: [
        "SeLoger.com - Plus grand site français de petites annonces immobilières",
        "LeBonCoin.fr - Annonces classées généralistes",
        "PAD.fr - Immobilier géré numériquement",
        "Housing Anywhere - Dédié aux étudiants"
      ]
    },
    {
      heading: "2) Les éléments clés d'une bonne recherche",
      bullets: [
        "Budget réaliste (600-900€ pour logement + chambre)",
        "Location proche des transports/université",
        "Visiter avant de payer un dépôt",
        "Vérifier le contrat de bail attentivement"
      ]
    },
    {
      heading: "3) Les pièges à éviter",
      bullets: [
        "Payer sans visite physique",
        "Ignorer les frais d'agence et garanties",
        "Oublier de prendre assurance habitation",
        "Ne pas vérifier l'état des lieux d'entrée"
      ]
    }
  ]
}
*/
