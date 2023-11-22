// action action
import { createAction,props } from "@ngrx/store";
import { Post, PostsState } from "./posts.state";
export const viewPostAction = createAction('viewPostAction');
// export const postsAction = createAction('postsAction', props<PostsState>());

export const addPostAction = createAction('addPost', props<{eachPost: Post}>())

export const getPostByIdAction = createAction('getPostByIdAction', props<{id: string}>())

export const updatePostAction = createAction('updatePost', props<{post: Post}>())

export const deletePostAction = createAction('deletePost', props<{idToDelete:string}>())