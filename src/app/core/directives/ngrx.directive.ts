import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Action, ActionCreator, Store} from "@ngrx/store";
import {login, logout, saveUser} from "../../store/actions/auth.actions";
import {TypedAction} from "@ngrx/store/src/models";
import {AppState} from "../../store/app.state";

export const ACTION = {
  SIGNUP:login,
  LOGIN:login,
  LOGOUT:logout,
  SAVE_USER:saveUser
}

@Directive({
  selector: '[ngrx]',
  providers: [Store]
})
export class NgrxDirective implements OnChanges{
  @Input() ngrx:any = {};
  @Input() action: ActionCreator<string, (props:any) => TypedAction<string>>|undefined;
  constructor(private store:Store<AppState>) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!this.action) this.store.dispatch(this.action(this.ngrx));
  }


}
