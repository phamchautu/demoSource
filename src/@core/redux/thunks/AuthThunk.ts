import { createAsyncThunk } from '@reduxjs/toolkit';

export type LoginFormValue = {
    phone_number: string;
    password: string;
}

export const signIn = createAsyncThunk('auth/signIn', async (data: LoginFormValue) => {
    const response = await
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: 'kminchelle',
                password: '0lelplR',
                expiresInMins: 30,
            })
        })
    return await response.json();
});