import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {User} from "../../core/models/user.model";

export interface AuthState {
  username?: string;
  password?: string;
  user?:User;
};

export const initialState: AuthState = {};

@Injectable()
export class AuthStore extends ComponentStore<AuthState> {
  constructor() {
    super(initialState);
  }
}
