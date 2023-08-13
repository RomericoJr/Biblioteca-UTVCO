import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword: boolean = false;

  constructor() { }

  VerPassW() {
    this.showPassword = !this.showPassword;
  }



}


