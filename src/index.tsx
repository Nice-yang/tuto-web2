import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import store from './store';
import { Game } from './components/game';
import './index.css';


class Main extends React.Component<any, any> {
  public render() {
    return (
      <Game />
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, 
  app);
