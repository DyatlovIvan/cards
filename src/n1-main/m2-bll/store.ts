import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "../../n2-features/f1-auth/a1-login/loginReduser";

let reducer = combineReducers(loginReducer)

let store = createStore(reducer,applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof reducer>
export type StoreType = typeof store
export default store