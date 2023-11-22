import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterInterface } from '../state/counter-interface';
import { channelSelector } from '../state/counter-selector';
import { customCounterAction, updateChannelAction } from '../state/counter.action';
import { Appstate } from '../../app/state/app.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  countval: number = 0;
  channelName: string = '';
  channel$: Observable<string> = new Observable();
  constructor(private store: Store<Appstate>) { }
  ngOnInit(): void {
    // this.store.select(channelSelector).subscribe(channelName => {

    //   this.channelName = channelName;
    // });

    this.channel$ = this.store.select(channelSelector);
  }



  send(value: any) {
    this.countval = +value.value;
    this.store.dispatch(customCounterAction({ val: this.countval }))
  }
  updateChannelName() {
    this.store.dispatch(updateChannelAction({ someValue: 'test' + this.countval }))
  }

}
