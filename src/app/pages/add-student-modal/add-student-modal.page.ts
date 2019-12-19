import { ModalController } from '@ionic/angular';
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

@Component({
  selector: 'app-add-student-modal',
  templateUrl: './add-student-modal.page.html',
  styleUrls: ['./add-student-modal.page.scss'],
})
export class AddStudentModalPage implements OnInit {

  subjectForm: FormGroup;
  formBuilder: any;
  phones: Phone[] = [];
  studies: String[] = [];
  student = new Student('', '', '', '', '');
  studentsTelecos: Student[];
  studentsTelematica: Student[];
  studentsAeros: Student[];

  singleSubject = new Subject();
  add: boolean;

  constructor(private modalCntrl: ModalController, private studentService: StudentService) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCntrl.dismiss();
  }

  addStudent(form: NgForm, opertation: string) {
    console.log(form.value);
    console.log(form.value.key);

    // this.phones.set(form.value.key, form.value.value);

    this.studies = [];
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
      this.studies.push("aeros");
    }

    if (form.value.telematica) {
      this.studies.push("telematica");
    }

    if (form.value.telecos) {
      this.studies.push("telecos");
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

    this.closeModal();

  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(res => {
        console.log(res);
        this.studentService.students = res as Student[];
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

}
