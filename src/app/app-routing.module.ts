import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'book', loadChildren: () => import('./components/book/book.module').then(m => m.BookModule)},
  { path: 'estadias', loadChildren: () => import('./components/estadias/estadias.module').then(m => m.EstadiasModule)},
  { path: 'header', loadChildren: () => import('./components/header/header.module').then(m => m.HeaderModule)},
  //{ path: 'login', component: LoginComponent, ...,canActivate(()=>) },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
