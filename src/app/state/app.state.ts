import { CounterInterface } from "../../counter/state/counter-interface";
import { PostsState } from "../posts/posts-list/state/posts.state";
import { postsReducer } from "../posts/posts-list/state/posts.reducer";
import {counterReducer} from '../../counter/state/counter.reducer';
import { sharedReducer } from "../store/shared/shared.reducer";
import { SharedState } from "../store/shared/shared.state";
 const SHARED_STATE_NAME = 'shared';

export interface Appstate{
   
    [SHARED_STATE_NAME]: SharedState;
}

export const Appreducer ={
  
    [SHARED_STATE_NAME]: sharedReducer
}