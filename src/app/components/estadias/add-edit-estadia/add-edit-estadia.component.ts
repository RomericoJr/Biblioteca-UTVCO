import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadiasFirebaseService } from 'src/app/service/firebase/estadias-firebase.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { CarrerService } from 'src/app/service/laravel/carrer.service';
import { DonacionService } from 'src/app/service/laravel/donacion.service';
import { authorValid, titleValid } from 'src/app/validation/book.validator';
import { carrer_idValid, copiasValid, descriptionValid } from 'src/app/validation/books-donados.validator';

@Component({
  selector: 'app-add-edit-estadia',
  templateUrl: './add-edit-estadia.component.html',
  styleUrls: ['./add-edit-estadia.component.css']
})
export class AddEditEstadiaComponent {


constructor(
  private fb: FormBuilder,
  private route: Router,
  private activatedRoute: ActivatedRoute,
  private sweet: SweetAlertService,
  private _donacionS: DonacionService,
  private _carrerS: CarrerService
){}
  titleText='Agregar libro para donación';
  titleBtn = 'Agregar';
  id!: number;
  carrers:any[] = [];
ngOnInit(){
  this.activatedRoute.params.subscribe({
    next: (data:any) => {
      this.id = parseInt(data.id);
      if (data && data.id) {
        this.titleText = 'Editar libro para donación';
        this.titleBtn = 'Editar';
        this.getDonacionById(this.id);
      }
    },
    error: (err) => {
      console.log(err);
    }
  })
  this.getCarrers();
}

formDonacion: FormGroup = this.fb.group({
  title: ['', Validators.required],
  author: ['', Validators.required],
  description: ['', Validators.required],
  copias: ['', Validators.required],
  carrer_id: [,Validators.required],
},{validators:[titleValid,authorValid,descriptionValid,copiasValid,carrer_idValid]})

option(){

  if(this.id){
    this.updateEstBook();
  } else {
    this.save();
  }
}

getDonacionById(id: any){
  this._donacionS.getDonacionById(id).subscribe({
    next: (data) => {
      this.formDonacion.setValue({
        title: data.data.title,
        author: data.data.author,
        description: data.data.description,
        copias: data.data.copias,
      })
    },
    error: (err) => {
      console.log(err);
    }
  })

}

updateEstBook(){

  const formDonacionValue = this.formDonacion.value;

  const updateFormDonacion = {...formDonacionValue, _method: 'PUT'};

  this._donacionS.putDonacion(this.id, updateFormDonacion).subscribe({
    next: (data) => {
      this.sweet.success('Donacion actualizada con exito');
      this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/list']);
    },
    error: (err) => {
      console.log(err);
    }
  })

}

save(){
    console.log(this.formDonacion.value);
  this._donacionS.postDonacion(this.formDonacion.value).subscribe({
    next: (data) => {
      this.sweet.success('Donacion agregada con exito');
      this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/list']);
    },
    error: (err) => {
      console.log(err);

  }
  });

}
getCarrers(){
  this._carrerS.getCarrer().subscribe({
    next: (data: any) => {
      this.carrers = data.carrer;
    },
    error: (err) => {
      console.log(err);
    }
  })
}

validarTitle(){
  return !!this.formDonacion?.errors?.['titleError']
}
validarAuthor(){
  return !!this.formDonacion?.errors?.['authorError']
}

validarDescription(){
  return !!this.formDonacion?.errors?.['descriptionError']
}

validarCopias(){
  return !!this.formDonacion?.errors?.['copiasError']
}

validarCarrer_id(){
  return !!this.formDonacion?.errors?.['carrer_idError']
}


}
