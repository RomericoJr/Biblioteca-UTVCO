import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function titleValid(ctrl: AbstractControl):ValidationErrors | null{
    const title: string = ctrl?.get('title')?.value;
    
   // Verificar si la contraseña está presente y tiene una longitud mayor que 6
  if (!title || title.length <= 2 || title.length >= 55) {
    return { 'titleError': true };
  }
    return null;
}

export function authorValid(ctrl: AbstractControl):ValidationErrors | null{
  const author: string = ctrl?.get('author')?.value;
  
 // Verificar si la contraseña está presente y tiene una longitud mayor que 6
if (!author || author.length <= 2 || author.length >= 55) {
  return { 'authorError': true };
}
  return null;
}


export function descriptionValid(ctrl: AbstractControl):ValidationErrors | null{
  const description: string = ctrl?.get('description')?.value;
  
 // Verificar si la contraseña está presente y tiene una longitud mayor que 6
if (!description || description.length <= 2 || description.length >= 255) {
  return { 'descriptionError': true };
}
  return null;
}

export function copiasValid(ctrl: AbstractControl):ValidationErrors | null{
  const copias: string = ctrl?.get('copias')?.value;
  
 // Verificar si la contraseña está presente y tiene una longitud mayor que 6
if (!copias || copias.length >=2) {
  return { 'copiasError': true };
}
  return null;
}

// export function carrer_idValid(ctrl: AbstractControl):ValidationErrors | null{
//   const carrer_id: string = ctrl?.get('carrer_id')?.value;
  
//  // Verificar si la contraseña está presente y tiene una longitud mayor que 6
// if (!carrer_id || carrer_id.length <= 6) {
//   return { 'carrer_idError': true };
// }
//   return null;
// }


export function carrer_idValid(ctrl: AbstractControl): ValidationErrors | null {
  const carrer_id: any[] = ctrl?.get('carrer_id')?.value;
    if (!carrer_id || carrer_id.length === 0) {
    return { 'carrer_idError': true };
  }

  return null;
}