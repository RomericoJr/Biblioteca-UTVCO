import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ReadComponent } from './read/read.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderModule } from '../header/header.module';
import { BookPrestComponent } from './book-prest/book-prest.component';
import { PresListComponent } from './pres-list/pres-list.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddEditComponent
  },
  {
    path: 'edit/:id',
    component: AddEditComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'list',
    component: BookListComponent
  },
  {
    path: 'prest',
    component: BookPrestComponent
  },
  {
    path: 'prelist',
    component: PresListComponent
  },
  {
    path: '**',
    redirectTo: 'read',
  }
]


@NgModule({
  declarations: [
    AddEditComponent,
    ReadComponent,
    BookPrestComponent,
    PresListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HeaderModule
  ],
  exports: [
    AddEditComponent,
    ReadComponent,
    RouterModule
  ]
})
export class BookModule { }
