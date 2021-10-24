import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import { decrement, increment, reset} from "../actions/my-counter.actions";
import {initialState, MyCounterState} from "../stores/my-counter.store";
import {FEATURE_KEY} from "../app.state";

export const counterFeatureKey = FEATURE_KEY.COUNTER;

const _counterReducer:ActionReducer<MyCounterState,Action> = createReducer(
  initialState,
  on(increment, ({number}) => ({number:number+1})),
  on(decrement, ({number}) => ({number:number-1})),
  on(reset, () => ({number:0}))
);

export function reducer(state:MyCounterState|undefined, action:Action): MyCounterState {
  return _counterReducer(state, action);
}

