import {Dispatch} from "redux";
import {cardsAPI} from "../dal/api";

type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: Date
    updated: Date
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
            created: new Date,
            updated: new Date,
            __v: 0,
            _id: '',
        },
    ],
    cardsTotalCount: 3,
    maxGrade: 4.987525071790364,
    minGrade: 2.0100984354076568,
    page: 1,
    pageCount: 4,
    packUserId: "5eecf82a3ed8f700042f1186",
}


export const cardsReducer = (state: InitialStateType = initialState, action: ActionCardsType): InitialStateType => {
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
const cardsPack_id = '5eb6a2f72f849402d46c6ac7'
export const getCards =() => (dispatch: Dispatch<ActionCardsType>) => {
    cardsAPI.getCards('cardsPack_id')
        .then(res => {
            dispatch(setCards(res.data.cards))
        })
}


export type ActionCardsType = SetCardsType