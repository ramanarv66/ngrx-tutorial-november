import { Injectable } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.action";
import { mergeMap,map } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthEffect2 {


    constructor(private actions$: Actions, private authService: AuthService) {


    }


    login$ = createEffect(()=>{


        return this.actions$.pipe(ofType(loginStart),

        mergeMap((action)=> {
            return this.authService.login(action.email,action.password).pipe(
                map((data)=>
                
                {
                        return loginSuccess()
                })
            )
        }

        )
        
        
        )
    }
       
        
    )



    login3$ = createEffect(() :any => {

        return this.actions$.pipe(ofType(loginStart),
        mergeMap(
            (action)=>{
                return this.authService.login(action.email,action.password).pipe(
                    map((data)=> {return loginSuccess})
                )
            }
        )
        )

    })


}