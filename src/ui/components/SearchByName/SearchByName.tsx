import React, {ChangeEvent, useState,} from 'react';
import s from './SearchByName.module.css'
import {Input} from 'antd';

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
            size="middle" // размер
        />
    );
};

export default SearchByName;