import { createAction,props } from "@ngrx/store";

export class InventoryAction{
    public static GetItems = createAction("[Api item call]")
    public static GetItemDetail = createAction("[Api item details call]",props<{id:any}>())
    public static SetItems = createAction("[Display item]",props<{items:any}>())
    public static SetItemDetail = createAction("[Display item details]",props<{itemDetails:any}>())
}