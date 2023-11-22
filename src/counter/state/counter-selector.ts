import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterInterface } from "./counter-interface";


const getCounterState = createFeatureSelector<CounterInterface>('counterReduc')
export const countSelector = createSelector(getCounterState, (state) => {
  return state.count
})

export const channelSelector = createSelector(getCounterState, (state) => {
  return state.channelName
})
