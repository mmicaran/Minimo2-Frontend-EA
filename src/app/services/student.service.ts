import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly URL_API = 'http://localhost:3000/students';
  selectedStudent: Student;
  students: Student[];

  constructor(private http: HttpClient) {
  }

  getStudents() {
    return this.http.get(this.URL_API);
  }

  getStudent(_id: string) {
    return this.http.get(this.URL_API + `/${_id}`);
  }

  postStudent(student: Student) {
    return this.http.post(this.URL_API, student);
  }

  putStudent(student: Student) {
    return this.http.put(this.URL_API + `/${student._id}`, student);
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  getStudentsTelecos(){
    return this.http.get('http://localhost:3000/telecos');
  }

  getStudentsTelematica(){
    return this.http.get('http://localhost:3000/telematica');
  }

  getStudentsAeros(){
    return this.http.get('http://localhost:3000/aeros');
  }


}
