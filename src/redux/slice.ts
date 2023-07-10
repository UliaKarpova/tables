import { createSlice } from '@reduxjs/toolkit';

// импортируем исходные данные
import { users } from "../bd";
import { products } from "../bd";

// импортируем функцию поиска
import { dataReducer, resetReducer } from './reducers';

export const appSlice: any = createSlice({
  name: 'appSlice',
  initialState: {
    users,
    products
  },
  reducers: {
    dataFinder: dataReducer,
    resetData: resetReducer
  }
})

export const { dataFinder, resetData } = appSlice.actions;

export default appSlice.reducer;