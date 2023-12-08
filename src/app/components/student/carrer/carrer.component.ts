import { Component } from '@angular/core';
import { CarrerService } from '../../../service/laravel/carrer.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { carrer_nameValid } from 'src/app/validation/carrera.validator';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent {

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sweet: SweetAlertService,
    private _carrerS: CarrerService
  ) { }
  titleText = 'Agregar Carrera';
  titleBtn = 'Agregar';
  id!: number;

  formCarrer = this.fb.group({
    carrer_name: ['',[Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]]
  },
  {validators:[carrer_nameValid]})


  ngOnInit(){
    this.activatedRoute.params.subscribe({
      next: (data:any) => {
        console.log(data);
        this.id = data.id;
        if(this.id){
          this.titleText = 'Editar Carrera';
          this.titleBtn = 'Editar';
          this.getCarrerById(this.id);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  option(){
    if(this.id){
      this.updateCarrer();
    } else {
      this.save();
    }
  }

  save(){
    this._carrerS.postCarrer(this.formCarrer.value).subscribe({
      next: (data) => {
        this.sweet.success('Carrera agregada correctamente');
        this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/carrer-list']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getCarrerById(id: number){
    this._carrerS.getCarrerById(id).subscribe({
      next: (data: any) => {
        this.formCarrer.setValue({
          carrer_name: data.carrer.carrer_name
        })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



  updateCarrer(){
    this._carrerS.updateCarrer(this.formCarrer.value, this.id).subscribe({
      next: (data) => {
        this.sweet.success('Carrera actualizada correctamente');
        this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/carrer-list']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  validarCarrer(){
    return !!this.formCarrer?.errors?.['carrer_nameError']
  }

}

