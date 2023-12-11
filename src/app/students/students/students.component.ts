import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllStudentSelector } from '../store/students-selector';
import { Appstate } from '../../state/app.state';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{

  constructor(private store: Store<Appstate>){}

  ngOnInit(): void {
      this.store.select(getAllStudentSelector).subscribe((data)=>{
        console.log(data)
      })
  }

}
