import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function passwordValid(ctrl: AbstractControl):ValidationErrors | null{
    const password: string = ctrl?.get('password')?.value;
    
   // Verificar si la contraseña está presente y tiene una longitud mayor que 6
  if (!password || password.length <= 6) {
    return { 'passwordError': true };
  }
    return null;
}

// user <50