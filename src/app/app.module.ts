import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './components/book/book.module';
import { EstadiasModule } from './components/estadias/estadias.module';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { FiltBookPipe } from './components/filt-book.pipe';
//frondentjoni
import { BookVerLComponent } from './components/book/book-ver-l/book-ver-l.component';
import { StudentProfileComponent } from './components/student/student-profile/student-profile.component';


import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    FiltBookPipe,
//frondentjoni
    BookVerLComponent,
    StudentProfileComponent,
    
    

    InicioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BookModule,
    EstadiasModule,
    HttpClientModule,

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
