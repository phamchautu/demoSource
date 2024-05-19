import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';

import resources from "@assets/translate";
import { Storage } from "@core/utils/enum";

const i18n = i18next.createInstance();

i18n
  .use(initReactI18next)
  .use({
    type: 'languageDetector',
    init: () => { },
    async: true,
    cacheUserLanguage: () => { },
    detect: async (callback: ((lang: string) => void)) => {
      const lang = await AsyncStorage.getItem(Storage.LANGUAGE);
      callback(lang || 'vi');
    }
  })
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: 'vi',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    }
  });