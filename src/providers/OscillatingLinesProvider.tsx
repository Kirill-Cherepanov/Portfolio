import { createContext, useState, Dispatch, SetStateAction } from 'react';

import { OscillatingLineCanvas } from './OscillatingLinesCanvas';

export type LineType = {
  width: number;
  length: number;
  x: number;
  y: number;
};

export const OscillatingLinesContext = createContext<
  [LineType[], Dispatch<SetStateAction<LineType[]>>]
>([[], () => {}]);

type OscillatingLinesProviderType = {
  children: JSX.Element;
};

export function OscillatingLinesProvider({ children }: OscillatingLinesProviderType) {
  const linesState = useState<LineType[]>([]);

  return (
    <OscillatingLinesContext.Provider value={linesState}>
      <OscillatingLineCanvas />
      {children}
    </OscillatingLinesContext.Provider>
  );
}
