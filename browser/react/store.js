import reducer from './reducers/root-reducer';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

const result = applyMiddleware(loggerMiddleware)
const thunk = applyMiddleware(thunkMiddleware)

export default createStore(reducer, result, thunk);


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
