import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { addData, dataFinder } from '../../redux/slice'
import type { RootState } from '../../redux/store'
import Finder from '../Finder/Finder';
import { DataType, Cell } from '../../types';

import './Table.css';

function MyTable(props:
  {
    id: string,
    data: DataType[]
  }) {

  // создаём стейт для хранения поискового запроса
  const [searchQuery, setSearchQuery] = useState<string>('');

  const dispatch = useDispatch();

  // сохраняем данные в стор
  useEffect(() => {
    if (props.data) {
      dispatch(addData({ data: props.data, id: props.id }));
    }
  }, [])

  // получаем данные из стора
  const tableStore = useSelector((state: RootState) => state[props.id]);

  // ищём данные в таблице при сабмите инпута поиска
  const findData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery) {
      const timeout = setTimeout(() => {
        dispatch(dataFinder({ id: props.id, searchQuery: searchQuery }))
        clearTimeout(timeout);
      }, 1000)
    } else {
      alert('Please, enter a search value');
    }
  }

  // сбрасываем данные до изначальных после поиска
  const resetTable = () => {
    setSearchQuery('');
    dispatch(addData({ id: props.id, data: props.data }));
  }

  // получаем массив ключей, которые станут заголовком таблицы
  const dataKeys: string[] = props.data.length !== 0 ? Object.keys(props.data[0]) : [];

  // создаём колонки для antd
  const columns: ColumnsType<DataType> = dataKeys ? dataKeys.map((key) => {
    const cell: Cell = {
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
        dataSource={tableStore ? tableStore : props.data} />
    </div>

  )
}

export default MyTable;
