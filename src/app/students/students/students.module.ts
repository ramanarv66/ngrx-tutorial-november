import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './student-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
