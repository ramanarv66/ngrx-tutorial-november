import { createAction, props } from "@ngrx/store";
import { Student } from "./student.state";
export const GET_STUDENTS = '[students page] get students list'
export const SHOW_STUDENTS_LIST = '[students page] show students list'
export const ADD_STUDENTS_LIST = '[students page] add students data'

//export const getStudnetsAction1 = createAction(GET_STUDENTS);
export const getStudnetsAction = createAction(GET_STUDENTS);

export const showStuedentList = createAction(SHOW_STUDENTS_LIST);
export const addStudentList = createAction(ADD_STUDENTS_LIST);