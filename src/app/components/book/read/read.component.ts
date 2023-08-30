import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Libro from 'src/app/interfaces/libro.interface';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent {

  books: Libro [] = [];

  constructor(
    private fb : FormBuilder,
    private bookService: BookFirebaseService,
    private router: Router,
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

// delete() {
//   this.bookService.deleteBook(
//     {
//       id: new Date().getTime().toString(),
//       ...this.formBook.value
//     } as any);
//     console.log('eliminado', this.formBook.value);

// }

deleteBook(id: any) {
  console.log(id, 'eliminado');
  this.bookService.deleteBook(id);
  this.sweet.success('Eliminado con exito');
}

editBook(book: Libro) {
  this.router.navigate(['/book/edit', book.id]);
}

}
