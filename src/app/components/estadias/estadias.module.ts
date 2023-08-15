import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEstadiaComponent } from './add-edit-estadia/add-edit-estadia.component';
import { ReadEstadiaComponent } from './read-estadia/read-estadia.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'addEstadia',
    component: AddEditEstadiaComponent
  },
  {
    path: 'editEstadia/:id',
    component: AddEditEstadiaComponent
  },
  {
    path: 'readEstadia',
    component: ReadEstadiaComponent
  }
]


@NgModule({
  declarations: [
    AddEditEstadiaComponent,
    ReadEstadiaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],exports: [
    AddEditEstadiaComponent,
    ReadEstadiaComponent,
    RouterModule
  ]
})
export class EstadiasModule { }
