import * as React from 'react';

export interface SquareProps {
    onClick: any;
    value: string;
}

type State = {
  xOrO: string;
}

export class Square extends React.Component<SquareProps, State> {
    public render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {}
        </button>
      );
    }
  }