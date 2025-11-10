import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieConsentContext';

export default function CookieConsent() {
  const { consent, updateConsent, acceptAll, rejectAll } = useCookieConsent();
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [localConsent, setLocalConsent] = useState(consent);

  // Afficher le banner si aucun consentement n'a été donné
  useEffect(() => {
    const hasMadeChoice = localStorage.getItem('cookieConsent');
    if (!hasMadeChoice) {
      setShow(true);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAll();
    setShow(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setShow(false);
  };

  const handleSavePreferences = () => {
    updateConsent(localConsent);
    setShow(false);
    setShowDetails(false);
  };

  const toggleConsent = (category) => {
    if (category !== 'essentials') { // On ne peut pas refuser les essentiels
      setLocalConsent(prev => ({
        ...prev,
        [category]: !prev[category],
      }));
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={() => setShow(false)}></div>

      {/* Banner */}
      <div className="relative w-full bg-white shadow-2xl">
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!showDetails ? (
          // Vue principale
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Paramètres des cookies
              </h2>
              <p className="text-gray-700 text-sm mb-4">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                Vous pouvez choisir quels types de cookies vous acceptez ci-dessous.
              </p>
            </div>

            {/* Catégories condensées */}
            <div className="space-y-2 mb-6">
              {/* Essentiels - toujours activé */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">
                    ✓ Cookies essentiels
                  </p>
                  <p className="text-xs text-gray-600">
                    Requis pour le fonctionnement du site (authentification, sécurité)
                  </p>
                </div>
                <div className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Toujours activé
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">
                    📊 Cookies d'analyse
                  </p>
                  <p className="text-xs text-gray-600">
                    Nous aident à comprendre comment vous utilisez le site
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localConsent.analytics}
                    onChange={() => toggleConsent('analytics')}
                    className="w-4 h-4 rounded"
                  />
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">
                    📢 Cookies marketing
                  </p>
                  <p className="text-xs text-gray-600">
                    Utilisés pour vous montrer des publicités pertinentes
                  </p>
                </div>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={localConsent.marketing}
                    onChange={() => toggleConsent('marketing')}
                    className="w-4 h-4 rounded"
                  />
                </label>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <button
                onClick={() => setShowDetails(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 text-sm font-medium"
              >
                Plus de détails
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="flex gap-3">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm"
                >
                  Refuser tout
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm"
                >
                  Accepter tout
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Vue détails
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Détails des cookies
            </h2>

            <div className="space-y-6 mb-6">
              {/* Essentiels */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  ✓ Cookies essentiels (obligatoires)
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Ces cookies sont nécessaires pour le fonctionnement de base du site :
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li><strong>Session authentification :</strong> Vous garde connecté</li>
                  <li><strong>CSRF token :</strong> Protection contre les attaques</li>
                  <li><strong>Préférences UI :</strong> Sauvegarde vos paramètres (sidebar, etc.)</li>
                  <li><strong>Consentement cookies :</strong> Mémorise vos choix</li>
                </ul>
              </div>

              {/* Analytics */}
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">
                    📊 Cookies d'analyse
                  </h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={localConsent.analytics}
                      onChange={() => toggleConsent('analytics')}
                      className="w-4 h-4 rounded"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Nous permettent de mesurer votre engagement et d'améliorer le site :
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li><strong>Google Analytics :</strong> Statistiques de visite (pages vues, durations, etc.)</li>
                  <li><strong>Taux de conversion :</strong> Suivi des inscriptions et actions complétées</li>
                  <li>Informations anonymisées et agrégées</li>
                </ul>
              </div>

              {/* Marketing */}
              <div className="border-l-4 border-orange-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">
                    📢 Cookies marketing
                  </h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={localConsent.marketing}
                      onChange={() => toggleConsent('marketing')}
                      className="w-4 h-4 rounded"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Utilisés par nos partenaires pour la publicité ciblée :
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                  <li><strong>Meta Pixel :</strong> Suivi des conversions Facebook/Instagram</li>
                  <li><strong>Google Ads :</strong> Publicités personnalisées</li>
                  <li>Basé sur votre activité et vos intérêts</li>
                </ul>
              </div>
            </div>

            <div className="text-xs text-gray-500 mb-6 p-4 bg-gray-50 rounded-lg">
              <p>
                Vous pouvez modifier ces préférences à tout moment via le lien "Paramètres des cookies" en bas de page.
                <a href="/confidentialite" className="text-blue-600 hover:underline ml-1">
                  Voir notre politique de confidentialité complète
                </a>
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm flex-1"
              >
                Retour
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium text-sm flex-1"
              >
                Refuser tout
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-sm flex-1"
              >
                Sauvegarder les préférences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
