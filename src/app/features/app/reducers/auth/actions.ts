import {createAction, props} from "@ngrx/store";

export class AuthAction {
  public static readonly StartSession = createAction('[Auth] start session', props<{ token: any}>())
  public static readonly Login = createAction('[Api call] user login', props<{ credentials: any }>())
}
