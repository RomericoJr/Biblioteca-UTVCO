import { Component, inject } from '@angular/core';
import Category from '../../../interface/libro.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudFirebaseService } from 'src/app/service/firebase/crud-firebase.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { CategoryService } from 'src/app/service/laravel/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categorias: Category [] = [];

  constructor(
    private sweet : SweetAlertService,
    private router: Router,
    private _categoryS: CategoryService
  ){}


  ngOnInit(): any {
    this.getCategory();
}

  getCategory(){
    this._categoryS.getCategory().subscribe({
      next: (data) => {
        this.categorias = data.category;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


deleteCategory(id: any) {

  this.sweet.confirm('¿Desea eliminar la categoria?','Aceptar').then((result) => {
    if(result.isConfirmed){
      this._categoryS.deleteCategory(id).subscribe({
        next: (data) => {
          this.sweet.success('Eliminado con exito');
          this.getCategory();
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {

    }
  });
}

editCategory(data: any) {
  this.sweet.confirm('¿Desea editar la categoria?','Aceptar').then((result) => {
    if(result.isConfirmed){
      this.router.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/editCatego/', data.id]);
    }
  });
}
}
