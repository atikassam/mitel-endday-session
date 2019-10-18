import {Action, createReducer, on, State} from "@ngrx/store";
import {AuthAction} from "./actions";

const initialState = {
  is_loggedin: !!localStorage.getItem('token')
}

// state = { a, b }
// { ...state, c }
// => { a, b, c }

const _authReducer = createReducer<any>(
  initialState,
  on(AuthAction.StartSession, (state, action) => {
    let { type, ...data } = action;
    console.log(data, 'auth reducer');

    return { ...state, ...data, is_loggedin: true }
  })
);

export function authReducer(state: State<typeof initialState> | undefined, action: Action) {
  return _authReducer(state, action);
}
