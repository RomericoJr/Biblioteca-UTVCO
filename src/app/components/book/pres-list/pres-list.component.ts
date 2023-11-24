import { Component, inject } from '@angular/core';
import Prestamo from '../../../interface/libro.interface';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BookFirebaseService } from 'src/app/service/firebase/book-firebase.service';

@Component({
  selector: 'app-pres-list',
  templateUrl: './pres-list.component.html',
  styleUrls: ['./pres-list.component.css']
})
export class PresListComponent {


  prests: Prestamo [] = [];
  router = inject(Router);


  constructor(
    private fb : FormBuilder,
    private bookService: BookFirebaseService,

  ){}

  // this.sweetS.success('Prenda guardada');
  //   this.router.navigateByUrl('/admin-crud/crudClothe');

  ngOnInit(): any {
    this.bookService.getPrest().subscribe(aparto => {
      console.log(aparto);
      this.prests = aparto;
    });
}

  async deletePrest (id: any) {
  this.bookService.deletePrest(id);
  console.log('Eliminado libro con ID:', id);
}

}
