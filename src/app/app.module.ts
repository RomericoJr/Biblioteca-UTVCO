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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FiltBookPipe } from './components/filt-book.pipe';
//frondentjoni


import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './components/inicio/inicio.component';
import { StudentComponent } from './components/student/student/student.component';
import { StudentModule } from './components/student/student.module';



@NgModule({
  declarations: [
    AppComponent,
    FiltBookPipe,
//frondentjoni
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    EstadiasModule,
    StudentModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
