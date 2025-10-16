import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/theme.slice";
import languageReducer from "./language/language.slice";
import authReducer from "./auth/auth.slice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
        auth: authReducer
    },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch