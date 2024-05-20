import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk('product/getProduct', async () => {
    const response = await fetch('https://dummyjson.com/products');
    // Inferred return type: Promise<MyData
    return await response.json();
});