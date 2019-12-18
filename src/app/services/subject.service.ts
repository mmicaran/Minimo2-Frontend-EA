import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  readonly URL_API = 'http://localhost:3000/subjects';
  selectedSubject: Subject;
  subjects: Subject[];

  constructor(private http: HttpClient) {
    this.selectedSubject = new Subject();
   }

  getSubjects() {
    return this.http.get(this.URL_API);
  }

  postSubject(subject: Subject) {
    return this.http.post(this.URL_API, subject);
  }

  deleteSubject(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  getSubjectDetail(_id: string) {
    return this.http.get(this.URL_API + `/${_id}/details`);
  }

  addStudentInSubject(data: any) {
    return this.http.post(this.URL_API + `/addstudent`, data);
  }

  deleteStudentInSubject(data: any) {
    return this.http.post(this.URL_API + `/deletestudent`, data);

  }





}
