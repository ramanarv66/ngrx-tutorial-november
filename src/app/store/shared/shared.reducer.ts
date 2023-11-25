import { createReducer, on } from "@ngrx/store";
import { initialState } from "./shared.state";
import { setLoadingSpinner, showErrorMessageAction } from "./shared.action";

export const sharedReducer =createReducer(
    initialState,
    on(setLoadingSpinner, (state, action) => {
    return {
        ...state,
        showLoading: action.status
    }
}),
on(showErrorMessageAction,(state,action)=>{
    return {
        ...state,
        errorMessage: action.message
    }
})

)