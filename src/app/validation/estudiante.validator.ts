import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function nameValid(ctrl: AbstractControl):ValidationErrors | null{
    const name: string = ctrl?.get('name')?.value;
    if( name.length < 6 ){
        return ({'nameError': true})
    }
    return null;
}


export function lastname_fatherValid(ctrl: AbstractControl):ValidationErrors | null{
    const lastname_father: string = ctrl?.get('lastname_father')?.value;
    if( lastname_father.length < 6 ){
        return ({'lastname_fatherError': true})
    }
    return null;
}

export function lastname_motherValid(ctrl: AbstractControl):ValidationErrors | null{
    const lastname_mother: string = ctrl?.get('lastname_mother')?.value;
    if( lastname_mother.length < 6 ){
        return ({'lastname_motherError': true})
    }
    return null;
}


export function matriculaValid(ctrl: AbstractControl):ValidationErrors | null{
    const matricula: string = ctrl?.get('matricula')?.value;
    if( matricula.length < 6 ){
        return ({'matriculaError': true})
    }
    return null;
}



export function phoneValid(ctrl: AbstractControl):ValidationErrors | null{
    const phone: string = ctrl?.get('phone')?.value;
    if( phone.length < 10 ){
        return ({'phoneError': true})
    }
    return null;
}


export function emailValid(ctrl: AbstractControl):ValidationErrors | null{
    const email: string = ctrl?.get('email')?.value;
    if( email.length < 6 ){
        return ({'emailError': true})
    }
    return null;
}

export function passwordValid(ctrl: AbstractControl):ValidationErrors | null{
    const password: string = ctrl?.get('password')?.value;
    if( password.length < 6 ){
        return ({'passwordError': true})
    }
    return null;
}

export function id_genereValid(ctrl: AbstractControl):ValidationErrors | null{
    const id_genere: string = ctrl?.get('id_genere')?.value;
    if( id_genere.length < 6 ){
        return ({'id_genereError': true})
    }
    return null;
}

export function id_carrersValid(ctrl: AbstractControl):ValidationErrors | null{
    const id_carrers: string = ctrl?.get('id_carrers')?.value;
    if( id_carrers.length < 6 ){
        return ({'id_carrersError': true})
    }
    return null;
}


