import type { LanguageCode } from "@/app/enums/language.enum";
import i18n from "@/shared/plugins/i18n";
type LanguageState = {
  language: LanguageCode;
};

const initialState: LanguageState = {
  language: (i18n.language as LanguageCode) ?? "en",
};

export {initialState}
