import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Appstate } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { loginStart } from '../state/auth.action';
import { setLoadingSpinner } from '../../store/shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private store:Store<Appstate>) {
    this.loginForm = new FormGroup({ email: new FormControl('', [Validators.required]) , password: new FormControl('', [Validators.required]) })
  }
  onLogin() {
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
    console.log(this.loginForm.value);
   // this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(loginStart({email:this.loginForm.controls['email'].value, password:this.loginForm.controls['password'].value}))
  }

}
