import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MyCounterComponent} from "./components/my-counter/my-counter.component";
import {ROUTE} from "../models/router-link.model";

const routes: Routes = [
  {component:MyCounterComponent,path:ROUTE.COUNTER},
  {redirectTo:ROUTE.COUNTER, path:"**"},
  {redirectTo:ROUTE.COUNTER, path:"", pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
