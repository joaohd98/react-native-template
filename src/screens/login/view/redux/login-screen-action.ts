import {LoginScreenProps} from "../model/login-screen-props";
import {LoginResponseModel} from "../../../../services/login/response";
import {Helpers} from "../../../../helpers/helpers";

export enum LoginScreenActionConst {
  SAVE_USER = "LoginScreenActionConst@SAVE_USER",
  LOGOUT_USER = "LoginScreenActionConst@LOGOUT_USER",
}

export interface LoginScreenActionType {
  type?: LoginScreenActionConst;
  payload?: LoginScreenProps;
}

type userType = "aluno" | "responsavel";

export class LoginScreenAction {
  static saveUser = (data: LoginResponseModel, rmCpf: string, type: userType): LoginScreenActionType => ({
    type: LoginScreenActionConst.SAVE_USER,
    payload: {
      name: data.nome,
      rmCpf: rmCpf,
      token: data.token,
      type,
    },
  });

  static logoutUser = (callback: () => void) => dispatch => {
    callback();
    Helpers.waitExecuteMethod(() => dispatch({type: LoginScreenActionConst.LOGOUT_USER}), 500);
  };
}
