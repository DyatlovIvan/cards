import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import { Pagination} from 'antd';
import {CardType, createCards, getCards} from "../../bll/cardsReducer";
import {Card} from "./card";
import {SuperButton} from "../components/SuperButton/SuperButton";
import s from './cards.module.css'
import {SuperInputText} from "../components/SuperInput/SuperInputText";
import SearchByName from "../components/SearchByName/SearchByName";


export const Cards = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCards('5faf6731f343150004f08b1f'))
    }, [])
    //pagination
    const [minValue,setMinValue]= useState<number>(0) //
    const [maxValue,setMaxValue]= useState<number>(5) //

    const [showModal, setShowModal] = useState<boolean>(false)
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const cards = useSelector<RootStoreType, CardType[]>(state => state.Cards.cards)

    const onHandlerShow = () => {
        setShowModal(true)
    }

    const cardsPack_id = '5faf6731f343150004f08b1f'

    const onHandleSubmit = () => {
        dispatch(createCards(cardsPack_id,{cardsPack_id, question, answer}))
        setShowModal(false)
    }
   //pagination
    const handleChange = (value:number) => {
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(5)
        } else {
            setMinValue(maxValue)
            setMaxValue(value * 5)
        }
    }

    //SearchByName
    // const [searchValue, setSearchValue] = useState<string>('')
    // const filterNamePacks = cards.filter(cards => {
    //     return cards.question.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    // })

    const card = cards && cards.length > 0 &&
        cards.slice(minValue, maxValue).map(c => <Card key={c._id} question={c.question} answer={c.answer} grade={c.grade} updated={c.updated}/>)

    return (
        <div className={s.cards}>
            <header className={s.header}>
                {/*<SearchByName setSearchValue={setSearchValue}/>*/}
                <ul className={s.header_list}>
                    <li className={s.header_item}>question</li>
                    <li>answer</li>
                    <li>grade</li>
                    <li>updated</li>
                    <li>url</li>
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
                total={10} />

        </div>
    );
};

