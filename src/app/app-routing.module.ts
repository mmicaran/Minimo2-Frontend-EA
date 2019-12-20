import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'update-estudiantes',
    loadChildren: () => import('./pages/update-estudiantes/update-estudiantes.module').then( m => m.UpdateEstudiantesPageModule)
  },
  {
    path: 'detalle-asignatura',
    loadChildren: () => import('./pages/detalle-asignatura/detalle-asignatura.module').then( m => m.DetalleAsignaturaPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'add-subject-modal',
    loadChildren: () => import('./pages/add-subject-modal/add-subject-modal.module').then( m => m.AddSubjectModalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
