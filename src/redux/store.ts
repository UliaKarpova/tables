import { configureStore } from '@reduxjs/toolkit';
import reducer from './slice';

const store = configureStore({
  reducer
});

// экспортируем тип для данных их стейта
export type RootState = ReturnType<typeof store.getState>

export default store;