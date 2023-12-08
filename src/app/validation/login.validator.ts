import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";


export function emaildValid(ctrl: AbstractControl):ValidationErrors | null{
  const email: string = ctrl?.get('email')?.value;
  
if (!email || email.length <= 4 || email.length >= 50){
  return { 'emailError': true };
}
  return null;
}

export function passwordValid(ctrl: AbstractControl):ValidationErrors | null{
    const password: string = ctrl?.get('password')?.value;
    
   // Verificar si la contraseña está presente y tiene una longitud mayor que 6
  if (!password || password.length <= 6) {
    return { 'passwordError': true };
  }
    return null;
}

// user <50