import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {login} from "../../../store/actions/auth.actions";
import {Login} from "../../models/login-page.model";
import {AuthService} from "@auth0/auth0-angular";
import {Observable} from "rxjs";
import {AppState} from "../../../store/app.state";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  login = <Login>{};

  constructor(private store:Store<AppState>, private auth: AuthService) { }

  ngOnInit(): void {
  }

  loginWithRedirect = (): Observable<void>  => this.auth.loginWithRedirect({screen_hint: "signup"});

  onSubmit = ({username, password}:Login) => this.store.dispatch(login({ username, password }));

}
