import {dataHandler} from "../../bll/helpers/dataHandler";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import React from "react";
import {SuperButton} from "../components/SuperButton/SuperButton";
import style from './packs.module.css'
import {Table, Button} from 'antd';
import {cutString} from "../../bll/helpers/cutString";
import {deletePack} from "../../bll/packsReducer";
import {getPacksRequestType} from "../../dal/api";
import {ModalWindowType} from "./packs";

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
    index: number
    params: getPacksRequestType
    openModalWindow:(modal:ModalWindowType,id:string)=>void
}
export const Pack = (props: PackType) => {
    const userId = useSelector<RootStoreType, string>(state => state.Profile._id)
    const lastUpdated = dataHandler(props.lastUpdated)


    return (
        <div className={`${style.pack} && ${props.index % 2 === 0 ? style.mainColor : style.secondColor}`}>
            <div  className={style.cellName}> {cutString(props.name)}</div>
            <div className={style.cardsCount}> {props.cards}</div>
            <span className={style.lastUpdated}> {lastUpdated}</span>
            <span className={style.createdBy}> {cutString(props.createdBy)}</span>
            <div className={style.buttons}>
                {/*{userId === props.packUserId &&*/}

                {/*<Button className={style.button}*/}
                {/*        type="primary"*/}
                {/*        disabled={props.disabled}*/}
                {/*        onClick={() => props.deletePackHandler(props.id)}>Delete</Button>}*/}
                {/*<ModalQuestionContainer titleButton={'delete'}*/}
                {/*                        question={'Are you sure you want to delete this pack?'}*/}
                {/*                        id={props.id}*/}
                {/*                        action={deletePack}*/}
                {/*                        params={props.params}/>*/}


                {userId === props.packUserId &&
                <Button className={style.button}
                        type='primary'
                        disabled={props.disabled}
                        onClick={()=>props.openModalWindow('delete',props.id)}>Delete</Button>}

                {userId === props.packUserId &&
                <Button className={style.button}
                        type="primary"
                        disabled={props.disabled}
                        onClick={() => props.openModalWindow('edit',props.id)}>Edit</Button>}
                <Button className={style.button}
                        type="primary"
                        disabled={props.disabled}
                        onClick={() => props.learnHandler(props.id)}
                        value={'Learn'}>Learn</Button>
            </div>
        </div>
    )

}