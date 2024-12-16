import get from "lodash-es/get";

import * as translationsEn from "../locale/locale-en.json";
import { DEFAULT_LOCALE, EN, LOCALES } from "../constants/locales";

const getLocale = (): string => {
  const languageLocale = navigator.language.substr(0, 2);
  return LOCALES.indexOf(languageLocale) > -1 ? languageLocale : DEFAULT_LOCALE;
};

const locale = getLocale();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: { [key: string]: any } = {
  [EN]: translationsEn,
};

const getTranslation = (translationKey: string): string => {
  const getTranslate = get(
    translations[locale].default,
    translationKey,
    translationKey
  );
  return getTranslate;
};

const translate = (translationKey: string): string => {
  return getTranslation(translationKey);
};

export default translate;
