import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/laravel/auth.service';
import { ToolsService } from 'src/app/service/tools.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { StudentService } from 'src/app/service/laravel/student.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {

  constructor(
    private router: Router,
    private _authS: AuthService,
    private _toolS: ToolsService,
    private _sweetAlert: SweetAlertService,
    private _studentS: StudentService,
  ) {}
  mostrarCambioContraseña = false; // Nueva propiedad
  userProfileAdmin:any;
  userProfileStudent:any;
  rol:any = this._toolS.getRol();
  idUserStudent:any = this._toolS.getIdStudent();

  ngOnInit(){
    this.getUser();
    this.getStudentById();
  }

  getUser(){
    this._authS.userDetail().subscribe({
      next: (res:any) => {
          this.userProfileAdmin = res;
          // console.log(res);
      },
      error: (err:any) => {
        console.log(err);
      }
    });
  }

getStudentById(){

  if(this.idUserStudent){

    this._studentS.getStudentById(this.idUserStudent).subscribe({
      next: (res:any) => {
        this.userProfileStudent = res.data;
        console.log(this.userProfileStudent);
      },
      error: (err:any) => {
        console.log(err);
      }
    });
  }
}

  onClick() {

  }

  toggleChangePassword() {
    this.mostrarCambioContraseña = !this.mostrarCambioContraseña;
  }
}
