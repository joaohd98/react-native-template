import {LoginScreenProps} from "../model/login-screen-props";
import {LoginResponseModel} from "../../../../services/login/response";

export enum LoginScreenActionConst {
  SAVE_USER = "LoginScreenActionConst@SAVE_USER",
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
}
