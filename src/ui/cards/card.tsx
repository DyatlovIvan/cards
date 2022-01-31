import React from 'react';
import s from './cards.module.css'


type CardPropsType = {
    question: string
    setShowDeleteModal: (id: string | null) => void
    id: string
    index: number
    answer: string
    grade: number
    updated?: string
    onRemoveHandler: () => void
}

export const Card = ({question, setShowDeleteModal,id, index, answer, grade, updated, onRemoveHandler}: CardPropsType) => {
    return (
        <div className={`${s.card} && ${index % 2 === 0 ? s.mainColor : s.secondColor}`}>
            <div className={s.card_item}>{question}</div>
            <div className={s.card_item}>{answer}</div>
            <div className={s.card_item}>{grade}</div>
            <div className={s.card_item}>{updated}</div>
            <div className={s.card_item}>some img</div>
            <div className={s.card_item}>
                <button onClick={() => setShowDeleteModal(id)}>del</button>
                <button>update</button>
            </div>
        </div>
    );
};

