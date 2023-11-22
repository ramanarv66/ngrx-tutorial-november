import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction('increment');
export const decrementAction = createAction('decrement');
export const resetAction = createAction('reset');
export const customCounterAction = createAction('customCounterAction', props<{ val: number }>());

export const updateChannelAction = createAction('updateChannelAction', props<{ someValue: string }>())