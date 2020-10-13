import {createBrowserHistory} from "history";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {routerMiddleware} from "react-router-redux";
import reducers from './reducers'
export const history = createBrowserHistory();

const middleware = applyMiddleware(thunk, routerMiddleware(history));

export const store = createStore(reducers, middleware);