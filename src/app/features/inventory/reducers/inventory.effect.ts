import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { InventoryAction } from './inventory.action';
import { Injectable } from '@angular/core';


@Injectable()
export class InventoryEffects {
    items: any = [
        {
          _id: 1,
          name: "Mobile",
          price: 7000,
          quantity: 5000
        },
        {
          _id: 2,
          name: "Laptop",
          price: 50000,
          quantity: 500
        },
        {
          _id: 3,
          name: "Desktop",
          price: 30000,
          quantity: 1000
        }
      ]

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(InventoryAction.GetItems),
        mergeMap((action) =>
            //   this.apiService.....
            new Observable((s) => s.next({ items: this.items }))
                .pipe(
                    mergeMap(items => {
                      console.log('dthd')
                        return of(InventoryAction.SetItems({ items }))
                    }),
                    catchError(() => EMPTY)
                ))
    )
    );
    constructor(private actions$: Actions) {
        this.loadMovies$.subscribe(console.log)
    }
}
