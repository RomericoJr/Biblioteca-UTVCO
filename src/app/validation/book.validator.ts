import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function isbnValid(ctrl: AbstractControl):ValidationErrors | null{
    const isbn: string = ctrl?.get('isbn')?.value;
    // Verificar si el ISBN está presente y tiene una longitud menor que 50
  if (!isbn || isbn.length != 10) {
    return { 'isbnError': true };
  }
    return null;
}

export function titleValid(ctrl: AbstractControl):ValidationErrors | null{
    const title: string = ctrl?.get('title')?.value;
    if(!title || title.length < 5 || title.length >=50){
        return ({'titleError': true})
    }
    return null;
}

/*  */
export function authorValid(ctrl: AbstractControl):ValidationErrors | null{
    const author: string = ctrl?.get('author')?.value;
    if( !author || author.length < 5 || author.length >=50 ){
        return ({'authorError': true})
    }
    return null;
}



export function editorialValid(ctrl: AbstractControl):ValidationErrors | null{
    const editorial: string = ctrl?.get('editorial')?.value;
    if( !editorial || editorial.length < 5 || editorial.length >=50 ){
        return ({'editorialError': true})
    }
    return null;
}


export function editionValid(ctrl: AbstractControl):ValidationErrors | null{
    const edition: string = ctrl?.get('edition')?.value;
    if( !edition || edition.length < 5 || edition.length >=50){
        return ({'editionError': true})
    }
    return null;
}




export function stockValid(ctrl: AbstractControl): ValidationErrors | null {
  const stock: string = ctrl?.get('stock')?.value;

  if (!stock || stock.length < 2) {
    // Marcar el control como 'sucio' y 'tocado'
    ctrl.markAsDirty();
    ctrl.markAsTouched();

    return { 'stockError': true };
  }

  ctrl.setErrors(null);
  ctrl.markAsUntouched();

  return null;
}



// export function idCategoryRequired(ctrl: AbstractControl): ValidationErrors | null {
//   // Valor del campo 'id_category'
//   const idCategory: string = ctrl?.get('id_category')?.value;

//   // Verificar si id_category está presente
//   if (!idCategory) {
//     // Marcar el control como 'sucio' y 'tocado'
//     ctrl.markAsDirty();
//     ctrl.markAsTouched();

//     return { 'id_categoryError': true };
//   }

//   // Limpiar los errores y marcar el control como 'válido'
//   ctrl.setErrors(null);
//   ctrl.markAsUntouched();

//   // Indicador de que la validación ha pasado
//   return null;
// }


export function id_categoryValid(ctrl: AbstractControl): ValidationErrors | null {
  const id_category: any[] = ctrl?.get('id_category')?.value;
    if (!id_category || id_category.length === 0) {
    return { 'id_categoryError': true };
  }

  return null;
}


export function id_subcategory(ctrl: AbstractControl):ValidationErrors | null{
    // valor del campo 'id_subcategory'
const id_subcategory: string = ctrl?.get('id_subcategory')?.value;
    if( id_subcategory.length  ){
        // Marcar el control como 'sucio' y 'tocado'
        ctrl.markAsDirty();
        ctrl.markAsTouched();

        return ({'id_subcategoryError': true})
    }
     // Limpiar los errores y marcar el control como 'válido'
     ctrl.setErrors(null);
     ctrl.markAsUntouched();

     // indicandor que la validación ha pasado
     return null;
}

export function id_subcategoryValid(ctrl: AbstractControl): ValidationErrors | null {
  const id_subcategory: any[] = ctrl?.get('id_subcategory')?.value;
    if (!id_subcategory || id_subcategory.length === 0) {
    return { 'id_subcategoryError': true };
  }

  return null;
}

/* require (campo requerido obligatorio checar) */
