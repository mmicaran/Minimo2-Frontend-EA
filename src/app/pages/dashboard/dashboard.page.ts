import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { Phone } from '../../models/phone';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentService } from '../../services/student.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddStudentModalPage } from '../add-student-modal/add-student-modal.page';
import { AddSubjectModalPage } from '../add-subject-modal/add-subject-modal.page';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  subjectForm: FormGroup;
  formBuilder: any;
  phones: Phone[] = [];
  studies: String;
  student = new Student('', '', '', '', '');
  studentsTelecos: Student[];
  studentsTelematica: Student[];
  studentsAeros: Student[];

  singleSubject = new Subject();
  add: boolean;


  // subjects: Subject[];

  constructor(public subjectService: SubjectService, public studentService: StudentService, private router: Router, private modalCtrl: ModalController) {

  }

  ngOnInit() {
    this.getSubjects();
    this.getStudents();
  }

  async openModal() {
   const myModal = await this.modalCtrl.create({
     component: AddStudentModalPage
   });
   return await myModal.present();
  }

  async openModal2() {
    const myModal = await this.modalCtrl.create({
      component: AddSubjectModalPage
    });
    return await myModal.present();
   }

  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe(res => {
        console.log(res);
        this.subjectService.subjects = res as Subject[];
      });
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(res => {
        console.log(res);
        this.studentService.students = res as Student[];
      });
  }

  getStudentsTelecos() {
    this.studentService.getStudentsTelecos()
      .subscribe(res => {
        console.log(res);
        this.studentsTelecos = res as Student[];
      });
  }

  getStudentsTelematica() {
    this.studentService.getStudentsTelematica()
      .subscribe(res => {
        console.log(res);
        this.studentsTelematica = res as Student[];
      });
  }

  getStudentsAeros() {
    this.studentService.getStudentsAeros()
      .subscribe(res => {
        console.log(res);
        this.studentsAeros = res as Student[];
      });
  }

  addSubject(form: NgForm) {
    console.log(form.value);
    this.subjectService.postSubject(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.getSubjects();

      });

  }
  addStudent(form: NgForm, opertation: string) {
    console.log(form.value);
    console.log(form.value.key);

    // this.phones.set(form.value.key, form.value.value);

    this.phones = [];


    this.phones.push({
      key: "Home",
      value: form.value.studentFijo
    });

    this.phones.push({
      key: "Mobile",
      value: form.value.studentMovil
    });

    if (form.value.aeros) {
      this.studies = "aeros";
    }

    if (form.value.telematica) {
      this.studies = "telematica";
    }

    if (form.value.telecos) {
      this.studies = "telecos";
    }

    this.student.name = form.value.name;
    this.student.address = form.value.address,
    this.student.phones = this.phones;
    this.student.studies = this.studies;


    console.log(this.student);

    this.studentService.postStudent(this.student)
      .subscribe(res => {
        console.log(res);
        this.getStudents();
        this.resetForm(form);

      });

  }

  deleteSubject(_id: string) {
    console.log(_id);
    if (confirm('Are you sure?')) {
      this.subjectService.deleteSubject(_id)
        .subscribe(res => {
          this.getSubjects();
        });
    }
  }

  deleteStudent(_id: string) {
    console.log(_id);
    if (confirm('Are you sure?')) {
      this.studentService.deleteStudent(_id)
        .subscribe(res => {
          this.getStudents();
        });
    }
  }



  subjectDetail(_id: string) {

    this.subjectService.getSubjectDetail(_id)
      .subscribe(res => {
        console.log(res);
        this.singleSubject = res as Subject;
        this.router.navigate(['/subject', this.singleSubject._id]);
      },
        err => {
          console.log(err);
        });
  }

  editStudent(_id: string) {

    this.router.navigate(['/student', _id]);

  }





  resetForm(form ?: NgForm) {
    if (form) {
      form.reset();
    }
  }
}
