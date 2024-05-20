import { createSlice } from '@reduxjs/toolkit';
import { getProduct } from '../thunks/ProductThunk';
// import { fetchData } from './ProductThunk';
// import { Product } from '../type';
export type Product = {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
};

export interface ProductState {
    products: Product[];
    status: 'loading' | 'finished' | 'error';
}

const initialState: ProductState = {
    products: [],
    status: 'finished',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProduct.pending, state => {
            state.status = 'loading';
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.status = 'finished';
            state.products = action.payload.products;
        });
        builder.addCase(getProduct.rejected, state => {
            state.status = 'error';
        });
    },
});

// Action creators are generated for each case reducer function
export const { } = productsSlice.actions;

export default productsSlice.reducer;