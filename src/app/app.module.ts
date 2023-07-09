import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddEditComponent } from './components/book/add-edit/add-edit.component';
import { ReadComponent } from './components/book/read/read.component';
import { AddEditEstadiaComponent } from './components/estadias/add-edit-estadia/add-edit-estadia.component';
import { ReadEstadiaComponent } from './components/estadias/read-estadia/read-estadia.component';
import { ProfileUserComponent } from './auth/profile-user/profile-user.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddEditComponent,
    ReadComponent,
    AddEditEstadiaComponent,
    ReadEstadiaComponent,
    ProfileUserComponent,
    NavBarComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
