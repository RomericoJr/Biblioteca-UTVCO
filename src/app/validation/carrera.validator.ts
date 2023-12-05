import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function carrer_nameValid(ctrl: AbstractControl):ValidationErrors | null{
    const carrer_name: string = ctrl?.get('carrer_name')?.value;
    if( !carrer_name || carrer_name.length < 2 || carrer_name.length >=255 ){
        return ({'carrer_nameError': true})
    }
    return null;
}
