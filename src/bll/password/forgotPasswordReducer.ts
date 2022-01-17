import {Dispatch} from "redux";
import {passwordAPI} from "../../dal/api";

export type InitialStateType = {
    isRequestSend: boolean
}

const initialState: InitialStateType = {
    isRequestSend: false
};

export const ForgotPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FORGOT-PASSWORD/SEND-REQUEST": {
            return {...state, isRequestSend: action.isRequestSend}
        }

        default:
            return state;
    }
};

type ActionsType = ReturnType<typeof sendRequestAC>
export const sendRequestAC = (isRequestSend: boolean) => ({
    type: 'FORGOT-PASSWORD/SEND-REQUEST',
    isRequestSend
} as const);


export const forgotPasswordTC = (email: string) => (dispatch: Dispatch) => {
    passwordAPI.forgotPassword(email)
        .then(() => {
            dispatch(sendRequestAC(true))
        })
        .catch((error) => {
            alert(error)
        })
}