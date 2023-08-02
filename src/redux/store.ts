import { configureStore } from '@reduxjs/toolkit';

import { tableReducer } from '../components/MyTable/index';

const store = configureStore({ 
  reducer: tableReducer
});

// экспортируем тип для данных их стейта
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;