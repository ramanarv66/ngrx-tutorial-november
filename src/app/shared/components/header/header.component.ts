import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Appstate } from '../../../state/app.state';
import { isAuthenticated } from '../../../auth/state/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  logOut: boolean = false;

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {
    this.store.select(isAuthenticated).subscribe((data) => {
      this.logOut = data;
    })
  }



}
