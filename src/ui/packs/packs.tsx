import React, {ChangeEvent, useEffect, useState} from "react";
import {cardPacksType, getPacks} from "../../bll/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {SuperCheckbox} from "../components/SuperCheckbox/SuperCheckbox";
import {Pack} from "./pack";

export const Packs = () => {
    const dispatch = useDispatch()
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const packs = useSelector<RootStoreType, Array<cardPacksType>>(state => state.Packs.cardPacks)
    const userId = useSelector<RootStoreType, string>(state => state.Profile._id)
    const packName = ''
    const min = 3
    const max = 9
    const sortPacks = 0
    const page = 1
    const pageCount = 10
    const user_id = rememberMe ? userId : ''
    useEffect(() => {

        dispatch(getPacks({
            packName, min,
            max, sortPacks,
            page, pageCount,
            user_id
        }))
    }, [])
    const showOnlyMyPacks = () => {
        setRememberMe(!rememberMe)
    }

    return (
        <div>
            <SuperCheckbox onChangeChecked={showOnlyMyPacks}
                           disabled={false}
                           checked={rememberMe}>
                remember me
            </SuperCheckbox>
            {packs.map(el =>
                <Pack key={el._id}
                      id={el._id}
                      name={el.name}
                      cards={el.cardsCount}
                      lastUpdated={el.updated}
                      createdBy={el.user_name}/>
            )}
        </div>
    )

}