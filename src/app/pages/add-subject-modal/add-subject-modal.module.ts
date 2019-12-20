import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSubjectModalPageRoutingModule } from './add-subject-modal-routing.module';

import { AddSubjectModalPage } from './add-subject-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSubjectModalPageRoutingModule
  ],
  declarations: [AddSubjectModalPage]
})
export class AddSubjectModalPageModule {}
