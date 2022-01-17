import {dataHandler} from "../../bll/helpers/dataHandler";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import React from "react";
import {SuperButton} from "../components/SuperButton/SuperButton";
import style from './packs.module.css'
import { Table, Button } from 'antd';

type PackType = {
    id:string
    name: string
    cards: number
    lastUpdated: string
    createdBy: string
    packUserId:string
    disabled:boolean
    deletePackHandler:(id:string)=>void
    updatePackHandler:(id:string)=>void
}
export const Pack = (props: PackType) => {

    const userId = useSelector<RootStoreType,string>(state => state.Profile._id)
    const lastUpdated = dataHandler(props.lastUpdated)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Cards',
            dataIndex: 'cards',
        },
        {
            title: 'Updated',
            dataIndex: 'updated',
        },
        {
            title: 'Crea',
            dataIndex: 'updated',
        }
    ];
    return (
        <div>
            <span> {props.name}</span>
            <span> {props.cards}</span>
            <span> {lastUpdated}</span>
            <span> {props.createdBy}</span>
            {userId===props.packUserId &&
            <SuperButton className={style.button}
                        disabled={props.disabled}
                         onClick={()=>props.deletePackHandler(props.id)}
                         value={'Delete'}/>}

            {userId===props.packUserId &&
            <SuperButton className={style.button}
                         disabled={props.disabled}
                         onClick={()=>props.updatePackHandler(props.id)}
                         value={'Edit'}/>}

            <SuperButton className={style.button}
                         disabled={props.disabled}
                         value={'Learn'}/>
        </div>
    )

}