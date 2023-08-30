import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Libro from 'src/app/interfaces/libro.interface';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books: Libro [] = [];
  router = inject(Router);

  // itemEditar: any = {isbn:''};
  // filterBook: any = '';

  constructor(
    private fb : FormBuilder,
    private bookService: BookFirebaseService,
    private sweet : SweetAlertService,
  ){}

  title = 'bibliotecaUtvco';

  formBook: FormGroup = this.fb.group({
    isbn: ['', Validators.required],
    titulo: ['', Validators.required],
    autores: ['', Validators.required],
    categoria: ['', Validators.required],
    subcategoria: ['', Validators.required],
    editorial: ['', Validators.required],
    edicion: ['', Validators.required],
  })

 
  ngOnInit(): any {
    this.bookService.getBook().subscribe(books => {
      console.log(books);
      this.books = books;
    });
}

async deleteBook(id: any) {
  this.bookService.deleteBook(id);
  console.log('Eliminado libro con ID:', id);
}

//Prueba de editar
// preUpdate(book: Libro){
// console.log('BOOK', book);
// }

  editarBook (book: Libro){
  this.router.navigate(['/book/edit' , book.id]);
  }

}


