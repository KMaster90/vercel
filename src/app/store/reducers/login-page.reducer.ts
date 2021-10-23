import {Action, createReducer, on} from '@ngrx/store';
import {login, logout} from "../actions/login-page.actions";
import {Login} from "../../features/models/login-page.model";


export const loginPageFeatureKey = 'loginPage';

export interface State {
    username?: string;
    password?: string;
}

export const initialState: State = {

};


const _loginReducer = createReducer(
  initialState,
  on(login, (state, {username,password}:Login)=> ({username,password})),
  on(logout, ()=> ({username:'',password:''}))
);

export function reducer(state:State, action:Action): any {
  return _loginReducer(state, action);
}

