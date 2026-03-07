import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTasksQuery } from 'entities/task';
import {
  type Filter,
  setFilter as setFilterAction,
  deleteTaskLocally,
} from './taskListSlice.ts';
import { selectFilter, selectVisibleTasks } from './selectors';

type UseTasks = () => {
  tasks: ReturnType<typeof selectVisibleTasks>;
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: number) => void;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

export const useTasks: UseTasks = () => {
  const { isLoading, isError, error } = useGetTasksQuery();
  const tasks = useSelector(selectVisibleTasks);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setFilter = useCallback(
    (f: Filter) => {
      dispatch(setFilterAction(f));
    },
    [dispatch]
  );

  const removeTask = useCallback(
    (id: number) => {
      dispatch(deleteTaskLocally(id));
    },
    [dispatch]
  );

  return { tasks, filter, setFilter, removeTask, isLoading, isError, error };
};
