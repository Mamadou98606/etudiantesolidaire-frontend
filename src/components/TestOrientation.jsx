import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, ArrowRight, ArrowLeft, GraduationCap, BookOpen, Users, Award } from 'lucide-react'

function TestOrientation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Quel est votre niveau d'études actuel ?",
      options: [
        { value: "bac", label: "Baccalauréat", points: { "BTS": 3, "Licence": 2, "Master": 1 } },
        { value: "bac+2", label: "Bac+2 (BTS, DUT)", points: { "Licence": 3, "Master": 2, "Titre professionnel": 1 } },
        { value: "bac+3", label: "Bac+3 (Licence)", points: { "Master": 3, "Titre professionnel": 2 } },
        { value: "autre", label: "Autre", points: { "CAP": 3, "BTS": 2, "Licence": 1 } }
      ]
    },
    {
      id: 2,
      question: "Quel type d'activité préférez-vous ?",
      options: [
        { value: "pratique", label: "Activités pratiques et manuelles", points: { "CAP": 3, "BTS": 2, "Titre professionnel": 3 } },
        { value: "theorique", label: "Études théoriques et recherche", points: { "Licence": 3, "Master": 3, "BTS": 1 } },
        { value: "mixte", label: "Mixte (théorie + pratique)", points: { "BTS": 3, "Licence": 2, "Master": 2 } },
        { value: "creatif", label: "Activités créatives et artistiques", points: { "CAP": 2, "BTS": 2, "Licence": 2 } }
      ]
    },
    {
      id: 3,
      question: "Quelle est votre durée d'études idéale ?",
      options: [
        { value: "court", label: "Formation courte (6 mois - 2 ans)", points: { "CAP": 3, "BTS": 2, "Titre professionnel": 3 } },
        { value: "moyen", label: "Formation moyenne (2-3 ans)", points: { "BTS": 3, "Licence": 3, "Titre professionnel": 2 } },
        { value: "long", label: "Formation longue (3-5 ans)", points: { "Licence": 3, "Master": 3, "BTS": 1 } }
      ]
    },
    {
      id: 4,
      question: "Quel est votre objectif principal ?",
      options: [
        { value: "emploi", label: "Trouver un emploi rapidement", points: { "CAP": 3, "BTS": 3, "Titre professionnel": 3 } },
        { value: "poursuite", label: "Poursuivre mes études", points: { "Licence": 3, "Master": 3, "BTS": 2 } },
        { value: "recherche", label: "Faire de la recherche", points: { "Master": 3, "Licence": 2 } },
        { value: "changement", label: "Changer de carrière", points: { "Titre professionnel": 3, "BTS": 2, "Licence": 2 } }
      ]
    },
    {
      id: 5,
      question: "Quel secteur vous intéresse le plus ?",
      options: [
        { value: "tech", label: "Technologies et informatique", points: { "BTS": 3, "Licence": 2, "Master": 3, "Titre professionnel": 3 } },
        { value: "commerce", label: "Commerce et gestion", points: { "BTS": 3, "Licence": 3, "Master": 2 } },
        { value: "sante", label: "Santé et social", points: { "CAP": 2, "BTS": 3, "Licence": 3 } },
        { value: "art", label: "Arts et culture", points: { "CAP": 3, "Licence": 3, "BTS": 2 } }
      ]
    }
  ]

  const formations = {
    "BTS": {
      title: "Brevet de Technicien Supérieur",
      description: "Formation professionnalisante de 2 ans",
      avantages: ["Formation pratique", "Stage en entreprise", "Insertion rapide"],
      specialites: ["Commerce International", "Informatique", "Comptabilité", "Communication"]
    },
    "Licence": {
      title: "Licence universitaire",
      description: "Formation généraliste de 3 ans",
      avantages: ["Bases solides", "Poursuite possible", "Large choix"],
      specialites: ["Économie", "Droit", "Sciences", "Lettres"]
    },
    "Master": {
      title: "Master universitaire",
      description: "Formation spécialisée de 2 ans",
      avantages: ["Niveau élevé", "Spécialisation", "Recherche possible"],
      specialites: ["Management", "Ingénierie", "Recherche", "Enseignement"]
    },
    "CAP": {
      title: "Certificat d'Aptitude Professionnelle",
      description: "Formation professionnelle de 2 ans",
      avantages: ["Formation courte", "Insertion immédiate", "Pratique"],
      specialites: ["Cuisine", "Pâtisserie", "Coiffure", "Électricité"]
    },
    "Titre professionnel": {
      title: "Titre professionnel certifié",
      description: "Formation courte et spécialisée",
      avantages: ["Formation rapide", "Employabilité", "Flexibilité"],
      specialites: ["Développeur web", "Assistant", "Technicien", "Commercial"]
    }
  }

  const handleAnswer = (questionId, value, points) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { value, points }
    }))
  }

  const calculateResults = () => {
    const scores = {
      "BTS": 0,
      "Licence": 0,
      "Master": 0,
      "CAP": 0,
      "Titre professionnel": 0
    }

    Object.values(answers).forEach(answer => {
      Object.entries(answer.points).forEach(([formation, points]) => {
        scores[formation] += points
      })
    })

    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
  }

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
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
  }

  if (showResults) {
    const results = calculateResults()
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

        <div className="space-y-6">
          {results.map(([formation, score], index) => (
            <Card key={formation} className={index === 0 ? "border-2 border-blue-500" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant={index === 0 ? "default" : "secondary"} className="text-lg">
                      {index + 1}er choix
                    </Badge>
                    <CardTitle className="text-xl">{formations[formation].title}</CardTitle>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Score</p>
                    <p className="text-2xl font-bold text-blue-600">{score}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{formations[formation].description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Avantages
                    </h4>
                    <ul className="space-y-1">
                      {formations[formation].avantages.map((avantage, idx) => (
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
                      {formations[formation].specialites.map((specialite, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {specialite}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button onClick={resetTest} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Refaire le test
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Retour à l'orientation
          </Button>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentStep]
  const hasAnswered = answers[currentQuestion.id]

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Test d'orientation</CardTitle>
          <CardDescription className="text-center">
            Question {currentStep + 1} sur {questions.length}
          </CardDescription>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
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
              disabled={!hasAnswered}
            >
              {currentStep === questions.length - 1 ? (
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
