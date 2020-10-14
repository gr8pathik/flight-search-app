import {createBrowserHistory} from "history";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {routerMiddleware} from "react-router-redux";
import reducers from './reducers'
export const history = createBrowserHistory();

const middleware = applyMiddleware(thunk, routerMiddleware(history));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(middleware));