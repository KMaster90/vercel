import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./features/components/login-page/login-page.component";
import {MyCounterComponent} from "./shared/components/my-counter/my-counter.component";
import {ProfilePageComponent} from "./features/components/profile-page/profile-page.component";
import {AuthGuard} from "@auth0/auth0-angular"; // CLI imports router

const routes: Routes = [
  {component:LoginPageComponent,path:'login'},
  {component:MyCounterComponent,path:'counter'},
  {component:ProfilePageComponent,path:'profile', canActivate:[AuthGuard]},
  {redirectTo:'login',path:'**'},

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
