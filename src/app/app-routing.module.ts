import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';
import { WrongpathComponent } from './wrongpath/wrongpath.component';
import { Lab01Component } from './homework/lab01/lab01.component';
import { Lab02Component } from './homework/lab02/lab02.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DetailProductsComponent } from './homework/lab01/detail-products/detail-products.component';
import { DetailStudentComponent } from './homework/lab02/detail-student/detail-student.component';


const routes: Routes = [
  {path:'', component:ShoppingHomeComponent},
  {path:'lab01',component:Lab01Component},
  {path: 'lab02', component:Lab02Component},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'lab01/:productID',component:DetailProductsComponent},
  { path: 'lab02/student/:id', component: DetailStudentComponent},

  {path:'wrongpath', component:WrongpathComponent},
  {path:'**', redirectTo: 'wrongpath',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
