import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFormPageComponent } from './pages/add-form-page/add-form-page.component';
import { FinalFormComponent } from './pages/final-form/final-form.component';


const routes: Routes = [
  {
    path: 'add-form', 
    component: AddFormPageComponent
  },
  {
    path: 'final-form',
    component: FinalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
