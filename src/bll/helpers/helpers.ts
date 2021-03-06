import { Dispatch } from "redux";
import {setAppError, setAppStatus} from "../AppReducer";

export const handlerAppError = (err: any, dispatch: Dispatch) => {
    const error = err.response ? err.response.data.error : (err.message + ', more details in the console');
    dispatch(setAppError(error));
    dispatch(setAppStatus('failed'));
};