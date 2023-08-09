import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {

// formulario: FormGroup;

constructor(
  private fb : FormBuilder,
  private bookService: BookFirebaseService
){
  // this.books = [{
  //   isbn: 'Primero',
  // titulo: 'El sutil arte',
  // autores: 'Mark Manson',
  // categoria: 'Desarrollo',
  // subcategoria: 'Personal',
  // editorial: 'Harper Collins',
  // edicion: 'Segunda',
  // }];
}

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


ngOnInit(): void {
  this.bookService.getBook().subscribe(books => {
    console.log(books);
  })
}


save() {
  this.bookService.guardarBook(
    {
      id: new Date().getTime().toString(),
      ...this.formBook.value
    } as any);
    console.log('Guardado', this.formBook.value);

}

  

}
