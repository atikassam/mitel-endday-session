import {createAction, props} from "@ngrx/store";

export class StoreActions {
  public static readonly GetItem = createAction('[Store api] get item detils', props<{ id: any}>())
  public static readonly SetItem = createAction('[ngrx store] set item in state', props<{ item: any }>())
}
