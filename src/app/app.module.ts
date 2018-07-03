import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './loginComp/login.component';
import { RouterModule, Routes, provideRoutes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterCompComponent } from './register-comp/register-comp.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';
import { HomeContentCompComponent } from './home-content-comp/home-content-comp.component';
import { SalesCompComponent } from './sales-comp/sales-comp.component';
//import { HomeContentCompComponent } from './home-content-comp/home-content-comp.component';
/*
const Routes = [
  { path: 'Login', component: LoginComponent }
];
*/


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterCompComponent,
    ContactCompComponent,
    HomeContentCompComponent,
    SalesCompComponent,
   // HomeContentCompComponent,
  ],
  imports: [
    BrowserModule,
    
    //it is important for routing
   /* RouterModule.forRoot([
     {path: 'Login1', component:LoginComponent },
     { path: 'Register', component: RegisterCompComponent },

    ]),
*/
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



