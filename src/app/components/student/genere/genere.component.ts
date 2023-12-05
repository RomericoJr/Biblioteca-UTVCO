import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '../../../service/firebase/sweet-alert.service';
import { GenereService } from 'src/app/service/laravel/genere.service';
import { genereValid } from 'src/app/validation/genero.validators';

@Component({
  selector: 'app-genere',
  templateUrl: './genere.component.html',
  styleUrls: ['./genere.component.css']
})
export class GenereComponent {

  constructor(
    private fb : FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sweet : SweetAlertService,
    private _genereS: GenereService
  ) { }
  titleText = 'Agregar Genero';
  titleBtn = 'Agregar';
  id!: number;

  formGenere = this.fb.group({
    genere: ['',[Validators.required, Validators.minLength(3)]]
  },{validators:[genereValid]})

  ngOnInit(){
    this.activatedRoute.params.subscribe({
      next: (data:any) => {
        console.log(data);
        this.id = data.id;
        if(this.id){
          this.titleText = 'Editar Genero';
          this.titleBtn = 'Editar';
          this.getGenereById(this.id);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  option(){
    if(this.id){
      this.updateGenere();
    } else {
      this.save();
    }
  }

  save(){
    this._genereS.postGenere(this.formGenere.value).subscribe({
      next: (data) => {
        this.sweet.success('Genero agregado correctamente');
        this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/genere-list']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateGenere(){
    this._genereS.updateGenere(this.formGenere.value, this.id ).subscribe({
      next: (data) => {
        this.sweet.success('Genero actualizado correctamente');
        this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/genere-list']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getGenereById(id: number){
    this._genereS.getGenereById(id).subscribe({
      next: (data:any) => {
        this.formGenere.setValue({
          genere: data.genere.genere
        })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



  validarGenere(){
    return !!this.formGenere?.errors?.['genereError']
  }
}
