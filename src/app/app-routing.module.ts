import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./features/components/login-page/login-page.component"; // CLI imports router

const routes: Routes = [
  {component:LoginPageComponent,path:'login'},
  {redirectTo:'login',path:'**'},

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
