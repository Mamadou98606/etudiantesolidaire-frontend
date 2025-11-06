/**
 * 📝 Toutes les données des témoignages
 *
 * Pour AJOUTER UN TÉMOIGNAGE:
 * 1. Copier le template ci-dessous
 * 2. Remplir les champs (nom, temoignage, etc)
 * 3. C'est tout! Le témoignage apparaîtra automatiquement
 *
 * Catégories: master, licence, bts, cap, titre, doctorat
 * Note: 1-5 stars
 */

export const temoignagesData = [
  {
    id: 1,
    nom: "Aminata K.",
    pays: "Sénégal",
    formation: "Master Marketing Digital",
    universite: "Université Paris-Dauphine",
    annee: "2023",
    note: 5,
    categorie: "master",
    photo: "👩🏾‍🎓",
    temoignage: "Grâce à etudiantesolidaire, j'ai pu naviguer facilement dans le système universitaire français. L'accompagnement pour les démarches administratives a été précieux. Aujourd'hui, je travaille dans une agence de communication parisienne !",
    points_forts: [
      "Accompagnement personnalisé",
      "Aide pour le logement",
      "Préparation aux entretiens"
    ]
  },
  {
    id: 2,
    nom: "Mohamed B.",
    pays: "Maroc",
    formation: "BTS Commerce International",
    universite: "Lycée Jean-Baptiste Say",
    annee: "2024",
    note: 5,
    categorie: "bts",
    photo: "👨🏽‍🎓",
    temoignage: "Le processus d'orientation m'a permis de choisir la formation parfaite pour mon projet professionnel. Les conseils pour Parcoursup ont été déterminants. Je recommande vivement !",
    points_forts: [
      "Orientation claire",
      "Suivi Parcoursup",
      "Conseils pratiques"
    ]
  },
  {
    id: 3,
    nom: "Fatou D.",
    pays: "Côte d'Ivoire",
    formation: "Licence Psychologie",
    universite: "Université Paris 8",
    annee: "2023",
    note: 5,
    categorie: "licence",
    photo: "👩🏿‍🎓",
    temoignage: "L'équipe m'a aidée à comprendre le système de santé français et à m'intégrer socialement. Les ateliers sur la vie étudiante ont été très utiles pour créer des liens.",
    points_forts: [
      "Intégration sociale",
      "Aide santé",
      "Ateliers pratiques"
    ]
  },
  {
    id: 4,
    nom: "Ibrahim S.",
    pays: "Mali",
    formation: "CAP Électricien",
    universite: "CFA du Bâtiment",
    annee: "2024",
    note: 4,
    categorie: "cap",
    photo: "👨🏾‍🔧",
    temoignage: "Même pour un CAP, l'accompagnement a été excellent. J'ai trouvé une entreprise pour mon apprentissage rapidement grâce aux conseils pour la recherche d'emploi.",
    points_forts: [
      "Recherche apprentissage",
      "CV professionnel",
      "Préparation entretiens"
    ]
  },
  {
    id: 5,
    nom: "Aïcha M.",
    pays: "Tunisie",
    formation: "Master Ingénierie",
    universite: "École Centrale Paris",
    annee: "2023",
    note: 5,
    categorie: "master",
    photo: "👩🏽‍💻",
    temoignage: "L'aide pour les démarches de visa et les premières semaines en France a été cruciale. Aujourd'hui ingénieure dans une startup tech, je suis reconnaissante pour cet accompagnement.",
    points_forts: [
      "Démarches visa",
      "Accueil en France",
      "Réseau professionnel"
    ]
  },
  {
    id: 6,
    nom: "Ousmane T.",
    pays: "Burkina Faso",
    formation: "Titre Pro Développeur Web",
    universite: "AFPA",
    annee: "2024",
    note: 5,
    categorie: "titre",
    photo: "👨🏿‍💻",
    temoignage: "La reconversion professionnelle n'a pas été facile, mais avec le soutien d'etudiantesolidaire, j'ai réussi ma formation et trouvé un emploi en développement web en 3 mois !",
    points_forts: [
      "Reconversion réussie",
      "Formation intensive",
      "Insertion rapide"
    ]
  }
]

/**
 * ✨ TEMPLATE POUR AJOUTER UN TÉMOIGNAGE
 *
 * Copiez ceci et complétez les champs:
 *
 * {
 *   id: 7,                              // Numéro unique (id max + 1)
 *   nom: "Prénom N.",                   // Nom avec initiale du prénom
 *   pays: "Pays d'origine",
 *   formation: "Nom de la formation",
 *   universite: "Établissement",
 *   annee: "2024",
 *   note: 5,                            // 1-5 stars
 *   categorie: "master",                // master, licence, bts, cap, titre, doctorat
 *   photo: "👩🎓",                     // Un emoji au choix
 *   temoignage: "Votre histoire ici (3-5 phrases max)...",
 *   points_forts: [
 *     "Point 1",
 *     "Point 2",
 *     "Point 3"
 *   ]
 * }
 */
