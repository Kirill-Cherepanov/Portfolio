import { useEffect, useRef } from 'react';

export function usePreviousValue<T>(value: T) {
  const previousValue = useRef<T>();

  useEffect(() => {
    if (
      (value !== undefined && previousValue.current !== value) ||
      previousValue.current === undefined
    ) {
      previousValue.current = value;
    }
  }, [value]);

  return previousValue;
}
