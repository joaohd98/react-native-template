import React from "react";
import {LoginScreenInputPasswordConst} from "./const";
import {FormInput} from "../../../../../validation/form-input";
import {LoginScreenInputPasswordStyles} from "./styles";

interface Props {
  input: FormInput;
}

export class LoginScreenInputPassword extends React.Component<Props> {
  render = () => {
    const {Input} = LoginScreenInputPasswordStyles;
    const {label} = LoginScreenInputPasswordConst;
    const {input} = this.props;

    return <Input label={label} input={input} />;
  };
}
