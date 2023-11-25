import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { AuthService } from "../../services/auth.service";
import { autoLogin, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.action";
import { Observable, catchError, exhaustMap, map, mergeMap, of, pipe, tap } from "rxjs";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { User } from "../../models/model";
import { Appstate } from "../../state/app.state";
import { setLoadingSpinner, showErrorMessageAction } from "../../store/shared/shared.action";
import { Router } from "@angular/router";
import { error } from "console";


@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private store: Store<Appstate>,
        private router: Router) {

    }
    callSignup = false;
    login$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action) => {
                this.store.dispatch(setLoadingSpinner({ status: true }))
                return this.authService.login(action.email, action.password).pipe(
                    map((data) => {
                        let user: User = this.authService.formateUser(data)
                        this.authService.setUserInLocalStorage(user);
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        return loginSuccess({ user });

                    }),
                    catchError((errorResponse: any) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        console.log(errorResponse)
                        //  this.store.dispatch()
                        return of(showErrorMessageAction({ message: errorResponse.error.error.message }))
                    })
                )

            })
        )
    }
    );


    loginRedirect$ = createEffect((): any => {
        return this.actions$.pipe(ofType(loginSuccess), tap(
            (data) => {
                this.router.navigate(["/"])
            }
        ))
    }, { dispatch: false })


    signup$ = createEffect(() => {
        let abc = false
        return this.actions$.pipe(
            ofType(signupStart),
            mergeMap((action) => {
                //  this.store.dispatch(setLoadingSpinner({ status: true }))
                return this.authService.signup(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }))
                        const user = this.authService.formateUser(data);
                        this.authService.setUserInLocalStorage(user);
                        return signupSuccess({ user });
                    }),
                    catchError((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        return of(showErrorMessageAction({ message: data.error.error.message }))
                    })
                )
            }))
    }
    )

    signupRedirect$ = createEffect(
        (): any => {
            return this.actions$.pipe(ofType(signupSuccess), tap(
                (data) => {
                    this.router.navigate(["/"])
                }, catchError((data) => {
                    this.store.dispatch(setLoadingSpinner({ status: false }))
                    return of(showErrorMessageAction({ message: data.error.error.message }))
                })
            ))
        }, { dispatch: false }
    )

    autologin$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(autoLogin),
                map((action) => {
                    const user = this.authService.getUserFromLocalStorage();
                    console.log(action)
                })
            );
        }, { dispatch: false }
    );
}