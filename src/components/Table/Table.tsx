import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { useState, useEffect } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { addData, dataFinder } from '../../redux/slice'
import Finder from '../Finder/Finder';
import { IDataType, ICell, IIdAndData } from '../../types';

import './Table.css';

const MyTable: React.FC<IIdAndData> = ({ id, data }) => {

  // создаём стейт для хранения поискового запроса
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dispatch = useAppDispatch();

  // сохраняем данные в стор
  useEffect(() => {
    if (data) {
      dispatch(addData({ data, id }));
    }
  }, [])

  // получаем данные из стора
  const tableStore = useAppSelector(state => state[id]);

  // ищём данные в таблице при сабмите инпута поиска
  const findData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      const timeout = setTimeout(() => {
        dispatch(dataFinder({ id, searchQuery }))
        clearTimeout(timeout);
      }, 1000)
    } else {
      alert('Please, enter a search value');
    }
  }

  // сбрасываем данные до изначальных после поиска
  const resetTable = () => {
    setSearchQuery('');
    dispatch(addData({ id, data }));
  }

  // получаем массив ключей, которые станут заголовком таблицы
  const dataKeys: string[] = data.length !== 0 ? Object.keys(data[0]) : [];

  // создаём колонки для antd
  const columns: ColumnsType<IDataType> = dataKeys ? dataKeys.map((key) => {
    const cell: ICell = {
      title: key[0].toUpperCase() + key.slice(1),
      dataIndex: key,
      key: key
    }
    return cell;
  }) : []

  return (
    <div className='table'>
      <h2
        className='table__title'>
        table</h2>

      <Finder
        reset={resetTable}
        onSubmit={findData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} />

      <Table
        className='table__table'
        rowKey={'id'}
        columns={columns}
        dataSource={tableStore ? tableStore : data} />
    </div>

  )
}

export default MyTable;
