import React, {ChangeEvent, useState} from 'react';
import s from './editProfile.module.css'
import 'antd/dist/antd.css';
import {Input, Button, Form} from 'antd';

import editImg from '../../../assets/img/EditPersonal.png'

const EditProfile = () => {
    // let avatar = "https://html5css.ru/howto/img_avatar2.png"
    let avatar = "https://s8.vcdn.biz/static/f/2317197581/image.jpg"

    // {profile?.photos.large === null ? avatar : props.profile?.photos.large }

    const [name, setName] = useState<string>('2pac')
    const [email, setEmail] = useState<string>('2pac_alive@gmail.com')

    const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }
    const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }

    return (
        <div className={s.main}>
            <div className={s.body}>
                <h2 className={s.title}>Personal Information</h2>
                <div className={s.avatar}>
                    <img className={s.img}
                         src={null === null ? avatar : 'то что приходит с сервера'}
                         alt="Аватар"/>
                    <button className={s.editImg}>
                        <img className={s.imgBtnAvatar} src={editImg} alt=""/>
                    </button>
                </div>
                <div className={s.forms}>
                    <span className={s.nameForm}>Nickname</span>
                    <Input className={s.input}
                           placeholder="Name"
                           value={name}
                           onChange={onChangeInputName}
                    />
                    <span className={s.nameForm}>Email</span>
                    <Input className={s.input}
                           placeholder="Email"
                           value={email}
                           onChange={onChangeInputEmail}
                    />
                </div>
                <div className={s.buttons}>
                    <Button className={s.btnCancel + ' ' + s.button}>Cancel</Button>
                    <Button className={s.btnSave + ' ' + s.button} type="primary">Save</Button>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;

// const validateMessages = {
//     required: '${label} is required!',
//     types: {
//         email: '${label} is not a valid email!',
//         number: '${label} is not a valid number!',
//     },
//     number: {
//         range: '${label} must be between ${min} and ${max}',
//     },
// }
// <Form name="nest-messages" onFinish={onChangeInputEmail} validateMessages={validateMessages}>
//     <Form.Item name={['user', 'name']}  rules={[{ required: true }]}>
//         <Input className={s.input}
//                placeholder="Name"
//                value={name}
//                onChange={onChangeInputName}
//         />
//         {/*<span className={s.nameForm}>Nickname</span>*/}
//     </Form.Item>
//     <Form.Item name={['user', 'email']}  rules={[{ type: 'email' }]}>
//         <Input className={s.input}
//                placeholder="Email"
//                value={email}
//                onChange={onChangeInputEmail}
//         />
//     </Form.Item>