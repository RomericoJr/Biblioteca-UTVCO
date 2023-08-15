import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookFirebaseService } from 'src/app/service/book-firebase.service';
import { SweetAlertService } from 'src/app/service/sweet-alert.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {


constructor(
  private fb : FormBuilder,
  private bookService: BookFirebaseService,
  private route: Router,
  private activatedRoute: ActivatedRoute,
  private sweet : SweetAlertService,
){}

  titleText = 'Agregar Palabras';
  titleBtn = 'Agregar';
  id!: string;

  ngOnInit(){
    this.activatedRoute.params.subscribe((data :any) => {
      this.id = data.id
      console.log(this.id);

      if(data.id){
        this.titleText = 'Actualizar Palabras';
        this.titleBtn = 'Actualizar';
        this.bookService.getBookById(this.id).subscribe((data) => {
          console.log('existo y soy ', data);
          this.formBook.patchValue(data[0])

       });
    }
      });
    }


  formBook: FormGroup = this.fb.group({
    isbn: ['', Validators.required],
    titulo: ['', Validators.required],
    autores: ['', Validators.required],
    categoria: ['', Validators.required],
    subcategoria: ['', Validators.required],
    editorial: ['', Validators.required],
    edicion: ['', Validators.required],
  })


  option(){

    if(this.id){
      this.updateBook();
    } else {
      this.save();
    }
  }

  updateBook(){
    this.bookService.updateBook(
      {id: this.id,
        ...this.formBook.value});

    console.log('cacha',this.formBook.value);
    this.sweet.success('Actualizado con exito');
    this.route.navigateByUrl('/book/list');
  }

  save() {
    this.bookService.guardarBook(
    {
      id: new Date().getTime().toString(),
      ...this.formBook.value
    } as any);
    console.log('Guardado', this.formBook.value);
    this.sweet.success('Guardado con exito');

      this.route.navigateByUrl('/book/read');
  }

}
