import axios, {AxiosResponse} from "axios"
import {cardPacksType} from "../bll/packsReducer";



// const instance = axios.create({
//     baseURL: 'https://neko-back.herokuapp.com/2.0',
//      withCredentials: true
// })

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})


export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post('/auth/login', data)
    },
    register(data: RegisterParamsType) {
        return instance.post('/auth/register', data)
    },
    logout(){
        return instance.delete('/auth/me',{})
    },
    me(){
        return instance.post('/auth/me',{})
    }
}
export const passwordAPI = {
    forgotPassword(email: string) {
        return instance.post<SendMessageType>("/auth/forgot", {
            email,
            from: "test-front-admin <dima.infn@gmail.com>",
            message: `<div><h1><a href='http://localhost:3000/cards#/set-new-password/$token$'>change password</h1></div>`,
        })
    },
    // <a href='http://localhost:3000/#/set-new-password/$token$'>
    //<a href='https://dyatlovivan.github.io/cards#/set-new-password/$token$'>
    newPassword(password: string, token: string) {
        return instance.post<ResponseToNewPassword>("auth/set-new-password", {
            password,
            resetPasswordToken: token,
        })
    }
}

export const packsAPI = {
    getPacks(params: getPacksRequestType) {
        return instance.get(`/cards/pack`, {params: params})
    },
    createPack(data: CreatePackModelType) {
        return instance.post('/cards/pack', {cardsPack: data})
    },
    deletePack(id: string) {
        return instance.delete('/cards/pack',{params:{id}})
    },
    updatePack(data:UpdatePackModelType){
        return instance.put('/cards/pack',{cardsPack:data})
    }
}

export const cardsAPI = {
    getCards(cardsPack_id: string | undefined) {
        return instance.get('cards/card', {params: {cardsPack_id}})
    },
    addCards(card: CardParamsType) {
        return instance.post('cards/card', {card})
    },
    removeCard(id: string | undefined) {
        return instance.delete('cards/card', {params:{id}})
    }
}

export type CardParamsType = {
    cardsPack_id: string | undefined
    question: "no question" | string // если не отправить будет таким
    answer: "no answer" | string  // если не отправить будет таким
    grade?: number // 0..5, не обязателен
    shots?: number // не обязателен
    rating?: number// не обязателен
    answerImg?: "" // не обязателен
    questionImg?: "" // не обязателен
    questionVideo?: "" // не обязателен
    answerVideo?: "" // не обязателен
    type?: "card" | string // если не отправить будет таким
}

type SendMessageType = {
    answer: boolean;
    html: boolean;
    info: string;
    success: boolean;
}

type ResponseToNewPassword = {
    info: string;
    error: string;
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type RegisterParamsType = {
    email: string
    password: string
}

export type getPacksRequestType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: number
    page?: number
    pageCount?: number
    user_id?: string
}

type ResponsePacksType = {
    cardsPacks: Array<cardPacksType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export type CreatePackModelType = {
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}

export type UpdatePackModelType = {
    _id:string
    name:string
}
