import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterInterface } from '../state/counter-interface';
import { decrementAction, incrementAction, resetAction } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counterReduc: CounterInterface }>) { }

  increment() {
    this.store.dispatch(incrementAction())
  }
  decrement() {
    this.store.dispatch(decrementAction())
  }
  reset() { this.store.dispatch(resetAction()) }


}
