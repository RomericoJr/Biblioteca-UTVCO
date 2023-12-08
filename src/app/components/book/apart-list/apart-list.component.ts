import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookFirebaseService } from 'src/app/service/firebase/book-firebase.service';
import { SetAsaideService } from 'src/app/service/laravel/set-asaide.service';
import { SweetAlertService } from '../../../service/firebase/sweet-alert.service';
import { AuthService } from 'src/app/service/laravel/auth.service';
import { ToolsService } from 'src/app/service/tools.service';

export interface Apartado {
  id_book : number;
  id_student: number;
  date_set_asaide: string;
  id_status: number;
}

export interface estado{
  id: number;
  status: string;
}

@Component({
  selector: 'app-apart-list',
  templateUrl: './apart-list.component.html',
  styleUrls: ['./apart-list.component.css']
})
export class ApartListComponent {

  type_status: estado[] = [
    {id: 0, status: 'Todos'},
    {id: 1, status: 'Rechazado'},
    {id: 2, status: 'Aprobado'},
    {id: 3, status: 'Pendiente'},
    {id: 4, status: 'Devuelto'}
  ];
  allAparts: any[] = [];

  apartsUser: any[] = [];

  filterStatus: any[] = [];

  updateStatus: Apartado = {} as Apartado;

  idStudent: any = this._toolS.getIdStudent();
  role: any = this._toolS.getRol();

  title = '';

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
      this.title = 'Lista de apartados';
    }
    if(this.role == 2){
      this.getApartsByIdStudent();
      this.title = 'Mis apartados';
    }

}



getAparts(){
  this._setAsaide.getSetAsaide().subscribe({
    next: (data: any) => {
      this.allAparts = data;
      this.filterStatus =data;
      // console.log(this.allAparts);
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
      // console.log(this.apartsUser);
    },
    error: (error: any) => {
      console.log(error);
    }
  });
}

// $rechazado = '1';
// $Aprobado = '2';
// $pendiente = '3';
// $devuelto = '4';


aceptarApart(data: any){
  const $Aprobado = 2;

  this.updateStatus = {
    id_book: data.id_book,
    id_student: data.id_student,
    date_set_asaide: new Date().toISOString().substring(0, 10),
    id_status: $Aprobado
  };

  this._sweetS.fireConfirm('¿Desea aceptar la petición?', 'Se aceptará el apartado', 'Aceptar').then((result) => {
    if (result.isConfirmed) {
      this._setAsaide.updateStatus(data.id, this.updateStatus).subscribe({
        next: (data: any) => {
          this._sweetS.fireToast('Aceptando', '¡Petición aceptado!');
          this.getAparts();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
  });
}


rechazarApart(data: any){
  const $rechazado = 1;
  this.updateStatus = {
    id_book: data.id_book,
    id_student: data.id_student,
    date_set_asaide: new Date().toISOString().substring(0, 10),
    id_status: $rechazado
  };

  this._sweetS.fireConfirm('¿Desea rechazar la petición?', 'Se rechazará el apartado', 'Rechazar').then((result) => {
    if (result.isConfirmed) {
      this._setAsaide.updateStatus(data.id, this.updateStatus).subscribe({
        next: (data: any) => {
          this._sweetS.fireToast('Rechazando', '¡Petición rechazada!');
          this.getAparts();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
  });
  }


  devolverApart(data: any){


    this._sweetS.fireConfirm('¿Desea devolver el libro?', 'Se devolverá el libro', 'Devolver').then((result) => {
      if (result.isConfirmed) {
        this._setAsaide.bookReturn(data.id).subscribe({
          next: (data: any) => {
            this._sweetS.fireToast('Devolviendo', '¡Libro devuelto!');
            this.getAparts();
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    });
  }


  filterPrestamoByStatus(prestamos: any[], pretamo: number): any[] {
    return prestamos.filter((prestamo) => prestamo.id_status == pretamo);
  }

  SearchPrestamo(selectedStatusId: any){
    const value = selectedStatusId.target.value;
    if(value == 0){
      this.filterStatus = this.allAparts;
    }
    else{
      this.filterStatus = this.filterPrestamoByStatus(this.allAparts, value);

    }
  }

}
