import { AppState } from '@core/redux/rootReducer'
import { createSelector } from "@reduxjs/toolkit";


export const getAuthState = (state: AppState) => state.Auth

export const getIsSignIn = createSelector(getAuthState, state => state.isSignIn)