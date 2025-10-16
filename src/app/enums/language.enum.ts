export const Languages = {
    en: { code: "en", label: "English" },
    es: { code: "es", label: "Español" },
    fr: { code: "fr", label: "Français" },
    de: { code: "de", label: "Deutsch" },
    it: { code: "it", label: "Italiano" },
    pt: { code: "pt", label: "Português" },
    ru: { code: "ru", label: "Русский" },
    zh: { code: "zh", label: "中文" },
    ja: { code: "ja", label: "日本語" },
    vi: { code: "vi", label: "Tiếng Việt" },
  } as const;
  
  export type LanguageCode = keyof typeof Languages;
      