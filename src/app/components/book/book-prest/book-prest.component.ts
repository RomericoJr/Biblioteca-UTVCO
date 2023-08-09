import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';

@Component({
  selector: 'app-book-prest',
  templateUrl: './book-prest.component.html',
  styleUrls: ['./book-prest.component.css']
})
export class BookPrestComponent {

  constructor(
    private fb : FormBuilder,
    private bookService: BookFirebaseService
  ){}

  title = 'bibliotecaUtvco';

  formPrest: FormGroup = this.fb.group({
    isbn: ['', Validators.required],
    matriculaEst: ['', Validators.required],
    // fechaPrest: ['', Validators.required],
    // fechaDev: ['', Validators.required],
  })
    
  save() {
    this.bookService.guardarPrest(
      {
        id: new Date().getTime().toString(),
        ...this.formPrest.value
      } as any);
      console.log('Guardado', this.formPrest.value);
  
  }
}
