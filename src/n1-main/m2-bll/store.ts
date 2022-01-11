import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {LoginReducer} from "../../n2-features/f1-auth/a1-login/loginReduser";
import {RegisterReducer} from "../../n2-features/f1-auth/a2-register/registerReducer";
import {ProfileReducer} from "../../n2-features/f2-profile/profileReducer";
import {ErrorReducer} from "../../n2-features/f3-error/errorReducer";
import {NewPasswordReducer} from "../../n2-features/f4-password/p1-newPassword/newPasswordreducer";
import {RepairPasswordReducer} from "../../n2-features/f4-password/p2-repairPassword/repairPasswordreducer";
import {AppReducer} from "./AppReducer";


let reducer = combineReducers({
    App:AppReducer,
    Login:LoginReducer,
    Register:RegisterReducer,
    Profile:ProfileReducer,
    Error:ErrorReducer,
    NewPassword:NewPasswordReducer,
    RepairPassword:RepairPasswordReducer
})

let store = createStore(reducer,applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof reducer>
export type StoreType = typeof store
export default store