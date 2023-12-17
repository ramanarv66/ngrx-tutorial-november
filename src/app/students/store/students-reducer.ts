import { createReducer, on } from "@ngrx/store";
import { Student, StudentsState } from "./student.state";
import { addStudentDataSuccess, addStudentList, getStudnetsAction, loadStudentDataSuccess, updateStudentSuccess } from "./students-action";

let initialState: StudentsState = {
    students: [{ id: '99', name: 'kumar' }]

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
    })
    // on(loadStudentDataSuccess, (state, action)=>{
    //     return{
    //         ...state,
    //         students: action.students
    //     }
    // })
)