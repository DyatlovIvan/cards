import React from 'react';
import s from './editProfile.module.css'
import 'antd/dist/antd.css';
import {Input, Button} from 'antd';

import emailImg from "../../../assets/img/email.png";
import editImg from '../../../assets/img/EditPersonal.png'

const EditProfile = () => {
    return (
        <div className={s.main}>
            <div className={s.body}>
                <h2 className={s.title}>Personal Information</h2>
                <div className={s.avatar}>
                    <img className={s.img} src={emailImg} alt=""/>
                    <button className={s.editImg}>
                        <img className={s.imgBtnAvatar} src={editImg} alt=""/>
                    </button>
                </div>
                <div className={s.forms}>
                    <span className={s.nameFormNick}>Nickname</span>
                    <Input placeholder="input placeholder"/>
                    <span className={s.nameFormEmail}>Email</span>
                    <Input placeholder="input placeholder"/>
                </div>
                <div className={s.buttons}>
                    <Button>Cancel</Button>
                    <Button type="primary">Submit</Button>
                </div>

            </div>
        </div>
    );
};

export default EditProfile;
