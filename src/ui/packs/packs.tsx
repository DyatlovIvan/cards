import React, {useEffect, useState} from "react";
import {cardPacksType, createPack, deletePack, getPacks, updatePack} from "../../bll/packsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../bll/store";
import {SuperCheckbox} from "../components/SuperCheckbox/SuperCheckbox";
import {Pack} from "./pack";
import {RequestStatusType} from "../../bll/AppReducer";
import {useNavigate} from "react-router-dom";
import 'antd/dist/antd.css';
import {Table,Pagination} from 'antd';


export const Packs = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [myPacks, setMyPacks] = useState<boolean>(false)

    const [minValue,setMinValue]= useState<number>(0) //
    const [maxValue,setMaxValue]= useState<number>(5) //

    const packs = useSelector<RootStoreType, Array<cardPacksType>>(state => state.Packs.cardPacks)
    const userId = useSelector<RootStoreType, string>(state => state.Profile._id)
    const status = useSelector<RootStoreType, RequestStatusType>(state => state.App.status)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Cards count',
            dataIndex: 'cardsCount',
            key: 'cardsCount',
        },
        {
            title: 'LastUpdated',
            dataIndex: 'updated',
            key: 'updated',
        },
        {
            title: 'CreatedBy',
            dataIndex: 'user_name',
            key: 'user_name',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
        }
    ]

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
    const learnHandler = (id: string) => {
        navigate(`/cards/${id}`)
    }
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
            <SuperCheckbox onChangeChecked={showOnlyMyPacks}
                           disabled={false}
                           checked={myPacks}>
                my packs
            </SuperCheckbox>
            <button onClick={AddNewPackHandler}>Add new pack</button>
            {packs && packs.length > 0 &&
                packs.slice(minValue, maxValue).map(el =>
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

            <Pagination
                defaultCurrent={1}
                defaultPageSize={5}
                onChange={handleChange}
                total={pageCount} />

        </div>
    )

}