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


import { InicioComponent } from '../inicio/inicio.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { SubCategoryListComponent } from './sub-category-list/sub-category-list.component';
import { StudentComponent } from '../student/student/student.component';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { CarrerComponent } from '../student/carrer/carrer.component';
import { CarrerListComponent } from '../student/carrer-list/carrer-list.component';
import { GenereComponent } from '../student/genere/genere.component';
import { GenereListComponent } from '../student/genere-list/genere-list.component';
import { ProfileUserComponent } from 'src/app/auth/profile-user/profile-user.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
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
    path: 'apart',
    component: ApartComponent
  },
  {
    path: 'apart-list',
    component: ApartListComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'category-list',
    component: CategoryListComponent
  },
  {
    path: 'editCatego/:id',
    component: CategoryComponent
  },

  {
    path: 'subcategory',
    component: SubCategoryComponent
  },
  {
    path: 'subcategory-list',
    component: SubCategoryListComponent
  },
  {
    path: 'editSubCategory/:id',
    component: SubCategoryComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'editStudent/:email',
    component: StudentComponent
  },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'carrer',
    component: CarrerComponent
  },
  {
    path: 'editCarrer/:id',
    component: CarrerComponent
  },
  {
    path: 'carrer-list',
    component: CarrerListComponent
  },
  {
    path: 'genere',
    component: GenereComponent
  },
  {
    path: 'editGenere/:id',
    component: GenereComponent
  },
  {
    path: 'genere-list',
    component: GenereListComponent
  },
  {
    path: 'genere-list',
    component: GenereComponent
  },
  {
    path: 'profile-user',
    component: ProfileUserComponent
  },
  {
    path: '**',
    redirectTo: 'inicio',
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
