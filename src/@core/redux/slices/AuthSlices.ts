import { createSlice } from "@reduxjs/toolkit";

export type UserInfo = {
    name: string,
    email: string
}

export type AuthState = {
    token: string,
    userInfo?: UserInfo
    isSignIn: boolean
}

const initAuthState: AuthState = {
    token: '',
    userInfo: undefined,
    isSignIn: false
}

const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: initAuthState,
    reducers: {
        signIn: (state, action) => {
            state.isSignIn = true;
            state.token = '111'
            state.userInfo = { name: 'admin', email: 'admi@gmail.com' }
        },
        signOut: (state, action) => {
            state = { ...state, ...initAuthState }
        }

    }
})

export const { signIn, signOut } = AuthSlice.actions
export default AuthSlice.reducer