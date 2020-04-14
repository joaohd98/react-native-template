import {combineReducers} from "redux";
import {LoginScreenReducer} from "../screens/login/view/redux/login-screen-reducer";
import {LoginScreenProps} from "../screens/login/view/model/login-screen-props";
import AsyncStorage from "@react-native-community/async-storage";
import {persistReducer} from "redux-persist";
import {HomeScreenProps} from "../screens/home/view/model/home-screen-props";
import {HomeScreenReducer} from "../screens/home/view/redux/home-screen-reducer";
import {LoginScreenActionConst} from "../screens/login/view/redux/login-screen-action";

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

const rootReducers = combineReducers({
  loginScreenReducer: loginScreenPersistedReducer,
  homeScreenReducer: HomeScreenReducer,
});

const reducers = (state, action) => {
  if (action.type === LoginScreenActionConst.LOGOUT_USER) {
    state = undefined;
  }

  return rootReducers(state, action);
};

export {reducers};
