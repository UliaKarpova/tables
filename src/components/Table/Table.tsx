import { useSelector } from 'react-redux';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { RootState } from '../../redux/store'
import './Table.css';
import Finder from '../Finder/Finder';

import { DataType, Cell } from '../../types';


function MyTable(props: { name: string }) {
  // получаем данные из хранилища Redux по имени таблицы
  const data = useSelector((state: RootState) => state[props.name]);
  // получаем массив ключей, которые станут заголовком таблицы
  const dataKeys: string[] = data.length !== 0 ? Object.keys(data[0]) : [];

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
        {props.name[0].toUpperCase() + props.name.slice(1)} table</h2>

      <Finder tableName={props.name} />

      <Table
        className='table__table'
        rowKey={'id'}
        columns={columns}
        dataSource={data} />
    </div>

  )
}

export default MyTable;