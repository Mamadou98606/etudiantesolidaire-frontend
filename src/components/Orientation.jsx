import React from 'react'
import {
  GraduationCap,
  BookOpen,
  Award,
  Clock,
  Users,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Orientation() {
  const navigate = useNavigate()
  const formations = [
    {
      type: "BTS",
      title: "Brevet de Technicien Supérieur",
      duration: "2 ans",
      level: "Bac+2",
      description: "Formation professionnalisante courte avec stage en entreprise",
      specialties: [
        "BTS Commerce International",
        "BTS Management Commercial Opérationnel",
        "BTS Comptabilité et Gestion",
        "BTS Communication",
        "BTS Tourisme",
        "BTS Informatique"
      ],
      requirements: "Baccalauréat ou équivalent",
      opportunities: "Insertion professionnelle directe ou poursuite en licence professionnelle",
      cost: "Gratuit dans le public, 3000-8000€/an dans le privé"
    },
    {
      type: "Licence",
      title: "Licence universitaire",
      duration: "3 ans",
      level: "Bac+3",
      description: "Formation généraliste permettant d'acquérir des bases solides",
      specialties: [
        "Licence Économie et Gestion",
        "Licence Droit",
        "Licence Lettres et Langues",
        "Licence Sciences",
        "Licence Psychologie",
        "Licence STAPS"
      ],
      requirements: "Baccalauréat ou équivalent + dossier Parcoursup",
      opportunities: "Poursuite en Master ou insertion professionnelle",
      cost: "170€/an pour les étudiants UE, 2770€/an pour les non-UE"
    },
    {
      type: "Master",
      title: "Master universitaire",
      duration: "2 ans",
      level: "Bac+5",
      description: "Formation spécialisée de haut niveau avec recherche ou professionnalisation",
      specialties: [
        "Master Management",
        "Master Ingénierie",
        "Master Recherche",
        "Master Enseignement",
        "Master Droit des Affaires",
        "Master Marketing Digital"
      ],
      requirements: "Licence ou équivalent Bac+3 + dossier + entretien",
      opportunities: "Insertion professionnelle cadre ou poursuite en Doctorat",
      cost: "243€/an pour les étudiants UE, 3770€/an pour les non-UE"
    },
    {
      type: "CAP",
      title: "Certificat d'Aptitude Professionnelle",
      duration: "2 ans",
      level: "Niveau V",
      description: "Formation professionnelle courte très spécialisée",
      specialties: [
        "CAP Cuisine",
        "CAP Pâtisserie",
        "CAP Coiffure",
        "CAP Électricien",
        "CAP Menuisier",
        "CAP Esthétique"
      ],
      requirements: "Niveau 3ème ou équivalent",
      opportunities: "Insertion professionnelle immédiate ou poursuite en Bac Pro",
      cost: "Gratuit dans le public, apprentissage rémunéré"
    },
    {
      type: "Titre professionnel",
      title: "Titre professionnel certifié",
      duration: "6 mois à 2 ans",
      level: "Variable",
      description: "Formation courte axée sur l'employabilité immédiate",
      specialties: [
        "Développeur Web",
        "Assistant de Direction",
        "Technicien Réseau",
        "Gestionnaire de Paie",
        "Commercial",
        "Formateur Professionnel"
      ],
      requirements: "Variable selon le titre visé",
      opportunities: "Insertion professionnelle rapide dans le secteur visé",
      cost: "Variable, souvent pris en charge par les organismes de formation"
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Auto-évaluation",
      description: "Définissez vos objectifs, compétences et contraintes",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Recherche d'informations",
      description: "Explorez les formations et leurs débouchés",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Test d'orientation",
      description: "Utilisez nos outils pour affiner votre choix",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Candidature",
      description: "Préparez vos dossiers Parcoursup ou candidatures directes",
      icon: <Award className="h-6 w-6" />
    }
  ]

  const importantDates = [
    {
      date: "20 décembre 2024",
      event: "Ouverture de Parcoursup",
      type: "info"
    },
    {
      date: "17 janvier 2025",
      event: "Début des inscriptions Parcoursup",
      type: "warning"
    },
    {
      date: "14 mars 2025",
      event: "Fin des inscriptions Parcoursup",
      type: "alert"
    },
    {
      date: "3 avril 2025",
      event: "Fin de confirmation des vœux",
      type: "alert"
    },
    {
      date: "30 mai 2025",
      event: "Début des réponses Parcoursup",
      type: "info"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="mb-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Orientation</h1>
          <p className="text-xl text-gray-600">
            Trouvez votre voie parmi les formations françaises et construisez votre projet d'études
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-2xl text-blue-800 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2" />
                Votre orientation, notre priorité
              </h2>
            </div>
            <div>
              <p className="text-lg text-blue-700 leading-relaxed mb-4">
                L'orientation est une étape cruciale de votre parcours. En France, vous avez accès à un large éventail
                de formations, du CAP au Master, en passant par les BTS et les titres professionnels.
              </p>
              <p className="text-lg text-blue-700 leading-relaxed">
                Notre équipe vous accompagne pour identifier la formation qui correspond le mieux à vos aspirations,
                vos compétences et vos objectifs professionnels.
              </p>
            </div>
          </div>
        </section>

        {/* Processus d'orientation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comment bien s'orienter ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 w-fit mx-auto mb-2">
                    Étape {step.step}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types de formations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Types de formations disponibles</h2>
          <div className="space-y-8">
            {formations.map((formation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 text-lg px-4 py-2">
                        {formation.type}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{formation.title}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Clock className="h-3 w-3 mr-1" />
                            {formation.duration}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            <Award className="h-3 w-3 mr-1" />
                            {formation.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-gray-600">
                    {formation.description}
                  </p>
                </div>
                <div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Spécialités populaires
                      </h4>
                      <ul className="space-y-1">
                        {formation.specialties.map((specialty, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Conditions d'accès
                        </h4>
                        <p className="text-sm text-gray-600">{formation.requirements}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Débouchés
                        </h4>
                        <p className="text-sm text-gray-600">{formation.opportunities}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Info className="h-4 w-4 mr-2" />
                          Coût approximatif
                        </h4>
                        <p className="text-sm text-gray-600">{formation.cost}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dates importantes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dates importantes 2024-2025</h2>
          <div className="space-y-4">
            {importantDates.map((item, index) => (
              <div key={index} className={`border-l-4 bg-white rounded-lg p-4 ${
                item.type === 'alert' ? 'border-l-red-500 bg-red-50' :
                item.type === 'warning' ? 'border-l-orange-500 bg-orange-50' :
                'border-l-blue-500 bg-blue-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {item.type === 'alert' ? (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    ) : item.type === 'warning' ? (
                      <Clock className="h-5 w-5 text-orange-600" />
                    ) : (
                      <Info className="h-5 w-5 text-blue-600" />
                    )}
                    <div>
                      <p className="font-semibold">{item.event}</p>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outils d'aide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nos outils d'aide à l'orientation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="mb-4">
                <h3 className="flex items-center font-semibold">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Test d'orientation
                </h3>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Découvrez les formations qui correspondent à votre profil et vos aspirations.
                </p>
                <button 
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => navigate('/test-orientation')}
                >
                  Faire le test
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="mb-4">
                <h3 className="flex items-center font-semibold">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                  Fiches métiers
                </h3>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Explorez les métiers et leurs formations associées.
                </p>
                <button 
                  className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
                  onClick={() => navigate('/fiches-metiers')}
                >
                  Consulter les fiches
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="mb-4">
                <h3 className="flex items-center font-semibold">
                  <Users className="h-5 w-5 text-purple-600 mr-2" />
                  Conseil personnalisé
                </h3>
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Bénéficiez d'un accompagnement individuel avec nos conseillers.
                </p>
                <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                  Prendre RDV
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ressources utiles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ressources utiles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h3 className="font-semibold">Sites officiels</h3>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="https://www.parcoursup.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Parcoursup.fr
                    </a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="https://www.onisep.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Onisep.fr
                    </a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="https://www.etudiant.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Etudiant.gouv.fr
                    </a>
                  </li>
                  <li className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 text-blue-600" />
                    <a href="https://www.campusfrance.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Campus France
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h3 className="font-semibold">Nos guides</h3>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>Guide Parcoursup 2025</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>Choisir sa formation post-bac</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>Les métiers d'avenir</span>
                  </li>
                  <li className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-600" />
                    <span>Financer ses études</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist Parcoursup */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Checklist Parcoursup</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Créer mon compte et compléter mon profil</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Renseigner mes bulletins et pièces</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Rédiger mes projets de formation motivés</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Confirmer mes vœux avant la date limite</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-2" /> Suivre les réponses et respecter les délais</li>
            </ul>
          </div>
        </section>

        {/* Liens utiles */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Liens utiles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="https://www.parcoursup.fr" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
              <ExternalLink className="h-4 w-4 mr-2" /> Parcoursup (officiel)
            </a>
            <a href="https://www.campusfrance.org" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
              <ExternalLink className="h-4 w-4 mr-2" /> Campus France
            </a>
            <a href="https://www.onisep.fr" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
              <ExternalLink className="h-4 w-4 mr-2" /> Onisep
            </a>
            <a href="https://www.service-public.fr/particuliers/vosdroits/N110" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
              <ExternalLink className="h-4 w-4 mr-2" /> Aides financières
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Besoin d'aide pour votre orientation ?</h2>
              <p className="text-blue-100">
                Nos conseillers sont là pour vous accompagner dans vos choix
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">
                  Prendre rendez-vous
                </button>
                <button 
                  className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600"
                  onClick={() => navigate('/test-orientation')}
                >
                  Faire le test d'orientation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Orientation
