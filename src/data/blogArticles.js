/**
 * 📝 Toutes les données des articles blog
 *
 * Pour AJOUTER UN ARTICLE:
 * 1. Copier le template ci-dessous
 * 2. Remplir les champs (title, excerpt, author, etc)
 * 3. C'est tout! L'article apparaîtra automatiquement dans le blog
 *
 * Format section:
 * {
 *   heading: "Titre de la section",
 *   paragraphs: ["Paragraphe 1", "Paragraphe 2"],  // optionnel
 *   bullets: ["Point 1", "Point 2"]                 // optionnel
 * }
 */

export const blogArticles = [
  {
    id: 8,
    title: "Étudier en France: le guide express pour bien démarrer (2025)",
    excerpt: "Choisir sa formation, préparer ses dossiers, éviter les pièges administratifs: les clés pour réussir votre arrivée.",
    author: "Équipe Étudiante Solidaire",
    date: "2025-09-01",
    category: "Orientation",
    image: "🧭",
    views: 0,
    comments: 0,
    readTime: "6 min",
    tags: ["Orientation", "Parcoursup", "Dossier"],
    sections: [
      {
        heading: "1) Clarifier son projet",
        paragraphs: [
          "Définissez vos objectifs: diplôme visé, métier ciblé, contraintes de budget et de localisation.",
          "Utilisez un tableau simple pour comparer 3 formations (admission, coûts, débouchés)."
        ]
      },
      {
        heading: "2) Choisir la bonne voie",
        bullets: [
          "BTS: professionnalisant, insertion rapide, 2 ans",
          "Licence: bases solides, poursuite en Master",
          "Titres pro: reconversion ciblée, rythme rapide"
        ]
      },
      {
        heading: "3) Construire un dossier solide",
        bullets: [
          "CV clair (1 page) + Lettre adaptée à chaque formation",
          "Pièces scannées en PDF (notes, diplômes, identité)",
          "Projet motivé cohérent (5–10 lignes)"
        ]
      },
      {
        heading: "4) Les pièges à éviter",
        bullets: [
          "Attendre la dernière minute pour les démarches",
          "CV trop long ou non adapté au format français",
          "Oublier de vérifier les prérequis exacts"
        ]
      },
      {
        heading: "5) Checklist de départ",
        bullets: [
          "Créer un dossier cloud (PDF nommés)",
          "Lister 5 formations + dates limites",
          "Bloquer 2 créneaux/semaine pour candidater"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Étudiante Solidaire : votre guide de A à Z pour réussir vos études en France",
    excerpt: "Tout-en-un : orientation, démarches, logement, emploi et conseils pratiques — avec un accompagnement humain et gratuit.",
    author: "Équipe Étudiante Solidaire",
    date: "2025-08-15",
    category: "Vie étudiante",
    image: "🎓",
    views: 0,
    comments: 0,
    readTime: "7 min",
    tags: ["Étudiante Solidaire", "Orientation", "Démarches", "Vie étudiante", "Emploi"],
    sections: [
      {
        heading: "Pourquoi Étudiante Solidaire ?",
        paragraphs: [
          "Arriver en France pour étudier, c'est excitant… et parfois déroutant. Étudiante Solidaire enlève le stress inutile et vous donne un chemin clair, pas à pas."
        ],
        bullets: [
          "Des informations fiables et à jour, réunies au même endroit",
          "Des parcours guidés (orientation, démarches, vie en France, emploi)",
          "Un accompagnement humain et gratuit pour démarrer sereinement"
        ]
      },
      {
        heading: "Ce que vous trouverez sur la plateforme",
        bullets: [
          "Orientation: diplômes, choix de formation, dossiers, calendrier",
          "Démarches: visa étudiant, VLS-TS, titre de séjour, travail",
          "Vivre en France: logement, santé, transport, intégration",
          "Travailler: job étudiant, stage, premier emploi, secteurs porteurs",
          "Outils: checklists, rappels, RDV 30 min, suivi de progression"
        ]
      },
      {
        heading: "Comment commencer ?",
        bullets: [
          "Créez votre compte (gratuit) en 1 minute",
          "Complétez rapidement votre profil (objectif, pays, niveau)",
          "Suivez le parcours recommandé (orientation → démarches → installation)",
          "Prenez un rendez-vous si besoin d'un coup de pouce"
        ]
      },
      {
        heading: "3 conseils express de l'équipe",
        bullets: [
          "Anticipez VLS-TS et logement: commencez tôt",
          "Centralisez vos documents (PDF) dans un cloud",
          "Soignez votre français écrit (CV/lettres)"
        ]
      },
      {
        heading: "Questions fréquentes",
        paragraphs: [
          "Q: L'accompagnement est-il payant ? R: Le premier RDV (30 min) est gratuit.",
          "Q: Puis-je travailler pendant mes études ? R: Oui, avec des limites annuelles.",
          "Q: Comment éviter les retards ? R: Checklists + rappels d'échéances."
        ]
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Étudier en France, c'est une aventure extraordinaire. Avec Étudiante Solidaire, vous avez un plan, des ressources concrètes, et une équipe à vos côtés."
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Guide complet Parcoursup 2024 : Dates et stratégies",
    excerpt: "Tout ce que vous devez savoir sur Parcoursup 2024, les dates importantes et nos conseils pour maximiser vos chances d'admission.",
    content: "Parcoursup est la plateforme nationale de préinscription en première année de l'enseignement supérieur en France...",
    author: "Marie Dubois",
    date: "2024-01-15",
    category: "Orientation",
    image: "📚",
    views: 1250,
    comments: 23,
    readTime: "8 min",
    tags: ["Parcoursup", "Orientation", "Études supérieures"]
  },
  {
    id: 2,
    title: "Visa étudiant 2024 : Nouvelles procédures simplifiées",
    excerpt: "Les dernières modifications des procédures de visa étudiant et comment optimiser votre dossier pour une réponse rapide.",
    content: "Les procédures de visa étudiant ont été simplifiées en 2024. Voici tout ce que vous devez savoir...",
    author: "Ahmed Benali",
    date: "2024-01-10",
    category: "Démarches",
    image: "🛂",
    views: 980,
    comments: 15,
    readTime: "6 min",
    tags: ["Visa", "Démarches", "Immigration"]
  }
]

/**
 * ✨ TEMPLATE POUR AJOUTER UN NOUVEL ARTICLE
 *
 * Copiez ceci et complétez les champs:
 *
 * {
 *   id: 9,                              // Numéro unique (id max + 1)
 *   title: "Titre de l'article",
 *   excerpt: "Résumé court (1-2 phrases)",
 *   author: "Votre nom ou 'Équipe Étudiante Solidaire'",
 *   date: "2025-11-06",                // Aujourd'hui
 *   category: "Orientation",           // Orientation, Démarches, Vie étudiante, Emploi, Financement, Culture
 *   image: "🎓",                       // Emoji au choix
 *   views: 0,
 *   comments: 0,
 *   readTime: "5 min",                 // Estimé
 *   tags: ["Tag1", "Tag2"],
 *   sections: [
 *     {
 *       heading: "Section 1",
 *       paragraphs: ["Texte long...", "Texte long..."],  // optionnel
 *       bullets: ["Point 1", "Point 2"]                   // optionnel
 *     }
 *   ]
 * }
 */
