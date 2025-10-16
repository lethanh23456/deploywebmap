export type ThemeMode = 'light' | 'dark'

export type ThemeState = {
    mode: ThemeMode
}

const initialState: ThemeState = {
    mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export {initialState}