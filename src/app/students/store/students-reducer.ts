import { createReducer, on } from "@ngrx/store";
import { Student, StudentsState } from "./student.state";
import { addStudentDataSuccess, addStudentList, deleteStudentSuccess, getStudnetsAction, loadStudentDataSuccess, updateStudentSuccess } from "./students-action";

let initialState: StudentsState = {
    students: [],

}

export const studentReducer = createReducer(initialState, on(getStudnetsAction, (state, action) => {
    return {
        ...state
    }
}),
    on(loadStudentDataSuccess, (state, action) => {
        return {
            ...state,
            students: action.students
        }
    }),
    on(addStudentDataSuccess, (state, action) => {
        let student = { ...action.students }
        return {
            ...state,
            students: [...state.students, student]
        }
    }),
    on(updateStudentSuccess, (state, action) => {

        return {
            ...state,
            students:[...state.students, action.student]
        }
    }),
    // on(deletePostAction, (state,{idToDelete})=>{

    //     const deletePost = state.posts.filter((eachPost)=>  { 
    //         return eachPost.id!==idToDelete
    //     })
    //     console.log(deletePost)
    //     return{
    //         ...state,
    //         posts: deletePost,
    //     }
    // })
    on(deleteStudentSuccess, (state, {id})=>{
        debugger
        const deleteStudent = state.students.filter((eachStudent)=>{
          return eachStudent.id! == id
        })
        return{
            ...state,
            students: deleteStudent
        }
    })
    // on(deleteStudentSuccess, (state,{idToDelet})=>{
    //     // const deletePost = state.posts.filter((eachPost)=>  { 
    //     //     return eachPost.id!==idToDelete
    //     // })

    //     const deleteStudent = state.students.filter((eachPost)=> {
    //         return eachPost.id!==idToDelete 
    //     })
    //     return{
    //         ...state,
    //         students: deleteStudent
    //     }
    // })
    // on(loadStudentDataSuccess, (state, action)=>{
    //     return{
    //         ...state,
    //         students: action.students
    //     }
    // })
)