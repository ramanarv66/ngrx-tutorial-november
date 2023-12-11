import { Component } from '@angular/core';
import { Appstate } from './state/app.state';
import { Store } from '@ngrx/store';
import { getLoading, showErrorMsgSelector } from './store/shared/shared.selector';
import { autoLogin } from './auth/state/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-app';
  error = '';

  showSpinner: boolean = false;
  constructor(private store:Store<Appstate>){}

  ngOnInit(): void {
      this.store.select(getLoading).subscribe((data)=>{
        this.showSpinner = data;
      })
      this.store.select(showErrorMsgSelector).subscribe((data)=>{
        this.error = data;
      })
      this.store.dispatch(autoLogin())
  }
}
