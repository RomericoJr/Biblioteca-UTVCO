import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Libro from 'src/app/interface/libro.interface';
import { BookFirebaseService } from 'src/app/service/firebase/book-firebase.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { BookService } from 'src/app/service/laravel/book.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent {

  books: any [] = [];

  constructor(
    private fb : FormBuilder,
    private router: Router,
    private sweet : SweetAlertService,
    private _bookS: BookService
  ){}

  ngOnInit(): any {
    this.getBookS();
}

getBookS(){
  this._bookS.getBook().subscribe({
    next: (data) => {
      this.books = data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}



deleteBook(id: any) {

    this.sweet.confirm('¿Desea eliminar el libro?','Aceptar').then((result) => {
      if(result.isConfirmed){
        this._bookS.deleteBook(id).subscribe({
          next: (data) => {
            this.sweet.success('Eliminado con exito');
            this.getBookS();
          },
          error: (err) => {
            console.log(err);
          }
        })
      } else {

      }
    });
}

editBook(book: Libro) {
  this.sweet.confirm('¿Desea editar el libro?','Aceptar').then((result) => {
    if(result.isConfirmed){
      this.router.navigate(['/BibliotecaUTVCO/edit/', book.id]);
    }
  });
}

}
