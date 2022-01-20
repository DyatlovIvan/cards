export const cutString = (value:string) =>{
    if(value.length>20){
        debugger
        return value.slice(0,20)
    }else {
        return value
    }
}