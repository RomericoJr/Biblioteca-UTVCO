import { Component } from '@angular/core';
import { SubCategoryService } from '../../../service/laravel/sub-category.service';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.css']
})
export class SubCategoryListComponent {

  subCategory: any[]= [];

  constructor(
    private _subCategoryS: SubCategoryService,
    private router: Router,
    private _sweet: SweetAlertService
  ) { }

  ngOnInit(){
    this.getSubCategory();
  }

  getSubCategory(){
    this._subCategoryS.getSubCategory().subscribe({
      next: (data:any) => {
        this.subCategory = data.subcategory;
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
        this.router.navigate(['/BibliotecaUTVCO/editSubCategory/', data.id]);
          }
          });
  }

}
