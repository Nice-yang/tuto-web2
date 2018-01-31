import * as React from 'react';
import { connect } from 'react-redux';
import { Board } from './board';
import { gameWon } from '../actions/gameActions';
import store from '../store';

interface GameProps {
  squares: string[];
  whosNext: string;
  gameWon: boolean;
  winner: string;
}

class Game_ extends React.Component<GameProps> {
  public render() {
    let status = 'Next player is ' + this.props.whosNext;

    if (this.props.gameWon)
      status = 'The winner is ' + this.props.winner + '!';

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

const mapStateToProps = (state): GameProps => {
  return {
    squares: state.board.squares,
    whosNext: state.board.whosTurn,
    gameWon: state.game.gameIsDone,
    winner: state.game.winner
  };
}

export const Game = connect(mapStateToProps, undefined)(Game_);