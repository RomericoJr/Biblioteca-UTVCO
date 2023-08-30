import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';
import { CrudFirebaseService } from 'src/app/service/crud-firebase.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(
    private fb : FormBuilder,
    private crudService: CrudFirebaseService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sweet : SweetAlertService,
  ){}

  titleText = 'Agregar Palabras';
  titleBtn = 'Agregar';
  id!: string;

  formCategory: FormGroup = this.fb.group({
    category: ['', Validators.required],
  })

  ngOnInit(){
    this.activatedRoute.params.subscribe((data :any) => {
      this.id = data.id
      console.log(this.id);

      if(data.id){
        this.titleText = 'Actualizar Palabras';
        this.titleBtn = 'Actualizar';
        this.crudService.getCategoById(this.id).subscribe((data) => {
          console.log('existo y soy ', data);
          this.formCategory.patchValue(data[0])

       });
    }
      });
    }
  
  option(){

    if(this.id){
      this.updateBook();
    } else {
      this.save();
    }
  }


  save() {
    this.crudService.guardarCategory(
    {
      id: new Date().getTime().toString(),
      ...this.formCategory.value
    } as any);
    console.log('Guardado', this.formCategory.value);
    this.sweet.success('Guardado con exito');

      this.route.navigateByUrl('/book/category-list');
  }

  updateBook(){
    this.crudService.updateCategory(
      {id: this.id,
        ...this.formCategory.value});

    console.log('cacha',this.formCategory.value);
    this.sweet.success('Actualizado con exito');
    this.route.navigateByUrl('/book/category-list');
  }
}
