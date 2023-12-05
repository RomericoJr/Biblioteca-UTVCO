import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";



export function categoryValid(ctrl: AbstractControl): ValidationErrors | null {
    // Obtener el valor del campo 'category'
    const category: string = ctrl?.get('category')?.value;

    // Verificar si el campo 'category' está vacío o nulo
    if (!category || category.trim().length >= 255) {
        // Devolver un objeto con un error indicando que el campo es obligatorio
        return { 'categoryError': true };
    }

    // 255 checar
    return null;
}

