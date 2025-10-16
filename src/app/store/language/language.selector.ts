import type { RootState } from "@/app/store";

const selectLanguage = (state: RootState) => state.language.language;

export { selectLanguage };  