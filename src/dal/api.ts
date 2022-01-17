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

    getCards(cardsPack_id: string) {
        return instance.get('cards/card', {params: {cardsPack_id}})
    },
    addCards(card: CardParamsType) {
        return instance.post('cards/card', {card})
    }

}

export type CardParamsType = {
    cardsPack_id: "5eb543f6bea3ad21480f1ee7"
    question: "no question" | string // если не отправить будет таким
    answer: "no answer" | string  // если не отправить будет таким
    grade?: number // 0..5, не обязателен
    shots?: number // не обязателен
    rating?: number// не обязателен
    answerImg?: "url or base 64" // не обязателен
    questionImg?: "url or base 64" // не обязателен
    questionVideo?: "url or base 64" // не обязателен
    answerVideo?: "url or base 64" // не обязателен
    type: "card" | string // если не отправить будет таким
}

export type RegisterParamsType = {
    email: string
    password: string
}