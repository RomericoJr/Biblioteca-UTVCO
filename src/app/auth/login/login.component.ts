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
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/service/firebase/auth-firebase.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { AuthService } from 'src/app/service/laravel/auth.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;

  VerPassW() {
    this.showPassword = !this.showPassword;
  }

  formLogin: FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(
    private auth: AuthFirebaseService,
    private router: Router,
    private swetS: SweetAlertService,
    private fb: FormBuilder,
    private _authS: AuthService,
    private _toolS: ToolsService
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._authS.login(this.formLogin.value).subscribe({
      next: (data: any) => {
      this._toolS.setToken(data.token.original.access_token);
      this._toolS.setIdUser(data.user.id);
      this._toolS.setRol(data.user.id_rol);
      this.swetS.success('Bienvenido');
      this.router.navigate(['/BibliotecaUTVCO'])
    },
    error: (error:any) => {
      this.swetS.error('Contraseña o Usuario incorrecto');
    }
  })



    // this.auth.login(this.formLogin.value)
    //   .then(response => {
    //     console.log(response);
    //     this.swetS.success('Bienvenido');
    //     this.router.navigate(['/home'])
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     this.swetS.error('Contraseña o Usuario incorrecto');
    //   });
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
