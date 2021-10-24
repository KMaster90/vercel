import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";
import {ROUTE} from "../models/router-link.model";

const routes: Routes = [
  {component:ProfilePageComponent,path:ROUTE.PROFILE},

  {redirectTo:ROUTE.PROFILE,path:'', pathMatch:"full"},
  {redirectTo:ROUTE.PROFILE,path:'**'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
