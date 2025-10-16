export type AuthState = {
    accessToken: string | null;
}

const initialState: AuthState = {
    accessToken: null,
}

export { initialState }