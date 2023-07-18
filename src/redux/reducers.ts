import { PayloadAction } from '@reduxjs/toolkit';
import findData from './findData';
import { IDataType, IPayloadForSeaching, IIdAndData } from '../types';
import { RootState } from './store';

// ищем данные в по переданной строке
export const findDataReducer = (state: RootState, action: PayloadAction<IPayloadForSeaching>) => {
  const newData: IDataType[] = findData(state[action.payload.id], action.payload.searchQuery);
  return {
    ...state,
    [action.payload.id]: newData,
  }
}

// сохраняем в стор данные из исходного массива
export const addDataReducer = (state: RootState, action: PayloadAction<IIdAndData>) => {
  const { data, id } = action.payload;
  return {
    ...state,
    [id]: data
  }
}
