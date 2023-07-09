import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'book', loadChildren: () => import('./components/book/book.module').then(m => m.BookModule)},
  { path: 'estadias', loadChildren: () => import('./components/estadias/estadias.module').then(m => m.EstadiasModule)},
  { path: 'header', loadChildren: () => import('./components/header/header.module').then(m => m.HeaderModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
