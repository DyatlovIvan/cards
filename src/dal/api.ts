import axios from "axios"

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

const settings = {
    withCredentials: true,
}

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    ...settings
})

// const instance = axios.create({
//     baseURL: 'http://localhost:7542/2.0/',
//     ...settings
// })


export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post('/auth/login', data)
    },
    register(data: RegisterParamsType) {
        return instance.post('/auth/register', data)
        return instance.post('/auth/login', data)
    },
    logout() {
        return instance.delete('/auth/me', {})
    },
    me() {
        return instance.post('/auth/me', {})
    },


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


export type RegisterParamsType = {
    email: string
    password: string
}
