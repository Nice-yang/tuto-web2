import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/indexReducer';

const middleware = applyMiddleware(createLogger());

export default createStore(rootReducer, middleware);