import * as React from "react";
import { connect } from "react-redux";
import { Square } from "./square";
import { updateSquares } from "../actions/boardActions";
import { gameWon } from "../actions/gameActions";
import store from "../store";

interface BoardProps {
  squares: string[];
  whosTurn: string;
  gameWon: boolean;
}

class BoardComponent extends React.Component<BoardProps> {
    public render(): JSX.Element {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }

    private renderSquare(i: number): JSX.Element {
      return (
        <Square
          value={this.props.squares[i]}
          onSquareClick={() => this.clickOnSquare(i)}
        />
      );
    }

    private clickOnSquare(i: number): void {
      if (this.props.gameWon)
        return;

      const squares = this.props.squares.slice();
      squares[i] = this.props.whosTurn;
      store.dispatch(updateSquares(squares));

      this.checkIfSomeoneWon(squares);
    }

    private checkIfSomeoneWon(squares: string[]): void {
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

    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] !== "" && squares[a] === squares[b] && squares[a] === squares[c])
        store.dispatch(gameWon(squares[a]));
    }
  }
}

function mapStateToProps(state: any): BoardProps {
  return {
    squares: state.board.squares,
    whosTurn: state.board.whosTurn,
    gameWon: state.game.gameIsDone
  };
}

export const Board = connect(mapStateToProps, undefined)(BoardComponent);
