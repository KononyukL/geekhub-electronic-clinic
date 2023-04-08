import 'i18next';
import i18next from 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    allowObjectInHTMLChildren: true;
    returnNull: false;
  }
}

export default i18next;
