import {Action, createReducer, on, State} from "@ngrx/store";
import { InventoryAction } from './inventory.action';

const initialState = {
  selected_item: null,
  selected_item_list:[]
}
const _inventoryReducer = createReducer<any>(
  initialState,
  on(InventoryAction.SetItems, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'inventory reducer');

    return { ...state, selected_item_list: data.items }
  }),
  on(InventoryAction.SetItemDetail, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'inventory detail reducer');

    return { ...state, selected_item: data.itemDetails }
  })
);

export function inventoryReducer(state: State<typeof initialState> | undefined, action: Action) {
  return _inventoryReducer(state, action);
}

