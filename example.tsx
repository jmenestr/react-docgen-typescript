import * as React from 'react';

export enum Color {
  Red,
  Green,
  Black
}
interface Props {
  name: string;
  enumExample: Color;
  function: (stuff: string) => void
}

export const Example: React.SFC<Props> = () => (
  <div>
    Example
  </div>
)