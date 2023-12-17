import { createAction, props } from "@ngrx/store";
import { Student } from "./student.state";
export const GET_STUDENTS = '[students page] get students list'
export const LOAD_STUDENTS_LIST = '[students page] load students list'
export const ADD_STUDENTS_LIST = '[students page] add students data'
export const ADD_STUDENTS_LIST_SUCCESS = '[students page] add students data success'
export const LOAD_STUDENTS_LIST_SUCCESS = '[students page] students data success'

//export const getStudnetsAction1 = createAction(GET_STUDENTS);
export const getStudnetsAction = createAction(GET_STUDENTS);

export const loadStuedentList = createAction(LOAD_STUDENTS_LIST);
export const addStudentList = createAction(ADD_STUDENTS_LIST, props<{student: Student}>());
export const loadStudentDataSuccess = createAction(LOAD_STUDENTS_LIST_SUCCESS, props<{students: Student[]}>());
export const addStudentDataSuccess = createAction(ADD_STUDENTS_LIST_SUCCESS, props<{students: Student}>());