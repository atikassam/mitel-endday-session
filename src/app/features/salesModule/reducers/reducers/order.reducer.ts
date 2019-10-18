import { Action, createReducer, on, State } from "@ngrx/store";
import { OrderAction } from "./actions";

const initialState = {

}

const _salesOrderReducer = createReducer<any>(
    initialState,
    on(OrderAction.StoreOrderData, (state, action) => {
        console.log("ActionFired")
        let { type, ...data } = action;
        console.log(data, 'Store Order Data');

        return { ...state, ...data,  }
    })
);

export function SalesOrderReducer(state: State<typeof initialState> | undefined, action: Action) {
    return _salesOrderReducer(state, action);
}
