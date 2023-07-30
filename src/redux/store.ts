import { configureStore } from '@reduxjs/toolkit';

import { reducer } from '../components/MyTable/index';

const store = configureStore({ 
  reducer
});

// экспортируем тип для данных их стейта
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;