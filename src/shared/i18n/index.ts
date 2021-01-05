import { Locales } from './locales';

import en from './en.json';
import it from './it.json';

export const messages = {
  [Locales.EN]: en,
  [Locales.IT]: it,
};

export const defaultLocale = Locales.IT;
export { LOCALES } from './locales';
