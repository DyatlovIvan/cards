export type InitialStateType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}
const initialState:InitialStateType = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: ''
}
export const ProfileReducer = (state:InitialStateType=initialState,action:MainType):InitialStateType=>{
    switch (action.type){
        case "AUTH/LOGIN": {
            return {...state, ...action.data}
        }
        default:
            return state
    }
}

type MainType = ReturnType<typeof login>

export const login = (data: InitialStateType) => ({
    type: 'AUTH/LOGIN', data
}) as const