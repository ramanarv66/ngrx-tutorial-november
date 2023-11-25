import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const authFeatureBaseSelector = createFeatureSelector<AuthState>('authorizationFeature')

export const authSelector = createSelector(authFeatureBaseSelector,(state)=>{return state}) 

export const isAuthenticated = createSelector(authFeatureBaseSelector,(state)=>{
    return state.user? true: false
})