import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFirebaseService } from 'src/app/service/auth-firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private fb : FormBuilder,
    private auth: AuthFirebaseService

  ){}

  formLogin: FormGroup = this.fb.group({
    email: ['',Validators.required ],
    password: ['', Validators.required],

})


register(){
  // console.log(this.login.value);
  this.auth.registro(this.formLogin.value.email, this.formLogin.value.password).then((data)=>{

  }).catch((error)=>{
    error;
  });
}
}
