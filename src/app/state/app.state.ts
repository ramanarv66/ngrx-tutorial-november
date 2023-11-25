import { CounterInterface } from "../../counter/state/counter-interface";
import { PostsState } from "../posts/posts-list/state/posts.state";
import { postsReducer } from "../posts/posts-list/state/posts.reducer";
import {counterReducer} from '../../counter/state/counter.reducer';
import { sharedReducer } from "../store/shared/shared.reducer";
import { SharedState } from "../store/shared/shared.state";
import { AuthState } from "../auth/state/auth.state";
import { authoriztionReducer } from "../auth/state/auth.reducer";
 const SHARED_STATE_NAME = 'shared';
 const AUTH_STATE_NAME = 'authorizationFeature';


export interface Appstate{
   
    [SHARED_STATE_NAME]: SharedState;
    [AUTH_STATE_NAME]: AuthState
}

export const Appreducer ={
  
    [SHARED_STATE_NAME]: sharedReducer,
    [AUTH_STATE_NAME]: authoriztionReducer

}