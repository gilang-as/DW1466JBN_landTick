import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "../middleware";

import auth from "../_reducers/Auth";
import profile from "../_reducers/Profile";
import train from "../_reducers/Train";
import route from "../_reducers/Route";
import user from "../_reducers/User";
import station from "../_reducers/Station";
import ticket from "../_reducers/Ticket";
import transaction from "../_reducers/Transaction";

// Global state
const rootReducers = combineReducers({
  auth,
  profile,
  train,
  route,
  user,
  station,
  ticket,
  transaction
});

// Setup store for Redux
const Store = createStore(rootReducers, applyMiddleware(logger, promise));

export default Store;
