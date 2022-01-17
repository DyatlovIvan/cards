import React from 'react';
import s from './cards.module.css'

type CardPropsType = {
    question: string
    answer: string
    grade: number
    updated?: string
}

export const Card = ({question, answer, grade, updated}: CardPropsType) => {
    return (
        <div className={s.card}>
            <div className={s.card_item}>{question}</div>
            <div className={s.card_item}>{answer}</div>
            <div className={s.card_item}>{grade}</div>
            <div className={s.card_item}>{updated}</div>
            <div>
                <button>del</button>
                <button>update</button>
            </div>
        </div>
    );
};

