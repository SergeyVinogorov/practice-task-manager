import type { FC } from 'react';
import clsx from 'clsx';
import { CheckIcon } from 'entities/task/ui/CheckIcon';

const cardStyles = {
  row: 'flex items-start gap-2',
  text: 'text-sm font-semibold leading-5',
  done: 'text-gray-400 line-through',
  active: 'text-gray-900',
  card: {
    base: 'rounded-xl border p-4 shadow-sm transition grow-2',
    done: 'bg-gray-50 opacity-80',
    active: 'bg-white hover:shadow',
  },
};

interface Props {
  title: string;
  isComplete: boolean;
}

export const TaskCard: FC<Props> = ({ title, isComplete }) => {
  return (
    <div
      className={clsx(
        cardStyles.card.base,
        isComplete ? cardStyles.card.done : cardStyles.card.active
      )}
    >
      <div className={cardStyles.row}>
        {isComplete && (
          <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
        )}
        <h3
          className={clsx(
            cardStyles.text,
            isComplete ? cardStyles.done : cardStyles.active
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
