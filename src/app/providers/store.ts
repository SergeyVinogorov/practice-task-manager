import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from 'shared';
import { taskListReducer } from 'features/taskList';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    taskList: taskListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
