import { createAction, props } from "@ngrx/store";
import { Student } from "./student.state";
export const GET_STUDENTS = '[students page] get students list'
export const LOAD_STUDENTS_LIST = '[students page] load students list'
export const ADD_STUDENTS_LIST = '[students page] add students data'
export const ADD_STUDENTS_LIST_SUCCESS = '[students page] add students data success'
export const LOAD_STUDENTS_LIST_SUCCESS = '[students page] students data success'
export const LOAD_EACH_STUDENT = '[students page] load each student'
export const LOAD_EACH_STUDENT_SUCCESS = '[students page] load each student success'
export const UPDATE_STUDENT_SUCCESS = '[students page] update student success'
export const DELETE_STUDENT = '[students page] delete student'
export const DELETE_STUDENT_SUCCESS = '[students page] delete student success'

//export const getStudnetsAction1 = createAction(GET_STUDENTS);
export const UPDATE_STUDENT = '[students page] update student'
export const getStudnetsAction = createAction(GET_STUDENTS);

export const loadStuedentList = createAction(LOAD_STUDENTS_LIST);
export const addStudentList = createAction(ADD_STUDENTS_LIST, props<{student: Student}>());
export const loadStudentDataSuccess = createAction(LOAD_STUDENTS_LIST_SUCCESS, props<{students: Student[]}>());
export const addStudentDataSuccess = createAction(ADD_STUDENTS_LIST_SUCCESS, props<{students: Student}>());
export const loadEachStudent = createAction(LOAD_EACH_STUDENT)
export const loadEachStudentSuccess = createAction(LOAD_EACH_STUDENT_SUCCESS, props<{student: Student}>())

export const updateStudent = createAction(UPDATE_STUDENT, props<{student: Student}>())
export const updateStudentSuccess = createAction(UPDATE_STUDENT_SUCCESS, props<{student: Student}>())

export const deleteStudent = createAction(DELETE_STUDENT, props<{id: String}>())
export const deleteStudentSuccess = createAction(DELETE_STUDENT_SUCCESS, props<{id: String}>())