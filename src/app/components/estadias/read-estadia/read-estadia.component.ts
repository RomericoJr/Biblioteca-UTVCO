import { Component } from '@angular/core';
import { BookService } from 'src/app/service/laravel/book.service';
import { DonacionService } from 'src/app/service/laravel/donacion.service';

@Component({
  selector: 'app-read-estadia',
  templateUrl: './read-estadia.component.html',
  styleUrls: ['./read-estadia.component.css']
})
export class ReadEstadiaComponent {

  bookEstadias:any[] = [];
  constructor(
    // private readonly _bookS: BookService,
    private  _donacionS: DonacionService,
  ) { }

  ngOnInit(): void {
    this.getBookEstadias();

  }

  getBookEstadias(){
    this._donacionS.getDonacion().subscribe({
      next: (data:any) => {
        this.bookEstadias = data.data;
      },
      error: (error:any) => {
        console.log(error);
      }
    });
  }

}
