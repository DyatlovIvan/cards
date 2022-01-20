import React, {useEffect, useState} from "react";
import {cardPacksType, createPack, deletePack, getPacks, updatePack} from "../../bll/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {SuperCheckbox} from "../components/SuperCheckbox/SuperCheckbox";
import {Pack} from "./pack";
import {RequestStatusType} from "../../bll/AppReducer";
import {useNavigate} from "react-router-dom";
import 'antd/dist/antd.css';
import {Table, Pagination, Slider, Switch, Button, Space} from 'antd';
import styles from './packs.module.css'


export const Packs = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(9)
    const [myPacks, setMyPacks] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const packs = useSelector<RootStoreType, Array<cardPacksType>>(state => state.Packs.cardPacks)
    const userId = useSelector<RootStoreType, string>(state => state.Profile._id)
    const status = useSelector<RootStoreType, RequestStatusType>(state => state.App.status)
    const disabled = status === 'loading';
    const user_id = myPacks ? userId : ''
    const pageCount = 20
    const packName = ''
    const sortPacks = 0

    const params = {
        packName, min,
        max, sortPacks,
        page, pageCount,
        user_id
    }
    useEffect(() => {
        dispatch(getPacks(params))
    }, [myPacks, page, min, max])

    const showOnlyMyPacks = () => {
        setMyPacks(!myPacks)
    }
    const AddNewPackHandler = () => {
        dispatch(createPack({name: 'TEXT'}, params))
    }
    const deletePackHandler = (id: string) => {
        dispatch(deletePack(id, params))
    }

    const updatePackHandler = (id: string) => {
        dispatch(updatePack({_id: id, name: 'newTest'}, {
            packName, min,
            max, sortPacks,
            page, pageCount,
            user_id
        }))
    }
    const learnHandler = (id: string) => {
        navigate(`/cards/${id}`)
    }

    const paginationHandler = (e: number) => {
        setPage(e)
    }
    const sliderHandler = (value: Array<number>) => {
        if (value[0] < value[1]) {
            setMin(value[0])
            setMax(value[1])
        }
    }
    const sendGet = () =>{
        dispatch(createPack({name: 'TEXT'}, params))
    }
    return (
        <div className={styles.packs}>
            <div className={styles.dashboard}>
                <div>
                    <label className={styles.myPacksLabelSwitch}>Show only my packs</label>
                    <Switch checked={myPacks} onChange={showOnlyMyPacks}/>
                </div>

                <Slider className={styles.slider}
                        range value={[min, max]}
                        onChange={sliderHandler}
                        included={true}/>

                <Button className={styles.addNewPackButton} type="primary" onClick={AddNewPackHandler}>Add new
                    pack</Button>
            </div>
            <div className={styles.line}/>
            <div className={styles.table}>
                {packs.map(el =>
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
                          learnHandler={learnHandler}/>
                )}
                <div className={styles.pagination}>
                <Pagination
                    total={1000}
                    current={page}
                    onChange={(e) => paginationHandler(e)}
                />
                </div>
            </div>
        </div>
    )

}