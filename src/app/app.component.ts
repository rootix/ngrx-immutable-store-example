import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { zip } from 'rxjs';

import { add } from './actions';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  items$ = this.store.pipe(select(s => s.items));

  constructor(private store: Store<{ items: number[] }>) {
    zip(this.items$, this.items$).subscribe(([a, b]) => {
      console.log("from selector", a, b, a === b);
      try {
        b.push(b.slice(-1).pop() + 1);
      } catch (error) {
        console.error(error);
      }

      console.log("after modifying b", a, b, a === b);
    });
  }

  add() {
    this.store.dispatch(add());
  }
}
