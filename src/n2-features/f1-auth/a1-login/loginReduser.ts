import {authAPI, LoginParamsType} from "../../../n1-main/m3-dal/api";
import {Dispatch} from "redux";
import {useNavigate} from "react-router-dom";

type InitialStateType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
    isLoggedIn:boolean
}
const initialState: InitialStateType = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: '',
    isLoggedIn:false


}
export const LoginReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case "AUTH/LOGIN":
            return {...state, _id : action.data._id, email : action.data.email, name : action.data.name,
            avatar : action.data.avatar, publicCardPacksCount: action.data.publicCardPacksCount,
            created : action.data.created , updated : action.data.updated, isAdmin : action.data.isAdmin,
            verified : action.data.verified, rememberMe : action.data.rememberMe,
            error : action.data.error, isLoggedIn: true}
        case "AUTH/LOGIN_ERROR":
            return {...state,error:action.error}
        default:
            return state
    }
}

type MainType = ReturnType<typeof login> | ReturnType<typeof setError>

const login = (data: InitialStateType) => ({
    type: 'AUTH/LOGIN', data
}) as const
const setError = (error: string) => ({
    type: 'AUTH/LOGIN_ERROR', error
}) as const

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then(res => {
            dispatch(login(res.data))

        })
        .catch(rej => {
            dispatch(setError(rej.response.data.error))
        })
}

// export const authMe = () => (dispatch: Dispatch) => {
//
//     authAPI.me()
//         .then(res => {
//             debugger
//         })
//         .catch(rej => {
//             debugger
//         })
// }