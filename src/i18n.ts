import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import en from '../public/locales/en/translation.json';

export const languages = ['en', 'uk'];

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: languages,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'translation',
    react: {
      useSuspense: false
    }
  });

export default i18n;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof en;
    };
  }
}
