import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {appReducer} from "./app/reducer";

export interface State {}

export const reducers: ActionReducerMap<State> = {
  app: appReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
