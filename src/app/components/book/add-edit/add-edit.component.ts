import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookFirebaseService } from 'src/app/service/firebase/book-firebase.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { BookService } from '../../../service/laravel/book.service';
import { CategoryService } from 'src/app/service/laravel/category.service';
import { SubCategoryService } from '../../../service/laravel/sub-category.service';
import { authorValid, editionValid, editorialValid, id_subcategoryValid, isbnValid, stockValid, titleValid } from 'src/app/validation/book.validator';
import { id_categoryValid } from 'src/app/validation/subcategoria.validator';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {


constructor(
  private fb : FormBuilder,
  private route: Router,
  private activatedRoute: ActivatedRoute,
  private sweet : SweetAlertService,
  private _book: BookService,
  private _categoryS: CategoryService,
  private _SubCategory: SubCategoryService
){}

  titleText = 'Agregar Libro';
  titleBtn = 'Agregar';
  id!: number;

  categories: any[] = [];
  subcategories: any[] = [];

  ngOnInit(){
    this.activatedRoute.params.subscribe((data :any) => {
      this.id = data.id
      console.log(this.id);

      if(data.id){
        this.titleText = 'Actualizar Libro';
        this.titleBtn = 'Actualizar';
        this.getBookById(this.id);
    }
      });
      this.getCategories();

      this.formBook.get('id_category')?.valueChanges.subscribe((data: any) => {
        this._SubCategory.getSubCategoryByCategory(data).subscribe({
          next: (data: any) => {
            this.subcategories = data;
          },
          error: (error: any) => {
            this.sweet.error('Error al obtener datos');
          }
        });
      });

    }


  formBook: FormGroup = this.fb.group({
    isbn: ['', Validators.required],
    title: ['', Validators.required],
    author: ['', Validators.required],
    editorial: ['', Validators.required],
    edition: ['', Validators.required],
    stock: [ [Validators.required,Validators.pattern('^[0-9]+$') ]],
    id_category: ['', Validators.required],
    id_subcategory: ['', Validators.required],
  },
  {validators:[isbnValid,titleValid,authorValid,editorialValid,editionValid,stockValid,id_categoryValid,id_subcategoryValid]})


  option(){

    if(this.id){
      this.updateBook();
    } else {
      this.save();
    }
  }

  updateBook(){
    this._book.updateBook(this.id, this.formBook.value).subscribe({
      next: (data: any) => {
        this.sweet.success('Actualizado con exito');
        this.route.navigateByUrl('/BibliotecaUTVCO-Administracion-UTVCO-funciones/read');
      },
      error: (error: any) => {
        this.sweet.error('Error al actualizar');
      }
    })
  }

  save() {
    console.log(this.formBook.value);
    this._book.addBook(this.formBook.value).subscribe({
      next: (data: any) => {
        this.sweet.success('Agregado con exito');
        this.route.navigateByUrl('/BibliotecaUTVCO-Administracion-UTVCO-funciones/read');
      },
      error: (error: any) => {
        this.sweet.error('Error al agregar');
      }
    })
  }

  getBookById(id: any) {
    this._book.getBookById(id).subscribe({
      next: (data: any) => {
        this.formBook.patchValue(data);
      },
      error: (error: any) => {
        this.sweet.error('Error al obtener datos');
      }
    })
  }

  getCategories(){
    this._categoryS.getCategory().subscribe({
      next: (data: any) => {
        this.categories = data.category;
      },
      error: (error: any) => {
        this.sweet.error('Error al obtener datos');
      }
    })
  }
  validarIsb(){
    return !!this.formBook?.errors?.['isbnError']
  }
  validarTitle(){
    return !!this.formBook?.errors?.['titleError']
  }

  validarAuthor(){
    return !!this.formBook?.errors?.['authorError']
  }

  validarEditorial(){
    return !!this.formBook?.errors?.['editorialError']
  }

  validaredition(){
    return !!this.formBook?.errors?.['editionError']
  }

  validarStok(){
    return !!this.formBook?.errors?.['stockError']
  }

  validarid_category(){
    return !!this.formBook?.errors?.['id_categoryError']
  }

  validarid_subcategory(){
    return !!this.formBook?.errors?.['id_subcategoryError']
  }



}
