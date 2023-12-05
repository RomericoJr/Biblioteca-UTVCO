import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { CategoryService } from 'src/app/service/laravel/category.service';
import { categoryValid } from 'src/app/validation/categoria.validator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(
    private fb : FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sweet : SweetAlertService,
    private _categoryS: CategoryService
  ){}

  titleText = 'Agregar categoria';
  titleBtn = 'Agregar';
  id!: number;

  formCategory: FormGroup = this.fb.group({
    category: ['', [Validators.required, Validators.minLength(3)]],
  },
  {validators:[categoryValid]})

  ngOnInit(){
    this.activatedRoute.params.subscribe({
      next: (data:any) => {
        console.log(data);
        this.id = data.id;
        if(this.id){
          this.titleText = 'Editar Categoria';
          this.titleBtn = 'Editar';
          this.getCategoryById(this.id);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
    }

  option(){

    if(this.id){
      this.updateBook();
    } else {
      this.save();
    }
  }


  save() {
    this._categoryS.postCategory(this.formCategory.value).subscribe({
      next: (data) => {
        this.sweet.success('Categoria agregada correctamente');
        this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/category-list']);
      },
      error: (err) => {
        this.sweet.error('Error al agregar la categoria');
        console.log(err);
      }
    })
  }


  updateBook(){
    this._categoryS.putCategory(this.formCategory.value, this.id).subscribe({
      next: (data) => {
        this.sweet.success('Categoria actualizada correctamente');
        this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/category-list']);
      },
      error: (err) => {
        this.sweet.error('Error al actualizar la categoria');
        console.log(err);
      }
    })
  }

  getCategoryById(id: number){
    this._categoryS.getCategoryById(id).subscribe({
      next: (data) => {
        this.formCategory.setValue({
          category: data.category,
        })
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  validarCategoria(){
    return !!this.formCategory?.errors?.['categoryError']
  }

  

}
