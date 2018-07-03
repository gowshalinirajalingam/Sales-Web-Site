import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './loginComp/login.component';
import { RegisterCompComponent } from './register-comp/register-comp.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';
import { HomeContentCompComponent } from './home-content-comp/home-content-comp.component';
import { SalesCompComponent } from './sales-comp/sales-comp.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterCompComponent },
  { path: '', component: HomeContentCompComponent },
  { path: 'Contact', component: ContactCompComponent },
  { path: 'Sales', component: SalesCompComponent },

  

//	{ path: 'update-book/:id', component: UpdateBookComponent }, 
//	{ path: '', redirectTo: '/manage-book ', pathMatch: 'full' },
//	{ path: '**', component: PageNotFoundComponent }
] 


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  declarations: []
})


export class AppRoutingModule { }
