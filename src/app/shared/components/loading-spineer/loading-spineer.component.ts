import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../../../state/app.state';

@Component({
  selector: 'app-loading-spineer',
  templateUrl: './loading-spineer.component.html',
  styleUrl: './loading-spineer.component.css'
})
export class LoadingSpineerComponent implements OnInit {


  showSpinner: boolean = false;
  constructor(private store:Store<Appstate>){}

  ngOnInit(): void {
      this.store.select('shared').subscribe((data)=>{
        this.showSpinner = data.showLoading;
      })
  }

}
