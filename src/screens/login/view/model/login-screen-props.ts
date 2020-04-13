import {LoginResponseModel} from "../../../../services/login/response";
import {LoginScreenActionType} from "../redux/login-screen-action";
import {PropsGlobal} from "../../../../helpers/props-global";

export interface LoginScreenProps extends PropsGlobal<"LoginScreen"> {
  name?: string;
  raCpf?: string;
  type?: string;
  token?: string;
  functions?: {
    loginUser: (data: LoginResponseModel, raCpf: string, type: "aluno" | "responsavel") => LoginScreenActionType;
  };
}
