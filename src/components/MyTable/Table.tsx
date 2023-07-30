import { useAppDispatch, useAppSelector } from '../../redux/hook';
import React, { useEffect, useMemo } from 'react';
import { useContext } from 'react';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { TableContext } from './TableContext';

import { addData } from './slice'
import { IDataType, ICell } from './types';

import './Table.css';

export const MyTable: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const dispatch = useAppDispatch();

  // получаем из контекста начальные данные для отрисовки таблицы и id
  const tableContext = useContext(TableContext);
  const { id, data } = tableContext;

  // сохраняем данные в стор
  useEffect(() => {
    if (data) {
      dispatch(addData({ data, id }));
    }
  }, [data, id, dispatch])

  // получаем данные из стора
  const tableStore = useAppSelector(state => state[id!]);  

  // создаём колонки для antd
  const columns: ColumnsType<IDataType> = useMemo(() => {
    const dataKeys: string[] = data.length !== 0 ? Object.keys(data[0]) : [];
    return dataKeys ? dataKeys.map((key) => {
      const cell: ICell = {
        title: key[0].toUpperCase() + key.slice(1),
        dataIndex: key,
        key: key
      }
      return cell;
    }) : []
  }, [data])

  return (
    <div className='table'>
      <h2
        className='table__title'>
        Table</h2>

      {children}
      
      <Table
        className='table__table'
        rowKey={'id'}
        columns={columns}
        dataSource={tableStore ? tableStore : data} />
    </div>    
  )
}
