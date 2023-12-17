import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addStudentDataSuccess, addStudentList, getStudnetsAction, loadStudentDataSuccess, loadStuedentList, updateStudent, updateStudentSuccess } from "./students-action";
import { map, mergeMap, switchMap } from "rxjs";
import { StudentService } from "../service/student-service";
import { Student } from "./student.state";
import { Action } from "@ngrx/store";

@Injectable({
    providedIn: 'root'
})
export class StudentEffect {

    constructor(private actions$: Actions, private studentService: StudentService) { }

    loadAllStudents$ = createEffect(
        (): any => {
            return this.actions$.pipe(ofType(getStudnetsAction),
                mergeMap(() => {
                    return this.studentService.getAllStudents().pipe(
                        map((data) => {
                            console.log(data)

                        })
                    )
                }))

        }, { dispatch: false }
    )

    loadStudentList$ = createEffect(
        (): any => {
            return this.actions$.pipe(
                ofType(loadStuedentList),
                mergeMap((): any => {
                    return this.studentService.getAllStudents().pipe(
                        map((data) => {
                            console.log(data);

                            console.log(data);
                            let students: Student[] = [];
                            students = Object.values(data);
                            return loadStudentDataSuccess({ students })
                        })
                    )
                })
            )
        }, { dispatch: true }
    )


    //      addStudentEffect$ = createEffect(
    //         (): any => {
    //             return this.actions$.pipe(ofType(addStudentList),
    //                 mergeMap((action: any) => {
    //                     return this.studentService.addStudent(action.student).pipe(
    //                         map((data) => {
    //                             // let students = Object.values(data)
    //                             // return addStudentDataSuccess({ students })
    //                         })
    //                     )
    //                 })

    //             ))
    // }, { dispatch: false }

    addStudentEffect$ = createEffect(
        (): any => {
            return this.actions$.pipe(ofType(addStudentList), mergeMap((action: any) => {
                return this.studentService.addStudent(action.student).pipe(
                    map((data) => {
                        console.log('addstudent data', data)
                        let student = new Student();
                        student.id = Object.values(data)[0];
                        student.name = action.student.name;
                        return addStudentDataSuccess({ students: student })
                    })
                )
            }))
        }, { dispatch: true }
    )

    updateStudentEffect$ = createEffect(
        (): any => {
            return this.actions$.pipe(ofType(updateStudent), mergeMap((action) => {
                return this.studentService.updateStudent(action.student).pipe(
                    map((data) => {
                        return updateStudentSuccess({ student: action.student })

                    })
                )
            }))

        }, { dispatch: true }
    )

}