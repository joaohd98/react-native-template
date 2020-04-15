import {LoginResponseModel} from "../../../../services/login/response";
import {PropsGlobal} from "../../../../helpers/props-global";

export interface LoginScreenProps extends PropsGlobal<"LoginScreen"> {
  name?: string;
  rmCpf?: string;
  type?: string;
  token?: string;
  functions?: {
    loginUser: (data: LoginResponseModel, rmCpf: string, type: "aluno" | "responsavel", callback: () => void) => void;
  };
}
