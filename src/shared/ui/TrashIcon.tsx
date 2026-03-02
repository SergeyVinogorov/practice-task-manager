import { type FC, memo } from 'react';
interface Props {
  className?: string;
}
export const TrashIcon: FC<Props> = memo(function TrashIcon({
  className,
}: Props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 3h4m-7 3h10m-9 0l1 11h6l1-11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
