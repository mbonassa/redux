import reducer from './reducers/root-reducer';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux'
import {loggerMiddleware} from 'redux-logger'

const result = applyMiddleware(loggerMiddleware)

export default createStore(reducer, result);


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
