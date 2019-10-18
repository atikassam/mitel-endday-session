import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { CustomerReducer } from './customer.reducer';
import { environment } from 'src/environments/environment';

export interface State {}

export const customerreducers: ActionReducerMap<State> = {
  customer:CustomerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
