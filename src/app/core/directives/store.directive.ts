import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Action, ActionCreator, Store} from "@ngrx/store";
import {login, logout} from "../../store/actions/login-page.actions";
import {TypedAction} from "@ngrx/store/src/models";

export const ACTION = {
  SIGNUP:login,
  LOGIN:login,
  LOGOUT:logout
}

@Directive({
  selector: '[state]',
  providers: [Store]
})
export class StoreDirective implements OnChanges{
  @Input() state = <any>'';
  @Input() props = {};
  @Input() action = <ActionCreator<string, (props:any) => TypedAction<string>>>{};
  constructor(private store:Store) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!this.action) this.store.dispatch(this.action(this.props));
  }


}
