import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';
import Apartado from '../../../interfaces/libro.interface';

@Component({
  selector: 'app-apart-list',
  templateUrl: './apart-list.component.html',
  styleUrls: ['./apart-list.component.css']
})
export class ApartListComponent {

  aparts: Apartado [] = [];

  constructor(
    private fb : FormBuilder,
    private bookService: BookFirebaseService
  ){}

   title = 'bibliotecaUtvco';

  ngOnInit(): any {
    this.bookService.getApart().subscribe(aparto => {
      console.log(aparto);
      this.aparts = aparto;
    });
}

async deleteApart(id: any) {
  this.bookService.deleteApart(id);
  console.log('Eliminado libro con ID:', id);
}

}
