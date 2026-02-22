import type { FC } from 'react';
import { type Task, TaskCard } from 'entities/task';
import { ActionButton } from 'shared/ui/ActionButton';
import { TrashIcon } from 'shared/ui/TrashIcon';

interface Props {
  tasks: Task[];
  removeAction: (id: string) => void;
}

export const TaskList: FC<Props> = ({ tasks, removeAction }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2">
          <TaskCard title={task.title} isComplete={task.completed} />
          <ActionButton
            variant="button"
            tone="danger"
            onClick={() => removeAction(task.id)}
          >
            <TrashIcon className="h-4 w-4" />
            Delete
          </ActionButton>
        </li>
      ))}
    </ul>
  );
};
