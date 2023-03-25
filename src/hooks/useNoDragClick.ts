import { MouseEventHandler, PointerEventHandler, useRef } from 'react';

import { objectEntriesTyped } from '@/utility';

interface NoDragClickProps<T> {
  func: Function;
  maxDistance?: number;
  extendedEvents?: {
    onPointerLeave?: PointerEventHandler<T>;
    onPointerDown?: PointerEventHandler<T>;
    onPointerMove?: PointerEventHandler<T>;
    onPointerUp?: PointerEventHandler<T>;
    onClick?: MouseEventHandler<T>;
  };
}

// A hook that prevents a click event from firing when the pointer was dragged for maxDistance

export function useNoDragClick<T>({ func, maxDistance = 3, extendedEvents }: NoDragClickProps<T>) {
  const movedDistance = useRef(Infinity);

  type EventsTypes = {
    onPointerLeave: PointerEventHandler<T>;
    onPointerDown: PointerEventHandler<T>;
    onPointerMove: PointerEventHandler<T>;
    onPointerUp: PointerEventHandler<T>;
    onClick: MouseEventHandler<T>;
  };

  const events: EventsTypes = {
    onPointerLeave: (e) => (movedDistance.current = Infinity),
    onPointerDown: (e) => (movedDistance.current = 0),
    onPointerMove: (e) => (movedDistance.current += Math.sqrt(e.movementX ** 2 + e.movementY ** 2)),
    onPointerUp: (e) => {
      if (movedDistance.current < maxDistance) func();
      movedDistance.current = Infinity;
    },
    onClick: (e) => e.preventDefault(),
  };

  if (extendedEvents) {
    objectEntriesTyped(extendedEvents).forEach(([event, func]) => {
      if (!func) return;

      const defaultFunc = { ...events }[event];
      // Was spending too much types on a solution on how to type e here
      events[event] = (e: any) => {
        defaultFunc(e);
        func(e);
      };
    });
  }

  return events;
}
