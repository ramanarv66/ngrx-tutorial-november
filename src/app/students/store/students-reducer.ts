import { createReducer, on } from "@ngrx/store";
import { Student, StudentsState } from "./student.state";
import { getStudnetsAction } from "./students-action";

let initialState: StudentsState = {
    students: [{ id: '99', name: 'kumar' }]

}

export const studentReducer = createReducer(initialState, on(getStudnetsAction, (state, action) => {
    return {
        ...state
    }
}))