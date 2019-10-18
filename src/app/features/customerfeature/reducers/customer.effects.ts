import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY, Observable, of} from "rxjs";
import { CustomerActions } from './customer.actions';
import { CustomerApiService } from '../services/customerapi.service';

@Injectable()
export class CustomerEffects {
  getCustomerList$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerActions.GetCustomers),
    mergeMap((action) =>
      this.apiService.getCustomers()
      .pipe(
        mergeMap(customers => {
          return of(CustomerActions.SetCustomers({ customers }))
        }),
        catchError(() => EMPTY)
      )),

    ofType(CustomerActions.GetCustomer),
    mergeMap((action) =>
      this.apiService.getCustomer(action.id)
      .pipe(
        mergeMap(customer => {
          return of(CustomerActions.SetCustomer({ customer }))
        }),
        catchError(() => EMPTY)
      )),

    ofType(CustomerActions.GetCustomerOrders),
    mergeMap((action) =>
      this.apiService.getCustomersOrders(action.id)
      //new Observable((s) => s.next({ token: 'data' }))
      .pipe(
        mergeMap(orders => {
          return of(CustomerActions.SetCustomerOrders({ orders }))
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private apiService:CustomerApiService) {
    console.log("Effect constructor");
    this.getCustomerList$.subscribe(console.log)
  }
}
