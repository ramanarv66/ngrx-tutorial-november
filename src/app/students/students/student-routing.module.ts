
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AddStudentComponent } from '../add-student/add-student/add-student.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent , children:[{
    path:'add', component: AddStudentComponent
  }]},
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class StudentsRoutingModule{}