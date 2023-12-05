import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function genereValid(ctrl: AbstractControl):ValidationErrors | null{
    const genere: string = ctrl?.get('genere')?.value;
    if( !genere || genere.length < 2 ||  genere.length >=255){
        return ({'genereError': true})
    }
    return null;
}
