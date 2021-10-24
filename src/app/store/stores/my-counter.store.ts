import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface MyCounterState {
  number:number;
};

export const initialState: MyCounterState = {
  number:0,
};

@Injectable()
export class MyCounterStore extends ComponentStore<MyCounterState> {
  constructor() {
    super(initialState);
  }
}
