import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Student, StudentsState } from "../store/student.state";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private httpClient: HttpClient){}

    getAllStudents(): Observable<StudentsState>{
       return this.httpClient.get<StudentsState>('https://ngrx-crud-nov-default-rtdb.asia-southeast1.firebasedatabase.app/students.json')
    }
    addStudent(student: Student): Observable<string>{
       return this.httpClient.post<string>('https://ngrx-crud-nov-default-rtdb.asia-southeast1.firebasedatabase.app/students.json',student)
    }

}