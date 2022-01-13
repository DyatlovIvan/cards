import {authAPI, LoginParamsType} from "../dal/api";
import {Dispatch} from "redux";
import {handlerAppError} from "./helpers/helpers";
import {setAppError, setAppStatus, setIsInitialized} from "./AppReducer";
import { setProfile} from "./profileReducer";

type InitialStateType = {
    isLoggedIn:boolean
}
const initialState: InitialStateType = {
    isLoggedIn:false
}
export const LoginReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case "AUTH/SET_IS_LOGGED_IN":
            return {...state, isLoggedIn: action.isLogged}
        default:
            return state
    }
}

type MainType = ReturnType<typeof setIsLoggedIn>

export const setIsLoggedIn = (isLogged:boolean) => ({
    type: 'AUTH/SET_IS_LOGGED_IN',isLogged
}) as const


export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch) => {
    try{
        dispatch(setAppError(null))
        dispatch(setAppStatus('loading'));
        const res = await authAPI.login(data)
        dispatch(setProfile(res.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setAppStatus('succeeded'))
    }catch (error){
        handlerAppError(error, dispatch);
        dispatch(setAppStatus('failed'))
    }
}

export const logoutTC = () => async (dispatch:Dispatch)=>{
    try{
        dispatch(setAppError(null))
        dispatch(setAppStatus('loading'));
        await authAPI.logout()
        dispatch(setIsLoggedIn(false))
        dispatch(setAppStatus('succeeded'))
    }catch(error){
        handlerAppError(error, dispatch);
        dispatch(setAppStatus('failed'))
    }
}

export const isAuth = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppError(null))
        dispatch(setAppStatus('loading'));
        const res = await authAPI.me()
        dispatch(setProfile(res.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setAppStatus('succeeded'))
    }catch(error){
        // handlerAppError(error, dispatch)
        dispatch(setAppStatus('failed'))
    } finally {
       dispatch(setIsInitialized())
    }

}
