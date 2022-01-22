import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {CardType, createCards, deleteCard, getCards} from "../../bll/cardsReducer";
import {Card} from "./card";
import {SuperButton} from "../components/SuperButton/SuperButton";
import s from './cards.module.css'
import {SuperInputText} from "../components/SuperInput/SuperInputText";
import SearchByName from "../components/SearchByName/SearchByName";
import 'antd/dist/antd.css';
import {Pagination} from 'antd';
import {useParams} from "react-router-dom";


export const Cards = () => {
    const dispatch = useDispatch()
    const params = useParams<'id'>()
    // const {_id} = useParams<'_id'>()
    const cardsPack_id = params.id


    //pagination
    const [minValue, setMinValue] = useState<number>(0) //
    const [maxValue, setMaxValue] = useState<number>(5) //

    const [searchValue, setSearchValue] = useState<string>('')

    const [showModal, setShowModal] = useState<boolean>(false)
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const onHandlerShow = () => {
        setShowModal(true)
    }

    useEffect(() => {
        dispatch(getCards({cardsPack_id,cardQuestion: searchValue}))
    }, [searchValue])


    const onHandleSubmit = () => {
        dispatch(createCards({cardsPack_id}, {cardsPack_id, question, answer}))
        setShowModal(false)
    }

    const onRemoveHandler = () => {
        dispatch(deleteCard(cardsPack_id, {cardsPack_id}))
    }

    const cards = useSelector<RootStoreType, CardType[]>(state => state.Cards.cards)
    const card = cards && cards.length > 0 &&
        cards.slice(minValue, maxValue)
            .map(c => <Card key={c._id}
                            question={c.question}
                            answer={c.answer}
                            grade={c.grade}
                            updated={c.updated}
                            onRemoveHandler={onRemoveHandler}
            />)

    const handleChange = (value: number) => {
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(5)
        } else {
            setMinValue(maxValue)
            setMaxValue(value * 5)
        }
    }

    //SearchByName

    return (
        <div className={s.cards}>
            <SearchByName setSearchValue={setSearchValue}/>
            <header className={s.header}>
                <ul className={s.header_list}>
                    <li className={s.header_item}>question</li>
                    <li className={s.header_item}>answer</li>
                    <li className={s.header_item}>grade</li>
                    <li className={s.header_item}>updated</li>
                    <li className={s.header_item}>url</li>
                    <SuperButton onClick={onHandlerShow} style={{width: '60px'}} value={'add'}/>
                </ul>
            </header>
            {card}

            {showModal && <div className={s.cards_modal}>
                <h2>Card info</h2>
                <SuperInputText value={question} onChangeText={setQuestion} placeholder={'Question'}/>
                <SuperInputText value={answer} onChangeText={setAnswer} placeholder={'Answer'}/>
                <SuperButton onClick={onHandleSubmit} value={'Save'}/>
            </div>}
            <Pagination
                defaultCurrent={1}
                defaultPageSize={5}
                onChange={handleChange}
                total={10}/>
        </div>
    );
};

