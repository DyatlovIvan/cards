export const cutString = (value:string) =>{
    if(value.length>30){
        return value.slice(0,30)
    }else {
        return value
    }
}