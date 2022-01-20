import React, {ChangeEvent, useState} from 'react';
import {Input, Space} from "antd";

type SearchByNameType = {
    setSearchValue: (e:string) => void
}

const SearchByName = ({setSearchValue}:SearchByNameType) => {
    const {Search} = Input // из antd
    const onChangeSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    return (
        <Space direction="vertical">
            <Search
                placeholder="Search"
                onChange={onChangeSearch}
                enterButton
                allowClear // чистка поля
                size="large" // размер
            />
        </Space>
    );
};

export default SearchByName;