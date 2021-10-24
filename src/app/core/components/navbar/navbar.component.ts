import { Component, OnInit } from '@angular/core';
import {AUTH} from "../authentication-button/authentication-button.component";
import {ActionCreator, Store} from "@ngrx/store";
import {AuthService} from "@auth0/auth0-angular";
import {TypedAction} from "@ngrx/store/src/models";
import {ACTION} from "../../directives/ngrx.directive";
import {AppState} from "../../../store/app.state";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  btnAuth = AUTH.LOGIN;
  saveUserAction:ActionCreator<string, (props:any) => TypedAction<string>>|undefined = ACTION.SAVE_USER;

  constructor(private store:Store<AppState>,public auth:AuthService) {
  }

  ngOnInit(): void {}

}
