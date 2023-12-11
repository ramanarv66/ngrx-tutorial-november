import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Student, StudentsState } from "./student.state";
export const STUDENT_STATE_NAME = 'studentFeature'

export const studentSelector = createFeatureSelector<StudentsState>(STUDENT_STATE_NAME);

// createSelector(studentSelector, (action)=>{return action.})

export const getAllStudentSelector = createSelector(studentSelector, (state) => { return state.students })