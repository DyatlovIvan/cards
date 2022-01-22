import React, {ChangeEvent, useState,} from 'react';
import s from './SearchByName.module.css'
import {Input} from 'antd';
import debounce from 'lodash/debounce';

type SearchByNameType = {
    setSearchValue:(e:string)=> void
}
const SearchByName = ({setSearchValue}: SearchByNameType) => {
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const debouncedOnChang = debounce(onChangeSearch,600)
    return (
        <Input
            className={s.input}
            placeholder="Search"
            onChange={debouncedOnChang}
            allowClear // чистка поля
            size="large" // размер
        />
    )
}
export default SearchByName;