import React, { useMemo } from 'react';
import { useContext } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { useAppSelector } from '../../redux/hook';
import { TableContext } from './TableContext';
import { IDataType, ICell } from './types';

import './Table.css';

export const MyTable: React.FC<{ children?: JSX.Element }> = ({ children }) => {

  // получаем из контекста id
  const { id } = useContext(TableContext);

  // получаем данные из стора
  const tableStore = useAppSelector(state => state.filtredData[id!]);

  //создаём колонки для antd
  const columns: ColumnsType<IDataType> = useMemo(() => {
    if (tableStore) {
      const dataKeys: string[] = tableStore.length !== 0 ? Object.keys(tableStore[0]) : [];
      return dataKeys ? dataKeys.map((key) => {
        const cell: ICell = {
          title: key[0].toUpperCase() + key.slice(1),
          dataIndex: key,
          key: key
        }
        return cell;
      }) : []
    } else return []
  }, [tableStore])

  return (
    <div className='table'>
      <h2
        className='table__title'>
        Table</h2>

      {children && children}  
      
      <Table
        className='table__table'
        rowKey={'id'}
        columns={columns}
        dataSource={tableStore} />
    </div>    
  )
}
