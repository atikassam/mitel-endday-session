import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import { SalesOrderReducer } from './order.reducer';
import { environment } from 'src/environments/environment';

export interface State { }

export const reducers: ActionReducerMap<State> = {
    Order: SalesOrderReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
