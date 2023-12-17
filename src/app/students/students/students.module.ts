import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './student-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentsComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentsModule { }
