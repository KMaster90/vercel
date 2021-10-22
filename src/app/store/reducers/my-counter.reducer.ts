import { createReducer, on} from '@ngrx/store';
import { decrement, increment, reset} from "../actions/my-counter.actions";

export const provaFeatureKey = 'prova';

export interface State {
    number:number;
}

export const initialState: State = {
    number:0
};

const _counterReducer = createReducer(
  initialState.number,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function reducer(state:any, action:any): any {
  return _counterReducer(state, action);
}

