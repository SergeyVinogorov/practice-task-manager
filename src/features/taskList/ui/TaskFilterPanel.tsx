import clsx from 'clsx';
import type { Filter } from 'features/taskList';
import { ActionButton } from 'shared';
import type { FC } from 'react';
interface Props {
  filter: Filter;
  onChange: (v: Filter) => void;
  className?: string;
}

interface Filters {
  id: Filter;
  label: string;
}
const FILTERS: Filters[] = [
  { id: 'all', label: 'All' },
  { id: 'completed', label: 'Completed' },
  { id: 'incomplete', label: 'Incomplete' },
];

export const TaskFilterPanel: FC<Props> = ({ onChange, className, filter }) => {
  return (
    <div className={clsx('flex gap-2', className)}>
      {FILTERS.map((element) => {
        return (
          <ActionButton
            key={element.id}
            variant="chip"
            active={element.id === filter}
            onClick={() => onChange(element.id)}
          >
            {element.label}
          </ActionButton>
        );
      })}
    </div>
  );
};
