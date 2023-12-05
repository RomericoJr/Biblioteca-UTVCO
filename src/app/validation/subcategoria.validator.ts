import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function id_categoryValid(ctrl: AbstractControl): ValidationErrors | null {
    const idCategory: any[] = ctrl?.get('id_category')?.value;
      if (!idCategory || idCategory.length === 0) {
      return { 'id_categoryError': true };
    }
  
    return null;
  }


export function subcategoryValid(ctrl: AbstractControl):ValidationErrors | null{
    const subcategory: string = ctrl?.get('subcategory')?.value;
    if( subcategory.length < 50 ){
        return ({'subcategoryError': true})
    }
    return null;
}
