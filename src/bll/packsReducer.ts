import {Dispatch} from "redux";
import {getPacksRequestType, packsAPI} from "../dal/api";
import {setAppError, setAppStatus} from "./AppReducer";
import {handlerAppError} from "./helpers/helpers";

export type cardPacksType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
    __v: number
    user_name:string
}
type InitialStateType = {
    cardPacks: Array<cardPacksType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

const initialState: InitialStateType = {
    cardPacks: [
        {
            _id: "",
            user_id: "",
            name: "",
            path: "",
            cardsCount: 0,
            grade: 0,
            shots: 0,
            rating: 0,
            type: "",
            created: "",
            updated: "",
            __v: 0,
            user_name:''
        }
    ],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0
}
export const PacksReducer = (state: InitialStateType = initialState, action: MainType): InitialStateType => {
    switch (action.type) {
        case 'PACKS/SET_PACKS': {
            return {...state,...action.data}
        }
        default:
            return state
    }
}
type MainType = setPacksType
type setPacksType = ReturnType<typeof setPacks>
const setPacks = (data:InitialStateType)=>({ type:'PACKS/SET_PACKS',data})as const

export const getPacks = (params:getPacksRequestType) => async (dispatch:Dispatch)=>{
    try{
        dispatch(setAppError(null))
        dispatch(setAppStatus('loading'));
        const res = await packsAPI.getPacks(params)
        dispatch(setPacks(res.data))
        dispatch(setAppStatus('succeeded'))
    }catch (error) {
        handlerAppError(error, dispatch);
        dispatch(setAppStatus('failed'))
    }

}