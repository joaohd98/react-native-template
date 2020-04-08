import {combineReducers} from "redux";
import {LoginScreenReducer} from "../screens/login/view/redux/login-screen-reducer";
import {LoginScreenProps} from "../screens/login/view/model/login-screen-props";
import AsyncStorage from "@react-native-community/async-storage";
import {persistReducer} from "redux-persist";
import {HomeScreenProps} from "../screens/home/view/model/home-screen-props";
import {HomeScreenReducer} from "../screens/home/view/redux/home-screen-reducer";

export interface StatesReducers {
  loginScreenReducer: LoginScreenProps;
  homeScreenReducer: HomeScreenProps;
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["functions"],
};

const loginScreenPersistedReducer = persistReducer(persistConfig, LoginScreenReducer);

const reducers = combineReducers({
  loginScreenReducer: loginScreenPersistedReducer,
  homeScreenReducer: HomeScreenReducer,
});

export {reducers};
