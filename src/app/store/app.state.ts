import {AuthState} from "./stores/auth.store";
import {MyCounterState} from "./stores/my-counter.store";

export enum FEATURE_KEY{
  AUTH='authPage',
  COUNTER='counter'
}

export interface AppState {
      login: AuthState;
      counter: MyCounterState;
}
