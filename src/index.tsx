import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Game} from './components/game';
import './index.css';


class Main extends React.Component<any, any> {
  public render() {
    return (
      <Game />
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Main />  , app);
