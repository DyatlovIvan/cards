type InitialStateType = any
const initialState:InitialStateType = {}
export const NewPasswordReducer = (state:InitialStateType=initialState,action:any):InitialStateType=>{
    switch (action.type){
        case 'GET': {
            return state
        }
        default:return state
    }
}