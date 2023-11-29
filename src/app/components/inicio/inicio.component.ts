import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/laravel/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  name: string = '';
  constructor(
    private _autsS: AuthService
  ) { }

  ngOnInit() {
    this.getInfoProfile();
  }

  getInfoProfile(){
    this._autsS.userDetail().subscribe({
      next: (data) => {
        this.name = data.name;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
