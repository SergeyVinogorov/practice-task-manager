import {
  TaskEmptyList,
  TaskFilterPanel,
  TaskList,
  useTasks,
} from 'features/taskList';
import { BaseLoading, BaseErrorMessage } from 'shared';

export const TaskWidget = () => {
  const { tasks, filter, setFilter, removeTask, isLoading, isError, error } =
    useTasks();
  const errorMessage =
    error && typeof error === 'object' && 'status' in error
      ? `Request failed (${String(error.status)})`
      : error instanceof Error
        ? error.message
        : null;

  return (
    <div className="w-lg rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center">
          <TaskFilterPanel filter={filter} onChange={setFilter} />
        </div>
        {isLoading ? <BaseLoading /> : null}
        {isError ? <BaseErrorMessage errorMessage={errorMessage} /> : null}
        {!isLoading && !isError ? (
          tasks.length === 0 ? (
            <TaskEmptyList />
          ) : (
            <TaskList tasks={tasks} removeAction={removeTask} />
          )
        ) : null}
      </div>
    </div>
  );
};
