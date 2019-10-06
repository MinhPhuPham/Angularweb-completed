import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import {RecordsService} from './records.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';
import { WrongpathComponent } from './wrongpath/wrongpath.component';
import { Lab01Component } from './homework/lab01/lab01.component';
import { Lab02Component } from './homework/lab02/lab02.component';
import { DetailProductsComponent } from './homework/lab01/detail-products/detail-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailStudentComponent } from './homework/lab02/detail-student/detail-student.component';
import { Lab03Component } from './homework/lab03/lab03.component';
import { Lab05Component } from './homework/lab05/lab05.component';

import { PageShoppingComponent } from './homework/lab03/page-shopping/page-shopping.component';
import { DetailProComponent } from './homework/lab03/detail-pro/detail-pro.component';
import { HomeComponent } from './home/home.component';
import { ConntactComponent } from './social/conntact/conntact.component';
import { AboutWebComponent } from './social/about-web/about-web.component';
import { ContributeComponent } from './social/contribute/contribute.component';
import { HomeHeaderComponent } from './_layout/home-header/home-header.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { HomepageComponent } from './assignment/homepage/homepage.component';
import { IntroduceComponent } from './assignment/introduce/introduce.component';
import { ContactComponent } from './assignment/contact/contact.component';
import { QAComponent } from './assignment/qa/qa.component';
import { LoginPageComponent } from './assignment/login-page/login-page.component';
import { RegisterPageComponent } from './assignment/register-page/register-page.component';
import { ListSubjectsComponent } from './assignment/list-subjects/list-subjects.component';
import { ExaminationComponent } from './assignment/examination/examination.component';
import { AssiHeaderComponent } from './_layout/assi-header/assi-header.component';
import { AssiLayoutComponent } from './_layout/assi-layout/assi-layout.component';
import { UserAssComponent } from './assignment/user-ass/user-ass.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingHomeComponent,
    WrongpathComponent,
    Lab01Component,
    Lab02Component,
    DetailProductsComponent,
    LoginComponent,
    RegisterComponent,
    DetailStudentComponent,
    Lab03Component,
    PageShoppingComponent,
    DetailProComponent,
    HomeComponent,
    ConntactComponent,
    AboutWebComponent,
    ContributeComponent,
    HomeHeaderComponent,
    HomeLayoutComponent,
    SiteHeaderComponent,
    SiteLayoutComponent,
    SiteFooterComponent,
    HomepageComponent,
    IntroduceComponent,
    ContactComponent,
    QAComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ListSubjectsComponent,
    ExaminationComponent,
    AssiHeaderComponent,
    AssiLayoutComponent,
    UserAssComponent,
    Lab05Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
