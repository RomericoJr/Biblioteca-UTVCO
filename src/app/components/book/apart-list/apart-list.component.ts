import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookFirebaseService } from 'src/app/service/firebase/book-firebase.service';
import Apartado from '../../../interface/libro.interface';
import { SetAsaideService } from 'src/app/service/laravel/set-asaide.service';
import { SweetAlertService } from '../../../service/firebase/sweet-alert.service';
import { AuthService } from 'src/app/service/laravel/auth.service';
import { ToolsService } from 'src/app/service/tools.service';

@Component({
  selector: 'app-apart-list',
  templateUrl: './apart-list.component.html',
  styleUrls: ['./apart-list.component.css']
})
export class ApartListComponent {

  // aparts: Apartado [] = [];

  allAparts: any[] = [];

  apartsUser: any[] = []

  idStudent:any = this._toolS.getIdStudent();
  role:any = this._toolS.getRol();

  constructor(
    private _setAsaide: SetAsaideService,
    private _sweetS: SweetAlertService,
    private _authS: AuthService,
    private _toolS: ToolsService
  ){

  }


  ngOnInit() {
    if(this.role == 1){
      this.getAparts();
    }
    if(this.role == 2){
      this.getApartsByIdStudent();
    }

}



getAparts(){
  this._setAsaide.getSetAsaide().subscribe({
    next: (data: any) => {
      this.allAparts = data;
      console.log(this.allAparts);
    },
    error: (error: any) => {
      console.log(error);
    }
  });
}

getApartsByIdStudent(){
  this._setAsaide.getSetAsaideByIdStudent(this.idStudent).subscribe({
    next: (data: any) => {
      this.apartsUser = data;
      console.log(this.apartsUser);
    },
    error: (error: any) => {
      console.log(error);
    }
  });
}



async deleteApart(id: any) {

}




}
