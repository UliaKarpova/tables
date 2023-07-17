import { configureStore } from '@reduxjs/toolkit';

import tableSlice from './slice';

const store = configureStore({ 
  reducer: tableSlice
});

// экспортируем тип для данных их стейта
export type RootState = ReturnType<typeof store.getState>

export default store;