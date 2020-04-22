import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";
import logger from "redux-logger";
import {reducers} from "./reducers";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};
