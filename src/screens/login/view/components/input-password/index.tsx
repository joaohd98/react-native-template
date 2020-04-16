import React from "react";
import {LoginScreenInputPasswordConst} from "./const";
import {FormInput} from "../../../../../validation/form-input";
import {LoginScreenInputPasswordStyles} from "./styles";
import {ServiceStatus} from "../../../../../services/model";

interface Props {
  input: FormInput;
  status: ServiceStatus;
}

export class LoginScreenInputPassword extends React.Component<Props> {
  render = () => {
    const {Input} = LoginScreenInputPasswordStyles;
    const {label} = LoginScreenInputPasswordConst;
    const {input, status} = this.props;

    return <Input label={label} input={input} isLoading={status === ServiceStatus.loading} />;
  };
}
