import * as React from 'react';
import {Board} from './board';


export class Game extends React.Component<any, any> {
  public constructor(props) {
    super(props);
    const squaresValue:string[] = new Array<string>(9);

    this.state = {
      history: [{
        squares: squaresValue,
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  public render() {
    const winner = this.checkIfSomeoneWon();
    let status:string = 'Next player: ' + this.whosNext();

    const history = this.state.history;
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';

      const moveNo = move ? move : 0;
      return (
        <li key={moveNo}>
          <button onClick={() => this.jumpTo(moveNo)}>{desc}</button>
        </li>
      );
    });

    if (winner) {
      status = 'The winner is ' + winner + '!';
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={this.getLastMoveState()}
            onClick={(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  private jumpTo(i) {
    this.setState({
      stepNumber: i,
      xIsNext: (i % 2) === 0,
    });
  }

  private handleClick(i) {
    if (this.getLastMoveState()[i] !== undefined || this.checkIfSomeoneWon())
      return;

    const squares = this.getLastMoveState().slice();
    squares[i] = this.whosNext();
    
    const history = this.state.history;
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  private whosNext() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  private checkIfSomeoneWon() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const squares = this.getLastMoveState();
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }

    return null;
  }

  private getLastMoveState() {
    return this.state.history[this.state.stepNumber].squares;
  }
}