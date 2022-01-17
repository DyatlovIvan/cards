import React from 'react';
import s from "./email.module.css";
import emailImg from"./../../assets/img/email.png"

export const Email = React.memo(() => {
    return (

        <div className={s.main}>
            <div className={s.check}>
                <div className={s.check_body}>
                    <h2 className={s.check_title}>It-incubator</h2>
                    <div className={s.check_image}>
                        <img className={s.check_img} src={emailImg} alt=""/>
                    </div>
                    <div className={s.check_subtitle}>Check Email</div>
                    <div className={s.check_text}>We’ve sent an Email with instructions to <br/>
                        example@mail.com
                    </div>
                </div>
            </div>
        </div>

    );
});