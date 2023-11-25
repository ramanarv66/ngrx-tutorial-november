import { SharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const SHARED_STATE_NAME = 'shared';

// export const spinnerSelector = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

// export const getLoading = createSelector(spinnerSelector,(action)=>{return action.showLoading});


const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});