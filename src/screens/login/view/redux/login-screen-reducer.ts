import {LoginScreenProps} from "../model/login-screen-props";
import {LoginScreenActionType} from "./login-screen-action";

export const LoginInitialState: LoginScreenProps = {
  functions: {},
};

export const LoginScreenReducer = (state = LoginInitialState, action: LoginScreenActionType): LoginScreenProps => {
  switch (action.type) {
    default:
      return state;
  }
};
