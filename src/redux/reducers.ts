import {combineReducers} from "redux";
import {LoginScreenReducer} from "../screens/login/view/redux/login-screen-reducer";
import {LoginScreenProps} from "../screens/login/view/model/login-screen-props";
import AsyncStorage from "@react-native-community/async-storage";
import {persistReducer} from "redux-persist";

export interface StatesReducers {
  loginScreenReducer: LoginScreenProps;
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["functions"],
};

const loginScreenPersistedReducer = persistReducer(persistConfig, LoginScreenReducer);

const reducers = combineReducers({
  loginScreenReducer: loginScreenPersistedReducer,
});

export {reducers};
