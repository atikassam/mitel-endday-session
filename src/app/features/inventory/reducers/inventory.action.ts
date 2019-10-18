import { createAction,props } from "@ngrx/store";

export class InventoryAction{
    public static GetItems = createAction("[Api item call]")
    public static GetItemDetail = createAction("[Api item call]",props<{id:any}>())
    public static SetItems = createAction("[Api item call]",props<{items:any}>())
    public static SetItemDetail = createAction("[Api item call]",props<{itemDetails:any}>())
}