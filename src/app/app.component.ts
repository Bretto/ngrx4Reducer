import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from './reducers';
import * as fromCounter from './counter';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>;

  constructor(private store: Store<fromRoot.State>) {
    this.counter = store.select(s => s.counter);
  }

  increment() {
    this.store.dispatch({ type: fromCounter.INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: fromCounter.DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: fromCounter.RESET });
  }
}
