import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Libro from 'src/app/interfaces/libro.interface';
import { EstadiasFirebaseService } from 'src/app/service/estadias-firebase.service';

@Component({
  selector: 'app-estadia-list',
  templateUrl: './estadia-list.component.html',
  styleUrls: ['./estadia-list.component.css']
})
export class EstadiaListComponent {

  estadiasBooks: Libro [] = [];
  router = inject(Router)


  constructor(
    private fb: FormBuilder,
    private estBookService:  EstadiasFirebaseService
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
    this.estBookService.getEstadiasBook().subscribe(estadiasBooks =>{
      console.log((estadiasBooks));
      this.estadiasBooks=estadiasBooks;
    })
  }


  async deleteEstadiasBook(id: any) {
    this.estBookService.deleteEstadiasBook(id);
    console.log('Libro eliminado', id);
  }


  editEstBook(book: Libro){
    this.router.navigate(['/estadias/editEstadia', book.id])
  }

}


