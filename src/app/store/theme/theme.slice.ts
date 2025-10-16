import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState, type ThemeMode } from "./theme.state";

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
        setTheme: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload
        }
    }
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer