import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudFirebaseService } from './service/crud-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private fb : FormBuilder,
    private crud : CrudFirebaseService,
  ){

  }
  title = 'bibliotecaUtvco';

  formis: FormGroup = this.fb.group({
    algo: ['',Validators.required ],
    nombre: ['', Validators.required],

  })


  save() {
    this.crud.guardarWord(
      {
        id: new Date().getTime().toString(),
        ...this.formis.value
      } as any);
      console.log('Guardado', this.formis.value);


  }
}
