import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {CardType, getCards} from "../../bll/cardsReducer";
import {Card} from "./card";
import {SuperButton} from "../components/SuperButton/SuperButton";
import s from './cards.module.css'

import 'antd/dist/antd.css';
import { Pagination } from 'antd';


export const Cards = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCards('5faf6731f343150004f08b1f'))
    }, [])
    const [minValue,setMinValue]= useState<number>(0) //
    const [maxValue,setMaxValue]= useState<number>(5) //


    const cards = useSelector<RootStoreType, CardType[]>(state => state.Cards.cards)
    const card = cards && cards.length > 0 &&
        cards.slice(minValue, maxValue).map(c => <Card key={c._id} question={c.question} answer={c.answer} grade={c.grade} updated={c.updated}/>)
    //const card = cards.map(c =><div>{c.answer},{c.grade}</div>)

    const handleChange = (value:number) => {
        if (value <= 1) {
            setMinValue(0)
            setMaxValue(5)
        } else {
            setMinValue(maxValue)
            setMaxValue(value * 5)
        }
    }
    return (
        <div>
            <header className={s.header}>
                <ul className={s.header_list}>
                    <li className={s.header_item}>question</li>
                    <li>answer</li>
                    <li>grade</li>
                    <li>updated</li>
                    <li>url</li>
                    <SuperButton value={'add'}/>
                </ul>
            </header>
            {card}
            <Pagination
                defaultCurrent={1}
                defaultPageSize={5}
                onChange={handleChange}
                total={10} />
        </div>
    );
};

