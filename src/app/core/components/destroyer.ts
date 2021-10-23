import {Subject} from "rxjs";

export class Destroyer {
  destroy$ = new Subject();
  onDestroy = () => {
    this.destroy$.next();
    this.destroy$.complete()
  }
}
