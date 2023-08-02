import React, { useContext, useState } from 'react';
import { Button, Input, Space } from 'antd';

import { TableContext } from './TableContext';
import { useAppDispatch } from '../../redux/hook';
import { dataFinder, resetData } from './slice';

const { Search } = Input;

export const Finder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [myTimeout, setMyTimeout] = useState<NodeJS.Timeout | null>(null);

  const dispatch = useAppDispatch();

  const { id } = useContext(TableContext);
  
  // поиск данных
  const findData = () => {
    if (searchQuery) {
      setMyTimeout(setTimeout(() => {
        dispatch(dataFinder({ id, searchQuery }))
      }, 1000))
    } else {
      alert('Please, enter a search value');
    }
  }

  // сбрасываем данные до изначальных после поиска
  const resetTable = () => {
    setSearchQuery('');
    dispatch(resetData({ id }));
  }

  // обновляем поисковкую строку, обнуляем таймер поиска, если измениласть строка
  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (myTimeout) {
      clearTimeout(myTimeout);
      setMyTimeout(null);
    }
    setSearchQuery(e.target.value);
  }

  return (
    <Space
      style={{
        'margin': '15px'
      }}
      direction="horizontal">

      <Search
        className='space__search'
        placeholder="input search text"
        value={searchQuery}
        onSearch={findData}
        enterButton="Search"
        onChange={onChangeQuery}
      />

      <Button 
        className='space__btn-reset' 
        type="primary" 
        onClick={resetTable} danger>
        Reset
      </Button>
    </Space>
  );
}

