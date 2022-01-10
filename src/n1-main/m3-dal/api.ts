import axios from "axios"

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

}