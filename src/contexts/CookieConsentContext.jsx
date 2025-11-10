import React, { createContext, useState, useContext, useEffect } from 'react';

const CookieConsentContext = createContext();

export const CookieConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState({
    essentials: true, // Toujours vrai, non-optionnel
    analytics: false,
    marketing: false,
    timestamp: null,
  });

  // Charger les consentements depuis le cookie au montage
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      try {
        setConsent(JSON.parse(savedConsent));
      } catch (e) {
        console.error('Erreur parsing cookie consent:', e);
      }
    }
  }, []);

  // Sauvegarder les consentements
  const updateConsent = (newConsent) => {
    const updated = {
      ...consent,
      ...newConsent,
      timestamp: new Date().toISOString(),
    };
    setConsent(updated);
    localStorage.setItem('cookieConsent', JSON.stringify(updated));
    
    // Si analytics est accepté, charger Google Analytics
    if (updated.analytics && !window.gtag) {
      loadGoogleAnalytics();
    }
  };

  // Charger Google Analytics si accepté
  const loadGoogleAnalytics = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Remplace par ton ID
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // Remplace par ton ID
  };

  // Accepter tout
  const acceptAll = () => {
    updateConsent({
      essentials: true,
      analytics: true,
      marketing: true,
    });
  };

  // Refuser tout (sauf essentiels)
  const rejectAll = () => {
    updateConsent({
      essentials: true,
      analytics: false,
      marketing: false,
    });
  };

  return (
    <CookieConsentContext.Provider value={{ consent, updateConsent, acceptAll, rejectAll }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent doit être utilisé dans CookieConsentProvider');
  }
  return context;
};
