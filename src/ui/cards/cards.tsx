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
import Modal from "./modal/modal";


export const Cards = () => {
    const dispatch = useDispatch()
    const params = useParams<'id'>()
    const cardsPack_id = params.id
    console.log(cardsPack_id)

    //pagination
    const [minValue, setMinValue] = useState<number>(0) //
    const [maxValue, setMaxValue] = useState<number>(5) //

    const [searchValue, setSearchValue] = useState<string>('')

    const [showModal, setShowModal] = useState<boolean>(false)
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')
    const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null)

    const onHandlerShow = () => {
        setShowModal(true)
    }

    useEffect(() => {
        dispatch(getCards(cardsPack_id))
    }, [searchValue, cardsPack_id])


    const onHandleSubmit = () => {
        dispatch(createCards(cardsPack_id, {cardsPack_id, question, answer}))
        setQuestion('')
        setAnswer('')
        setShowModal(false)
    }

    const onRemoveHandler = (id: string | null) => {
        dispatch(deleteCard(cardsPack_id, id))
        setShowDeleteModal(null)
    }

    const showModalDelete = () => {
        setShowDeleteModal(showDeleteModal)
    }

    const cards = useSelector<RootStoreType, CardType[]>(state => state.Cards.cards)
    const card = cards && cards.length > 0 &&
        cards.slice(minValue, maxValue).map((c, index) => <Card key={c._id}
                                                                setShowDeleteModal={setShowDeleteModal}
                                                                id={c._id}
                                                                index={index}
                                                                question={c.question}
                                                                answer={c.answer}
                                                                grade={c.grade}
                                                                updated={c.updated}
                                                                onRemoveHandler={showModalDelete}
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
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className={s.cards}>
            <SearchByName onChangeSearch={onChangeSearch}/>
            <div className={s.table}>
                <header className={s.header}>
                    {/*<SearchByName setSearchValue={setSearchValue}/>*/}
                    <ul className={s.header_list}>
                        <li className={s.header_item}>question</li>
                        <li className={s.header_item}>answer</li>
                        <li className={s.header_item}>grade</li>
                        <li className={s.header_item}>updated</li>
                        <li className={s.header_item}>url</li>
                        <li className={s.header_item}><SuperButton onClick={onHandlerShow} style={{width: '60px'}}
                                                                   value={'add'}/></li>
                    </ul>
                </header>
                {card}
            </div>
            {showModal && <div>
                <div className={s.modal}>
                    <h2>Card info</h2>
                    <SuperInputText value={question} onChangeText={setQuestion} placeholder={'Question'}/>
                    <SuperInputText value={answer} onChangeText={setAnswer} placeholder={'Answer'}/>
                    <SuperButton onClick={onHandleSubmit} value={'Save'}/>
                </div>
                <div onClick={() => setShowModal(false)} className={s.modal__back}>
                </div>
            </div>}
            {showDeleteModal &&
            <Modal
                id={showDeleteModal}
                onRemoveHandler={onRemoveHandler}
                changeShowModal={setShowDeleteModal}
            />}
            <Pagination
                defaultCurrent={1}
                defaultPageSize={5}
                onChange={handleChange}
                total={10}/>
        </div>
    );
};

