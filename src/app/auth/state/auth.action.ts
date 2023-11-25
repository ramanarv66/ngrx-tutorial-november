import { createAction, props } from "@ngrx/store";
import { User } from "../../models/model";
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';
export const LOGIN_FAIL = '[auth page] login fail';
export const AUTO_LOGIN = '[auth page] autologin';

export const loginStart =createAction(LOGIN_START,props<{email:string;password:string}>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{user: User}>())
export const loginFail= createAction(LOGIN_FAIL)

export const signupStart = createAction(SIGNUP_START, props<{email:string, password: string}>())
export const signupSuccess = createAction(SIGNUP_SUCCESS, props<{user: User}>());
export const autoLogin = createAction(AUTO_LOGIN);