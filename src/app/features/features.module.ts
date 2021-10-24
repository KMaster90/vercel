import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";
import {FeaturesRoutingModule} from "./features-routing.module";

const featuresComponents = [ProfilePageComponent];

@NgModule({
  declarations: featuresComponents,
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule
  ],
  exports: featuresComponents
})
export class FeaturesModule { }
