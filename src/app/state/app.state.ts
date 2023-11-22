import { CounterInterface } from "../../counter/state/counter-interface";
import { PostsState } from "../posts/posts-list/state/posts.state";
import { postsReducer } from "../posts/posts-list/state/posts.reducer";
import {counterReducer} from '../../counter/state/counter.reducer';

export interface Appstate{
    counterState: CounterInterface;
    postsState: PostsState;
}

export const Appreducer ={
    counterReduc: counterReducer,
    postsReducer: postsReducer
}