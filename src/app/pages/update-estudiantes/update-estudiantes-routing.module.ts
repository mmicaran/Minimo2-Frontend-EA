import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEstudiantesPage } from './update-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEstudiantesPageRoutingModule {}
