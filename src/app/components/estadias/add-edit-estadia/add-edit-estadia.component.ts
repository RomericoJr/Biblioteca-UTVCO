import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadiasFirebaseService } from 'src/app/service/estadias-firebase.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-add-edit-estadia',
  templateUrl: './add-edit-estadia.component.html',
  styleUrls: ['./add-edit-estadia.component.css']
})
export class AddEditEstadiaComponent {


constructor(
  private fb: FormBuilder,
  private estadiasService: EstadiasFirebaseService,
  private route: Router,
  private activatedRoute: ActivatedRoute,
  private sweet: SweetAlertService,
){}
  titleText='Agregar libro';
  titleBtn = 'Agregar';
  id!: string;

ngOnInit(){
  this.activatedRoute.params.subscribe((data: any)=>{
    this.id = data.id
    console.log(this.id);

    if(data.id){
      this.titleText = 'Actualizar Libros';
      this.titleBtn = 'Actualizar';
      this.estadiasService.getEstBookById(this.id).subscribe((data) => {
        console.log('existo y soy', data);
        this.formEstBook.patchValue(data[0])
        
      });
    }
    
  });

}

formEstBook: FormGroup = this.fb.group({
  isbn: ['', Validators.required],
    titulo: ['', Validators.required],
    autores: ['', Validators.required],
    categoria: ['', Validators.required],
    subcategoria: ['', Validators.required],
    editorial: ['', Validators.required],
    edicion: ['', Validators.required],
})

option(){
  if(this.id){
    this.updateEstBook();
  } else {
    this.save();
  }
}

updateEstBook(){
  this.estadiasService.updateEstBook({
    id: this.id, ...this.formEstBook.value

  });
  console.log('cacha', this.formEstBook.value);
  this.sweet.success('Actualizado con exito');
  this.route.navigateByUrl('/book/list');
  
}

save(){
  this.estadiasService.addEstadiasBook({
    id: new Date().getTime().toString(),
    ...this.formEstBook.value
  } as any);
  console.log('Guardado', this.formEstBook.value);
  this.sweet.success('Guardado con exito');

  this.route.navigateByUrl('/bool/list');
  
}
}
