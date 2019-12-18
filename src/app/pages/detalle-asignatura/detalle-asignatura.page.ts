import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {

  id: string;
  private sub: any;
  subject = new Subject();
  student = new Student('', '', '', '','');
  students: Student[];



  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, public subjectService: SubjectService, public studentService: StudentService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getSubjectDetails(this.id);
    });

    this.getStudents();

  }

  getSubjectDetails(_id: string) {

    this.subjectService.getSubjectDetail(_id)
      .subscribe(res => {
        console.log(res);
        this.subject = res as Subject;
        this.students = this.subject.students;
        console.log(this.students);
      },
        err => {
          console.log(err);
        });
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(res => {
        console.log(res);
        this.studentService.students = res as Student[];
      });
  }

  addStudentInSubject(studentId: string, subjectId: string, _id: string) {

    const data = {
      studentId: studentId,
      subjectId: subjectId
    };

    console.log(data);

    this.subjectService.addStudentInSubject(data).subscribe(res => {
      this.getSubjectDetails(this.id);
    });
  }

  deleteStudentInSubject(studentId: string, subjectId: string, _id: string) {

    const data = {
      studentId: studentId,
      subjectId: subjectId
    };

    console.log(data);

    this.subjectService.deleteStudentInSubject(data).subscribe(res => {
      this.getSubjectDetails(this.id);
    });
  }

}
