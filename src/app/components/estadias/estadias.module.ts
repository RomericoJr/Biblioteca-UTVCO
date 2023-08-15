import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEstadiaComponent } from './add-edit-estadia/add-edit-estadia.component';
import { ReadEstadiaComponent } from './read-estadia/read-estadia.component';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '../book/book-list/book-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EstadiaListComponent } from './estadia-list/estadia-list.component';

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
  },
  {
    path: 'list',
    component: BookListComponent
  }
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
    ReactiveFormsModule
  ],exports: [
    AddEditEstadiaComponent,
    ReadEstadiaComponent,
    RouterModule,
  ]
})
export class EstadiasModule { }
