import React from "react";
import s from "../cards.module.css";
import {SuperButton} from "../../components/SuperButton/SuperButton";

type PropsType = {
    onRemoveHandler: (id: string | null) => void
    changeShowModal: (id : string | null) => void
    id: string | null
}

const Modal = ({onRemoveHandler, changeShowModal, id}: PropsType) => {
    return (
        <div>
            <div className={s.modal}>
                <h2>Do you really remove this card?</h2>
                <div className={s.button_container}>
                    <SuperButton value={"no"}/>
                    <SuperButton value={'yes'} onClick={() => onRemoveHandler(id)}/>
                </div>
            </div>
            <div onClick={() => changeShowModal(null)} className={s.modal__back}>
            </div>
        </div>
    );
};

export default Modal;