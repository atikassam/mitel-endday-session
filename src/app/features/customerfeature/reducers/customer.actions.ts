import {createAction, props} from "@ngrx/store";

export class CustomerActions {

  public static readonly GetCustomer = createAction('[Customer api] get custome on id',props<{ id: any }>())
  public static readonly SetCustomer = createAction('[ngrx store] set customer', props<{ customer: any }>())

  public static readonly GetCustomers = createAction('[Customer api] get customer List')
  public static readonly SetCustomers = createAction('[ngrx store] set customer List', props<{ customers: any }>())

  public static readonly GetCustomerOrders = createAction('[Customer orders api] get customer orders List',props<{ id: any }>())
  public static readonly SetCustomerOrders = createAction('[ngrx store] set customer Orders List', props<{ orders: any }>())

  public static readonly addCustomer=createAction('[Customer api] add customer')
}
