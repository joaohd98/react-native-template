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
const {waitExecuteMethod} = Helpers;

export class LoginScreenAction {
  static saveUser = (data: LoginResponseModel, rmCpf: string, type: userType, callback: () => void) => dispatch => {
    dispatch({
      type: LoginScreenActionConst.SAVE_USER,
      payload: {
        rmCpf,
        type,
        name: data.nome,
        token: data.token,
      },
    });

    waitExecuteMethod(() => callback(), 500);
  };

  static logoutUser = (callback: () => void) => dispatch => {
    callback();
    Helpers.waitExecuteMethod(() => dispatch({type: LoginScreenActionConst.LOGOUT_USER}), 500);
  };
}
