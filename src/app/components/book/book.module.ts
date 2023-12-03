import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ReadComponent } from './read/read.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartComponent } from './apart/apart.component';
import { ApartListComponent } from './apart-list/apart-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { SubCategoryListComponent } from './sub-category-list/sub-category-list.component';
import { ReadEstadiaComponent } from '../estadias/read-estadia/read-estadia.component';

const routes: Routes = [
  {
    path: 'function',
    loadChildren: () => import('../../admin-or-student.module').then(m => m.AdminOrStudentModule)
  },
  {
    path: 'apart',
    component: ApartComponent
  },
  {
    path: 'readDonacion',
    component: ReadEstadiaComponent
  },
  {
    path: '**',
    redirectTo: 'function',
  },



]


@NgModule({
  declarations: [
    AddEditComponent,
    ReadComponent,
    ApartComponent,
    ApartListComponent,
    CategoryComponent,
    CategoryListComponent,
//master
    SubCategoryComponent,
    SubCategoryListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
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
