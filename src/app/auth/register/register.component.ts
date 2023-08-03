import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/service/auth-firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(
    private fb : FormBuilder,
    private auth: AuthFirebaseService,
    private router: Router,
  ){}

  formLogin: FormGroup = this.fb.group({
    email: ['',Validators.required ],
    password: ['', Validators.required],

})

ngOnInit(): void {
}

onSubmit() {
  this.auth.register(this.formLogin.value)
  .then(response=>{
    console.log(response);
    this.router.navigate(['/login']);
  })
  .catch(error => console.log(error));
}
//register(){
  // console.log(this.login.value);
  //this.auth.register(this.formLogin.value.email, this.formLogin.value.password).then((data)=>{

  //}).catch((error)=>{
    //error;
  //});
}

