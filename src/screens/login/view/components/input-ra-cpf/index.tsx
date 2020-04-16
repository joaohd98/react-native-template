import React from "react";
import {LoginScreenInputRaCpfConst} from "./const";
import {FormInput} from "../../../../../validation/form-input";
import {LoginScreenInputRaCpfStyles} from "./styles";
import {ServiceStatus} from "../../../../../services/model";

interface Props {
  input: FormInput;
  status: ServiceStatus;
}

export class LoginScreenInputRaCpf extends React.Component<Props> {
  render = () => {
    const {Input} = LoginScreenInputRaCpfStyles;
    const {label} = LoginScreenInputRaCpfConst;
    const {input, status} = this.props;

    return <Input label={label} input={input} isLoading={status === ServiceStatus.loading} />;
  };
}
