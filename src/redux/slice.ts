import { createSlice } from '@reduxjs/toolkit';
import { findDataReducer, addDataReducer } from './reducers';
import { IDataType } from '../types';

const initialState: IDataType[] | [] = [];

export const appSlice: any = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    dataFinder: findDataReducer,
    addData: addDataReducer
  }
})

export const { dataFinder, addData } = appSlice.actions;

export default appSlice.reducer;