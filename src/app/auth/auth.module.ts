import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { RegisterComponent } from './register/register.component';
import { Routes,RouterModule, } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
  component: RegisterComponent
  },
  {
    path: 'forgot-password',
  component: ForgotPasswordComponent
  },
  {
    path: 'profile-user',
  component: ProfileUserComponent
  },
  {
    path: '**',
    redirectTo: 'login',
  }
]



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    ProfileUserComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ForgotPasswordComponent,
    LoginComponent,
    ProfileUserComponent,
    RegisterComponent,
    RouterModule
  ]
})
export class AuthModule { }
