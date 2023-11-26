import { Component } from '@angular/core';
import { SweetAlertService } from '../../../service/firebase/sweet-alert.service';
import { Router } from '@angular/router';
import { GenereService } from '../../../service/laravel/genere.service';

@Component({
  selector: 'app-genere-list',
  templateUrl: './genere-list.component.html',
  styleUrls: ['./genere-list.component.css']
})
export class GenereListComponent {

  genere: any[] = [];

  constructor(
    private sweet : SweetAlertService,
    private router: Router,
    private _genereS: GenereService
  ) { }

  ngOnInit() {
    this.getGenere();
  }

  getGenere(){
    this._genereS.getGenere().subscribe({
      next: (data:any) => {
        console.log(data);
        this.genere = data.genere;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteGenere(id: any) {

    this.sweet.confirm('¿Desea eliminar el genero?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this._genereS.deleteGenere(id).subscribe({
          next: (data) => {
            this.sweet.success('Eliminado con exito');
            this.getGenere();
          },
          error: (err) => {
            console.log(err);
          }
        })
      } else {

      }
    });
  }

  editGenere(data: any) {
    this.sweet.confirm('¿Desea editar el genero?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['/BibliotecaUTVCO/editGenere/', data.id]);
      }
    });
  }
}
