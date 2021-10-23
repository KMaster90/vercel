import {Action, createReducer, on} from '@ngrx/store';
import {login} from "../actions/login-page.actions";
import {Login} from "../../features/models/login-page.model";


export const loginPageFeatureKey = 'loginPage';

export interface State {
    username?: string;
    password?: string;
}

export const initialState: State = {
username:''
};


const _loginReducer = createReducer(
  initialState,
  on(login, (state, {username,password}:Login)=> ({username,password}))
);

export function reducer(state:State, action:Action): any {
  return _loginReducer(state, action);
}

