import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY, Observable, of} from "rxjs";
import {AuthAction} from "./actions";
import {AuthApiServices} from "../../services/auth.api.services";

@Injectable()
export class AuthEffects {
  authLogin$ = createEffect(() => this.actions$.pipe(
    ofType(AuthAction.Login),
    mergeMap((action) =>
      this.apiService.login()
      // new Observable((s) => s.next({ token: 'data' }))
      .pipe(
        mergeMap(token => {
          return of(AuthAction.StartSession({ token }))
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private apiService: AuthApiServices) {}
}
