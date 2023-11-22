import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { authoriztionReducer } from "./state/auth.reducer";
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from "./state/auth.effect";
const routes: Routes =[
    {path:'', children:[
        {path:'', redirectTo:'login', pathMatch:"full"},
        {path:'login', component:LoginComponent}
    ]}
]

@NgModule({
    imports:[CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, 
        StoreModule.forFeature('authorizationFeature', authoriztionReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    declarations:[
    LoginComponent
  ]
})
export class AuthModule{}