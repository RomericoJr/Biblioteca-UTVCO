import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './components/book/book.module';
import { EstadiasModule } from './components/estadias/estadias.module';
import { HeaderModule } from './components/header/header.module';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { FiltBookPipe } from './components/filt-book.pipe';
//Nuevas importaciones
import { ListaLibrosComponent } from './admin/lista-libros/lista-libros.component';
import { RegistroLibroComponent } from './admin/registro-libro/registro-libro.component';
import { EditarLibroComponent } from './admin/editar-libro/editar-libro.component';
import { InicioAdmComponent } from './admin/inicio-adm/inicio-adm.component';
import { LibrosPrestadosComponent } from './admin/libros-prestados/libros-prestados.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { RegistroAdminComponent } from './admin/registro-admin/registro-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    FiltBookPipe,
    ListaLibrosComponent,
    RegistroLibroComponent,
    EditarLibroComponent,
    InicioAdmComponent,
    LibrosPrestadosComponent,
    LoginAdminComponent,
    RegistroAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BookModule,
    EstadiasModule,
    HeaderModule,
   
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
