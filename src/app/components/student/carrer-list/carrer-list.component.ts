import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { CarrerService } from 'src/app/service/laravel/carrer.service';

@Component({
  selector: 'app-carrer-list',
  templateUrl: './carrer-list.component.html',
  styleUrls: ['./carrer-list.component.css']
})
export class CarrerListComponent {

  carreras: any[] = [];

  constructor(
    private sweet: SweetAlertService,
    private _carrerS: CarrerService,
    private router: Router
  ) { }

  ngOnInit(){
    this.getCarrer();
  }

  getCarrer(){
    this._carrerS.getCarrer().subscribe({
      next: (data:any) => {
        this.carreras = data.carrer;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  deleteCarrer(id: any) {
    console.log(id)
    this.sweet.confirm('¿Desea eliminar la carrera?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this._carrerS.deleteCarrer(id).subscribe({
          next: (data) => {
            this.sweet.success('Eliminado con exito');
            this.getCarrer();
          },
          error: (err) => {
            console.log(err);
          }
        })
      } else {

      }
    });
  }

  editCarrer(data: any) {
    this.sweet.confirm('¿Desea editar la carrera?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['/BibliotecaUTVCO/editCarrer/', data.id]);
      }
    });
  }
}
