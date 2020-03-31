import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";
import logger from "redux-logger";
import {reducers} from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export {store, persistor};
