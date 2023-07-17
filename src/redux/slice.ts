import { createSlice } from '@reduxjs/toolkit';

import { findDataReducer, addDataReducer } from './reducers';

export const appSlice: any = createSlice({
  name: 'appSlice',
  initialState: [],
  reducers: {
    dataFinder: findDataReducer,
    addData: addDataReducer
  }
})

export const { dataFinder, addData } = appSlice.actions;

export default appSlice.reducer;