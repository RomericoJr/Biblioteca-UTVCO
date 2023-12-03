import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { CategoryService } from 'src/app/service/laravel/category.service';
import { SubCategoryService } from 'src/app/service/laravel/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent {

  constructor(
    private fb : FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sweet : SweetAlertService,
    private _subategoryS: SubCategoryService,
    private _categoryS: CategoryService
  ){}
  titleText = 'Agregar Subcategoria';
  titleBtn = 'Agregar';
  id!: number;
  category: any = [];

  formSubCategory: FormGroup = this.fb.group({
    id_category: ['', [Validators.required]],
    subcategory: ['', [Validators.required, Validators.minLength(3)]],
  })

ngOnInit(){
  this.activatedRoute.params.subscribe({
    next: (params:any) => {
      this.id = params.id;
      if(this.id){
        this.titleText = 'Editar Subcategoria';
        this.titleBtn = 'Editar';
        this.getSubCategoryById(this.id);
      }
    },
    error: (err) => {
      console.log(err);
    }
  })
  this.getCategory();
}

  getCategory(){
    this._categoryS.getCategory().subscribe({
      next: (data) => {
        this.category = data.category;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  option(){
      if(this.id){
        this.updateSubCategory();
      } else {
        this.postCategory();
      }
  }


  postCategory(){
    this._subategoryS.postSubCategory(this.formSubCategory.value).subscribe({
      next: (data:any) => {
        this.sweet.success('Categoria agregada correctamente');
        this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/subcategory-list']);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

  updateSubCategory(){
    this._subategoryS.putSubCategoria(this.formSubCategory.value, this.id).subscribe({
      next: (data:any) => {
        this.sweet.success('Categoria actualizada correctamente');
        this.route.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/subcategory-list']);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

  getSubCategoryById(id: any){
    this._subategoryS.getSubCategoryById(id).subscribe({
      next: (data:any) => {
        this.formSubCategory.setValue({
          id_category: data.id_category,
          subcategory: data.subcategory
        })
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }


  validarCategoria(){
    return !!this.formSubCategory?.errors?.['categoryError']
  }

}
