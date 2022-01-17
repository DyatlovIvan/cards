import {Dispatch} from "redux";
import {passwordAPI} from "../../dal/api";

export type InitialStateType = {
    isSend: boolean
}

const initialState: InitialStateType = {
    isSend: false
};

export const NewPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "PASSWORD/SEND-NEW-PASSWORD": {
            return {...state, isSend: action.isSend}
        }

        default:
            return state;
    }
};


export const sendPasswordRequestAC = (isSend: boolean) => ({
    type: 'PASSWORD/SEND-NEW-PASSWORD',
    isSend
} as const);


type ActionsType = ReturnType<typeof sendPasswordRequestAC>


export const sendNewPasswordTC = (password: string, token: string) => (dispatch: Dispatch) => {
    passwordAPI.newPassword(password, token)
        .then(() => {
            dispatch(sendPasswordRequestAC(true))
        })
        .catch((error) => {
            alert(error)
        })
}