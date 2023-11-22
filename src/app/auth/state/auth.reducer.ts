import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { loginStart } from "./auth.action";

export const authoriztionReducer = createReducer(initialState, on(loginStart, (state, action) => {
    return {
        ...state
    }
}))