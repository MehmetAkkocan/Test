


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";
import {english} from "./language.en"
import {french} from "./language.fr"
import {turkish} from "./language.tr"


const deviceLanguage =
Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
  : NativeModules.I18nManager.localeIdentifier;
console.log("deviceLanguage ...........................", deviceLanguage);


// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: english,
  fr: french,
  tr: turkish,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: deviceLanguage.substring(0,2),

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;