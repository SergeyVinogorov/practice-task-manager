import type { FC } from 'react';
import { TaskWidget } from 'widgets/task';

export const TaskPage: FC = () => {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Current tasks
      </h1>

      <div className="mt-6">
        <TaskWidget />
      </div>
    </main>
  );
};
