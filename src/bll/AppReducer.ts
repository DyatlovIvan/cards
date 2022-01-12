
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type InitialStateType = {
    error: string | null
    status: RequestStatusType
    isInitialized: boolean
}

const initialState: InitialStateType = {
    error: null,
    status: "failed",
    isInitialized: false
}

export const AppReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_ERROR":
            return {...state, error: action.error}
        case "APP/SET_STATUS":
            return {...state, status: action.status}
        case "APP/SET_IS_INITIALIZED":
            return {...state,isInitialized:true}
        default:
            return state
    }
}
type MainType =
    | SetAppErrorType
    | SetAppStatusType
    | SetIsInitialized

type SetAppErrorType = ReturnType<typeof setAppError>
export const setAppError = (error: null | string) => ({
    type: "APP/SET_ERROR", error
}) as const

type SetAppStatusType = ReturnType<typeof setAppStatus>
export const setAppStatus = (status: RequestStatusType) => ({
    type: "APP/SET_STATUS", status
}) as const

type SetIsInitialized = ReturnType<typeof setIsInitialized>
export const setIsInitialized = ()=> ({
    type :"APP/SET_IS_INITIALIZED"
}) as const

