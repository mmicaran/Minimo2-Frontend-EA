import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { Phone } from '../../models/phone';
import { FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student-modal',
  templateUrl: './add-student-modal.page.html',
  styleUrls: ['./add-student-modal.page.scss'],
})
export class AddStudentModalPage implements OnInit {

  studentForm: FormGroup;
  formBuilder: any;
  phones: Phone[] = [];
  studies: String;
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

  addStudent(form: NgForm) {
    console.log(form.value);
    console.log(form.value.key); 
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
      this.studies =  "aeros";
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
