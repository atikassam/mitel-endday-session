import { createAction, props } from "@ngrx/store";

export class OrderAction {
    public static readonly StoreOrderData = createAction('[Auth] StoreOrderData', props<{ orderDetails: any }>())
    public static readonly GetOrderData = createAction('[Api call] GetOrderData', props<{ orderDetails: any }>())
}
