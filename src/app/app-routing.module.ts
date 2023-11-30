import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
///
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'BibliotecaUTVCO',
  component: HomeComponent,
  loadChildren: () => import('./components/book/book.module').then(m => m.BookModule)
  },
  { path: 'estadias', loadChildren: () => import('./components/estadias/estadias.module').then(m => m.EstadiasModule)},
  { path: '**', redirectTo: 'auth', pathMatch: 'full' },

  ////


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
