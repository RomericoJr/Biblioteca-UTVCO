import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function nameValid(ctrl: AbstractControl):ValidationErrors | null{
    const name: string = ctrl?.get('name')?.value;
    if(!name || name.length < 2 || name.length >= 50 ){
        return ({'nameError': true})
    }
    return null;
}


export function lastname_fatherValid(ctrl: AbstractControl):ValidationErrors | null{
    const lastname_father: string = ctrl?.get('lastname_father')?.value;
    if( !lastname_father || lastname_father.length < 4 || lastname_father.length >= 50 ){
        return ({'lastname_fatherError': true})
    }
    return null;
}

export function lastname_motherValid(ctrl: AbstractControl):ValidationErrors | null{
    const lastname_mother: string = ctrl?.get('lastname_mother')?.value;
    if( !lastname_mother || lastname_mother.length < 4 || lastname_mother.length >= 50 ){
        return ({'lastname_motherError': true})
    }
    return null;
}



export function matriculaValid(ctrl: AbstractControl): ValidationErrors | null {
  // Valor del campo 'matricula'
  const matricula: string = ctrl?.get('matricula')?.value;

  // Verificar si matricula está presente y tiene una longitud en el rango adecuado
  // if (!matricula || matricula.length < 2 || matricula.length >= 11) {
  if (!matricula || matricula.length !== 10) {
  return { 'matriculaError': true };
  }

  return null;
}




export function phoneValid(ctrl: AbstractControl):ValidationErrors | null{
    const phone: string = ctrl?.get('phone')?.value;
    if( !phone || phone.length !=10){
        return ({'phoneError': true})
    }
    return null;
}


export function emailValid(ctrl: AbstractControl):ValidationErrors | null{
    const email: string = ctrl?.get('email')?.value;
    if( !email || email.length < 8 ||  email.length >= 55){
        return ({'emailError': true})
    }
    return null;
}

export function passwordValid(ctrl: AbstractControl):ValidationErrors | null{
    const password: string = ctrl?.get('password')?.value;
    if( !password || password.length > 6 || password.length >=50){
        return ({'passwordError': true})
    }
    return null;
}
// minimo 6 maximo lo


// requerido

// export function id_genereValid(ctrl: AbstractControl):ValidationErrors | null{
//     const id_genere: string = ctrl?.get('id_genere')?.value;
//     if( id_genere.length  ){
//         return ({'id_genereError': true})
//     }
//     return null;
// }

export function id_genereValid(ctrl: AbstractControl): ValidationErrors | null {
    const id_genere: any[] = ctrl?.get('id_genere')?.value;
      if (!id_genere || id_genere.length === 0) {
      return { 'id_genereError': true };
    }

    return null;
  }






export function id_carrersValid(ctrl: AbstractControl): ValidationErrors | null {
    const id_carrers: any[] = ctrl?.get('id_carrers')?.value;
      if (!id_carrers || id_carrers.length === 0) {
      return { 'id_carrersError': true };
    }

    return null;
  }


