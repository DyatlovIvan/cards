import React, {ChangeEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import s from "./forgotPassword.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Email} from "../email";
import {RootStoreType} from "../../../bll/store";
import {forgotPasswordTC} from "../../../bll/password/forgotPasswordReducer";



export const ForgotPassword = React.memo(() => {

    const dispatch = useDispatch()
    const [valueInput, setValueInput] = useState<string>("")
    const [error, setError] = useState<string | null>(null)
    const isRequestSend = useSelector<RootStoreType, boolean>(state => state.ForgotPassword.isRequestSend)

    const checkEmailValidity = (value: string) => {  //валидация емайл
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return reg.test(value)
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValueInput(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if (!checkEmailValidity(valueInput)) {
            setError("Not valid email")
            return
        }
        dispatch(forgotPasswordTC(valueInput))
    }

    if (isRequestSend) return <Email/>

    return (
        <div className={s.main}>
            <div className={s.forgot}>
                <div className={s.forgot_body}>
                    <h2 className={s.forgot_title}>It-incubator</h2>
                    <div className={s.forgot_subtitle}>Forgot your password?</div>
                    <label className={s.loginLabel}>Email</label>

                    <input placeholder="" type="text" value={valueInput}
                           onChange={onInputChange}
                           className={s.forgot_input}/>

                    {error ? <span>{error}</span> : null}
                    <div className={s.forgot_info}>Enter your email address and we will send you further instructions</div>
                    <button className={s.forgot_button}
                            onClick={onClickHandler}>Send Instructions
                    </button>

                    <Link to={"/login"} className={s.forgot_login}>Try logging in</Link>
                </div>
            </div>
        </div>
    );
});