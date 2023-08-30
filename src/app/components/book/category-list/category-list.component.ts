import { Component, inject } from '@angular/core';
import Category from '../../../interfaces/libro.interface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudFirebaseService } from 'src/app/service/crud-firebase.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categorias: Category [] = [];

  constructor(
    private fb : FormBuilder,
    private crudService: CrudFirebaseService,
    private sweet : SweetAlertService,
    private router: Router
  ){}

  formCategory: FormGroup = this.fb.group({
    category: ['', Validators.required],
  })

  ngOnInit(): any {
    this.crudService.getCategory().subscribe(catego => {
      console.log(catego);
      this.categorias = catego;
    });
}

async deleteCategory(id: any) {
  this.crudService.deleteCate(id);
  console.log('Categoria eliminada:', id);
  this.sweet.success('Eliminado con exito');
}

editCatego(id: Category) {
  this.router.navigate(['/book/editCatego', id.id]);
}


}
