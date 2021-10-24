import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output
} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "@auth0/auth0-angular";
import {DOCUMENT} from "@angular/common";
import {ACTION} from "../../directives/ngrx.directive";
import {ActionCreator} from "@ngrx/store";
import {TypedAction} from "@ngrx/store/src/models";
import {Destroyer} from "../destroyer";
import {takeUntil} from "rxjs/operators";

export enum AUTH {
  LOGIN="login",
  LOGOUT="logout",
  SIGNUP="signup"
}

@Component({
  selector: 'auth-button',
  template: `<button class="btn btn-outline-secondary" type="button" [ngrx] [action]="action" (click)="btnClick()">{{btnAuth|titlecase}}</button>`,
  styles: [``],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class AuthenticationButtonComponent extends Destroyer implements OnDestroy{
  @Input() btnAuth = AUTH.LOGIN;
  action:ActionCreator<string, (props:any) => TypedAction<string>>|undefined;
  constructor(@Inject(DOCUMENT) private doc: Document, private auth: AuthService, private cdr:ChangeDetectorRef) {
    super();
    this.auth.isAuthenticated$.pipe(takeUntil(this.destroy$)).subscribe(
      isAuth => {
        this.btnAuth = isAuth ? AUTH.LOGOUT : AUTH.LOGIN;
        this.cdr.markForCheck();
      })
  }

  btnClick = () => this.btnAuth !== AUTH.LOGOUT
                        ? (this.action = ACTION.LOGIN,this.login())
                        : (this.action = ACTION.LOGOUT,this.logout());

  login = (): Observable<void>  => this.auth.loginWithPopup({screen_hint: `${this.btnAuth}`});
  logout = (): void => this.auth.logout({ returnTo: this.doc.location.origin });

  ngOnDestroy(): void {
    this.onDestroy()
  }

}
