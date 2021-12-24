type InitialStateType = any
const initialState:InitialStateType = {}
export const loginReducer = (state:InitialStateType,action:any):InitialStateType=>{
    switch (action.type){
        case 'GET': {
            return state
        }
        default:return state
    }
}