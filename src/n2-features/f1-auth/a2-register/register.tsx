import {SuperInputText} from "../../../n1-main/m1-ui/components/c3-SuperInput/SuperInputText";
import {SuperButton} from "../../../n1-main/m1-ui/components/c1-SuperButton/SuperButton";
import styles from './register.module.css'
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerTC} from "./registerReducer";
import {RootStoreType} from "../../../n1-main/m2-bll/store";
import {useNavigate} from "react-router-dom";

export const Register = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [inputType, setInputType] = useState<string>('password')


    const error = useSelector<RootStoreType, null | string>(state => state.Register.isError)
    const isRegister = useSelector<RootStoreType, boolean>(state => state.Register.isRegisterIn)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setEmail(e.currentTarget.value)
    }
    const onChangePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeRepeatPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.currentTarget.value)
    }

    const changeInputType = () => {
        const type = inputType === 'password' ? 'text' : 'password'
        setInputType(type)
    }

    const onSubmitForm = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password === repeatPassword) {
            dispatch(registerTC({email, password}))
        }

    }

    if (isRegister) {
        navigate('/login')
    }
    return (
        <div className={styles.RegisterFormContainer}>
            <h1>It Incubator</h1>
            <h2>Sign in</h2>
            <form onSubmit={onSubmitForm}>
                {error !== null && <span>{error}</span>}
                <input
                    className={styles.input}
                    onChange={onChangeEmailInput}
                    placeholder={'email'}
                    name={'email'}
                    value={email}
                    type={'email'}
                />
                <div className={styles.container}>
                    <input
                        className={styles.input}
                        onChange={onChangePasswordInput}
                        placeholder={'password'}
                        name={'password'}
                        value={password}
                        type={inputType}
                    />
                    <span
                        className={styles.eye}
                        onClick={changeInputType}
                    >&#128065;
                    </span>
                </div>
                <div className={styles.container}>
                    <input
                        className={styles.input}
                        onChange={onChangeRepeatPasswordInput}
                        name={'confirm password'}
                        placeholder={'confirm password'}
                        value={repeatPassword}
                        type={inputType}
                    />
                    <span
                        onClick={changeInputType}
                        className={styles.eye}
                    >&#128065;
                    </span>
                </div>
                <div className={styles.buttonGroup}>
                    <SuperButton className={styles.cancel} value={'cancel'}/>
                    <SuperButton className={styles.register} type={'submit'} value={'register'}/>
                </div>
            </form>
        </div>
    )
}