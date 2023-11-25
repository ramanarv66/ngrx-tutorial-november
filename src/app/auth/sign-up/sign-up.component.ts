import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appstate } from '../../state/app.state';
import { signupStart } from '../state/auth.action';
import { setLoadingSpinner } from '../../store/shared/shared.action';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private store:Store<Appstate>) {
    this.signUpForm = new FormGroup({ email: new FormControl('', [Validators.required]) , password: new FormControl('', [Validators.required]) })

  }

  ngOnInit(): void {


  }
  onSignUpSubmit() {

    let email =this.signUpForm.controls['email'].value;
    let password = this.signUpForm.controls['password'].value;
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(signupStart({email,password}))
    return false;
  }

}
