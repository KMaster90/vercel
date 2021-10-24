import { createAction, props } from '@ngrx/store';
import {Login} from "../../features/models/login-page.model";
import {User} from "../../core/models/user.model";

export const login = createAction('[Login Page] Login', props<Login>());
export const logout = createAction('[Login Page] Logout');
export const saveUser = createAction('[Login Page] Save User', props<User>());



