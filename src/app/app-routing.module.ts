import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';
import { WrongpathComponent } from './wrongpath/wrongpath.component';
import { Lab01Component } from './homework/lab01/lab01.component';
import { Lab02Component } from './homework/lab02/lab02.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ConntactComponent } from './social/conntact/conntact.component';
import { AboutWebComponent } from './social/about-web/about-web.component';
import { ContributeComponent } from './social/contribute/contribute.component';


import { Lab03Component } from './homework/lab03/lab03.component';
import { PageShoppingComponent } from './homework/lab03/page-shopping/page-shopping.component';
import { DetailProComponent } from './homework/lab03/detail-pro/detail-pro.component';

import { DetailProductsComponent } from './homework/lab01/detail-products/detail-products.component';
import { DetailStudentComponent } from './homework/lab02/detail-student/detail-student.component';


import { HomeHeaderComponent } from './_layout/home-header/home-header.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';


const routes: Routes = [
  {
    path:'',
    component:HomeLayoutComponent,
    children: [
      {path:'',component:HomeComponent, pathMatch: 'full'}
    ]
  },
  { 
    path: '',
    component: SiteLayoutComponent, 
    children: [
      
      {path:'shopping',component: ShoppingHomeComponent}, 

      {path:'homework/lab01',component:Lab01Component},
      {path: 'homework/lab02', component:Lab02Component},
      {path: 'homework/lab03', component:Lab03Component},
      {path:'homework/lab03/page_shopping',component:PageShoppingComponent},
     
      {path:'homework/lab01/detail-product/:productId',component:DetailProductsComponent},
      { path:'lab02/:id', component: DetailStudentComponent},
      {path:'homework/lab03/detail-product/:id',component:DetailProComponent},
      
       {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},    
    ]
},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'wrongpath', component:WrongpathComponent},
  {path:'**', redirectTo: 'wrongpath',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
