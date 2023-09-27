import { Component } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  showPassword: boolean = false;

  constructor() { }

  VerPassW() {
    this.showPassword = !this.showPassword;
  }
}
