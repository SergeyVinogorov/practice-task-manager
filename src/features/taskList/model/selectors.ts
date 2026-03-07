import { createSelector } from '@reduxjs/toolkit';
import { tasksApi } from 'entities/task/api/tasksApi';
import type { Filter, TaskListState } from './taskListSlice';

type TaskApiCacheState = {
  [K in typeof tasksApi.reducerPath]: ReturnType<typeof tasksApi.reducer>;
};

export type TaskListSelectorState = TaskApiCacheState & {
  taskList: TaskListState;
};

const selectTasksQueryResult = tasksApi.endpoints.getTasks.select();

export const selectFilter = (state: TaskListSelectorState): Filter =>
  state.taskList.filter;

export const selectLocallyDeletedIds = (state: TaskListSelectorState) =>
  state.taskList.locallyDeletedIds;

export const selectVisibleTasks = createSelector(
  [selectTasksQueryResult, selectFilter, selectLocallyDeletedIds],
  (tasksResult, filter, deletedIds) => {
    const tasks = tasksResult.data ?? [];

    const filtered =
      filter === 'completed'
        ? tasks.filter((t) => t.completed)
        : filter === 'incomplete'
          ? tasks.filter((t) => !t.completed)
          : tasks;

    return filtered.filter((t) => !deletedIds.includes(t.id));
  }
);
