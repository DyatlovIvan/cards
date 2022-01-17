import React, {useEffect, useState} from "react";
import {SuperCheckbox} from "../../components/SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../../bll/store";
import {loginTC} from "../../../bll/loginReduser";
import {NavLink, useNavigate} from "react-router-dom";
import {InputType, SuperInputText} from "../../components/SuperInput/SuperInputText";
import style from "./login.module.css"
import {RequestStatusType} from "../../../bll/AppReducer";
import {SuperButton} from "../../components/SuperButton/SuperButton";
import styles from "../register/register.module.css";


export const Login = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector<RootStoreType, boolean>(state => state.Login.isLoggedIn)
    const isInitialized = useSelector<RootStoreType, boolean>(state => state.App.isInitialized)

    const dispatch = useDispatch()
    const error = useSelector<RootStoreType, string | null>(state => state.App.error)
    const status = useSelector<RootStoreType, RequestStatusType>(state => state.App.status)
    const [email, setEmail] = useState<string>('nya-admin@nya.nya')
    const [password, setPassword] = useState<string>('1qazxcvBG')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [inputType, setInputType] = useState<InputType>('password')
    const disabled = status === 'loading';
    const singInHandler = () => {
        dispatch(loginTC({email, password, rememberMe}))
    }
    const changeInputType = () => {
        setInputType(inputType==='password'?'text':'password')
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/profile')
        }
        if (isInitialized && !isLoggedIn) {
            navigate('/login')
        }
    }, [isInitialized, isLoggedIn])

    return (
        <div className={style.RegisterFormContainer}>
            <h1>It Incubator</h1>
            <h2>Sign in</h2>
            <div className={style.mainBlock}>
                {status === 'loading' && <span>{status}</span>}
                {error && <span className={style.error}>{error}</span>}
                <SuperInputText disabled={disabled} value={email} onChangeText={setEmail}
                                placeholder={'email'} inputType={"email"}/>
                <div className={styles.group}>
                    <SuperInputText disabled={disabled} value={password} onChangeText={setPassword}
                                    placeholder={'password'} inputType={inputType}/>
                    <span
                        onClick={changeInputType}
                        className={style.eye}
                    >&#128065;
                    </span>
                </div>
                <div className={style.checkboxBlock}>
                    <SuperCheckbox onChangeChecked={setRememberMe}
                                   disabled={disabled}
                                   checked={rememberMe}>
                        remember me
                    </SuperCheckbox>
                </div>
                <div className={style.forgotPasswordBlock}>
                    <NavLink style={{textDecoration: "none", color: "black"}} to={`/forgot`}>forgot
                        password?</NavLink>
                </div>

                <SuperButton disabled={disabled} onClick={singInHandler} value={'Login'}/>
            </div>
            <div className={style.singUpBlock}>
                <div style={{color: "grey"}}>
                    Don't have an account?
                </div>
                <div className={style.singUp}>
                    <NavLink style={{textDecoration: "none", color: "#21268F"}} to={`/register`}>Sing Up</NavLink>
                </div>
            </div>
        </div>
    )
}