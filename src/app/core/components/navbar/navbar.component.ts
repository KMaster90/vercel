import { Component, OnInit } from '@angular/core';
import {AUTH} from "../login-logout-signup-button/autentication-button.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  btnAuth = AUTH.LOGIN;

  constructor() { }

  ngOnInit(): void {}

}
