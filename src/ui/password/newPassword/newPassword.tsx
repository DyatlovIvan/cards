import React, {ChangeEvent, useState} from "react";
import s from "./newPassword.module.css";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../../bll/store";
import {sendNewPasswordTC} from "../../../bll/password/newPasswordReducer";
import {Login} from "../../auth/login/login";

export const NewPassword = React.memo(() => {

    const dispatch = useDispatch()
    const isSend = useSelector<RootStoreType, boolean>((state) => state.NewPassword.isSend)
    const {token} = useParams<"token">()

    const [valueInput, setValueInput] = useState<string>("")
    const [icon, setIcon] = useState<boolean>(true)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value);
    };
    // const onIconHandler = () => {
    //     setIcon(!icon);
    // };

    const onSendPasswordChange = () => {
        if (token) dispatch(sendNewPasswordTC(valueInput, token))
    };

    if (isSend) return <Login/>;

    return (
        <div className={s.main}>
            <div className={s.password}>
                <div className={s.password_body}>
                    <h2 className={s.password_title}>It-incubator</h2>
                    <div className={s.password_subtitle}>Create new password</div>
                    <div className={s.password_inp__wrap}>
                        <input
                            placeholder={"Password"}
                            type={icon ? "password" : "text"}
                            value={valueInput}
                            onChange={onInputChange}
                            className={s.password_input}
                        />
                        <img
                            className={s.password_icon}
                            src={icon ? '1' : '2'}
                            alt=""
                            // onClick={onIconHandler}
                        />
                    </div>
                    <div className={s.password_text}>
                        Create new password and we will send you further instructions to
                        email
                    </div>
                    <button
                        className={s.password_button}
                        onClick={onSendPasswordChange}
                    >
                        Create new password
                    </button>
                </div>
            </div>
        </div>
    );
});