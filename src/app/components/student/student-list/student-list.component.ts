import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../service/laravel/student.service';
import { SweetAlertService } from '../../../service/firebase/sweet-alert.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  estudiantes: any[] = [];

  constructor(
    private sweet: SweetAlertService,
    private _studentS: StudentService,
    private router: Router
  ) { }

  ngOnInit(){
    this.getStudent();
  }

  getStudent(){
    this._studentS.getStudent().subscribe({
      next: (data:any) => {
        this.estudiantes = data.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteStudent(id: number){

  }

  updateStudent(student:any){
    const email = student.email;
    this.sweet.confirm('¿Desea editar este estudiante?', 'Aceptar').then((result) => {
      if(result.value){
        this.router.navigate(['/BibliotecaUTVCO/editStudent/', student.email]);
      }
    });
  }

}
