import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "../reducers/index";
// import {routerMiddleware} from "react-router-redux";
import { routerMiddleware } from 'connected-react-router';
// import createHistory from "history/createBrowserHistory";
import { createBrowserHistory } from 'history';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";
import thunk from 'redux-thunk';

// const history = createHistory();
export const history = createBrowserHistory();
// const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

// const middlewares = [thunk,sagaMiddleware, routeMiddleware];
const middlewares = [thunk, sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  const store = createStore(
    createRootReducer(history), 
    initialState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        ...middlewares
      )
    )
  );

  sagaMiddleware.run(rootSaga);

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers/index', (history) => {
  //     const nextRootReducer = require('../reducers/index');
  //     store.replaceReducer(nextRootReducer(history));
  //   });
  // }
  return store;
}
// export {history};
