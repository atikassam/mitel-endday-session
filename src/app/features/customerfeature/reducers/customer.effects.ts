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
          console.log(customers)
          return of(CustomerActions.SetCustomers({ customers }))
        }),
        catchError(() => EMPTY)
      )),
    )
  );  
  
  getCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerActions.GetCustomer),
    mergeMap((action) =>
      this.apiService.getCustomer(action.id)
      .pipe(
        mergeMap(customer => {
          console.log(customer)
          return of(CustomerActions.SetCustomer({ customer }))
        }),
        catchError(() => EMPTY)
      )),
    )
  ); 

  getCustomerOrders$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerActions.GetCustomerOrders),
    mergeMap((action) =>
      this.apiService.getCustomersOrders(action.id)
      .pipe(
        mergeMap(orders => {
          console.log(orders)
          return of(CustomerActions.SetCustomerOrders({ orders }))
        }),
        catchError(() => EMPTY)
      )),
    )
  ); 

  addCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerActions.addCustomer),
    mergeMap((action) =>
      this.apiService.addCustomer(action.customer)
      .pipe(
        mergeMap(orders => {
          console.log(orders)
         return of(CustomerActions.GetCustomers())
        }),
        catchError(() => EMPTY)
      )),
    )
  ); 
    
  deleteCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerActions.DeleteCustomers),
    mergeMap((action) =>
      this.apiService.deleteCustomer(action.id)
      .pipe(
        mergeMap(customer => {
          console.log(customer)
         return of(CustomerActions.GetCustomers())
        }),
        catchError(() => EMPTY)
      )),
    )
  ); 

  constructor(private actions$: Actions, private apiService:CustomerApiService) {
    console.log("Effect constructor");
    this.getCustomerList$.subscribe(console.log)
  }
}
