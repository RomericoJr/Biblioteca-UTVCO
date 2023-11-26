import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentComponent } from './student/student.component';
import { CarrerComponent } from './carrer/carrer.component';
import { CarrerListComponent } from './carrer-list/carrer-list.component';
import { GenereComponent } from './genere/genere.component';
import { GenereListComponent } from './genere-list/genere-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentProfileComponent,
    StudentComponent,
    CarrerComponent,
    CarrerListComponent,
    GenereComponent,
    GenereListComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    StudentListComponent,
    StudentProfileComponent,
    StudentComponent
  ]
})
export class StudentModule { }
