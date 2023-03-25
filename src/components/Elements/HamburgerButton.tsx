import clsx from 'clsx';

import { useMinWidthMediaQuery } from '@/hooks';

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size?: number;
};

export function HamburgerButton({ isOpen, onClick, className, size = 1 }: HamburgerButtonProps) {
  const isScreenBig = useMinWidthMediaQuery('xs');

  return (
    <button
      className={clsx('relative cursor-pointer flex flex-col justify-between', className)}
      onClick={onClick}
      style={{
        height: (isScreenBig ? 2 : 1.6) * size + 'rem',
        width: (isScreenBig ? 2 : 1.6) * size + 'rem',
      }}
    >
      <span
        className={clsx(
          'h-1/5 bg-main-0 dark:bg-main-reverse-0 block w-full transition-all rounded-lg',
          isOpen && 'absolute top-[40%] rotate-[135deg]'
        )}
      />

      <span
        className={clsx(
          'h-1/5 bg-main-0 dark:bg-main-reverse-0 block w-full rounded-lg',
          isOpen && 'hidden'
        )}
      />

      <span
        className={clsx(
          'h-1/5 bg-main-0 dark:bg-main-reverse-0 block w-full transition-all rounded-lg',
          isOpen && 'absolute top-[40%] -rotate-[135deg]'
        )}
      />
    </button>
  );
}
