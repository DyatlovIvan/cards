import axios,{ AxiosResponse } from "axios"
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

export const packsAPI = {
    getPacks(params:getPacksRequestType){
        return instance.get('/cards/pack',{params:params})
    },
    createPack(data:CreatePackModelType){
        return instance.post('/cards/pack',{cardsPack:data})
    }
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
    name:string
    path?:string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
    private?: boolean
    type?: string
}
