import {LoginResponseModel} from "../../../../services/login/response";
import {LoginScreenActionType} from "../redux/login-screen-action";

export interface LoginScreenProps {
  name?: string;
  raCpf?: string;
  type?: string;
  token?: string;
  functions?: {
    loginUser: (data: LoginResponseModel, raCpf: string, type: "aluno" | "responsavel") => LoginScreenActionType;
  };
}
