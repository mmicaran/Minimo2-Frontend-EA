import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEstudiantesPageRoutingModule } from './update-estudiantes-routing.module';

import { UpdateEstudiantesPage } from './update-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEstudiantesPageRoutingModule
  ],
  declarations: [UpdateEstudiantesPage]
})
export class UpdateEstudiantesPageModule {}
