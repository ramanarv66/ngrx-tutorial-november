import {  createFeatureSelector, createSelector} from "@ngrx/store";
import { PostsState } from "./posts.state";
import { postsReducer } from "./posts.reducer";
export const getPostsState = createFeatureSelector<PostsState>('postsReducer');
export const getPostsSelector = 
    createSelector(getPostsState, (state) =>{return state.posts});

  export const getPostByIdSelector = createSelector(getPostsState, (state:PostsState,action: any)=>{
    return state.posts.filter(a=>a.id === action.id)
   });