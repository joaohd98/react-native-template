import {FormInput} from "../../../../validation/form-input";
import {ServiceStatus} from "../../../../services/model";

export interface LoginScreenState {
  rmCpf: FormInput;
  password: FormInput;
  status: ServiceStatus;
}
