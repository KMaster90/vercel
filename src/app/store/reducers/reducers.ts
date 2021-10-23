import * as loginPageReducer from './login-page.reducer';
import * as myCounterReducer from './my-counter.reducer';

export const reducers = {
  login:loginPageReducer.reducer,
  counter:myCounterReducer.reducer
}
