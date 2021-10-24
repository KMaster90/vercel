import {authReducer, myCounterReducer} from './index';

export const reducers = {
  login:authReducer.reducer,
  counter:myCounterReducer.reducer
}
