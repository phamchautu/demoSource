import { AppState } from "@core/redux/rootReducer";
import { createSelector } from "@reduxjs/toolkit";

const getProductState = (state: AppState) => state.Product

export const getProductData = createSelector(getProductState, state => state.products) 