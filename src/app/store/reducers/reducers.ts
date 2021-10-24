import {authReducer, myCounterReducer} from './index';
import {Action, ActionReducer} from "@ngrx/store";

export const reducers = {
  login:authReducer.reducer,
//  counter:myCounterReducer.reducer   ForFeatures
}
