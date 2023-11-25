import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { loginStart, loginSuccess, signupSuccess } from "./auth.action";

export const authoriztionReducer = createReducer(initialState, 
on(signupSuccess,(state,action)=>{
    return{
        ...state,
        user: action.user
    }
}),
on(loginSuccess,(state,action)=>{
    return{
        ...state,
        user: action.user
    }
})
)