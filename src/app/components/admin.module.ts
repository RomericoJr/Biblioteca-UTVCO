import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './book/add-edit/add-edit.component';
import { ReadComponent } from './book/read/read.component';
import { CategoryComponent } from './book/category/category.component';
import { CategoryListComponent } from './book/category-list/category-list.component';
import { SubCategoryComponent } from './book/sub-category/sub-category.component';
import { SubCategoryListComponent } from './book/sub-category-list/sub-category-list.component';
import { StudentComponent } from './student/student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CarrerComponent } from './student/carrer/carrer.component';
import { CarrerListComponent } from './student/carrer-list/carrer-list.component';
import { GenereComponent } from './student/genere/genere.component';
import { GenereListComponent } from './student/genere-list/genere-list.component';
import { AddEditEstadiaComponent } from './estadias/add-edit-estadia/add-edit-estadia.component';
import { EstadiaListComponent } from './estadias/estadia-list/estadia-list.component';

const routes: Routes = [
  {
    path: 'function',
    loadChildren: () => import('../admin-or-student.module').then(m => m.AdminOrStudentModule)
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
    path: 'agregar_Donacion',
    component: AddEditEstadiaComponent
  },
  {
    path: 'editDonacion/:id',
    component: AddEditEstadiaComponent
  },
  {
    path: 'list',
    component: EstadiaListComponent
  },
  {
    path: '**',
    redirectTo: 'function',
  }
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule
  ]
})
export class AdminModule { }
