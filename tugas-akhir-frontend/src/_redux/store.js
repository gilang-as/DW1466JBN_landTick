import { createStore, combineReducers, applyMiddleware } from "redux";

import auth from "../_reducers/Auth";
import user from "../_reducers/User";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  auth,
  user
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
