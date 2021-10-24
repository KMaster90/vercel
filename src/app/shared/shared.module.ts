import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyCounterComponent} from "./components/my-counter/my-counter.component";
import {FormErrorComponent} from "./components/form-error/form-error.component";
import {StoreModule} from "@ngrx/store";
import {FEATURE_KEY} from "../store/app.state";
import {reducer as myCounterReducer} from "../store/reducers/my-counter.reducer";
import {SharedRoutingModule} from "./shared-routing.module";

const sharedComponents = [MyCounterComponent, FormErrorComponent];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    SharedRoutingModule,
    StoreModule.forFeature(FEATURE_KEY.COUNTER,myCounterReducer)
  ],
  exports: sharedComponents
})
export class SharedModule { }
