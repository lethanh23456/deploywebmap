import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "./auth.state"

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string | null>) => {
            state.accessToken = action.payload || null
        }
    }
})

export const { setAccessToken } = authSlice.actions

export default authSlice.reducer