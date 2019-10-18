import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from "rxjs/operators";
import { EMPTY, Observable, of } from "rxjs";
import { getItemListService } from '../../services/getItemListApi.services';
import { OrderAction } from './actions';

@Injectable()
export class OrderEffects {
  order$ = createEffect((): any => this.actions$.pipe(
    ofType(OrderAction.StoreOrderData as any),
    mergeMap((action): any => this.apiService.postOrderDetails(action.orderDetails)
      .pipe(mergeMap(d => of())))))

  constructor(private actions$: Actions, private apiService: getItemListService) {
  }
}
