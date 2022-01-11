import {useState} from "react";
import {SuperCheckbox} from "../../../n1-main/m1-ui/components/c2-SuperCheckbox/SuperCheckbox";

export const Login = () =>{
    const [login, setLogin] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [rememberMe,setRememberMe] = useState<boolean>(false)
    const [error,setError] = useState<string|null>(null)
    return(
        <div>
            LOGIN
            <div>
                {error && error}
                <input type="text"/>
                <SuperCheckbox onChangeChecked ={setRememberMe}
                               checked = {rememberMe}>
                    some text
                </SuperCheckbox>
            </div>
        </div>
    )
}