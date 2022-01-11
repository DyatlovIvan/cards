
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type InitialStateType = {
    error: string | null
    status: RequestStatusType
}

const initialState: InitialStateType = {
    error: null,
    status: "failed"
}

export const AppReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_ERROR":
            return {...state, error: action.error}
        case "APP/SET_STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}
type MainType =
    | setAppErrorType
    | setAppStatusType

type setAppErrorType = ReturnType<typeof setAppError>
export const setAppError = (error: null | string) => ({
    type: "APP/SET_ERROR", error
}) as const

type setAppStatusType = ReturnType<typeof setAppStatus>
export const setAppStatus = (status: RequestStatusType) => ({
    type: "APP/SET_STATUS", status
}) as const

