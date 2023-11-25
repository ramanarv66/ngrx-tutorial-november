import { Component } from '@angular/core';
import { Appstate } from './state/app.state';
import { Store } from '@ngrx/store';
import { getLoading } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-app';

  showSpinner: boolean = false;
  constructor(private store:Store<Appstate>){}

  ngOnInit(): void {
      this.store.select(getLoading).subscribe((data)=>{
        this.showSpinner = data;
      })
  }
}
