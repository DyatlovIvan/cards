import React, {useEffect, useState} from "react";
import {SuperCheckbox} from "../../../n1-main/m1-ui/components/c2-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../../n1-main/m2-bll/store";
import {loginTC} from "./loginReduser";
import {NavLink, useNavigate} from "react-router-dom";
import {SuperInputText} from "../../../n1-main/m1-ui/components/c3-SuperInput/SuperInputText";
import style from "./login.module.css"


export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const error = useSelector<RootStoreType,string|undefined>(state => state.Login.error)
    const isLoggedIn = useSelector<RootStoreType,boolean>(state => state.Login.isLoggedIn)
    const id = useSelector<RootStoreType,string|undefined>(state => state.Login._id)
    const [email, setEmail] = useState<string>('nya-admin@nya.nya')
    const [password, setPassword] = useState<string>('1qazxcvBG')
    const [rememberMe, setRememberMe] = useState<boolean>(false)

    const singInHandler = () => {
        dispatch(loginTC({email, password, rememberMe}))
    }
    return (
        <div>
            LOGIN
            <div>
                {error && <span className={style.error}>{error}</span>}
                <SuperInputText value={email} onChangeText={setEmail}/>
                <SuperInputText value={password} onChangeText={setPassword}/>

                <SuperCheckbox onChangeChecked={setRememberMe}
                               checked={rememberMe}>
                    some text
                </SuperCheckbox>

            </div>

            <button onClick={singInHandler}>sing in</button>

            <div>
                <NavLink to={`/newPassword`}>forgot password?</NavLink>
            </div>

            <div>
                <NavLink to={`/register`}>register</NavLink>
            </div>
        </div>
    )
}