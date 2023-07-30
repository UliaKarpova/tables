import { createSlice } from '@reduxjs/toolkit';
import { findDataReducer, addDataReducer } from '../../redux/reducers';
import { IDataType } from './types';

const initialState: {
  [key: string]: IDataType[]
} = {};

export const appSlice: any = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    dataFinder: findDataReducer,
    addData: addDataReducer
  }
})

export const { dataFinder, addData } = appSlice.actions;

export const reducer = appSlice.reducer;