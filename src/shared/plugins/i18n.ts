import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Languages } from "@/app/enums/language.enum";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: Languages.en.code,
    fallbackLng: Languages.en.code,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
