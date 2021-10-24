import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {login, logout, saveUser} from "../actions/auth.actions";
import {Login} from "../../features/models/login-page.model";
import {AuthState, initialState} from "../stores/auth.store";
import {FEATURE_KEY} from "../app.state";


export const authPageFeatureKey = FEATURE_KEY.AUTH;

const _loginReducer:ActionReducer<AuthState, Action> = createReducer(
  initialState,
  on(login, (state, {username,password}:Login)=> ({username,password})),
  on(logout, () => ({username:'',password:''})),
  on(saveUser, (state, user) => ({user}))
);

export function reducer(state:AuthState|undefined, action:Action): AuthState {
  return _loginReducer(state, action);
}

