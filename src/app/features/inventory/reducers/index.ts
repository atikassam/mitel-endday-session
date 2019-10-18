import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { inventoryReducer } from './inventory.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
     inventoryreducer: inventoryReducer
//   auth: authReducer
  // list:storeListReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];