import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'nav-bar',
    component: NavBarComponent
  }
]



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports: [
    NavBarComponent,
    RouterModule
  ]
})
export class HeaderModule { }
