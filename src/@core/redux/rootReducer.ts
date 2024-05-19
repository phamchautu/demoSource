import { ReducersMapObject } from '@reduxjs/toolkit';
import AuthSlices, { AuthState } from './slices/AuthSlices';


export interface AppState {
    Auth: AuthState
}

export const RootReducers: ReducersMapObject = {
    Auth: AuthSlices
};
