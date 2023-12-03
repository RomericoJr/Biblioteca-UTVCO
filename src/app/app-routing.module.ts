import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { StudentGuard } from './guards/student.guard';
import { AuthGuard } from '@angular/fire/auth-guard';
///
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'BibliotecaUTVCO-Administracion-UTVCO-funciones',
    component: HomeComponent,
    loadChildren: () => import('./components/admin.module').then(m => m.AdminModule),
    // canActivate: [AdminGuard, AuthGuard]
  },
  { path: 'BibliotecaUTVCO',
  component: HomeComponent,
  loadChildren: () => import('./components/book/book.module').then(m => m.BookModule),
  // canActivate:[StudentGuard,AuthGuard]
  },
  // { path: 'estadias',
  // component: HomeComponent,
  // loadChildren: () => import('./components/estadias/estadias.module').then(m => m.EstadiasModule)},

  { path: '**', redirectTo: 'auth', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
