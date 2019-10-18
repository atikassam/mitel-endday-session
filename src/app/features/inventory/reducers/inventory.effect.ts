import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { InventoryAction } from './inventory.action';
import { Injectable } from '@angular/core';
import { ApiServices } from '../services/api.service';


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
      this.apiservice.getItems()
        //new Observable((s) => s.next({ items: this.items }))

        .pipe(
          mergeMap(items => {
            console.log(items, 'Inside InventoryEffects')
            return of(InventoryAction.SetItems({ items }))
          }),
          catchError(() => EMPTY)
        ))
  )
  );

  detailEffect$ = createEffect(() => this.actions$.pipe(
    ofType(InventoryAction.GetItemDetail),
    mergeMap((action) =>
      //   this.apiService.....
      //new Observable((s) => s.next({ items: this.items[action.id -1] }))
      this.apiservice.getItemById(action.id)
        .pipe(
          mergeMap(itemDetails => {
            console.log(itemDetails, "from reducer details")
            return of(InventoryAction.SetItemDetail({ itemDetails }))
          }),
          catchError(() => EMPTY)
        ))
  )
  );


  adddetailEffect$ = createEffect((): any => this.actions$.pipe(
    ofType(InventoryAction.AddItems),
    mergeMap((action) =>
        this.apiservice.addItem(action.item)
      // new Observable((s) => s.next({ items: action.item }))
        .pipe(
          mergeMap(itemDetails => {
            console.log(itemDetails, "from add item affect")
            return of(InventoryAction.GetItems())
          }),
          catchError(() => EMPTY)
        ))
  ));

  constructor(private actions$: Actions, private apiservice: ApiServices) {}
}
