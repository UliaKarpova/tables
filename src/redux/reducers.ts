// импортируем исходные данные
import { users } from "../bd";
import { products } from "../bd";

// импортируем функцию поиска
import findData from './findData';

import { DataType } from '../types';

export const dataReducer = (state: any, action: any) => {
  const bd = action.payload.tableName === 'users' ? users : products;
  const newData: DataType[] = findData(bd, action.payload.searchQuery);
  return {
    ...state,
    [action.payload.tableName]: newData,
  }
}

export const resetReducer = (state: any, action: any) => {
  const bd = action.payload === 'users' ? users : products;
  return {
    ...state,
    [action.payload]: bd,
  }
}