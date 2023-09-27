import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent {
  showPassword: boolean = false;

  constructor() { }

  VerPassW() {
    this.showPassword = !this.showPassword;
  }

}
