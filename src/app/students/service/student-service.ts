import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentsState } from "../store/student.state";


@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private httpClient: HttpClient){}

    getAllStudents(){
        this.httpClient.get<StudentsState>('https://ngrx-crud-nov-default-rtdb.asia-southeast1.firebasedatabase.app/students.json')
    }

}