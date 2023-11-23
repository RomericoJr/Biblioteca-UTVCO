import { Component } from '@angular/core';
import { AuthFirebaseService } from 'src/app/service/firebase/auth-firebase.service';
import {FormControl} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [AuthFirebaseService],
})
export class ForgotPasswordComponent {

  userEmail = new FormControl('');

  constructor(private authSvc: AuthFirebaseService , private router:Router){}

  async onReset(){
    try{
      const email = this.userEmail.value ?? '';
    await this.authSvc.resetPassword(email);
    window.alert('El correo de recuperación se ha enviado, checa tu inbox!');
    this.router.navigate(['/login']);

  } catch(error){
    console.log(error);
    }
  }

}
