import { createAction, props } from "@ngrx/store";
import { Student } from "./student.state";
export const GET_STUDENTS = '[students page] get students list'

export const getStudnetsAction = createAction(GET_STUDENTS);