import React, {ChangeEvent, useState} from 'react';
import {Input, Space} from "antd";
import s from './SearchByName.module.css'

type SearchByNameType = {
    setSearchValue: (e:string) => void
}

const SearchByName = ({setSearchValue}:SearchByNameType) => {
    const onChangeSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
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