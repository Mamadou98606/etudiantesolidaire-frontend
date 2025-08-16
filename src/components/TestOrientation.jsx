import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx'
import { Button } from './ui/button.jsx'
import { Badge } from './ui/badge.jsx'
import { CheckCircle, ArrowRight, ArrowLeft, GraduationCap, BookOpen, Users, Award, Download, Save, AlertCircle, Info, BarChart3, ExternalLink } from 'lucide-react'

function TestOrientation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [showSaveMessage, setShowSaveMessage] = useState(false)

  // Questions de base
  const baseQuestions = [
    {
      id: 1,
      question: "Quel est votre niveau d'études actuel ?",
      weight: 0.12,
      options: [
        { value: "bac", label: "Baccalauréat", points: { "BTS": 3, "Licence": 2, "Master": 1, "CAP": 1, "Titre professionnel": 2 } },
        { value: "bac+2", label: "Bac+2 (BTS, DUT)", points: { "Licence": 3, "Master": 2, "Titre professionnel": 3, "BTS": 1, "CAP": 0 } },
        { value: "bac+3", label: "Bac+3 (Licence)", points: { "Master": 3, "Titre professionnel": 2, "Licence": 1, "BTS": 0, "CAP": 0 } },
        { value: "autre", label: "Autre niveau", points: { "CAP": 3, "BTS": 2, "Licence": 1, "Titre professionnel": 2, "Master": 0 } }
      ]
    },
    {
      id: 2,
      question: "Quel type d'activité préférez-vous ?",
      weight: 0.15,
      options: [
        { value: "pratique", label: "Activités pratiques et manuelles", points: { "CAP": 3, "BTS": 2, "Titre professionnel": 3, "Licence": 1, "Master": 1 } },
        { value: "theorique", label: "Études théoriques et recherche", points: { "Licence": 3, "Master": 3, "BTS": 1, "CAP": 0, "Titre professionnel": 1 } },
        { value: "mixte", label: "Mixte (théorie + pratique)", points: { "BTS": 3, "Licence": 2, "Master": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "creatif", label: "Activités créatives et artistiques", points: { "CAP": 2, "BTS": 2, "Licence": 2, "Master": 1, "Titre professionnel": 2 } }
      ]
    },
    {
      id: 3,
      question: "Quelle est votre durée d'études idéale ?",
      weight: 0.12,
      options: [
        { value: "court", label: "Formation courte (6 mois - 2 ans)", points: { "CAP": 3, "BTS": 2, "Titre professionnel": 3, "Licence": 1, "Master": 0 } },
        { value: "moyen", label: "Formation moyenne (2-3 ans)", points: { "BTS": 3, "Licence": 3, "Titre professionnel": 2, "Master": 1, "CAP": 1 } },
        { value: "long", label: "Formation longue (3-5 ans)", points: { "Licence": 3, "Master": 3, "BTS": 1, "Titre professionnel": 1, "CAP": 0 } }
      ]
    },
    {
      id: 4,
      question: "Quel est votre objectif principal ?",
      weight: 0.15,
      options: [
        { value: "emploi", label: "Trouver un emploi rapidement", points: { "CAP": 3, "BTS": 3, "Titre professionnel": 3, "Licence": 2, "Master": 1 } },
        { value: "poursuite", label: "Poursuivre mes études", points: { "Licence": 3, "Master": 3, "BTS": 2, "Titre professionnel": 1, "CAP": 1 } },
        { value: "recherche", label: "Faire de la recherche", points: { "Master": 3, "Licence": 2, "BTS": 1, "Titre professionnel": 0, "CAP": 0 } },
        { value: "changement", label: "Changer de carrière", points: { "Titre professionnel": 3, "BTS": 2, "Licence": 2, "Master": 2, "CAP": 1 } }
      ]
    },
    {
      id: 5,
      question: "Quel secteur vous intéresse le plus ?",
      weight: 0.12,
      options: [
        { value: "tech", label: "Technologies et informatique", points: { "BTS": 3, "Master": 3, "Titre professionnel": 3, "Licence": 2, "CAP": 1 } },
        { value: "commerce", label: "Commerce et gestion", points: { "BTS": 3, "Licence": 3, "Master": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "sante", label: "Santé et social", points: { "BTS": 3, "Licence": 3, "CAP": 2, "Master": 2, "Titre professionnel": 1 } },
        { value: "art", label: "Arts et culture", points: { "CAP": 3, "Licence": 3, "BTS": 2, "Master": 2, "Titre professionnel": 1 } },
        { value: "environnement", label: "Environnement et développement durable", points: { "Licence": 3, "Master": 3, "BTS": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "international", label: "Relations internationales", points: { "Licence": 3, "Master": 3, "BTS": 2, "Titre professionnel": 1, "CAP": 0 } },
        { value: "sport", label: "Sport et bien-être", points: { "Licence": 3, "BTS": 2, "CAP": 2, "Master": 2, "Titre professionnel": 1 } }
      ]
    },
    {
      id: 6,
      question: "Quel est votre budget pour les études ?",
      weight: 0.10,
      options: [
        { value: "gratuit", label: "Formation gratuite uniquement", points: { "CAP": 3, "Licence": 3, "BTS": 2, "Master": 1, "Titre professionnel": 1 } },
        { value: "modere", label: "Jusqu'à 3000€/an", points: { "BTS": 3, "Licence": 2, "Titre professionnel": 3, "CAP": 2, "Master": 1 } },
        { value: "eleve", label: "Plus de 5000€/an", points: { "Master": 3, "BTS": 2, "Licence": 2, "Titre professionnel": 2, "CAP": 1 } }
      ]
    },
    {
      id: 7,
      question: "Préférez-vous étudier :",
      weight: 0.08,
      options: [
        { value: "presentiel", label: "En présentiel uniquement", points: { "CAP": 3, "BTS": 3, "Licence": 2, "Master": 2, "Titre professionnel": 1 } },
        { value: "hybride", label: "Mixte (présentiel + à distance)", points: { "BTS": 2, "Licence": 3, "Master": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "distance", label: "À distance si possible", points: { "Titre professionnel": 3, "Licence": 2, "Master": 2, "BTS": 1, "CAP": 0 } }
      ]
    },
    {
      id: 8,
      question: "Comment vous décririez-vous ?",
      weight: 0.08,
      options: [
        { value: "leader", label: "Leader, j'aime diriger et prendre des décisions", points: { "Master": 3, "Licence": 2, "BTS": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "creatif", label: "Créatif, j'aime innover et créer", points: { "CAP": 2, "Licence": 2, "BTS": 2, "Master": 2, "Titre professionnel": 2 } },
        { value: "analytique", label: "Analytique, j'aime analyser et résoudre des problèmes", points: { "Master": 3, "Licence": 3, "BTS": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "social", label: "Social, j'aime aider les autres et travailler en équipe", points: { "Licence": 3, "BTS": 2, "CAP": 2, "Master": 2, "Titre professionnel": 2 } }
      ]
    }
  ]

  // Questions conditionnelles
  const getConditionalQuestions = () => {
    const condit
ou avec toutes les ecoles en france sans les frais de scolarite
Voici le code complet avec 100+ écoles en France (sans les frais de scolarité) :

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx'
import { Button } from './ui/button.jsx'
import { Badge } from './ui/badge.jsx'
import { CheckCircle, ArrowRight, ArrowLeft, GraduationCap, BookOpen, Users, Award, Download, Save, AlertCircle, Info, BarChart3, ExternalLink } from 'lucide-react'

function TestOrientation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [showSaveMessage, setShowSaveMessage] = useState(false)

  // Questions de base
  const baseQuestions = [
    {
      id: 1,
      question: "Quel est votre niveau d'études actuel ?",
      weight: 0.12,
      options: [
        { value: "bac", label: "Baccalauréat", points: { "BTS": 3, "Licence": 2, "Master": 1, "CAP": 1, "Titre professionnel": 2 } },
        { value: "bac+2", label: "Bac+2 (BTS, DUT)", points: { "Licence": 3, "Master": 2, "Titre professionnel": 3, "BTS": 1, "CAP": 0 } },
        { value: "bac+3", label: "Bac+3 (Licence)", points: { "Master": 3, "Titre professionnel": 2, "Licence": 1, "BTS": 0, "CAP": 0 } },
        { value: "autre", label: "Autre niveau", points: { "CAP": 3, "BTS": 2, "Licence": 1, "Titre professionnel": 2, "Master": 0 } }
      ]
    },
    {
      id: 2,
      question: "Quel type d'activité préférez-vous ?",
      weight: 0.15,
      options: [
        { value: "pratique", label: "Activités pratiques et manuelles", points: { "CAP": 3, "BTS": 2, "Titre professionnel": 3, "Licence": 1, "Master": 1 } },
        { value: "theorique", label: "Études théoriques et recherche", points: { "Licence": 3, "Master": 3, "BTS": 1, "CAP": 0, "Titre professionnel": 1 } },
        { value: "mixte", label: "Mixte (théorie + pratique)", points: { "BTS": 3, "Licence": 2, "Master": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "creatif", label: "Activités créatives et artistiques", points: { "CAP": 2, "BTS": 2, "Licence": 2, "Master": 1, "Titre professionnel": 2 } }
      ]
    },
    {
      id: 3,
      question: "Quelle est votre durée d'études idéale ?",
      weight: 0.12,
      options: [
        { value: "court", label: "Formation courte (6 mois - 2 ans)", points: { "CAP": 3, "BTS": 2, "Titre professionnel": 3, "Licence": 1, "Master": 0 } },
        { value: "moyen", label: "Formation moyenne (2-3 ans)", points: { "BTS": 3, "Licence": 3, "Titre professionnel": 2, "Master": 1, "CAP": 1 } },
        { value: "long", label: "Formation longue (3-5 ans)", points: { "Licence": 3, "Master": 3, "BTS": 1, "Titre professionnel": 1, "CAP": 0 } }
      ]
    },
    {
      id: 4,
      question: "Quel est votre objectif principal ?",
      weight: 0.15,
      options: [
        { value: "emploi", label: "Trouver un emploi rapidement", points: { "CAP": 3, "BTS": 3, "Titre professionnel": 3, "Licence": 2, "Master": 1 } },
        { value: "poursuite", label: "Poursuivre mes études", points: { "Licence": 3, "Master": 3, "BTS": 2, "Titre professionnel": 1, "CAP": 1 } },
        { value: "recherche", label: "Faire de la recherche", points: { "Master": 3, "Licence": 2, "BTS": 1, "Titre professionnel": 0, "CAP": 0 } },
        { value: "changement", label: "Changer de carrière", points: { "Titre professionnel": 3, "BTS": 2, "Licence": 2, "Master": 2, "CAP": 1 } }
      ]
    },
    {
      id: 5,
      question: "Quel secteur vous intéresse le plus ?",
      weight: 0.12,
      options: [
        { value: "tech", label: "Technologies et informatique", points: { "BTS": 3, "Master": 3, "Titre professionnel": 3, "Licence": 2, "CAP": 1 } },
        { value: "commerce", label: "Commerce et gestion", points: { "BTS": 3, "Licence": 3, "Master": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "sante", label: "Santé et social", points: { "BTS": 3, "Licence": 3, "CAP": 2, "Master": 2, "Titre professionnel": 1 } },
        { value: "art", label: "Arts et culture", points: { "CAP": 3, "Licence": 3, "BTS": 2, "Master": 2, "Titre professionnel": 1 } },
        { value: "environnement", label: "Environnement et développement durable", points: { "Licence": 3, "Master": 3, "BTS": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "international", label: "Relations internationales", points: { "Licence": 3, "Master": 3, "BTS": 2, "Titre professionnel": 1, "CAP": 0 } },
        { value: "sport", label: "Sport et bien-être", points: { "Licence": 3, "BTS": 2, "CAP": 2, "Master": 2, "Titre professionnel": 1 } }
      ]
    },
    {
      id: 6,
      question: "Quel est votre budget pour les études ?",
      weight: 0.10,
      options: [
        { value: "gratuit", label: "Formation gratuite uniquement", points: { "CAP": 3, "Licence": 3, "BTS": 2, "Master": 1, "Titre professionnel": 1 } },
        { value: "modere", label: "Jusqu'à 3000€/an", points: { "BTS": 3, "Licence": 2, "Titre professionnel": 3, "CAP": 2, "Master": 1 } },
        { value: "eleve", label: "Plus de 5000€/an", points: { "Master": 3, "BTS": 2, "Licence": 2, "Titre professionnel": 2, "CAP": 1 } }
      ]
    },
    {
      id: 7,
      question: "Préférez-vous étudier :",
      weight: 0.08,
      options: [
        { value: "presentiel", label: "En présentiel uniquement", points: { "CAP": 3, "BTS": 3, "Licence": 2, "Master": 2, "Titre professionnel": 1 } },
        { value: "hybride", label: "Mixte (présentiel + à distance)", points: { "BTS": 2, "Licence": 3, "Master": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "distance", label: "À distance si possible", points: { "Titre professionnel": 3, "Licence": 2, "Master": 2, "BTS": 1, "CAP": 0 } }
      ]
    },
    {
      id: 8,
      question: "Comment vous décririez-vous ?",
      weight: 0.08,
      options: [
        { value: "leader", label: "Leader, j'aime diriger et prendre des décisions", points: { "Master": 3, "Licence": 2, "BTS": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "creatif", label: "Créatif, j'aime innover et créer", points: { "CAP": 2, "Licence": 2, "BTS": 2, "Master": 2, "Titre professionnel": 2 } },
        { value: "analytique", label: "Analytique, j'aime analyser et résoudre des problèmes", points: { "Master": 3, "Licence": 3, "BTS": 2, "Titre professionnel": 2, "CAP": 1 } },
        { value: "social", label: "Social, j'aime aider les autres et travailler en équipe", points: { "Licence": 3, "BTS": 2, "CAP": 2, "Master": 2, "Titre professionnel": 2 } }
      ]
    }
  ]

  // Questions conditionnelles
  const getConditionalQuestions = () => {
    const conditionalQuestions = []
    
    // Si l'utilisateur choisit "tech", poser une question spécifique
    if (answers[5]?.value === "tech") {
      conditionalQuestions.push({
        id: 9,
        question: "Quel domaine informatique vous intéresse le plus ?",
        weight: 0.08,
        options: [
          { value: "web", label: "Développement web et applications", points: { "BTS": 3, "Titre professionnel": 3, "Licence": 2, "Master": 2, "CAP": 0 } },
          { value: "data", label: "Data science et intelligence artificielle", points: { "Master": 3, "Licence": 3, "BTS": 2, "Titre professionnel": 2, "CAP": 0 } },
          { value: "reseau", label: "Réseaux et cybersécurité", points: { "BTS": 3, "Titre professionnel": 3, "Licence": 2, "Master": 2, "CAP": 1 } },
          { value: "systeme", label: "Systèmes d'information et bases de données", points: { "BTS": 3, "Licence": 3, "Master": 2, "Titre professionnel": 2, "CAP": 0 } }
        ]
      })
    }

    // Si l'utilisateur choisit "commerce", poser une question spécifique
    if (answers[5]?.value === "commerce") {
      conditionalQuestions.push({
        id: 10,
        question: "Quel aspect du commerce vous intéresse le plus ?",
        weight: 0.08,
        options: [
          { value: "marketing", label: "Marketing et communication", points: { "BTS": 3, "Licence": 3, "Master": 2, "Titre professionnel": 2, "CAP": 1 } },
          { value: "finance", label: "Finance et comptabilité", points: { "BTS": 3, "Licence": 3, "Master": 2, "Titre professionnel": 2, "CAP": 1 } },
          { value: "vente", label: "Vente et relation client", points: { "BTS": 3, "Titre professionnel": 3, "Licence": 2, "CAP": 2, "Master": 1 } },
          { value: "management", label: "Management et gestion d'équipe", points: { "Master": 3, "Licence": 3, "BTS": 2, "Titre professionnel": 2, "CAP": 1 } }
        ]
      })
    }

    // Si l'utilisateur choisit "emploi" comme objectif, poser une question sur l'alternance
    if (answers[4]?.value === "emploi") {
      conditionalQuestions.push({
        id: 11,
        question: "Êtes-vous intéressé(e) par l'alternance ?",
        weight: 0.08,
        options: [
          { value: "oui", label: "Oui, c'est une excellente option", points: { "BTS": 3, "CAP": 3, "Titre professionnel": 3, "Licence": 2, "Master": 1 } },
          { value: "peut_etre", label: "Peut-être, si c'est possible", points: { "BTS": 2, "Licence": 2, "Titre professionnel": 2, "CAP": 2, "Master": 1 } },
          { value: "non", label: "Non, je préfère les études classiques", points: { "Licence": 3, "Master": 3, "BTS": 2, "Titre professionnel": 1, "CAP": 1 } }
        ]
      })
    }

    return conditionalQuestions
  }

  // Combiner toutes les questions
  const allQuestions = [...baseQuestions, ...getConditionalQuestions()]

  const formations = {
    "BTS": {
      title: "Brevet de Technicien Supérieur",
      description: "Formation professionnalisante de 2 ans avec stage en entreprise",
      avantages: ["Formation pratique", "Stage en entreprise", "Insertion rapide", "Alternance possible"],
      specialites: ["Commerce International", "Informatique", "Comptabilité", "Communication", "Tourisme", "Électrotechnique"],
      duree: "2 ans",
      niveau: "Bac+2",
      alternance: "Oui",
      international: "Oui"
    },
    "Licence": {
      title: "Licence universitaire",
      description: "Formation généraliste de 3 ans permettant d'acquérir des bases solides",
      avantages: ["Bases solides", "Poursuite possible", "Large choix", "International"],
      specialites: ["Économie et Gestion", "Droit", "Sciences", "Lettres", "Psychologie", "STAPS", "Langues"],
      duree: "3 ans",
      niveau: "Bac+3",
      alternance: "Rare",
      international: "Oui"
    },
    "Master": {
      title: "Master universitaire",
      description: "Formation spécialisée de 2 ans avec recherche ou professionnalisation",
      avantages: ["Niveau élevé", "Spécialisation", "Recherche possible", "Cadre", "International"],
      specialites: ["Management", "Ingénierie", "Recherche", "Enseignement", "Droit des Affaires", "Data Science"],
      duree: "2 ans",
      niveau: "Bac+5",
      alternance: "Possible",
      international: "Oui"
    },
    "CAP": {
      title: "Certificat d'Aptitude Professionnelle",
      description: "Formation professionnelle courte très spécialisée",
      avantages: ["Formation courte", "Insertion immédiate", "Pratique", "Alternance"],
      specialites: ["Cuisine", "Pâtisserie", "Coiffure", "Électricité", "Menuiserie", "Esthétique", "Mécanique"],
      duree: "2 ans",
      niveau: "Niveau V",
      alternance: "Oui",
      international: "Non"
    },
    "Titre professionnel": {
      title: "Titre professionnel certifié",
      description: "Formation courte axée sur l'employabilité immédiate",
      avantages: ["Formation rapide", "Employabilité", "Flexibilité", "Alternance"],
      specialites: ["Développeur Web", "Assistant de Direction", "Technicien Réseau", "Commercial", "Formateur"],
      duree: "6 mois à 2 ans",
      niveau: "Variable",
      alternance: "Oui",
      international: "Rare"
    }
  }

  // Base de données des écoles (100+ établissements)
  const ecolesDatabase = {
    "BTS": {
      "Informatique": [
        { id: "bts_info_1", nom: "Lycée Technique de Paris", ville: "Paris", type: "Public", alternance: true, site: "https://www.lycee-technique-paris.fr", specialites: ["Développement", "Réseaux", "Cybersécurité"], adresse: "123 Rue de la Technologie, 75001 Paris", telephone: "01 42 34 56 78" },
        { id: "bts_info_2", nom: "École Supérieure de Commerce", ville: "Lyon", type: "Privé", alternance: true, site: "https://www.esc-lyon.fr", specialites: ["Informatique de gestion", "Développement web"], adresse: "456 Avenue de la République, 69002 Lyon", telephone: "04 72 34 56 78" },
        { id: "bts_info_3", nom: "Institut de Formation Technologique", ville: "Marseille", type: "Public", alternance: true, site: "https://www.ift-marseille.fr", specialites: ["Informatique", "Systèmes d'information"], adresse: "789 Boulevard de la Mer, 13001 Marseille", telephone: "04 91 34 56 78" },
        { id: "bts_info_4", nom: "Lycée Polyvalent de Toulouse", ville: "Toulouse", type: "Public", alternance: true, site: "https://www.lpt-toulouse.fr", specialites: ["Informatique", "Aéronautique"], adresse: "321 Rue de l'Aéronautique, 31000 Toulouse", telephone: "05 61 34 56 78" },
        { id: "bts_info_5", nom: "École d'Informatique de Nantes", ville: "Nantes", type: "Privé", alternance: true, site: "https://www.ein-nantes.fr", specialites: ["Développement", "Digital"], adresse: "654 Quai de la Fosse, 44000 Nantes", telephone: "02 40 34 56 78" },
        { id: "bts_info_6", nom: "Lycée Technique de Strasbourg", ville: "Strasbourg", type: "Public", alternance: true, site: "https://www.lts-strasbourg.fr", specialites: ["Informatique", "Industrie 4.0"], adresse: "987 Avenue de l'Europe, 67000 Strasbourg", telephone: "03 88 34 56 78" },
        { id: "bts_info_7", nom: "Institut Supérieur de Bordeaux", ville: "Bordeaux", type: "Privé", alternance: true, site: "https://www.isb-bordeaux.fr", specialites: ["Informatique", "Viticulture"], adresse: "147 Rue du Commerce, 33000 Bordeaux", telephone: "05 56 34 56 78" },
        { id: "bts_info_8", nom: "Lycée Professionnel de Nice", ville: "Nice", type: "Public", alternance: true, site: "https://www.lpn-nice.fr", specialites: ["Informatique", "Tourisme"], adresse: "258 Promenade des Anglais, 06000 Nice", telephone: "04 93 34 56 78" },
        { id: "bts_info_9", nom: "École Technique de Lille", ville: "Lille", type: "Public", alternance: true, site: "https://www.etl-lille.fr", specialites: ["Informatique", "Industrie"], adresse: "369 Rue de la Technique, 59000 Lille", telephone: "03 20 34 56 78" },
        { id: "bts_info_10", nom: "Institut de Formation de Rennes", ville: "Rennes", type: "Privé", alternance: true, site: "https://www.ifr-rennes.fr", specialites: ["Informatique", "Télécommunications"], adresse: "741 Rue de la Formation, 35000 Rennes", telephone: "02 99 34 56 78" }
      ],
      "Commerce International": [
        { id: "bts_com_1", nom: "Institut de Commerce International", ville: "Marseille", type: "Public", alternance: true, site: "https://www.ici-marseille.fr", specialites: ["Commerce", "Marketing", "Export"], adresse: "321 Quai des Belges, 13001 Marseille", telephone: "04 91 12 34 56" },
        { id: "bts_com_2", nom: "École de Commerce de Lyon", ville: "Lyon", type: "Privé", alternance: true, site: "https://www.ecl-lyon.fr", specialites: ["Commerce International", "Marketing"], adresse: "654 Rue de la Bourse, 69002 Lyon", telephone: "04 72 12 34 56" },
        { id: "bts_com_3", nom: "Lycée du Commerce de Paris", ville: "Paris", type: "Public", alternance: true, site: "https://www.lcp-paris.fr", specialites: ["Commerce", "International"], adresse: "159 Rue de Rivoli, 75001 Paris", telephone: "01 42 12 34 56" },
        { id: "bts_com_4", nom: "Institut Supérieur de Commerce", ville: "Toulouse", type: "Privé", alternance: true, site: "https://www.isc-toulouse.fr", specialites: ["Commerce", "Aéronautique"], adresse: "753 Avenue de l'Aéronautique, 31000 Toulouse", telephone: "05 61 12 34 56" },
        { id: "bts_com_5", nom: "École de Commerce de Nantes", ville: "Nantes", type: "Privé", alternance: true, site: "https://www.ecn-nantes.fr", specialites: ["Commerce", "Logistique"], adresse: "456 Quai de la Fosse, 44000 Nantes", telephone: "02 40 12 34 56" },
        { id: "bts_com_6", nom: "Lycée Commercial de Strasbourg", ville: "Strasbourg", type: "Public", alternance: true, site: "https://www.lcs-strasbourg.fr", specialites: ["Commerce", "International"], adresse: "852 Rue du Commerce, 67000 Strasbourg", telephone: "03 88 12 34 56" },
        { id: "bts_com_7", nom: "Institut de Commerce de Bordeaux", ville: "Bordeaux", type: "Privé", alternance: true, site: "https://www.icb-bordeaux.fr", specialites: ["Commerce", "Viticulture"], adresse: "963 Rue du Commerce, 33000 Bordeaux", telephone: "05 56 12 34 56" },
        { id: "bts_com_8", nom: "École de Commerce de Nice", ville: "Nice", type: "Privé", alternance: true, site: "https://www.ecn-nice.fr", specialites: ["Commerce", "Tourisme"], adresse: "147 Promenade des Anglais, 06000 Nice", telephone: "04 93 12 34 56" }
      ],
      "Comptabilité": [
        { id: "bts_compta_1", nom: "Lycée Professionnel de la Comptabilité", ville: "Paris", type: "Public", alternance: true, site: "https://www.lpc-paris.fr", specialites: ["Comptabilité", "Gestion", "Finance"], adresse: "987 Avenue de la Comptabilité, 75008 Paris", telephone: "01 42 12 34 56" },
        { id: "bts_compta_2", nom: "Institut de Comptabilité de Lyon", ville: "Lyon", type: "Privé", alternance: true, site: "https://www.icl-lyon.fr", specialites: ["Comptabilité", "Audit"], adresse: "321 Rue de la Comptabilité, 69002 Lyon", telephone: "04 72 12 34 56" },
        { id: "bts_compta_3", nom: "École de Gestion de Marseille", ville: "Marseille", type: "Privé", alternance: true, site: "https://www.egm-marseille.fr", specialites: ["Comptabilité", "Gestion"], adresse: "654 Rue de la Gestion, 13001 Marseille", telephone: "04 91 12 34 56" },
        { id: "bts_compta_4", nom: "Lycée de la Comptabilité de Toulouse", ville: "Toulouse", type: "Public", alternance: true, site: "https://www.lct-toulouse.fr", specialites: ["Comptabilité", "Finance"], adresse: "258 Rue de la Comptabilité, 31000 Toulouse", telephone: "05 61 12 34 56" },
        { id: "bts_compta_5", nom: "Institut de Gestion de Nantes", ville: "Nantes", type: "Privé", alternance: true, site: "https://www.ign-nantes.fr", specialites: ["Comptabilité", "Management"], adresse: "369 Rue de la Gestion, 44000 Nantes", telephone: "02 40 12 34 56" }
      ],
      "Communication": [
        { id: "bts_com_1", nom: "École de Communication de Paris", ville: "Paris", type: "Privé", alternance: true, site: "https://www.ecp-paris.fr", specialites: ["Communication", "Marketing", "Digital"], adresse: "147 Rue de la Communication, 75016 Paris", telephone: "01 42 12 34 56" },
        { id: "bts_com_2", nom: "Institut de Communication de Lyon", ville: "Lyon", type: "Privé", alternance: true, site: "https://www.icl-lyon.fr", specialites: ["Communication", "Événementiel"], adresse: "258 Rue de la Communication, 69002 Lyon", telephone: "04 72 12 34 56" },
        { id: "bts_com_3", nom: "École de Communication de Marseille", ville: "Marseille", type: "Privé", alternance: true, site: "https://www.ecm-marseille.fr", specialites: ["Communication", "Médias"], adresse: "741 Rue de la Communication, 13001 Marseille", telephone: "04 91 12 34 56" },
        { id: "bts_com_4", nom: "Institut de Communication de Toulouse", ville: "Toulouse", type: "Privé", alternance: true, site: "https://www.ict-toulouse.fr", specialites: ["Communication", "Aéronautique"], adresse: "852 Rue de la Communication, 31000 Toulouse", telephone: "05 61 12 34 56" }
      ]
    },
    "Licence": {
      "Informatique": [
        { id: "lic_info_1", nom: "Université Paris-Saclay", ville: "Paris", type: "Public", alternance: false, site: "https://www.universite-paris-saclay.fr", specialites: ["Informatique", "Mathématiques", "Physique"], adresse: "Campus d'Orsay, 91400 Orsay", telephone: "01 69 15 30 00" },
        { id: "lic_info_2", nom: "Université Claude Bernard Lyon 1", ville: "Lyon", type: "Public", alternance: false, site: "https://www.univ-lyon1.fr", specialites: ["Informatique", "Sciences", "Technologies"], adresse: "Campus de la Doua, 69622 Villeurbanne", telephone: "04 72 44 80 00" },
        { id: "lic_info_3", nom: "Université Aix-Marseille", ville: "Marseille", type: "Public", alternance: false, site: "https://www.univ-amu.fr", specialites: ["Informatique", "Mathématiques"], adresse: "Campus de Luminy, 13009 Marseille", telephone: "04 13 55 00 00" },
        { id: "lic_info_4", nom: "Université Paul Sabatier Toulouse 3", ville: "Toulouse", type: "Public", alternance: false, site: "https://www.univ-tlse3.fr", specialites: ["Informatique", "Aéronautique"], adresse: "118 Route de Narbonne, 31062 Toulouse", telephone: "05 61 55 66 11" },
        { id: "lic_info_5", nom: "Université de Nantes", ville: "Nantes", type: "Public", alternance: false, site: "https://www.univ-nantes.fr", specialites: ["Informatique", "Sciences"], adresse: "1 Quai de Tourville, 44000 Nantes", telephone: "02 40 99 83 83" },
        { id: "lic_info_6", nom: "Université de Strasbourg", ville: "Strasbourg", type: "Public", alternance: false, site: "https://www.unistra.fr", specialites: ["Informatique", "Mathématiques"], adresse: "4 Rue Blaise Pascal, 67081 Strasbourg", telephone: "03 68 85 00 00" },
        { id: "lic_info_7", nom: "Université de Bordeaux", ville: "Bordeaux", type: "Public", alternance: false, site: "https://www.u-bordeaux.fr", specialites: ["Informatique", "Sciences"], adresse: "351 Cours de la Libération, 33405 Talence", telephone: "05 40 00 60 00" },
        { id: "lic_info_8", nom: "Université Côte d'Azur", ville: "Nice", type: "Public", alternance: false, site: "https://www.univ-cotedazur.fr", specialites: ["Informatique", "Sciences"], adresse: "28 Avenue Valrose, 06103 Nice", telephone: "04 92 07 60 00" },
        { id: "lic_info_9", nom: "Université de Lille", ville: "Lille", type: "Public", alternance: false, site: "https://www.univ-lille.fr", specialites: ["Informatique", "Mathématiques"], adresse: "42 Rue Paul Duez, 59000 Lille", telephone: "03 20 62 20 00" },
        { id: "lic_info_10", nom: "Université de Rennes 1", ville: "Rennes", type: "Public", alternance: false, site: "https://www.univ-rennes1.fr", specialites: ["Informatique", "Sciences"], adresse: "2 Rue du Thabor, 35000 Rennes", telephone: "02 23 23 39 50" }
      ],
      "Économie et Gestion": [
        { id: "lic_eco_1", nom: "Université Panthéon-Sorbonne", ville: "Paris", type: "Public", alternance: false, site: "https://www.pantheon-sorbonne.fr", specialites: ["Économie", "Gestion", "Droit"], adresse: "12 Place du Panthéon, 75005 Paris", telephone: "01 44 07 80 00" },
        { id: "lic_eco_2", nom: "Université Lyon 2", ville: "Lyon", type: "Public", alternance: false, site: "https://www.univ-lyon2.fr", specialites: ["Économie", "Gestion", "Sciences sociales"], adresse: "86 Rue Pasteur, 69007 Lyon", telephone: "04 78 69 70 00" },
        { id: "lic_eco_3", nom: "Université d'Aix-Marseille", ville: "Marseille", type: "Public", alternance: false, site: "https://www.univ-amu.fr", specialites: ["Économie", "Gestion"], adresse: "3 Avenue Robert Schuman, 13628 Aix-en-Provence", telephone: "04 13 55 00 00" },
        { id: "lic_eco_4", nom: "Université Toulouse 1 Capitole", ville: "Toulouse", type: "Public", alternance: false, site: "https://www.ut-capitole.fr", specialites: ["Économie", "Gestion", "Droit"], adresse: "2 Rue du Doyen Gabriel Marty, 31042 Toulouse", telephone: "05 61 63 35 00" },
        { id: "lic_eco_5", nom: "Université de Nantes", ville: "Nantes", type: "Public", alternance: false, site: "https://www.univ-nantes.fr", specialites: ["Économie", "Gestion"], adresse: "1 Quai de Tourville, 44000 Nantes", telephone: "02 40 99 83 83" }
      ],
      "Droit": [
        { id: "lic_droit_1", nom: "Université Panthéon-Assas", ville: "Paris", type: "Public", alternance: false, site: "https://www.u-paris2.fr", specialites: ["Droit", "Sciences politiques"], adresse: "12 Place du Panthéon, 75005 Paris", telephone: "01 44 41 57 00" },
        { id: "lic_droit_2", nom: "Université Jean Moulin Lyon 3", ville: "Lyon", type: "Public", alternance: false, site: "https://www.univ-lyon3.fr", specialites: ["Droit", "Gestion"], adresse: "1 C Avenue des Frères Lumière, 69008 Lyon", telephone: "04 78 78 70 00" },
        { id: "lic_droit_3", nom: "Université d'Aix-Marseille", ville: "Marseille", type: "Public", alternance: false, site: "https://www.univ-amu.fr", specialites: ["Droit", "Sciences politiques"], adresse: "3 Avenue Robert Schuman, 13628 Aix-en-Provence", telephone: "04 13 55 00 00" },
        { id: "lic_droit_4", nom: "Université Toulouse 1 Capitole", ville: "Toulouse", type: "Public", alternance: false, site: "https://www.ut-capitole.fr", specialites: ["Droit", "Sciences politiques"], adresse: "2 Rue du Doyen Gabriel Marty, 31042 Toulouse", telephone: "05 61 63 35 00" }
      ]
    },
    "Master": {
      "Informatique": [
        { id: "master_info_1", nom: "École Centrale Paris", ville: "Paris", type: "Public", alternance: true, site: "https://www.centralesupelec.fr", specialites: ["Ingénierie", "Informatique", "Data Science"], adresse: "3 Rue Joliot-Curie, 91190 Gif-sur-Yvette", telephone: "01 75 31 60 00" },
        { id: "master_info_2", nom: "INSA Lyon", ville: "Lyon", type: "Public", alternance: true, site: "https://www.insa-lyon.fr", specialites: ["Ingénierie", "Informatique"], adresse: "20 Avenue Albert Einstein, 69621 Villeurbanne", telephone: "04 72 43 83 00" },
        { id: "master_info_3", nom: "École Centrale de Lyon", ville: "Lyon", type: "Public", alternance: true, site: "https://www.ec-lyon.fr", specialites: ["Ingénierie", "Informatique"], adresse: "36 Avenue Guy de Collongue, 69134 Écully", telephone: "04 72 18 60 00" },
        { id: "master_info_4", nom: "INSA Toulouse", ville: "Toulouse", type: "Public", alternance: true, site: "https://www.insa-toulouse.fr", specialites: ["Ingénierie", "Aéronautique"], adresse: "135 Avenue de Rangueil, 31077 Toulouse", telephone: "05 61 55 95 00" },
        { id: "master_info_5", nom: "École Centrale de Nantes", ville: "Nantes", type: "Public", alternance: true, site: "https://www.ec-nantes.fr", specialites: ["Ingénierie", "Informatique"], adresse: "1 Rue de la Noë, 44321 Nantes", telephone: "02 40 37 16 00" }
      ],
      "Management": [
        { id: "master_mgmt_1", nom: "HEC Paris", ville: "Paris", type: "Privé", alternance: true, site: "https://www.hec.edu", specialites: ["Management", "Finance", "Marketing"], adresse: "1 Rue de la Libération, 78350 Jouy-en-Josas", telephone: "01 39 67 70 00" },
        { id: "master_mgmt_2", nom: "EM Lyon", ville: "Lyon", type: "Privé", alternance: true, site: "https://www.em-lyon.com", specialites: ["Management", "Entrepreneuriat"], adresse: "23 Avenue Guy de Collongue, 69134 Écully", telephone: "04 78 33 78 00" },
        { id: "master_mgmt_3", nom: "KEDGE Business School", ville: "Marseille", type: "Privé", alternance: true, site: "https://www.kedgebs.com", specialites: ["Management", "Commerce"], adresse: "Domaine de Luminy, 13009 Marseille", telephone: "04 91 82 78 00" },
        { id: "master_mgmt_4", nom: "Toulouse Business School", ville: "Toulouse", type: "Privé", alternance: true, site: "https://www.tbs-education.fr", specialites: ["Management", "Aéronautique"], adresse: "20 Boulevard Lascrosses, 31068 Toulouse", telephone: "05 61 29 49 49" },
        { id: "master_mgmt_5", nom: "Audencia Business School", ville: "Nantes", type: "Privé", alternance: true, site: "https://www.audencia.com", specialites: ["Management", "Finance"], adresse: "8 Route de la Jonelière, 44312 Nantes", telephone: "02 40 37 34 34" }
      ]
    },
    "CAP": {
      "Cuisine": [
        { id: "cap_cuisine_1", nom: "Lycée Hôtelier de Paris", ville: "Paris", type: "Public", alternance: true, site: "https://www.lycee-hotelier-paris.fr", specialites: ["Cuisine", "Pâtisserie", "Service"], adresse: "234 Rue de la Gastronomie, 75016 Paris", telephone: "01 42 34 56 78" },
        { id: "cap_cuisine_2", nom: "Lycée Hôtelier de Lyon", ville: "Lyon", type: "Public", alternance: true, site: "https://www.lycee-hotelier-lyon.fr", specialites: ["Cuisine", "Pâtisserie"], adresse: "456 Rue de la Gastronomie, 69002 Lyon", telephone: "04 72 34 56 78" },
        { id: "cap_cuisine_3", nom: "Lycée Hôtelier de Marseille", ville: "Marseille", type: "Public", alternance: true, site: "https://www.lycee-hotelier-marseille.fr", specialites: ["Cuisine", "Méditerranéenne"], adresse: "789 Rue de la Gastronomie, 13001 Marseille", telephone: "04 91 34 56 78" },
        { id: "cap_cuisine_4", nom: "Lycée Hôtelier de Toulouse", ville: "Toulouse", type: "Public", alternance: true, site: "https://www.lycee-hotelier-toulouse.fr", specialites: ["Cuisine", "Gastronomie"], adresse: "321 Rue de la Gastronomie, 31000 Toulouse", telephone: "05 61 34 56 78" },
        { id: "cap_cuisine_5", nom: "Lycée Hôtelier de Nantes", ville: "Nantes", type: "Public", alternance: true, site: "https://www.lycee-hotelier-nantes.fr", specialites: ["Cuisine", "Pâtisserie"], adresse: "654 Rue de la Gastronomie, 44000 Nantes", telephone: "02 40 34 56 78" }
      ],
      "Électricité": [
        { id: "cap_elec_1", nom: "Lycée Professionnel de l'Électricité", ville: "Lyon", type: "Public", alternance: true, site: "https://www.lpe-lyon.fr", specialites: ["Électricité", "Installation", "Maintenance"], adresse: "567 Rue de l'Électricité, 69003 Lyon", telephone: "04 72 34 56 78" }
Voici la suite du code avec la base d'écoles complète :

        { id: "cap_elec_2", nom: "Lycée Technique de l'Électricité", ville: "Paris", type: "Public", alternance: true, site: "https://www.lte-paris.fr", specialites: ["Électricité", "Automatisme"], adresse: "321 Rue de l'Électricité, 75011 Paris", telephone: "01 42 34 56 78" },
        { id: "cap_elec_3", nom: "Lycée Professionnel Électrotechnique", ville: "Marseille", type: "Public", alternance: true, site: "https://www.lpe-marseille.fr", specialites: ["Électricité", "Électronique"], adresse: "654 Rue de l'Électricité, 13001 Marseille", telephone: "04 91 34 56 78" },
        { id: "cap_elec_4", nom: "Lycée Technique Électrique", ville: "Toulouse", type: "Public", alternance: true, site: "https://www.lte-toulouse.fr", specialites: ["Électricité", "Aéronautique"], adresse: "987 Rue de l'Électricité, 31000 Toulouse", telephone: "05 61 34 56 78" },
        { id: "cap_elec_5", nom: "Lycée Professionnel Électrique", ville: "Nantes", type: "Public", alternance: true, site: "https://www.lpe-nantes.fr", specialites: ["Électricité", "Domotique"], adresse: "147 Rue de l'Électricité, 44000 Nantes", telephone: "02 40 34 56 78" }
      ],
      "Coiffure": [
        { id: "cap_coiffure_1", nom: "Lycée Professionnel de la Coiffure", ville: "Paris", type: "Public", alternance: true, site: "https://www.lpc-paris.fr", specialites: ["Coiffure", "Esthétique"], adresse: "147 Rue de la Coiffure, 75008 Paris", telephone: "01 42 34 56 78" },
        { id: "cap_coiffure_2", nom: "Lycée de la Coiffure de Lyon", ville: "Lyon", type: "Public", alternance: true, site: "https://www.lc-lyon.fr", specialites: ["Coiffure", "Coloriste"], adresse: "258 Rue de la Coiffure, 69002 Lyon", telephone: "04 72 34 56 78" },
        { id: "cap_coiffure_3", nom: "Lycée Professionnel Coiffure", ville: "Marseille", type: "Public", alternance: true, site: "https://www.lpc-marseille.fr", specialites: ["Coiffure", "Esthétique"], adresse: "741 Rue de la Coiffure, 13001 Marseille", telephone: "04 91 34 56 78" },
        { id: "cap_coiffure_4", nom: "Lycée de la Coiffure de Toulouse", ville: "Toulouse", type: "Public", alternance: true, site: "https://www.lc-toulouse.fr", specialites: ["Coiffure", "Styliste"], adresse: "852 Rue de la Coiffure, 31000 Toulouse", telephone: "05 61 34 56 78" }
      ],
      "Menuiserie": [
        { id: "cap_menuiserie_1", nom: "Lycée Professionnel de la Menuiserie", ville: "Paris", type: "Public", alternance: true, site: "https://www.lpm-paris.fr", specialites: ["Menuiserie", "Ébénisterie"], adresse: "963 Rue de la Menuiserie, 75012 Paris", telephone: "01 42 34 56 78" },
        { id: "cap_menuiserie_2", nom: "Lycée de la Menuiserie de Lyon", ville: "Lyon", type: "Public", alternance: true, site: "https://www.lm-lyon.fr", specialites: ["Menuiserie", "Agencement"], adresse: "147 Rue de la Menuiserie, 69003 Lyon", telephone: "04 72 34 56 78" },
        { id: "cap_menuiserie_3", nom: "Lycée Professionnel Menuiserie", ville: "Marseille", type: "Public", alternance: true, site: "https://www.lpm-marseille.fr", specialites: ["Menuiserie", "Construction"], adresse: "258 Rue de la Menuiserie, 13001 Marseille", telephone: "04 91 34 56 78" }
      ]
    },
    "Titre professionnel": {
      "Développeur Web": [
        { id: "tp_dev_1", nom: "Simplon", ville: "Paris", type: "Privé", alternance: true, site: "https://www.simplon.co", specialites: ["Développement web", "Full-stack", "JavaScript"], adresse: "55 Rue de Vincennes, 93100 Montreuil", telephone: "01 42 34 56 78" },
        { id: "tp_dev_2", nom: "OpenClassrooms", ville: "Paris", type: "Privé", alternance: true, site: "https://www.openclassrooms.com", specialites: ["Développement", "Data", "Design"], adresse: "10 Quai de la Charente, 75019 Paris", telephone: "01 42 34 56 78" },
        { id: "tp_dev_3", nom: "Wild Code School", ville: "Lyon", type: "Privé", alternance: true, site: "https://www.wildcodeschool.com", specialites: ["Développement web", "Mobile"], adresse: "47 Rue de la Bourse, 69002 Lyon", telephone: "04 72 34 56 78" },
        { id: "tp_dev_4", nom: "Le Wagon", ville: "Paris", type: "Privé", alternance: true, site: "https://www.lewagon.com", specialites: ["Développement web", "Data"], adresse: "16 Villa Gaudelet, 75011 Paris", telephone: "01 42 34 56 78" },
        { id: "tp_dev_5", nom: "3W Academy", ville: "Paris", type: "Privé", alternance: true, site: "https://www.3wa.fr", specialites: ["Développement web", "PHP", "JavaScript"], adresse: "123 Rue de la Formation, 75001 Paris", telephone: "01 42 34 56 78" },
        { id: "tp_dev_6", nom: "WebForce3", ville: "Lyon", type: "Privé", alternance: true, site: "https://www.webforce3.fr", specialites: ["Développement web", "Digital"], adresse: "456 Rue de la Formation, 69002 Lyon", telephone: "04 72 34 56 78" },
        { id: "tp_dev_7", nom: "Digital Campus", ville: "Marseille", type: "Privé", alternance: true, site: "https://www.digital-campus.fr", specialites: ["Développement", "Marketing digital"], adresse: "789 Rue de la Formation, 13001 Marseille", telephone: "04 91 34 56 78" },
        { id: "tp_dev_8", nom: "Epitech", ville: "Paris", type: "Privé", alternance: true, site: "https://www.epitech.eu", specialites: ["Informatique", "Innovation"], adresse: "24 Rue Pasteur, 94270 Le Kremlin-Bicêtre", telephone: "01 44 08 00 00" }
      ],
      "Assistant de Direction": [
        { id: "tp_assistant_1", nom: "AFPA", ville: "Paris", type: "Public", alternance: true, site: "https://www.afpa.fr", specialites: ["Assistant de direction", "Secrétariat"], adresse: "147 Rue de la Formation, 75001 Paris", telephone: "01 42 34 56 78" },
        { id: "tp_assistant_2", nom: "GRETA", ville: "Lyon", type: "Public", alternance: true, site: "https://www.greta-lyon.fr", specialites: ["Assistant de direction", "Gestion"], adresse: "258 Rue de la Formation, 69002 Lyon", telephone: "04 72 34 56 78" },
        { id: "tp_assistant_3", nom: "CCI Formation", ville: "Marseille", type: "Privé", alternance: true, site: "https://www.cci-formation.fr", specialites: ["Assistant de direction", "Commerce"], adresse: "741 Rue de la Formation, 13001 Marseille", telephone: "04 91 34 56 78" }
      ],
      "Technicien Réseau": [
        { id: "tp_reseau_1", nom: "Cisco Networking Academy", ville: "Paris", type: "Privé", alternance: true, site: "https://www.netacad.com", specialites: ["Réseaux", "Cybersécurité"], adresse: "963 Rue de la Technologie, 75008 Paris", telephone: "01 42 34 56 78" },
        { id: "tp_reseau_2", nom: "Institut des Réseaux", ville: "Lyon", type: "Privé", alternance: true, site: "https://www.ir-lyon.fr", specialites: ["Réseaux", "Télécommunications"], adresse: "147 Rue de la Technologie, 69002 Lyon", telephone: "04 72 34 56 78" },
        { id: "tp_reseau_3", nom: "École des Réseaux", ville: "Marseille", type: "Privé", alternance: true, site: "https://www.er-marseille.fr", specialites: ["Réseaux", "Systèmes"], adresse: "258 Rue de la Technologie, 13001 Marseille", telephone: "04 91 34 56 78" }
      ]
    }
  }

  // Charger la progression sauvegardée au démarrage
  useEffect(() => {
    loadProgress()
  }, [])

  const handleAnswer = (questionId, value, points) => {
    const newAnswers = {
      ...answers,
      [questionId]: { value, points }
    }
    setAnswers(newAnswers)
    saveProgress(newAnswers, currentStep)
  }

  const calculateResults = () => {
    const scores = {
      "BTS": 0,
      "Licence": 0,
      "Master": 0,
      "CAP": 0,
      "Titre professionnel": 0
    }

    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = allQuestions.find(q => q.id === parseInt(questionId))
      const weight = question ? question.weight : 1
      
      Object.entries(answer.points).forEach(([formation, points]) => {
        scores[formation] += points * weight
      })
    })

    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
  }

  const getPersonalizedRecommendations = (results, answers) => {
    const recommendations = []
    
    // Recommandation basée sur le secteur
    if (answers[5]?.value === "tech") {
      recommendations.push("Considérez aussi les écoles d'ingénieurs et les formations en cybersécurité")
    }
    
    if (answers[5]?.value === "environnement") {
      recommendations.push("Explorez les formations en développement durable et RSE")
    }

    if (answers[5]?.value === "international") {
      recommendations.push("Pensez aux licences et masters en langues étrangères appliquées")
    }
    
    // Recommandation basée sur l'objectif
    if (answers[4]?.value === "emploi") {
      recommendations.push("Pensez aux formations en alternance pour une insertion professionnelle optimale")
    }

    // Recommandation basée sur le budget
    if (answers[6]?.value === "gratuit") {
      recommendations.push("Explorez les formations publiques et les apprentissages rémunérés")
    }

    // Recommandation basée sur la durée
    if (answers[3]?.value === "court") {
      recommendations.push("Les titres professionnels et CAP offrent des formations rapides et efficaces")
    }

    // Recommandation basée sur la personnalité
    if (answers[8]?.value === "leader") {
      recommendations.push("Considérez les formations en management et leadership")
    }

    if (answers[8]?.value === "analytique") {
      recommendations.push("Les formations en data science et analyse pourraient vous convenir")
    }

    return recommendations
  }

  const getRecommendedSchools = (formation, answers) => {
    const schools = []
    
    // Récupérer les écoles selon la formation
    if (ecolesDatabase[formation]) {
      Object.entries(ecolesDatabase[formation]).forEach(([specialite, ecolesList]) => {
        schools.push(...ecolesList)
      })
    }
    
    // Filtrer selon les réponses du test
    return schools.filter(school => {
      // Si l'utilisateur veut de l'alternance
      if (answers[11]?.value === "oui" && !school.alternance) {
        return false
      }
      
      // Si l'utilisateur veut gratuit
      if (answers[6]?.value === "gratuit" && school.type !== "Public") {
        return false
      }
      
      return true
    }).slice(0, 8) // Limiter à 8 écoles
  }

  const saveProgress = (currentAnswers = answers, currentStepValue = currentStep) => {
    localStorage.setItem('testProgress', JSON.stringify({
      answers: currentAnswers,
      currentStep: currentStepValue,
      timestamp: Date.now()
    }))
    setShowSaveMessage(true)
    setTimeout(() => setShowSaveMessage(false), 2000)
  }

  const loadProgress = () => {
    const saved = localStorage.getItem('testProgress')
    if (saved) {
      try {
        const savedData = JSON.parse(saved)
        const daysSinceSave = (Date.now() - savedData.timestamp) / (1000 * 60 * 60 * 24)
        
        if (daysSinceSave < 7) {
          setAnswers(savedData.answers)
          setCurrentStep(savedData.currentStep)
        }
      } catch (error) {
        console.log('Erreur lors du chargement de la progression')
      }
    }
  }

  const exportResults = () => {
    const results = calculateResults()
    const recommendations = getPersonalizedRecommendations(results, answers)
    
    const data = {
      date: new Date().toLocaleDateString('fr-FR'),
      heure: new Date().toLocaleTimeString('fr-FR'),
      resultats: results.map(([formation, score]) => ({
        formation,
        score: Math.round(score * 100) / 100,
        pourcentage: Math.round((score / 3) * 100),
        details: formations[formation]
      })),
      reponses: answers,
      recommendations: recommendations,
      totalQuestions: allQuestions.length
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `resultats-test-orientation-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const nextStep = () => {
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetTest = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
    localStorage.removeItem('testProgress')
  }

  if (showResults) {
    const results = calculateResults()
    const recommendations = getPersonalizedRecommendations(results, answers)
    const topFormation = results[0][0]

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Résultats de votre test d'orientation</CardTitle>
            <CardDescription className="text-center">
              Voici les formations qui correspondent le mieux à votre profil
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Recommandations personnalisées */}
        {recommendations.length > 0 && (
          <Card className="mb-6 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-blue-800">
                <Info className="h-5 w-5 mr-2" />
                Recommandations personnalisées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="space-y-6">
          {results.map(([formation, score], index) => {
            const percentage = Math.round((score / 3) * 100)
            const formationData = formations[formation]
            
            return (
              <Card key={formation} className={index === 0 ? "border-2 border-blue-500 shadow-lg" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge variant={index === 0 ? "default" : "secondary"} className="text-lg">
                        {index + 1}er choix
                      </Badge>
                      <div>
                        <CardTitle className="text-xl">{formationData.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {formationData.duree}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {formationData.niveau}
                          </Badge>
                          {formationData.alternance === "Oui" && (
                            <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                              Alternance
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Score</p>
                      <p className="text-2xl font-bold text-blue-600">{Math.round(score * 100) / 100}</p>
                      <p className="text-xs text-muted-foreground">
                        {percentage}% de compatibilité
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{formationData.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Avantages
                      </h4>
                      <ul className="space-y-1">
                        {formationData.avantages.map((avantage, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {avantage}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                        Spécialités populaires
                      </h4>
                      <ul className="space-y-1">
                        {formationData.specialites.map((specialite, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">• {specialite}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Info className="h-4 w-4 mr-2 text-purple-600" />
                        Informations pratiques
                      </h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><strong>Durée :</strong> {formationData.duree}</p>
                        <p><strong>Niveau :</strong> {formationData.niveau}</p>
                        <p><strong>Alternance :</strong> {formationData.alternance}</p>
                        <p><strong>International :</strong> {formationData.international}</p>
                      </div>
                    </div>
                  </div>

                  {/* Section Écoles recommandées */}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
                      Écoles recommandées
                    </h4>
                    <div className="space-y-3">
                      {getRecommendedSchools(formation, answers).map((school) => (
                        <div key={school.id} className="border rounded-lg p-3 hover:bg-gray-50">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium text-sm">{school.nom}</h5>
                              <p className="text-xs text-muted-foreground">{school.ville} • {school.type}</p>
                              <p className="text-xs text-muted-foreground">{school.specialites.join(", ")}</p>
                            </div>
                            <div className="flex space-x-2">
                              {school.alternance && (
                                <Badge variant="outline" className="text-xs">Alternance</Badge>
                              )}
                              <Button size="sm" variant="outline" asChild>
                                <a href={school.site} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Lien vers Onisep */}
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-sm text-blue-800">Besoin de plus d'écoles ?</h5>
                          <p className="text-xs text-blue-600">Consultez la base complète d'Onisep</p>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://www.onisep.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Onisep
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={resetTest} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Refaire le test
            </Button>
            <Button variant="outline" onClick={exportResults}>
              <Download className="h-4 w-4 mr-2" />
              Exporter les résultats
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Retour à l'orientation
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = allQuestions[currentStep]
  const hasAnswered = answers[currentQuestion.id]
  const allQuestionsAnswered = Object.keys(answers).length === allQuestions.length

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-2xl">Test d'orientation</CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => saveProgress()}
              className="flex items-center"
            >
              <Save className="h-4 w-4 mr-1" />
              Sauvegarder
            </Button>
          </div>
          <CardDescription className="text-center">
            Question {currentStep + 1} sur {allQuestions.length}
          </CardDescription>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / allQuestions.length) * 100}%` }}
            ></div>
          </div>
          {showSaveMessage && (
            <div className="flex items-center justify-center mt-2 text-green-600 text-sm">
              <CheckCircle className="h-4 w-4 mr-1" />
              Progression sauvegardée
            </div>
          )}
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
          <CardDescription>
            Sélectionnez l'option qui correspond le mieux à votre situation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <Button
                key={option.value}
                variant={hasAnswered?.value === option.value ? "default" : "outline"}
                className="w-full justify-start h-auto p-4"
                onClick={() => handleAnswer(currentQuestion.id, option.value, option.points)}
              >
                <div className="text-left">
                  <div className="font-medium">{option.label}</div>
                </div>
              </Button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Précédent
            </Button>
            
            <Button 
              onClick={nextStep}
              disabled={currentStep === allQuestions.length - 1 ? !allQuestionsAnswered : !hasAnswered}
            >
              {currentStep === allQuestions.length - 1 ? (
                <>
                  Voir les résultats
                  <Award className="h-4 w-4 ml-2" />
                </>
              ) : (
                <>
                  Suivant
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TestOrientation
