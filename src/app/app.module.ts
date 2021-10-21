import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {createAction, createReducer, on, StoreModule} from "@ngrx/store";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const generateUniqueId = ():number => 1;

export const addTodo = createAction(
  '[Todo List] Add Todo',
  (description: string) => ({ id: generateUniqueId(), description })
);

function reducers() {

}
let initialState;
export const reducer = createReducer(
  initialState,
  on(addTodo, (state:any, { description }) => ({
    ...state,
    todos: [...state.todos, description],
  }))
);
