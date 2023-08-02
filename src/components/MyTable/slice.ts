import { createSlice } from '@reduxjs/toolkit';
import {
  findDataReducer,
  addOriginalDataReducer,
  resetDataReducer
} from './reducers';
import { IDataType } from './types';

const initialState: {
  filtredData: {
    [key: string]: IDataType[]
  },
  originalData: {
    [key: string]: IDataType[]
  },
} = { filtredData: {}, originalData: {} };

export const appSlice: any = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    dataFinder: findDataReducer,
    addOriginalData: addOriginalDataReducer,
    resetData: resetDataReducer
  }
})

export const { dataFinder,
  addOriginalData,
  resetData } = appSlice.actions;

export const tableReducer = appSlice.reducer;