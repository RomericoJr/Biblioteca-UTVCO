import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      name:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm?.valid) {
      console.log("Datos del formulario:");
      console.log("Correo", this.registerForm.get('email')?.value);
      console.log("Nombre", this.registerForm.get('name')?.value);
      console.log("Contraseña:", this.registerForm.get('password')?.value);
      console.log("Confirmar contraseña:", this.registerForm.get('confirmPassword')?.value);

    } else {
      console.log("Por favor, complete todos los campos correctamente.");
    }
  }
}
