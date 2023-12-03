import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ApartListComponent } from './components/book/apart-list/apart-list.component';
import { ProfileUserComponent } from './auth/profile-user/profile-user.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'apart-list',
    component: ApartListComponent
  },
  {
    path: 'profile-user',
    component: ProfileUserComponent
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminOrStudentModule { }
