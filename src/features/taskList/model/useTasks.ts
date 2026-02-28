import type { Task } from 'entities/task/model/types';
import { useCallback, useMemo, useState } from 'react';

export type Filter = 'all' | 'completed' | 'incomplete';

type UseTasks = (initial: Task[]) => {
  tasks: Task[];
  filter: Filter;
  setFilter: (f: Filter) => void;
  removeTask: (id: string) => void;
};

export const useTasks: UseTasks = (initial: Task[]) => {
  const [allTasks, setAllTasks] = useState<Task[]>(initial);
  const [filter, setFilter] = useState<Filter>('all');

  const tasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return allTasks.filter((t) => t.completed);
      case 'incomplete':
        return allTasks.filter((t) => !t.completed);
      default:
        return allTasks;
    }
  }, [allTasks, filter]);

  const onRemoveTask = useCallback((id: string) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return {
    tasks,
    filter,
    setFilter,
    removeTask: onRemoveTask,
  };
};
