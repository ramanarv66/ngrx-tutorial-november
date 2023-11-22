import { createReducer, on } from "@ngrx/store";
import { PostsState } from "./posts.state";
import { title } from "process";
import { addPostAction, deletePostAction, getPostByIdAction, updatePostAction, viewPostAction } from "./posts.action";
import { Action } from "rxjs/internal/scheduler/Action";
import { state } from "@angular/animations";

let initialState: PostsState = {
    posts: [{ id: '1', title: 'Sample title 1', description: 'Sample description 1' },
    { id: '2', title: 'Sample title 2', description: 'Sample description 2' }]
}
export const postsReducer = createReducer(
    initialState,
    // on(postsAction, (state,action) => ({ ...state, id: action.id, title: action.title, description: action.description })),
    on(addPostAction, (state, action) => {
        let post =
            { ...action.eachPost };

        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(viewPostAction, (state, action) => {
        return {
            ...state
        }
    }),
    on(updatePostAction, (state,action)=>{
        // let updatedPost = state.posts.map((eachPost)=> { return action.post.id === eachPost.id? action.post: eachPost});

      let updatedPost=  state.posts.map(eachPost=>eachPost.id === action.post.id ? action.post: eachPost)

        return{
            ...state,
            posts: updatedPost
        }
    }),
    on(deletePostAction, (state,{idToDelete})=>{

        const deletePost = state.posts.filter((eachPost)=>  { 
            return eachPost.id!==idToDelete
        })
        console.log(deletePost)
        return{
            ...state,
            posts: deletePost,
        }
    })

);

