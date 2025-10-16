import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./language.state";
import type { LanguageCode } from "@/app/enums/language.enum";
import i18n from "@/shared/plugins/i18n";
const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
      setLanguage: (state, action: PayloadAction<LanguageCode>) => {
        state.language = action.payload;
        i18n.changeLanguage(action.payload);
      },
    },
  });
  
  export const { setLanguage } = languageSlice.actions;
  export default languageSlice.reducer;