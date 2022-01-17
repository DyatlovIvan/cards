import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {LoginReducer} from "./loginReduser";
import {RegisterReducer} from "./registerReducer";
import {ProfileReducer} from "./profileReducer";
import {ErrorReducer} from "./errorReducer";
import {NewPasswordReducer} from "./password/newPasswordReducer";
import {ForgotPasswordReducer} from "./password/forgotPasswordReducer";
import {AppReducer} from "./AppReducer";


let reducer = combineReducers({
    App:AppReducer,
    Login:LoginReducer,
    Register:RegisterReducer,
    Profile:ProfileReducer,
    Error:ErrorReducer,
    NewPassword:NewPasswordReducer,
    ForgotPassword:ForgotPasswordReducer
})

let store = createStore(reducer,applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof reducer>
export type StoreType = typeof store
export default store

//@ts-ignore
window.store = store;