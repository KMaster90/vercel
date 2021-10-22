import { createAction, props } from '@ngrx/store';
import {Login} from "../../features/models/login-page.model";

export const login = createAction(
  '[Login Page] Login',
  props<Login>()
);



