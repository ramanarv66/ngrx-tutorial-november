import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Appstate } from '../../../state/app.state';
import { Student } from '../../store/student.state';
import { addStudentList } from '../../store/students-action';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  studentForm: FormGroup = new FormGroup({
    id: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {

  }

  showDescriptionErrors() {

  }

  onAddStudent() {
    console.log(this.studentForm)
    let student: Student = {
      id: this.studentForm.controls['id'].value,
     name: this.studentForm.controls['name'].value,


    }

    this.store.dispatch(addStudentList({student}))

  }
 

}
