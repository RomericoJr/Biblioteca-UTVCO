import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function genereValid(ctrl: AbstractControl):ValidationErrors | null{
    const genere: string = ctrl?.get('genere')?.value;
    if( genere.length < 6 ){
        return ({'genereError': true})
    }
    return null;
}
