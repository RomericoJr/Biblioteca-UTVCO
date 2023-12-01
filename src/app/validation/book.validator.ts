import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

export function isbnValid(ctrl: AbstractControl):ValidationErrors | null{
    const isbn: string = ctrl?.get('isbn')?.value;
    if( isbn.length < 10 ){
        return ({'isbnError': true})
    }
    return null;
}

export function titleValid(ctrl: AbstractControl):ValidationErrors | null{
    const title: string = ctrl?.get('title')?.value;
    if( title.length < 10 ){
        return ({'titleError': true})
    }
    return null;
}


export function authorValid(ctrl: AbstractControl):ValidationErrors | null{
    const author: string = ctrl?.get('author')?.value;
    if( author.length < 10 ){
        return ({'authorError': true})
    }
    return null;
}



export function editorialValid(ctrl: AbstractControl):ValidationErrors | null{
    const editorial: string = ctrl?.get('editorial')?.value;
    if( editorial.length < 10 ){
        return ({'editorialError': true})
    }
    return null;
}


export function editionValid(ctrl: AbstractControl):ValidationErrors | null{
    const edition: string = ctrl?.get('edition')?.value;
    if( edition.length < 10 ){
        return ({'editionError': true})
    }
    return null;
}



export function stockValid(ctrl: AbstractControl):ValidationErrors | null{
    // valor del campo 'stock'
const stock: string = ctrl?.get('stock')?.value;
    if( stock.length < 2 ){
        // Marcar el control como 'sucio' y 'tocado'
        ctrl.markAsDirty();
        ctrl.markAsTouched();

        return ({'stockError': true})
    }
     // Limpiar los errores y marcar el control como 'válido'
     ctrl.setErrors(null);
     ctrl.markAsUntouched();
 
     // indicandor que la validación ha pasado
     return null; 
}


export function id_category(ctrl: AbstractControl):ValidationErrors | null{
    // valor del campo 'id_category'
const id_category: string = ctrl?.get('id_category')?.value;
    if( id_category.length < 2 ){
        // Marcar el control como 'sucio' y 'tocado'
        ctrl.markAsDirty();
        ctrl.markAsTouched();

        return ({'id_categoryError': true})
    }
     // Limpiar los errores y marcar el control como 'válido'
     ctrl.setErrors(null);
     ctrl.markAsUntouched();
 
     // indicandor que la validación ha pasado
     return null; 
}


export function id_subcategory(ctrl: AbstractControl):ValidationErrors | null{
    // valor del campo 'id_subcategory'
const id_subcategory: string = ctrl?.get('id_subcategory')?.value;
    if( id_subcategory.length < 2 ){
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
