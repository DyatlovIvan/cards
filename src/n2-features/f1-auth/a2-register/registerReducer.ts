import {Dispatch} from "redux";
import {authAPI, RegisterParamsType} from "../../../n1-main/m3-dal/api";

type InitialStateType = {
    isError: null | string
    isRegisterIn: boolean
    loading: boolean
}
const initialState: InitialStateType = {
    isError: null,
    isRegisterIn: false,
    loading: false
}
export const RegisterReducer = (state: InitialStateType = initialState, action: ActionRegisterType): InitialStateType => {
    switch (action.type) {
        case 'SET_ERROR': {
            return {...state, isError: action.error}
        }
        case "CHANGE_REGISTER": {
            return {...state, isRegisterIn: action.isRegister}
        }
        case "CHANGE_LOADING": {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export type ActionRegisterType = ReturnType<typeof setError> | ReturnType<typeof changeRegisterIn> | ReturnType<typeof changeLoading>
export const changeLoading = (loading: boolean) => ({type: 'CHANGE_LOADING', loading}as const)
export const changeRegisterIn = (isRegister: boolean) => ({type: 'CHANGE_REGISTER', isRegister} as const)
export const setError = (error: string) => ({type: 'SET_ERROR', error} as const)

export const registerTC = (date: RegisterParamsType) => (dispatch: Dispatch<ActionRegisterType>) => {
    dispatch(changeRegisterIn(false))
    dispatch(changeLoading(true))
    authAPI.register(date)
        .then(res => {
            dispatch(changeLoading(false))
            dispatch(changeRegisterIn(true))
        })
        .catch(error => {
            dispatch(setError(error.response.data.error))
            dispatch(changeRegisterIn(false))
            dispatch(changeLoading(false))
        })
}