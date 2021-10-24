import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {MyCounterState} from "../stores/my-counter.store";

const counterState = (state: AppState) => state.counter;

export const counterSelector = createSelector<AppState,MyCounterState,number>(
counterState,
  (counter:MyCounterState) => counter.number
)
