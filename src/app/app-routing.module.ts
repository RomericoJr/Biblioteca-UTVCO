import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
///
import { ListaLibrosComponent } from './admin/lista-libros/lista-libros.component';
import { RegistroLibroComponent } from './admin/registro-libro/registro-libro.component';
import { EditarLibroComponent } from './admin/editar-libro/editar-libro.component';
import { InicioAdmComponent } from './admin/inicio-adm/inicio-adm.component';
import { LibrosPrestadosComponent } from './admin/libros-prestados/libros-prestados.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'home',
  component: HomeComponent
  },
  { path: 'book', loadChildren: () => import('./components/book/book.module').then(m => m.BookModule)},
  { path: 'estadias', loadChildren: () => import('./components/estadias/estadias.module').then(m => m.EstadiasModule)},
  { path: 'header', loadChildren: () => import('./components/header/header.module').then(m => m.HeaderModule)},
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  
  ////
  {path:'listalibros', component:ListaLibrosComponent}, 
  {path:'registroLibro', component:RegistroLibroComponent}, 
  {path:'editarLibro', component:EditarLibroComponent}, 
  {path:'inicio-adm', component:InicioAdmComponent}, 
  {path:'libros-prestados', component:LibrosPrestadosComponent}, 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
