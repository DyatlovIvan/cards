import {Dispatch} from "redux";
import {CardParamsType, cardsAPI} from "../dal/api";
import {handlerAppError} from "./helpers/helpers";
import {setAppStatus} from "./AppReducer";
import {AppThunk, RootStoreType} from "./store";

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string | undefined
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: ''
    updated: ''
    __v: number
    _id: string
}

type InitialStateType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

const initialState: InitialStateType = {
    cards: [
        {
            answer: '',
            question: '',
            cardsPack_id: '',
            grade: 0,
            rating: 0,
            shots: 0,
            type: 'card',
            user_id: '',
            created: '',
            updated: '',
            __v: 0,
            _id: '',
        },
    ],
    cardsTotalCount: 3,
    maxGrade: 4.987525071790364,
    minGrade: 2.0100984354076568,
    page: 1,
    pageCount: 4,
    packUserId: "",
}


export const CardsReducer = (state: InitialStateType = initialState, action: ActionCardsType): InitialStateType => {
    switch (action.type) {
        case 'SET_CARDS': {
            return {...state, cards: action.cards}
        }


        default:
            return state
    }
}

export const setCards = (cards: CardType[]) => ({type: 'SET_CARDS', cards} as const);
type SetCardsType = ReturnType<typeof setCards>

export const getCards = (cardsPack_id: string | undefined) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        const res = await cardsAPI.getCards(cardsPack_id)
        dispatch(setCards(res.data.cards))
        dispatch(setAppStatus('failed'))
    } catch (error) {
        handlerAppError(error, dispatch)
    }
}

export const createCards = (cardsPack_id: string | undefined, card: CardParamsType): AppThunk => async (dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        await cardsAPI.addCards(card)
        dispatch(getCards(cardsPack_id))
    } catch (error) {
        handlerAppError(error, dispatch)
    }
}

export const deleteCard = (cardsPack_id: string | undefined, _id: string | null): AppThunk => async (dispatch, getState) => {
    try {
        await cardsAPI.removeCard(_id)
        await dispatch(getCards(cardsPack_id))
    } catch (error) {
        handlerAppError(error, dispatch)
    }
}

export type ActionCardsType = SetCardsType