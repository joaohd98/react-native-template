import {FormInput} from "../../../../validation/form-input";
import {ServiceStatus} from "../../../../services/model";

export interface LoginScreenState {
  raCpf: FormInput;
  password: FormInput;
  status: ServiceStatus;
}
