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
import { Lab05Component } from './homework/lab05/lab05.component';

import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';


import { HomepageComponent } from './assignment/homepage/homepage.component';
import { IntroduceComponent } from './assignment/introduce/introduce.component';
import { ContactComponent } from './assignment/contact/contact.component';
import { QAComponent } from './assignment/qa/qa.component';
import { LoginPageComponent } from './assignment/login-page/login-page.component';
import { RegisterPageComponent } from './assignment/register-page/register-page.component';
import { ListSubjectsComponent } from './assignment/list-subjects/list-subjects.component';
import { ExaminationComponent } from './assignment/examination/examination.component';
import { AssiLayoutComponent } from './_layout/assi-layout/assi-layout.component';
import { UserAssComponent } from './assignment/user-ass/user-ass.component';


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
      {path:'homework/lab05', component:Lab05Component},
      {path:'homework/lab03/page_shopping',component:PageShoppingComponent},
     
      {path:'homework/lab01/detail-product/:productId',component:DetailProductsComponent},
      { path:'lab02/:id', component: DetailStudentComponent},
      {path:'homework/lab03/detail-product/:id',component:DetailProComponent},
      
       {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},    
    ]
},
  {
    path: '',
    component: AssiLayoutComponent,
    children: [
      {path:'homepage',component:HomepageComponent},
      {path: 'intro',component:IntroduceComponent},
      {path:'contact-page',component:ContactComponent},
      {path: 'Q&A',component:QAComponent},
      {path: 'listsubject',component:ListSubjectsComponent},
      {path: 'exam',component:ExaminationComponent},
      {path: 'loginpage',component:LoginPageComponent},
      {path: 'registerpage',component:RegisterPageComponent},
      {path: 'user-ass', component:UserAssComponent}
    ]
  },
  {path:'wrongpath', component:WrongpathComponent},
  {path:'**', redirectTo: 'wrongpath',pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
       scrollPositionRestoration: 'top'
    })
], 
exports: [RouterModule] 
})
export class AppRoutingModule { }
