import React from 'react';
import s from './cards.module.css'

type CardPropsType = {
    question: string
    answer: string
    grade: number
    updated?: string
    onRemoveHandler: () => void
}

export const Card = ({question, answer, grade, updated, onRemoveHandler}: CardPropsType) => {
    return (
        <div className={s.card}>
            <div className={s.card_item}>{question}</div>
            <div className={s.card_item}>{answer}</div>
            <div className={s.card_item}>{grade}</div>
            <div className={s.card_item}>{updated}</div>
            <div className={s.card_item}>some img</div>
            <div className={s.card_item}>
                <button onClick={onRemoveHandler}>del</button>
                <button>update</button>
            </div>
        </div>
    );
};

