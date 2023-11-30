import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function passwordValid(ctrl: AbstractControl):ValidationErrors | null{
    const password: string = ctrl?.get('password')?.value;
    if( password.length < 6 ){
        return ({'passwordError': true})
    }
    return null;
}
