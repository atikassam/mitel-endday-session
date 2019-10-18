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
      //new Observable((s) => s.next({ token: 'data' }))
      .pipe(
        mergeMap(customers => {
          return of(CustomerActions.SetCustomers({ customers }))
        }),
        catchError(() => EMPTY)
      ))
    )
  );



  

  constructor(private actions$,actions1$: Actions, private apiService:CustomerApiService) {
    console.log("Effect constructor");
    this.getCustomerList$.subscribe(console.log)
    
  }
}
