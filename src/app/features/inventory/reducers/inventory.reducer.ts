import {Action, createReducer, on, State} from "@ngrx/store";
import { InventoryAction } from './inventory.action';

const initialState = {
  selected_item: null,
  selected_item_list:null
}
const _inventoryReducer = createReducer<any>(
  initialState,
  on(InventoryAction.SetItems, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'inventory reducer');

    return { ...state, selected_item: data.items }
  }),
//   on(InventoryAction.SetItemDetail, (state, action) => {
//     let { type, ...data } = action;
//     console.log(data.items, 'store list reducer');

//     return { ...state, selected_item_list: data.items }
//   })
);

export function inventoryReducer(state: State<typeof initialState> | undefined, action: Action) {
  return _inventoryReducer(state, action);
}

