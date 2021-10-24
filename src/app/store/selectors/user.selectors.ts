import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";
import {AuthState} from "../stores/auth.store";
import {User} from "../../core/models/user.model";

const authState = (state: AppState) => state.login;

export const userSelector = createSelector<AppState, AuthState, User|undefined>(
  authState,
  (login:AuthState) => login.user
);
