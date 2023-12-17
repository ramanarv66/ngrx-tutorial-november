import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Appstate } from '../../../state/app.state';
import { updateStudent } from '../../store/students-action';
import { Student } from '../../store/student.state';
import { getStudentById } from '../../store/students-selector';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit{
studentObject: Student = new Student();
  studentForm: FormGroup = new FormGroup({
    id: new FormControl(this.studentObject.id, [Validators.required]),
    name: new FormControl(this.studentObject.name, [Validators.required])
  })
  // postForm: FormGroup = new FormGroup({
  //   title: new FormControl(this.onePost.title, [
  //     Validators.required,
  //     Validators.minLength(6),
  //   ]),
  //   description: new FormControl(this.onePost.description, [
  //     Validators.required,
  //     Validators.minLength(10),
  //   ]),
  // });
  constructor(private activatedRoute: ActivatedRoute, private store: Store<Appstate>){}
  onUpdateStudent() {
    this.studentObject.name = this.studentForm.controls['name'].value;
    this.studentObject.id = this.studentForm.controls['id'].value;

    this.store.dispatch(updateStudent({student: this.studentObject}))

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data)=>{
      console.log(data.get('id'))
      let id = data.get('id');
      this.store.select(getStudentById, {id:id}).subscribe((obj)=>{
        console.log(obj[0].name)
        this.studentObject.name = obj[0].name;
        this.studentObject.id = obj[0].id;
        this.createForm();
      })
     
    },)
    
  }

  createForm() {
    this.studentForm = new FormGroup({
      id: new FormControl(this.studentObject.id),
      name: new FormControl(this.studentObject.name)
      
    })
  }

}
