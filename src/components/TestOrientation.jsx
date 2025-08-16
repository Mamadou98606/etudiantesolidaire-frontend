import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card.jsx'
import { Button } from './ui/button.jsx'
import { Badge } from './ui/badge.jsx'
import { CheckCircle, ArrowRight, ArrowLeft, GraduationCap, BookOpen, Users, Award, Download, Save, AlertCircle, Info, BarChart3 } from 'lucide-react'

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
      avantages: ["Formation pratique", "Stage en entreprise", "Insertion rapide", "Coût modéré", "Alternance possible"],
      specialites: ["Commerce International", "Informatique", "Comptabilité", "Communication", "Tourisme", "Électrotechnique"],
      cout: "Gratuit dans le public, 3000-8000€/an dans le privé",
      duree: "2 ans",
      niveau: "Bac+2",
      alternance: "Oui",
      international: "Oui"
    },
    "Licence": {
      title: "Licence universitaire",
      description: "Formation généraliste de 3 ans permettant d'acquérir des bases solides",
      avantages: ["Bases solides", "Poursuite possible", "Large choix", "Coût très faible", "International"],
      specialites: ["Économie et Gestion", "Droit", "Sciences", "Lettres", "Psychologie", "STAPS", "Langues"],
      cout: "170€/an pour les étudiants UE",
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
      cout: "243€/an pour les étudiants UE",
      duree: "2 ans",
      niveau: "Bac+5",
      alternance: "Possible",
      international: "Oui"
    },
    "CAP": {
      title: "Certificat d'Aptitude Professionnelle",
      description: "Formation professionnelle courte très spécialisée",
      avantages: ["Formation courte", "Insertion immédiate", "Pratique", "Gratuit", "Alternance"],
      specialites: ["Cuisine", "Pâtisserie", "Coiffure", "Électricité", "Menuiserie", "Esthétique", "Mécanique"],
      cout: "Gratuit dans le public, apprentissage rémunéré",
      duree: "2 ans",
      niveau: "Niveau V",
      alternance: "Oui",
      international: "Non"
    },
    "Titre professionnel": {
      title: "Titre professionnel certifié",
      description: "Formation courte axée sur l'employabilité immédiate",
      avantages: ["Formation rapide", "Employabilité", "Flexibilité", "Prise en charge possible", "Alternance"],
      specialites: ["Développeur Web", "Assistant de Direction", "Technicien Réseau", "Commercial", "Formateur"],
      cout: "Variable, souvent pris en charge",
      duree: "6 mois à 2 ans",
      niveau: "Variable",
      alternance: "Oui",
      international: "Rare"
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
                        <p><strong>Coût :</strong> {formationData.cout}</p>
                        <p><strong>Durée :</strong> {formationData.duree}</p>
                        <p><strong>Niveau :</strong> {formationData.niveau}</p>
                        <p><strong>Alternance :</strong> {formationData.alternance}</p>
                        <p><strong>International :</strong> {formationData.international}</p>
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
