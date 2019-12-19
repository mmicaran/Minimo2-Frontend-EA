import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentModalPage } from './add-student-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddStudentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStudentModalPageRoutingModule {}
