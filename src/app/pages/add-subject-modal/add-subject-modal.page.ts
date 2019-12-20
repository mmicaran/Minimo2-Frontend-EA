import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { ModalController } from '@ionic/angular';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-add-subject-modal',
  templateUrl: './add-subject-modal.page.html',
  styleUrls: ['./add-subject-modal.page.scss'],
})
export class AddSubjectModalPage implements OnInit {

  subjectForm: FormGroup;
  formBuilder: any;
  name: string;
  students: Student[];
  subject = new Subject();


  constructor(private modalCtrl: ModalController, private subjectService: SubjectService) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  addSubject(form: NgForm){
    this.subject.name = form.value.name;
    this.subjectService.postSubject(this.subject)
      .subscribe(res =>{
        console.log(res);
        this.getSubject();
        this.resetForm(form);
      });
    this.closeModal();
  }

  getSubject() {
    this.subjectService.getSubjects()
      .subscribe(res => {
        console.log(res);
        this.subjectService.subjects = res as Subject[];
      });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }



}
