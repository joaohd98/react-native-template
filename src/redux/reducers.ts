import {combineReducers} from "redux";
import {LoginScreenReducer} from "../screens/login/view/redux/login-screen-reducer";
import {LoginScreenProps} from "../screens/login/view/model/login-screen-props";

export interface StatesReducers {
  loginScreenReducer: LoginScreenProps;
}

const reducers = combineReducers({
  loginScreenReducer: LoginScreenReducer,
});

export {reducers};
