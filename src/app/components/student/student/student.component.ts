import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SweetAlertService } from 'src/app/service/firebase/sweet-alert.service';
import { StudentService } from '../../../service/laravel/student.service';
import { GenereService } from 'src/app/service/laravel/genere.service';
import { CarrerService } from 'src/app/service/laravel/carrer.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sweet: SweetAlertService,
    private _studentS: StudentService,
    private _genereS: GenereService,
    private _carrerS: CarrerService
  ){}

  titleText = 'Agregar Estudiante';
  titleBtn = 'Agregar';
  id!: number;

  genere:any[] = [];
  carrers:any[] = [];
  userEmail!: string;

  formStudent = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    lastname_father: ['',[Validators.required, Validators.minLength(3)]],
    lastname_mother: ['',[Validators.required, Validators.minLength(3)]],
    matricula: ['',[Validators.required, ]],
    phone: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['cambiame_1'],
    id_genere: ['',[Validators.required, ]],
    id_carrers: ['',[Validators.required, ]],
  });


  ngOnInit(){
      this.activatedRoute.params.subscribe({
        next: (data:any) => {
          this.userEmail = data.email;
          if(this.userEmail){
            this.titleText = 'Editar Estudiante';
            this.titleBtn = 'Editar';
            this.getStudentByEmail(this.userEmail);
          }
        },
        error: (err) => {
          console.log(err);
        }
      })




        this.getGenere();
        this.getCarrers();
  }



  option(){
    if(this.userEmail){
      this.updateStudent();
    } else {
      this.save();
    }
  }

  save(){
    this._studentS.addStudent(this.formStudent.value).subscribe({
      next: (data) => {
        this.sweet.success('Estudiante agregado correctamente');
        this.route.navigate(['/BibliotecaUTVCO/student-list']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getStudentById(id: number){
    this._studentS.getStudentById(id).subscribe({
      next: (data) => {
        this.formStudent.setValue({
          name: data.name,
          lastname_father: data.lastname_father,
          lastname_mother: data.lastname_mother,
          matricula: data.matricula,
          phone: data.phone,
          email: data.email,
          password: data.password,
          id_genere: data.id_genere,
          id_carrers: data.id_carrers,
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  getStudentByEmail(email: string){
    this._studentS.getStudentByEmail(email).subscribe({
      next: (data) => {
        this.formStudent.setValue({
          name: data.data.name,
          lastname_father: data.data.lastname_father,
          lastname_mother: data.data.lastname_mother,
          matricula: data.data.matricula,
          phone: data.data.phone,
          email: data.data.email,
          password: data.data.password,
          id_genere: data.data.id_genere,
          id_carrers: data.data.id_carrers,
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


  updateStudent(){
    const formStudentValue = this.formStudent.value;
    const updatedFormStudent = { ...formStudentValue, _method: 'PUT' };

    this._studentS.updateStudent(this.userEmail, updatedFormStudent).subscribe({
      next: (data) => {
        this.sweet.success('Estudiante actualizado correctamente');
        this.route.navigate(['/BibliotecaUTVCO/student-list']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getGenere(){
    this._genereS.getGenere().subscribe({
      next: (data: any) => {
        this.genere = data.genere;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getCarrers(){
    this._carrerS.getCarrer().subscribe({
      next: (data: any) => {
        this.carrers = data.carrer;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
