import React, {ChangeEvent, useState,} from 'react';
import s from './SearchByName.module.css'
import {Input} from 'antd';
import {useDispatch} from "react-redux";
import {getPacks} from "../../../bll/packsReducer";

type SearchByNameType = {
    onChangeSearch:(e: ChangeEvent<HTMLInputElement>)=>void
}

const SearchByName = ({onChangeSearch}: SearchByNameType) => {
    return (
        <Input
            className={s.input}
            placeholder="Search"
            onChange={onChangeSearch}
            allowClear // чистка поля
            size="large" // размер
        />
    );
};

export default SearchByName;