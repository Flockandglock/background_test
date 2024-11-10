import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFormPageComponent } from './pages/add-form-page/add-form-page.component';


const routes: Routes = [
  {
    path: 'add-form', 
    component: AddFormPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
