import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Filter = 'all' | 'completed' | 'incomplete';

export interface TaskListState {
  filter: Filter;
  locallyDeletedIds: number[];
}

const initialState: TaskListState = {
  filter: 'all',
  locallyDeletedIds: [],
};

const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
    deleteTaskLocally(state, action: PayloadAction<number>) {
      state.locallyDeletedIds.push(action.payload);
    },
    resetDeleted(state) {
      state.locallyDeletedIds = [];
    },
  },
});

export const { setFilter, deleteTaskLocally, resetDeleted } =
  taskListSlice.actions;

export default taskListSlice.reducer;
