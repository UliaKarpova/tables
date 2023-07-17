import findData from './findData';
import { DataType } from '../types';

// ищем данные в по переданной строке
export const findDataReducer = (state: any, action: any) => {
  const newData: DataType[] = findData(state[action.payload.id], action.payload.searchQuery);
  return {
    ...state,
    [action.payload.id]: newData,
  }
}

// сохраняем в стор данные из исходного массива
export const addDataReducer = (state: any, action: any) => {
  const { data, id } = action.payload;
  return {
    ...state,
    [id]: data
  }
}
