import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEstadiaComponent } from './add-edit-estadia/add-edit-estadia.component';
import { ReadEstadiaComponent } from './read-estadia/read-estadia.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { EstadiaListComponent } from './estadia-list/estadia-list.component';


const routes: Routes = [



]


@NgModule({
  declarations: [
    AddEditEstadiaComponent,
    ReadEstadiaComponent,
    EstadiaListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule

  ],exports: [
    AddEditEstadiaComponent,
    ReadEstadiaComponent,
    RouterModule,
  ]
})
export class EstadiasModule { }
