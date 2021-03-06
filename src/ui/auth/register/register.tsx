import {SuperButton} from "../../components/SuperButton/SuperButton";
import styles from './register.module.css'
import {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerTC} from "../../../bll/registerReducer";
import {RootStoreType} from "../../../bll/store";
import {useNavigate} from "react-router-dom";
import {SuperInputText} from "../../components/SuperInput/SuperInputText";

export const Register = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [inputType, setInputType] = useState<string>('password')

    const error = useSelector<RootStoreType, null | string>(state => state.Register.isError)
    const isRegister = useSelector<RootStoreType, boolean>(state => state.Register.isRegisterIn)
    const loading = useSelector<RootStoreType, boolean>(state => state.Register.loading)
    console.log(loading)
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
                <SuperInputText
                    disabled={loading}
                    className={styles.input}
                    onChange={onChangeEmailInput}
                    placeholder={'email'}
                    name={'email'}
                    value={email}
                    inputType={'email'}
                />
                <div className={styles.group}>
                    <SuperInputText
                        disabled={loading}
                        className={styles.input}
                        onChange={onChangePasswordInput}
                        placeholder={'password'}
                        name={'password'}
                        value={password}
                        inputType={inputType}
                    />
                    <span
                        className={styles.eye}
                        onClick={changeInputType}
                    >&#128065;
                    </span>
                </div>
                <div className={styles.group}>
                    <SuperInputText
                        inputType={inputType}
                        disabled={loading}
                        className={styles.input}
                        onChange={onChangeRepeatPasswordInput}
                        name={'confirm password'}
                        placeholder={'confirm password'}
                        value={repeatPassword}
                    />
                    <span
                        onClick={changeInputType}
                        className={styles.eye}
                    >&#128065;
                    </span>
                </div>
                <div className={styles.buttonGroup}>
                    <SuperButton disabled={loading} className={styles.cancel} type={'button'} value={'cancel'}/>
                    <SuperButton disabled={loading} className={styles.register} type={'submit'} value={'register'}/>
                </div>
            </form>
        </div>
    )
}