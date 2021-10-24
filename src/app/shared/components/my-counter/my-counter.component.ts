import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {decrement, increment, reset } from 'src/app/store/actions/my-counter.actions';
import { MyCounterState } from 'src/app/store/stores';
import {AppState} from "../../../store/app.state";
import {counterSelector} from "../../../store/selectors";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select(counterSelector);
  }

  increment = () => this.store.dispatch(increment());

  decrement = () => this.store.dispatch(decrement());

  reset = () => this.store.dispatch(reset());

}
