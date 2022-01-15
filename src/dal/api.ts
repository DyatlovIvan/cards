import axios from "axios"

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

const settings = {
    withCredentials: true,
}

// const instance = axios.create({
//     baseURL: 'https://neko-back.herokuapp.com/2.0',
//     ...settings
// })

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    ...settings
})


export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post('/auth/login', data)
    },
    register(data: RegisterParamsType) {
        return instance.post('/auth/register', data)
    },
    logout() {
        return instance.delete('/auth/me', {})
    },
    me() {
        return instance.post('/auth/me', {})
    }
}

export const cardsAPI = {

    getCards(cardPack_id: string) {
        return instance.get('cards/card', {params:{cardPack_id: '5eb6a2f72f849402d46c6ac7'}})
    }
}

export type RegisterParamsType = {
    email: string
    password: string
}

const cardsPack_id = '5eb6a2f72f849402d46c6ac7'