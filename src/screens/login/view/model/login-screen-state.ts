import {FormInput} from "../../../../validation/form-input";

export interface LoginScreenState {
  raCpf: FormInput;
  password: FormInput;
  status: string;
}
