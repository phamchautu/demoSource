import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { signIn } from "../thunks/AuthThunk";

export type UserInfo = {
    id: number,
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
}

export type AuthState = {
    token: string,
    userInfo?: UserInfo
    isSignIn: boolean
    status: 'loading' | 'finished' | 'error';

}

const initAuthState: AuthState = {
    token: '',
    userInfo: undefined,
    isSignIn: false,
    status: 'finished'
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(signIn.pending, state => {
        });
        builder.addCase(signIn.fulfilled, (state, action: PayloadAction<any>) => {
            const { token, ...rest } = action.payload
            state.isSignIn = true
            state.token = token
            state.userInfo = { ...rest }
        });
        builder.addCase(signIn.rejected, state => {
        });
    },
})

export const { } = AuthSlice.actions
export default AuthSlice.reducer