import clsx from 'clsx';

type SpinnerProps = { className?: string };

export function Spinner({ className }: SpinnerProps) {
  return (
    <div className={clsx('spinner', className)}>
      Loading
      <span></span>
    </div>
  );
}
