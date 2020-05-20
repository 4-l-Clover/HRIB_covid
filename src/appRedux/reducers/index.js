import { combineReducers } from "redux";
// import {routerReducer} from "react-router-redux";
import { connectRouter } from 'connected-react-router';
import Settings from "./Settings";
import Auth from "./Auth";

const createRootReducer = (history) => combineReducers({
  // routing: routerReducer,
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
});

export default createRootReducer;
