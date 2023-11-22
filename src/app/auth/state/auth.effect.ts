import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { AuthService } from "../../services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
import { Observable, exhaustMap, map, mergeMap, pipe } from "rxjs";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { User } from "../../models/model";


@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) {

    }
    login$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                      let user: User =  this.authService.formateUser(data)
                        return loginSuccess({user});

                    })
                )

            })
        )
    }
    );

    // login2$ = createEffect(
    //     () => {
    //         return this.actions$.pipe(ofType(loginStart), mergeMap(
    //             (action) => {
    //                 return this.authService.login(action.email, action.password).pipe(
    //                     map((data) => {
    //                         return loginSuccess()
    //                     })
    //                 )
    //             }
    //         ))
    //     }
    // )

    // login3$ = createEffect(() :any => {

    //     return this.actions$.pipe(ofType(loginStart),
    //     mergeMap(
    //         (action)=>{
    //             return this.authService.login(action.email,action.password).pipe(
    //                 map((data)=> {return loginSuccess})
    //             )
    //         }
    //     )
    //     )

    // })




    // login$ = createEffect(
    //     () => {
    //         return this.actions$.pipe(ofType(loginStart), exhaustMap((action) => {
    //             return this.authService.login(action.email, action.password).pipe(
    //                 map((data) => {
    //                     return loginSuccess();
    //                 }))
    //         })
    //         )
    //     }
    // )
}