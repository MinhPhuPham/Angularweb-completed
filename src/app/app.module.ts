import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';
import { WrongpathComponent } from './wrongpath/wrongpath.component';
import { Lab01Component } from './homework/lab01/lab01.component';
import { Lab02Component } from './homework/lab02/lab02.component';
import { DetailProductsComponent } from './homework/lab01/detail-products/detail-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailStudentComponent } from './homework/lab02/detail-student/detail-student.component';
import { Lab03Component } from './homework/lab03/lab03.component';
import { PageShoppingComponent } from './homework/lab03/page-shopping/page-shopping.component';
import { DetailProComponent } from './homework/lab03/detail-pro/detail-pro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    FooterComponent,
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
    DetailProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
