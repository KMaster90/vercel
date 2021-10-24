import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";

const featuresComponents = [LoginPageComponent,ProfilePageComponent];

@NgModule({
  declarations: featuresComponents,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('features',{})
  ],
  exports: featuresComponents
})
export class FeaturesModule { }
