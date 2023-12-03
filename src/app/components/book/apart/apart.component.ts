import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookFirebaseService } from 'src/app/service/firebase/book-firebase.service';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { AuthService } from 'src/app/service/laravel/auth.service';
import { BookService } from 'src/app/service/laravel/book.service';
import { SetAsaideService } from '../../../service/laravel/set-asaide.service';

export interface setAsade {
  id_book :number;
  id_student :number;
  date_set_asaide :string;
  id_status  :number;
}

@Component({
  selector: 'app-apart',
  templateUrl: './apart.component.html',
  styleUrls: ['./apart.component.css']
})
export class ApartComponent {

constructor(
  private fb : FormBuilder,
  private sweetS: SweetAlertService,
  private router: Router,
  private _bookS: BookService,
  private _authS: AuthService,
  private _setAsaide: SetAsaideService
){}

books: any[] = [];

setAsaideList: setAsade[] = [];

idStudent!:number;

ngOnInit() {
  this.getBookS();
  this.getuserDetail();
}

setAsaide(id:number){
  this.sweetS.confirm('¿Desea apartar este libro?', 'Apartar').then((result) => {
    if (result.isConfirmed) {
      this.sweetS.loading('Apartando libro...');

      this.setAsaideList.push({
        id_book: id,
        id_student: this.idStudent,
        date_set_asaide: new Date().toISOString().slice(0, 10),
        id_status: 3
      });
      this._setAsaide.postSetAsaide(this.setAsaideList[0]).subscribe({
        next: (data: any) => {
          this.sweetS.success('Libro apartado');
          this.router.navigate(['/BibliotecaUTVCO/function/apart-list']);
        },
        error: (error: any) => {
          this.sweetS.error('Ya haz apartado este libro');
          console.log(error);
        }
      })

    }
  }).catch((error) => {
    console.log(error);
  });
}

getBookS() {
  this._bookS.getBook().subscribe({
    next: (data: any) => {
      this.books = data;
    },
    error: (error: any) => {
      console.log(error);
    }
  });
}




getuserDetail(){
  this._authS.userDetail().subscribe({
    next: (data: any) => {
      // console.log(data);
      this.idStudent = data.id_students;
    },
    error: (error: any) => {
      console.log(error);
    }
  });
}


}
