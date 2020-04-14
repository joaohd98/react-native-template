import {LoginScreenProps} from "../model/login-screen-props";
import {LoginScreenAction, LoginScreenActionConst, LoginScreenActionType} from "./login-screen-action";

export const LoginInitialState: LoginScreenProps = {
  functions: {
    loginUser: (data, rmCpf, type) => LoginScreenAction.saveUser(data, rmCpf, type),
  },
};

export const LoginScreenReducer = (state = LoginInitialState, action: LoginScreenActionType): LoginScreenProps => {
  switch (action.type) {
    case LoginScreenActionConst.SAVE_USER: {
      return {
        ...state,
        rmCpf: action.payload?.rmCpf,
        type: action.payload?.type,
        name: action.payload?.name,
        token: action.payload?.token,
      };
    }
    default:
      return state;
  }
};
