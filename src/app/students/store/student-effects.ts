import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addStudentDataSuccess, addStudentList, deleteStudent, deleteStudentSuccess, getStudnetsAction, loadStudentDataSuccess, loadStuedentList, updateStudent, updateStudentSuccess } from "./students-action";
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

                          
                            let students1: Student[] = [];
                            let students2: Student[] = [];
                            for(let key in data){
                            let student = new Student();
                            student.id = key;

                            students1.push(student)
                            }
                            students1 = Object.values(data);
                            console.log(students1);
                            return loadStudentDataSuccess({ students: students2 })
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
                    map((data: any) => {
                        debugger
                        let student = new Student();
                        student.id = data.id;

                        student.name = data.name
                        return updateStudentSuccess({ student: student })

                    })
                )
            }))

        }, { dispatch: true }
    )

    deleteStudent$ = createEffect(
        (): any=>{
            return this.actions$.pipe(
                ofType(deleteStudent), mergeMap((action: any)=>{
                    return this.studentService.deleteStudent(action.id).pipe(map((data)=>{
                        return deleteStudentSuccess({id: action.id})

                    }))
                })
            )
        },{dispatch: true}
    );

}