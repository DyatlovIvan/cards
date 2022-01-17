import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {LoginMainType, LoginReducer} from "./loginReduser";
import {RegisterReducer} from "./registerReducer";
import {ProfileMainType, ProfileReducer} from "./profileReducer";
import {ErrorReducer} from "./errorReducer";
import {NewPasswordReducer} from "./password/newPasswordReducer";
import {ForgotPasswordReducer} from "./password/forgotPasswordReducer";
import {AppMainType, AppReducer} from "./AppReducer";
import {PacksMainType, PacksReducer} from "./packsReducer";


let reducer = combineReducers({
    App:AppReducer,
    Login:LoginReducer,
    Register:RegisterReducer,
    Profile:ProfileReducer,
    Error:ErrorReducer,
    NewPassword:NewPasswordReducer,
    ForgotPassword:ForgotPasswordReducer,
    Packs:PacksReducer
})

let store = createStore(reducer,applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof reducer>
export type StoreType = typeof store
export default store

export type AppActionsType =
    | AppMainType
    | ProfileMainType
    | LoginMainType
    | PacksMainType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStoreType, unknown, AppActionsType>

//@ts-ignore
window.store = store;