import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Libro from 'src/app/interfaces/libro.interface';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent {

  books: Libro [] = [];

  constructor(
    private fb : FormBuilder,
    private bookService: BookFirebaseService
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

delete() {
  this.bookService.deleteBook(
    {
      id: new Date().getTime().toString(),
      ...this.formBook.value
    } as any);
    console.log('eliminado', this.formBook.value);

}



}