import React, {ChangeEvent, useEffect, useState} from "react";
import {cardPacksType, createPack, getPacks} from "../../bll/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {SuperCheckbox} from "../components/SuperCheckbox/SuperCheckbox";
import {Pack} from "./pack";

export const Packs = () => {
    const dispatch = useDispatch()
    const [myPacks, setMyPacks] = useState<boolean>(false)
    const packs = useSelector<RootStoreType, Array<cardPacksType>>(state => state.Packs.cardPacks)
    const userId = useSelector<RootStoreType, string>(state => state.Profile._id)
    const packName = ''
    const min = 0
    const max = 9
    const sortPacks = 0
    const page = 1
    const pageCount = 10
    const user_id = myPacks ? userId : ''
    useEffect(() => {
        debugger
        dispatch(getPacks({
            packName, min,
            max, sortPacks,
            page, pageCount,
            user_id
        }))
    }, [myPacks])
    const showOnlyMyPacks = () => {
        setMyPacks(!myPacks)
    }
    const AddNewPackHandler = () => {
        dispatch(createPack({name: 'TEXT'},{
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
                      packUserId={el.user_id}/>
            )}
        </div>
    )

}