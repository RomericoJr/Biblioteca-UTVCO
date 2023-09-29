//import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//@Component({
  //selector: 'app-login',
  //templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
//})
//export class LoginComponent {


//}


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/service/auth-firebase.service';
import { RoleServiceService } from 'src/app/service/role-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private auth: AuthFirebaseService,
    private router: Router,
    private roleS: RoleServiceService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    this.roleS.getRoles().subscribe(response => {
      console.log(response);
    })

  }

  onSubmit() {
    this.auth.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/home'])
      })
      .catch(error => console.log(error));
  }



  //onClick() {
    //this.auth.loginWithGoogle()
      //.then(response => {
        //console.log(response);
        //this.router.navigate(['/main']);
      //})
      //.catch(error => console.log(error))
  //}

}
