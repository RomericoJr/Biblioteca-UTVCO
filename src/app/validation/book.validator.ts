import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function isbnValid(ctrl: AbstractControl):ValidationErrors | null{
    const isbn: string = ctrl?.get('isbn')?.value;
    if( isbn.length < 10 ){
        return ({'isbnError': true})
    }
    return null;
}
