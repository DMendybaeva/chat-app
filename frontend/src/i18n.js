import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, ru } from './locales/index';

const resources = {
  en,
  ru,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ru',

    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
