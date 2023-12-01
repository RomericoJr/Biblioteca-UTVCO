import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function id_categoryValid(ctrl: AbstractControl):ValidationErrors | null{
    const id_category: string = ctrl?.get('id_category')?.value;
    if( id_category.length < 6 ){
        return ({'id_categoryError': true})
    }
    return null;
}


export function subcategoryValid(ctrl: AbstractControl):ValidationErrors | null{
    const subcategory: string = ctrl?.get('subcategory')?.value;
    if( subcategory.length < 6 ){
        return ({'subcategoryError': true})
    }
    return null;
}
