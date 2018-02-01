import * as React from "react";
import { connect } from "react-redux";
import { Board } from "./board";

interface GameProps {
  squares: string[];
  whosNext: string;
  gameWon: boolean;
  winner: string;
}

class GameComponent extends React.Component<GameProps> {
  public render(): JSX.Element {
    let status = "Next player is " + this.props.whosNext;

    if (this.props.gameWon)
      status = "The winner is " + this.props.winner + "!";

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any): GameProps {
  return {
    squares: state.board.squares,
    whosNext: state.board.whosTurn,
    gameWon: state.game.gameIsDone,
    winner: state.game.winner
  };
}

export const Game = connect(mapStateToProps, undefined)(GameComponent);
