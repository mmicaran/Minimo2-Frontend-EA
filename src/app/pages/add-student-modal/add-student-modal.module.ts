import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStudentModalPageRoutingModule } from './add-student-modal-routing.module';

import { AddStudentModalPage } from './add-student-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStudentModalPageRoutingModule
  ],
  declarations: [AddStudentModalPage]
})
export class AddStudentModalPageModule {}
