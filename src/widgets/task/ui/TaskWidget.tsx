import type { Task } from 'entities/task';
import { TaskFilterPanel, TaskList, useTasks } from 'features/taskList';

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Create app, configure FSD like project, configure aliases',
    completed: true,
  },
  { id: '2', title: 'Make entity Task', completed: true },
  {
    id: '3',
    title: 'Make filter (all/completed/incomplete)',
    completed: false,
  },
  { id: '4', title: 'Make remove feature', completed: false },
];
export const TaskWidget = () => {
  const { tasks, filter, setFilter, removeTask } = useTasks(INITIAL_TASKS);
  return (
    <div className="w-lg rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center">
          <TaskFilterPanel filter={filter} onChange={setFilter} />
        </div>
        {tasks.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 p-6 text-center text-sm text-slate-600">
            No tasks found.
          </div>
        ) : (
          <TaskList tasks={tasks} removeAction={removeTask} />
        )}
      </div>
    </div>
  );
};
