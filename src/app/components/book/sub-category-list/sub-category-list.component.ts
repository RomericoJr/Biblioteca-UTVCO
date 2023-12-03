import { Component } from '@angular/core';
import { SubCategoryService } from '../../../service/laravel/sub-category.service';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { CategoryService } from 'src/app/service/laravel/category.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css']
})
export class SubCategoryListComponent {
  category:any[]= [];
  subCategory: any[]= [];

  searchTerm: string = '';
  filterSubcategory: any[] = [];
  constructor(
    private _subCategoryS: SubCategoryService,
    private router: Router,
    private _sweet: SweetAlertService,
    private _categoryS: CategoryService
  ) { }

  ngOnInit(){
    this.getSubCategory();
    // this.getCategories();
  }

  getSubCategory(){
    this._subCategoryS.getSubCategory().subscribe({
      next: (data:any) => {
        this.subCategory = data.subcategory;
        this.filterSubcategory = this.subCategory;
        console.log(this.subCategory);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

  getCategories(){
    this._categoryS.getCategory().subscribe({
      next: (data:any) => {
        this.category = data.category;
        console.log(this.category);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

  deleteSubCategory(id: any) {

    this._sweet.confirm('¿Desea eliminar la subcategoria?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this._subCategoryS.deleteSubCategoria(id).subscribe({
          next: (data) => {

            this._sweet.success('Eliminado con exito');
            this.getSubCategory();
          },
          error: (err) => {
            console.log(err);
          }
        })
      } else {

      }
    });
  }

  editSubCategory(data: any) {
    this._sweet.confirm('¿Desea editar la subcategoria?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['/BibliotecaUTVCO-Administracion-UTVCO-funciones/editSubCategory/', data.id]);
          }
          });
  }

  filterSubCategoryByTitle(subCategory: any[], title: string): any[] {
    return subCategory.filter((subCategory) => subCategory.category.category == title);
  }

  filtrarDatos(){
    this.filterSubcategory = this.subCategory;
    console.log(this.searchTerm);
    if(this.searchTerm != ''){
      this.filterSubcategory = this.filterSubcategory.filter((subCategory) => {
        return subCategory.category.category.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }

}
