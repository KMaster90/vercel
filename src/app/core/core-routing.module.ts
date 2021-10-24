import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "@auth0/auth0-angular";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {ROUTE} from "../models/router-link.model";

const routes: Routes = [
  {component:WelcomePageComponent,path:'welcome'},
  { path:ROUTE.PROFILE, loadChildren: () => import('../features/features.module').then(m => m.FeaturesModule), canActivate:[AuthGuard]},

  {redirectTo:ROUTE.WELCOME,path:'', pathMatch:"full"},
  {redirectTo:ROUTE.WELCOME,path:'**'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
