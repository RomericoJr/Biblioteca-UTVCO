import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Libro from 'src/app/interface/libro.interface';
import { EstadiasFirebaseService } from 'src/app/service/firebase/estadias-firebase.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { DonacionService } from 'src/app/service/laravel/donacion.service';

@Component({
  selector: 'app-estadia-list',
  templateUrl: './estadia-list.component.html',
  styleUrls: ['./estadia-list.component.css']
})
export class EstadiaListComponent {

donaciones:any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _donacionS: DonacionService,
    private sweet : SweetAlertService,
    ){}


  ngOnInit(): any {
    this.getDonacion();
  }


  getDonacion(){
    this._donacionS.getDonacion().subscribe({
      next: (data) => {
        this.donaciones = data.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  deleteDonacion(id: any) {

    this.sweet.confirm('¿Desea eliminar la categoria?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this._donacionS.deleteDonacion(id).subscribe({
          next: (data) => {
            this.sweet.success('Eliminado con exito');
            this.getDonacion();
          },
          error: (err) => {
            console.log(err);
          }
        })
      } else {

      }
    });



  }


  editDonacion(data: any){
    this.sweet.confirm('¿Desea editar la categoria?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/editDonacion/', data.id]);
      } else {

      }
    });
  }


}


