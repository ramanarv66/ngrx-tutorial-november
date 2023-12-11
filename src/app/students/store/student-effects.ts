import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getStudnetsAction } from "./students-action";
import { map, mergeMap, switchMap } from "rxjs";
import { StudentService } from "../service/student-service";

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



}