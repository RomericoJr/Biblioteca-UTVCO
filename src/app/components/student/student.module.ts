import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { CarrerComponent } from './carrer/carrer.component';
import { CarrerListComponent } from './carrer-list/carrer-list.component';
import { GenereComponent } from './genere/genere.component';
import { GenereListComponent } from './genere-list/genere-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentComponent,
    CarrerComponent,
    CarrerListComponent,
    GenereComponent,
    GenereListComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    StudentListComponent,
    StudentComponent
  ]
})
export class StudentModule { }
