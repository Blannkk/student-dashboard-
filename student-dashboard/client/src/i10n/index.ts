import i10n from 'i18next';
import { initReactI10n } from 'react-i18next';
import enTranslations from './locales/en';
import arTranslations from './locales/ar';

const resources = {
  en: {
    translation: enTranslations
  },
  ar: {
    translation: arTranslations
  }
};

i10n
  .use(initReactI10n)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i10n;