import React, {ChangeEvent, useEffect, useState} from "react";
import {cardPacksType, createPack, deletePack, getPacks, updatePack} from "../../bll/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {Pack} from "./pack";
import {RequestStatusType} from "../../bll/AppReducer";
import {useNavigate} from "react-router-dom";
import SearchByName from "../components/SearchByName/SearchByName";
import 'antd/dist/antd.css';
import {Pagination, Slider, Switch, Button} from 'antd';
import styles from './packs.module.css'
import {useDebounce} from "usehooks-ts";
import MainModal from "../modal/mainModal";

export type ModalWindowType = 'delete' | 'create' | 'edit' | null
export const Packs = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(9)
    const [modalName, setModalName] = useState<ModalWindowType>(null);
    const [title, setTitle] = useState<string | null>(null)
    const [text,setText] = useState<string>('')
    const [id, setId] = useState<string>('')
    const [myPacks, setMyPacks] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [searchValue, setSearchValue] = useState<string>('')
    const packs = useSelector<RootStoreType, Array<cardPacksType>>(state => state.Packs.cardPacks)
    const userId = useSelector<RootStoreType, string>(state => state.Profile._id)
    const status = useSelector<RootStoreType, RequestStatusType>(state => state.App.status)
    const disabled = status === 'loading';
    const packName = searchValue
    const sortPacks = 0
    const pageCount = 21
    const user_id = myPacks ? userId : ''
    const debounceValueMin = useDebounce(min, 500)
    const debounceValueMax = useDebounce(max, 500)

    const params = {
        packName, min,
        max, sortPacks,
        page, pageCount,
        user_id
    }
    useEffect(() => {
        dispatch(getPacks(params))
    }, [myPacks, page, searchValue, debounceValueMin, debounceValueMax])

    const showOnlyMyPacks = () => {
        setMyPacks(!myPacks)
    }
    const AddNewPackHandler = () => {
        setText('')
        openModalWindow('create',undefined)
    }
    const deletePackHandler = (id: string) => {
        dispatch(deletePack(id, params))
    }

    const updatePackHandler = (id: string) => {
        dispatch(updatePack({_id: id, name: text}, params))
    }
    const learnHandler = (id: string) => {
        navigate(`/cards/${id}`)
    }

    const sliderHandler = (value: Array<number>) => {
        if (value[0] < value[1]) {
            setMin(value[0])
            setMax(value[1])
        }
    }

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const openModalWindow = (modal: ModalWindowType, id: string|undefined) => {
        setModalName(modal)
        if( typeof id !== 'undefined'){
            setId(id)
        }
        if(modal==='delete'){
            setTitle('Are you sure you want to delete this pack?')
        }else if (modal==='create'){
            setTitle('create name for the new pack')
        }else if (modal === 'edit'){
            setTitle('change the name of the pack')
        }
    }

    const setTrueHandler = ()=>{
        setModalName(null)
       if (modalName==='delete'){
           deletePackHandler(id)
       }else if (modalName ==='create'){
           dispatch(createPack({name: text}, params))
       }else if(modalName ==='edit'){
           updatePackHandler(id)
       }
    }
    const setFalseHandler = () =>{
        setModalName(null)
    }
    const paginationHandler = (e: number) => {
        setPage(e)
    }
    return (
        <div className={styles.packs}>
            <div className={styles.dashboard}>
                <SearchByName onChangeSearch={onChangeSearch}/>
                <div>
                    <label className={styles.myPacksLabelSwitch}>Show only my packs</label>
                    <Switch checked={myPacks} onChange={showOnlyMyPacks}/>
                </div>

                <Slider className={styles.slider}
                        range value={[min, max]}
                        onChange={sliderHandler}
                        included={true}
                        disabled={disabled}/>

                <Button className={styles.addNewPackButton} type="primary"
                        onClick={AddNewPackHandler} disabled={disabled}>
                    Add new pack
                </Button>
            </div>

            <MainModal
                show={Boolean(modalName)}
                modalName ={modalName}
                setTrue={setTrueHandler}
                setFalse={setFalseHandler}
                text = {text}
                setText = {setText}
                width={300}
                height={200}
                enableBackground backgroundOnClick={() => {
                setModalName(null)
            }}>{title}</MainModal>

            <div className={styles.table}>
                {packs.map((el, index) =>
                        <Pack key={el._id}
                              id={el._id}
                              name={el.name}
                              cards={el.cardsCount}
                              lastUpdated={el.updated}
                              createdBy={el.user_name}
                              packUserId={el.user_id}
                              disabled={disabled}
                              deletePackHandler={deletePackHandler}
                              updatePackHandler={updatePackHandler}
                              learnHandler={learnHandler}
                              index={index}
                              params={params}
                              openModalWindow={openModalWindow}
                        />
                )}
                <div className={styles.pagination}>
                    <Pagination
                        total={100}
                        current={page}
                        onChange={paginationHandler}
                    />
                </div>
            </div>
        </div>
    )
}

