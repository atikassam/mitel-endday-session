import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY, Observable, of} from "rxjs";
import {StoreActions} from "./actions";

@Injectable()
export class AppEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(StoreActions.GetItem),
    mergeMap((action) => new Observable((s) => s.next({ item: '' }))
      .pipe(
        mergeMap(item => {
          return of(StoreActions.SetItem({ item }))
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions) {
    this.loadMovies$.subscribe(console.log)
  }
}
