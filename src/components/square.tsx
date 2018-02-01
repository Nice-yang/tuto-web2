import * as React from "react";

export interface SquareProps {
    value: string;
    onSquareClick(): void;
}

export class Square extends React.Component<SquareProps> {

  public render(): JSX.Element {
    return (
      <button className="square" onClick={() => this.onClick()}>
        {this.props.value}
      </button>
    );
  }

  private onClick(): void {
    if (!this.props.value)
      this.props.onSquareClick();
  }
}
