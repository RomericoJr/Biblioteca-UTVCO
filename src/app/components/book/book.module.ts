import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ReadComponent } from './read/read.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderModule } from '../header/header.module';
import { BookPrestComponent } from './book-prest/book-prest.component';
import { PresListComponent } from './pres-list/pres-list.component';
import { ApartComponent } from './apart/apart.component';
import { ApartListComponent } from './apart-list/apart-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

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
    path: 'apart',
    component: ApartComponent
  },
  {
    path: 'apart-list',
    component: ApartListComponent
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
    PresListComponent,
    ApartComponent,
    ApartListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HeaderModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    AddEditComponent,
    ReadComponent,
    RouterModule
  ]
})
export class BookModule { }
