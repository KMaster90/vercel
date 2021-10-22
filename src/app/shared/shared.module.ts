import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyCounterComponent} from "./components/my-counter/my-counter.component";
import {FormErrorComponent} from "./components/form-error/form-error.component";

const sharedComponents = [MyCounterComponent, FormErrorComponent];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule
  ],
  exports: sharedComponents
})
export class SharedModule { }
