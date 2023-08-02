import { PayloadAction } from '@reduxjs/toolkit';
import findData from './findData';
import { IDataType, IPayloadForSeaching, IIdAndData } from './types';
import { RootState } from '../../redux/store';

// ищем данные в по переданной строке
export const findDataReducer = (
  state: RootState,
  action: PayloadAction<IPayloadForSeaching>): RootState => {
  const newData: IDataType[] = findData(
    state.originalData[action.payload.id],
    action.payload.searchQuery
  );
  state.filtredData[action.payload.id] = newData;
}

// сохраняем в стор данные из исходного массива
export const addOriginalDataReducer = (
  state: RootState,
  action: PayloadAction<IIdAndData>): RootState => {
  const { id, data } = action.payload;
  state.originalData[id] = data;
  state.filtredData[id] = data;
}

export const resetDataReducer = (
  state: RootState,
  action: PayloadAction<IIdAndData>): RootState => {
  const { id } = action.payload;
  state.filtredData[id] = state.originalData[id];
}
