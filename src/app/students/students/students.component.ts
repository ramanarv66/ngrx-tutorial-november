import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllStudentSelector } from '../store/students-selector';
import { Appstate } from '../../state/app.state';
import { LOAD_STUDENTS_LIST, getStudnetsAction, loadStuedentList } from '../store/students-action';
import { Student } from '../store/student.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  studentData: Student[] = [];
  constructor(private store: Store<Appstate>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(getAllStudentSelector).subscribe((data) => {
      this.studentData = data;
      console.log(this.studentData)

    })
    this.store.dispatch(loadStuedentList());
  }

  update(id: any) {
    this.router.navigate(['students/edit/' + id])

  }
  delete() {

  }
}