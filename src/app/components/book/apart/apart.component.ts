import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';

@Component({
  selector: 'app-apart',
  templateUrl: './apart.component.html',
  styleUrls: ['./apart.component.css']
})
export class ApartComponent {

constructor(
  private fb : FormBuilder,
  private bookService: BookFirebaseService
){}
  
title = 'bibliotecaUtvco';

formApart: FormGroup = this.fb.group({
    titulo: ['', Validators.required],
    matricula: ['', Validators.required],
  })


  save() {
    this.bookService.guardarApart(
      {
        id: new Date().getTime().toString(),
        ...this.formApart.value
      } as any);
      console.log('Guardado', this.formApart.value);
  
  }
}
