import {Action, createReducer, on, State} from "@ngrx/store";
import { CustomerActions } from './customer.actions';
import { CustomerApiService } from '../services/customerapi.service';

const initialState = {
  selected_items: null
}
const _customerReducer = createReducer<any>(
  initialState,
  on(CustomerActions.SetCustomers, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'auth reducer');

    return { ...state,selected_items: data.customers }
  })
);

export function CustomerReducer(state: State<typeof initialState> | undefined, action: Action) {
  return _customerReducer(state, action);
}

