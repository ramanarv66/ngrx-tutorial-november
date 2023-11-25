import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { AuthService } from "../../services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";
import { Observable, exhaustMap, map, mergeMap, pipe } from "rxjs";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { User } from "../../models/model";
import { Appstate } from "../../state/app.state";
import { setLoadingSpinner } from "../../store/shared/shared.action";


@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private store: Store<Appstate>) {

    }
    login$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                this.store.dispatch(setLoadingSpinner({status:true}))
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                      let user: User =  this.authService.formateUser(data)
                      this.store.dispatch(setLoadingSpinner({status:false}))
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