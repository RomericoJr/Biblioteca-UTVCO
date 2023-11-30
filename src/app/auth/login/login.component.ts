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
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/service/firebase/auth-firebase.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { AuthService } from 'src/app/service/laravel/auth.service';
import { ToolsService } from 'src/app/service/tools.service';
import { passwordValid } from 'src/app/validation/login.validator';

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
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  },
  {validators:[passwordValid]}
  );

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
      if(data.user.id_rol == 2){
        this._toolS.setIdStudent(data.user.id_students);
      }
      this.swetS.success('Bienvenido');
      this.router.navigate(['/BibliotecaUTVCO'])
    },
    error: (error:any) => {
      this.swetS.error('Contraseña o Usuario incorrecto');
    }
  })
  }


  validarPassword(){
    return !!this.formLogin?.errors?.['passwordError']
  }

}
