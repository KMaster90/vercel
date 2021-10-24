import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Destroyer} from "../../../core/components/destroyer";
import {Store} from "@ngrx/store";
import {userSelector} from "../../../store/selectors/user.selectors";
import {AppState} from "../../../store/app.state";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent extends Destroyer implements OnInit {

  constructor(public auth:AuthService, private store:Store<AppState>) {
    super();
  this.store.select(userSelector).subscribe(u=>console.log('user',u))
  }

  ngOnInit(): void {
  }

}
