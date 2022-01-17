import React, {useEffect, useState} from "react";
import {cardPacksType, createPack, deletePack, getPacks, updatePack} from "../../bll/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {SuperCheckbox} from "../components/SuperCheckbox/SuperCheckbox";
import {Pack} from "./pack";
import {RequestStatusType} from "../../bll/AppReducer";



export const Packs = () => {
    const dispatch = useDispatch()
    const [myPacks, setMyPacks] = useState<boolean>(false)
    const packs = useSelector<RootStoreType, Array<cardPacksType>>(state => state.Packs.cardPacks)
    const userId = useSelector<RootStoreType, string>(state => state.Profile._id)
    const status = useSelector<RootStoreType, RequestStatusType>(state => state.App.status)
    const disabled = status === 'loading';
    const packName = ''
    const min = 0
    const max = 9
    const sortPacks = 0
    const page = 1
    const pageCount = 10
    const user_id = myPacks ? userId : ''

    const params ={
        packName, min,
        max, sortPacks,
        page, pageCount,
        user_id
    }
    useEffect(() => {
        dispatch(getPacks(params))
    }, [myPacks])

    const showOnlyMyPacks = () => {
        setMyPacks(!myPacks)
    }
    const AddNewPackHandler = () => {
        dispatch(createPack({name: 'TEXT'},params))
    }
    const deletePackHandler = (id:string)=> {
        dispatch(deletePack(id, params))
    }

    const updatePackHandler = (id:string)=> {
        dispatch(updatePack({_id:id,name:'newTest'}, {
            packName, min,
            max, sortPacks,
            page, pageCount,
            user_id
        }))
    }
    return (
        <div>
            <SuperCheckbox onChangeChecked={showOnlyMyPacks}
                           disabled={false}
                           checked={myPacks}>
                my packs
            </SuperCheckbox>
            <button onClick={AddNewPackHandler}>Add new pack</button>
            {packs.map(el =>
                <Pack key={el._id}
                      id={el._id}
                      name={el.name}
                      cards={el.cardsCount}
                      lastUpdated={el.updated}
                      createdBy={el.user_name}
                      packUserId={el.user_id}
                      disabled ={disabled}
                      deletePackHandler = {deletePackHandler}
                      updatePackHandler = {updatePackHandler}/>
            )}
        </div>
    )

}