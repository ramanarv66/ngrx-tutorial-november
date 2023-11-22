
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countSelector } from '../state/counter-selector';
import { Appstate } from '../../app/state/app.state';

@Component({
  selector: 'app-coutner-view',
  templateUrl: './coutner-view.component.html',
  styleUrls: ['./coutner-view.component.css']
})
export class CoutnerViewComponent implements OnInit {


  constructor(private store: Store<Appstate>) {

  }
  counter: number = 0;
  counter1$: Observable<number> = new Observable();
  ngOnInit(): void {
    this.store.select(countSelector).subscribe((data) => {
      this.counter = data;
    })
    this.counter1$ = this.store.select(countSelector);
  }

}
