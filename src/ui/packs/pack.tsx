import {dataHandler} from "../../bll/helpers/dataHandler";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import React from "react";
import {SuperButton} from "../components/SuperButton/SuperButton";
import style from './packs.module.css'
import {Table, Button} from 'antd';
import {cutString} from "../../bll/helpers/cutString";

type PackType = {
    id: string
    name: string
    cards: number
    lastUpdated: string
    createdBy: string
    packUserId: string
    disabled: boolean
    deletePackHandler: (id: string) => void
    updatePackHandler: (id: string) => void
    learnHandler: (id: string) => void
}
export const Pack = (props: PackType) => {

    const userId = useSelector<RootStoreType, string>(state => state.Profile._id)
    const lastUpdated = dataHandler(props.lastUpdated)


    return (
        <div className={style.pack}>
            <div className={style.cellName}> {cutString(props.name)}</div>
            <div className={style.cardsCount}> {props.cards}</div>
            <span className={style.lastUpdated}> {lastUpdated}</span>
            <span className={style.createdBy}> {cutString(props.createdBy)}</span>
            <div className={style.buttons}>
                {userId === props.packUserId &&
                <SuperButton className={style.button}
                             disabled={props.disabled}
                             onClick={() => props.deletePackHandler(props.id)}
                             value={'Delete'}/>}

                {userId === props.packUserId &&
                <SuperButton className={style.button}
                             disabled={props.disabled}
                             onClick={() => props.updatePackHandler(props.id)}
                             value={'Edit'}/>}

                <SuperButton className={style.button}
                             disabled={props.disabled}
                             onClick={() => props.learnHandler(props.id)}
                             value={'Learn'}/>
            </div>
        </div>
    )

}