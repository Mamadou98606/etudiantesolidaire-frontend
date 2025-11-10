import { useState } from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';

export default function CookiePreferences() {
  const { consent, updateConsent } = useCookieConsent();
  const [saved, setSaved] = useState(false);
  const [local, setLocal] = useState(consent);

  const handleToggle = (category) => {
    if (category !== 'essentials') {
      setLocal(prev => ({
        ...prev,
        [category]: !prev[category],
      }));
    }
  };

  const handleSave = () => {
    updateConsent(local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Paramètres des cookies</h1>

      {saved && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
          ✓ Vos préférences ont été sauvegardées avec succès.
        </div>
      )}

      <div className="space-y-6">
        {/* Essentiels */}
        <div className="border-l-4 border-blue-500 pl-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              ✓ Cookies essentiels
            </h3>
            <div className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              Obligatoire
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Ces cookies sont nécessaires au fonctionnement du site (authentification, sécurité, préférences).
          </p>
        </div>

        {/* Analytics */}
        <div className="border-l-4 border-green-500 pl-4 py-4 border rounded-r-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              📊 Cookies d'analyse
            </h3>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={local.analytics}
                onChange={() => handleToggle('analytics')}
                className="w-5 h-5 rounded text-green-600"
              />
            </label>
          </div>
          <p className="text-gray-600 text-sm">
            Nous permettent de mesurer votre engagement et d'améliorer le site (Google Analytics, statistiques de visite).
          </p>
        </div>

        {/* Marketing */}
        <div className="border-l-4 border-orange-500 pl-4 py-4 border rounded-r-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">
              📢 Cookies marketing
            </h3>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={local.marketing}
                onChange={() => handleToggle('marketing')}
                className="w-5 h-5 rounded text-orange-600"
              />
            </label>
          </div>
          <p className="text-gray-600 text-sm">
            Utilisés par nos partenaires pour la publicité ciblée (Meta Pixel, Google Ads).
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={() => setLocal({ essentials: true, analytics: false, marketing: false })}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
        >
          Refuser tout
        </button>
        <button
          onClick={() => setLocal({ essentials: true, analytics: true, marketing: true })}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
        >
          Accepter tout
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium ml-auto"
        >
          Sauvegarder les préférences
        </button>
      </div>

      <div className="mt-12 text-sm text-gray-600">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">À propos des cookies</h2>
        <p className="mb-4">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez modifier vos préférences
          à tout moment en visitant cette page. Pour plus d'informations, consultez notre{' '}
          <a href="/confidentialite" className="text-blue-600 hover:underline">
            politique de confidentialité
          </a>.
        </p>
      </div>
    </div>
  );
}
