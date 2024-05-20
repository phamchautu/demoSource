import { ReducersMapObject } from '@reduxjs/toolkit';
import AuthSlices, { AuthState } from './slices/AuthSlices';
import ProductSlices, { ProductState } from './slices/ProductSlices';


export interface AppState {
    Auth: AuthState
    Product: ProductState
}

export const RootReducers: ReducersMapObject = {
    Auth: AuthSlices,
    Product: ProductSlices
};
