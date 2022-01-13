import React, {useState} from "react";
import {SuperCheckbox} from "../../components/c2-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../../bll/store";
import {loginTC} from "../../../bll/loginReduser";
import {NavLink} from "react-router-dom";
import {SuperInputText} from "../../components/c3-SuperInput/SuperInputText";
import style from "./login.module.css"
import {RequestStatusType} from "../../../bll/AppReducer";
import {SuperButton} from "../../components/c1-SuperButton/SuperButton";


export const Login = () => {
    const dispatch = useDispatch()
    const error = useSelector<RootStoreType, string | null>(state => state.App.error)
    const status = useSelector<RootStoreType, RequestStatusType>(state => state.App.status)
    const [email, setEmail] = useState<string>('nya-admin@nya.nya')
    const [password, setPassword] = useState<string>('1qazxcvBG')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const disabled = status === 'loading' ? true : false
    const singInHandler = () => {
        dispatch(loginTC({email, password, rememberMe}))
    }

    return (
        <div className={style.RegisterFormContainer}>
            <h1>It Incubator</h1>
            <h2>Sign in</h2>
            {status === 'loading' && <span>{status}</span>}
            {error && <span className={style.error}>{error}</span>}
            <SuperInputText disabled={disabled} value={email} onChangeText={setEmail}/>
            <SuperInputText disabled={disabled} value={password} onChangeText={setPassword}/>
            <div className={style.checkboxBlock}>
                <SuperCheckbox onChangeChecked={setRememberMe}
                               disabled={disabled}
                               checked={rememberMe}>
                    remember me
                </SuperCheckbox>
            </div>
            <div className={style.forgotPasswordBlock}>
                <NavLink style={{textDecoration:"none", color:"black"}} to={`/newPassword`}>forgot password?</NavLink>
            </div>

            <div>
                <SuperButton disabled={disabled} onClick={singInHandler} value={'Login'}/>
            </div>
            <div style={{color:"grey"}}>
                Don't have an account?
            </div>
            <div className={style.singUp}>
                <NavLink style={{textDecoration:"none",color:"#21268F"}} to={`/register`}>Sing Up</NavLink>
            </div>
        </div>
    )
}