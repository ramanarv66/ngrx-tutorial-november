import { createAction, props } from "@ngrx/store";
export const SET_LOADING_ACTION = '[shared state] set loading spinner';
export const ERROM_MSG_ACTION = '[shared state] show error message';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ status: boolean }>()
);

export const showErrorMessageAction = createAction(ERROM_MSG_ACTION, props<{message: string}>());